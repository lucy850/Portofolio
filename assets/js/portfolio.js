// Soft blue glow that follows a mouse pointer across the page.
        const cursorGlow = document.querySelector('.cursor-glow');
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (cursorGlow && finePointer.matches && !reducedMotion.matches) {
            window.addEventListener('pointermove', event => {
                cursorGlow.style.setProperty('--cursor-x', `${event.clientX}px`);
                cursorGlow.style.setProperty('--cursor-y', `${event.clientY}px`);
            }, { passive:true });
            window.addEventListener('pointerleave', () => {
                cursorGlow.style.setProperty('--cursor-x', '-1000px');
                cursorGlow.style.setProperty('--cursor-y', '-1000px');
            });
        }

// Scroll-responsive water waves: smooth surface curves shift and roll in 3D with page movement.
        const scrollWave = document.querySelector('.scroll-wave');
        if (scrollWave && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const waveLayers = Array.from(scrollWave.querySelectorAll('[data-water-wave]'));
            const waveCrests = Array.from(scrollWave.querySelectorAll('[data-water-crest]'));
            let waveFrame = 0;
            function updateScrollWave() {
                waveFrame = 0;
                const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
                const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
                waveLayers.forEach((layer, index) => {
                    const phase = progress * Math.PI * [2.4, 3.8, 5.4][index] + index * 1.05;
                    const base = [126, 170, 212][index];
                    const amplitude = [31, 25, 19][index];
                    const frequency = [.008, .009, .007][index];
                    const points = [];
                    for (let x = 0; x <= 1440; x += 80) {
                        const y = base + Math.sin(x * frequency + phase) * amplitude + Math.sin(x * frequency * .47 - phase * .72) * amplitude * .24;
                        points.push({ x, y });
                    }
                    let path = `M${points[0].x} ${points[0].y}`;
                    let crest = path;
                    for (let i = 0; i < points.length - 1; i++) {
                        const previous = points[Math.max(0, i - 1)];
                        const current = points[i];
                        const next = points[i + 1];
                        const following = points[Math.min(points.length - 1, i + 2)];
                        const c1x = current.x + (next.x - current.x) / 3;
                        const c1y = current.y + (next.y - previous.y) / 6;
                        const c2x = next.x - (next.x - current.x) / 3;
                        const c2y = next.y - (following.y - current.y) / 6;
                        path += ` C${c1x} ${c1y},${c2x} ${c2y},${next.x} ${next.y}`;
                        crest += ` C${c1x} ${c1y-2},${c2x} ${c2y-2},${next.x} ${next.y-2}`;
                    }
                    layer.setAttribute('d', `${path} L1440 320 L0 320 Z`);
                    if (waveCrests[index]) waveCrests[index].setAttribute('d', crest);
                    const depth = index + 1;
                    layer.setAttribute('transform', `translate(${(progress-.5)*depth*13} ${(progress-.5)*(2-depth)*8})`);
                    if (waveCrests[index]) waveCrests[index].setAttribute('transform', `translate(${(progress-.5)*depth*13} ${(progress-.5)*(2-depth)*8})`);
                });
            }
            function requestScrollWaveUpdate() {
                if (!waveFrame) waveFrame = requestAnimationFrame(updateScrollWave);
            }
            window.addEventListener('scroll', requestScrollWaveUpdate, { passive:true });
            window.addEventListener('resize', requestScrollWaveUpdate, { passive:true });
            requestScrollWaveUpdate();
        }

// Continuous typewriter for the short hero specialties.
        const typingTarget = document.getElementById('typingText');
        if (typingTarget) {
            const typingItems = ['UI/UX Designer', 'Web Development', 'Data Mining / Machine Learning', 'Graphic Designer'];
            let typingIndex = 0, typingLength = 0, deleting = false;
            function typeNext() {
                const current = typingItems[typingIndex];
                typingTarget.textContent = current.slice(0, typingLength);
                let delay = deleting ? 42 : 82;
                if (!deleting && typingLength === current.length) { deleting = true; delay = 1750; }
                else if (deleting && typingLength === 0) { deleting = false; typingIndex = (typingIndex + 1) % typingItems.length; delay = 320; }
                typingLength += deleting ? -1 : 1;
                window.setTimeout(typeNext, delay);
            }
            typeNext();
        }

        // Project detail dialogs
        function openModal(id) {
            const modal = document.getElementById(id);
            if (!modal) return;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        function closeModal(id) {
            const modal = document.getElementById(id);
            if (!modal) return;
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            if (!document.querySelector('.project-modal.flex')) document.body.style.overflow = '';
        }
        document.querySelectorAll('.project-modal').forEach(modal => {
            modal.addEventListener('click', event => { if (event.target === modal) closeModal(modal.id); });
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') document.querySelectorAll('.project-modal.flex').forEach(modal => closeModal(modal.id));
        });

        // Persist the selected color theme.
        const themeButtons = [document.getElementById('themeBtn')].filter(Boolean);
        function setTheme(theme) {
            const light = theme === 'light';
            document.body.classList.toggle('light-theme', light);
            try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); } catch (error) { /* Storage may be disabled. */ }
            themeButtons.forEach(button => {
                button.setAttribute('aria-checked', String(light));
                button.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
                button.title = `Switch to ${light ? 'dark' : 'light'} mode`;
            });
        }
        let savedTheme = 'dark';
        try { savedTheme = localStorage.getItem('portfolio-theme') || 'dark'; } catch (error) { /* Use dark by default. */ }
        setTheme(savedTheme);
        themeButtons.forEach(button => button.addEventListener('click', () => {
            setTheme(document.body.classList.contains('light-theme') ? 'dark' : 'light');
        }));

        // Animated hamburger navigation, available at every viewport size.
        const menuBtn = document.getElementById('menuBtn');
        const navPanel = document.getElementById('navPanel');
        const navScrim = document.getElementById('navScrim');
        function setMenuOpen(open) {
            if (!menuBtn || !navPanel || !navScrim) return;
            menuBtn.setAttribute('aria-expanded', String(open));
            menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
            navPanel.classList.toggle('is-open', open);
            navPanel.setAttribute('aria-hidden', String(!open));
            navScrim.classList.toggle('is-open', open);
            navScrim.setAttribute('aria-hidden', String(!open));
        }
        if (menuBtn && navPanel && navScrim) {
            menuBtn.addEventListener('click', () => setMenuOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
            navPanel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
            navScrim.addEventListener('click', () => setMenuOpen(false));
            document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenuOpen(false); });
        }

        // Missing project images display a plain text placeholder, never a fabricated screenshot.
        document.querySelectorAll('.gallery-image').forEach(image => {
            image.addEventListener('load', () => { image.nextElementSibling.hidden = true; });
            image.addEventListener('error', () => { image.hidden = true; });
        });

        // Stacked project gallery: card clicks and swipes reorder the stack; detail links open case studies.
        const galleryStack = document.getElementById('galleryStack');
        if (galleryStack) {
            let galleryCards = Array.from(galleryStack.querySelectorAll('.gallery-card'));
            const galleryPosition = document.getElementById('galleryPosition');
            galleryStack.querySelectorAll('.gallery-image').forEach(image => {
                image.draggable = false;
                image.addEventListener('dragstart', event => event.preventDefault());
            });
            function renderGallery() {
                galleryCards.forEach((card, index) => {
                    card.style.zIndex = String(galleryCards.length - index);
                    card.style.opacity = String(1 - Math.min(index * .045, .18));
                    card.classList.toggle('is-active', index === 0);
                    card.style.filter = index ? `brightness(${1 - index * .07})` : 'none';
                    const xOffset = index === 0 ? 0 : (index === 1 ? 28 : -28);
                    const yOffset = index * 17;
                    card.style.transform = `translate(calc(-50% + ${xOffset}px), ${yOffset}px) scale(${1 - index * .02}) rotate(${index === 1 ? -.65 : .65}deg)`;
                    card.setAttribute('aria-hidden', String(index > 2));
                    card.tabIndex = index === 0 ? 0 : -1;
                    card.querySelectorAll('.gallery-detail').forEach(link => { link.tabIndex = index > 0 ? -1 : 0; });
                });
                const active = galleryCards[0];
                const title = active?.querySelector('h3')?.textContent || '';
                if (galleryPosition) galleryPosition.textContent = `Project 1 of ${galleryCards.length} / ${title}`;
            }
            function promoteCard(card) {
                const index = galleryCards.indexOf(card);
                if (index === 0) galleryCards.push(galleryCards.shift());
                else if (index > 0) galleryCards.unshift(...galleryCards.splice(index, 1));
                renderGallery();
            }
            galleryCards.forEach(card => {
                card.addEventListener('click', event => {
                    if (event.target.closest('.gallery-detail')) return;
                    if (galleryStack.dataset.dragged === 'true') { galleryStack.dataset.dragged = 'false'; return; }
                    promoteCard(card);
                });
                card.addEventListener('keydown', event => {
                    if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('.gallery-detail')) {
                        event.preventDefault(); promoteCard(card);
                    }
                });
            });
            let dragStart = null;
            galleryStack.addEventListener('pointerdown', event => {
                if (event.button !== 0 || event.target.closest('.gallery-detail')) return;
                dragStart = { x:event.clientX, y:event.clientY };
                galleryStack.setPointerCapture(event.pointerId);
            });
            galleryStack.addEventListener('pointerup', event => {
                if (!dragStart) return;
                const dx = event.clientX - dragStart.x;
                const dy = event.clientY - dragStart.y;
                if (Math.hypot(dx, dy) > 28) {
                    galleryStack.dataset.dragged = 'true';
                    galleryCards.push(galleryCards.shift());
                    renderGallery();
                    setTimeout(() => { galleryStack.dataset.dragged = 'false'; }, 0);
                }
                dragStart = null;
            });
            galleryStack.addEventListener('pointercancel', () => { dragStart = null; });
            renderGallery();
        }

        // Reveal content once when it enters the viewport, with a short stagger for card groups.
        const revealTargets = document.querySelectorAll('[data-reveal], [data-reveal-item]');
        if ('IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle('is-revealed', entry.isIntersecting);
                });
            }, { threshold:0.12, rootMargin:'0px 0px -35px 0px' });
            revealTargets.forEach((element,index) => {
                element.classList.add('reveal-ready');
                if (element.hasAttribute('data-reveal-item')) element.style.setProperty('--reveal-delay', `${(index % 4) * 65}ms`);
                revealObserver.observe(element);
            });
        }

        // Fill the experience timeline according to how far the section has been scrolled.
        const experienceGrid = document.querySelector('.experience-grid');
        if (experienceGrid) {
            let timelineFrame = 0;
            const updateExperienceTimeline = () => {
                timelineFrame = 0;
                const rect = experienceGrid.getBoundingClientRect();
                const start = window.innerHeight * 0.72;
                const end = window.innerHeight * 0.28;
                const progress = Math.max(0, Math.min(1, (start - rect.top) / (rect.height + start - end)));
                experienceGrid.style.setProperty('--timeline-progress', `${progress * 100}%`);
            };
            const requestTimelineUpdate = () => {
                if (!timelineFrame) timelineFrame = requestAnimationFrame(updateExperienceTimeline);
            };
            window.addEventListener('scroll', requestTimelineUpdate, { passive:true });
            window.addEventListener('resize', requestTimelineUpdate);
            updateExperienceTimeline();
        }

        // Build direct WhatsApp and email messages from the contact form.
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            const contactEmail = 'andinikemuning18@gmail.com';
            const whatsappNumber = '6285811119862';
            window.buildContactLinks = function(name, phone, message) {
                const body = `Nama: ${name}\nNomor telepon: ${phone}\nPesan:\n${message}`;
                return {
                    whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(body)}`,
                    email: `mailto:${contactEmail}?subject=${encodeURIComponent(`Pesan portfolio dari ${name}`)}&body=${encodeURIComponent(body)}`
                };
            };
            contactForm.querySelectorAll('[data-contact-action]').forEach(button => button.addEventListener('click', () => {
                if (!contactForm.reportValidity()) return;
                const fields = new FormData(contactForm);
                const links = window.buildContactLinks(fields.get('name'), fields.get('phone'), fields.get('message'));
                if (button.dataset.contactAction === 'whatsapp') {
                    window.location.assign(links.whatsapp);
                } else {
                    window.location.href = links.email;
                }
                const status = document.getElementById('contactStatus');
                if (status) status.textContent = button.dataset.contactAction === 'whatsapp' ? 'WhatsApp terbuka dengan pesan yang sudah disiapkan.' : 'Aplikasi email terbuka dengan pesan yang sudah disiapkan.';
            }));
        }
