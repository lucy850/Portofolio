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
                button.innerHTML = `<i class="fa-solid fa-${light ? 'moon' : 'sun'}" aria-hidden="true"></i>`;
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

        // Hanging lanyard physics: a gently swaying fabric strap, metal clip, and transparent portrait.
        const canvas = document.getElementById('lanyardCanvas');
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            const portrait = new Image();
            portrait.src = 'assets/andini-transparent.png';
            let portraitReady = false;
            portrait.onload = () => { portraitReady = true; };
            portrait.onerror = () => { portraitReady = false; };

            let width = 0, height = 0;
            function resizeCanvas() {
                const rect = canvas.getBoundingClientRect();
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                width = rect.width;
                height = rect.height;
                canvas.width = Math.round(width * dpr);
                canvas.height = Math.round(height * dpr);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            }
            const resizeObserver = new ResizeObserver(resizeCanvas);
            resizeObserver.observe(canvas.parentElement);
            resizeCanvas();

            const motion = { angle:0, angularVelocity:0, y:0, yVelocity:0, dragging:false, hovered:false,
                targetAngle:0, targetY:0, startX:0, startY:0, startAngle:0, startOffsetY:0, lastX:0, lastY:0, lastTime:0 };
            const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
            function canvasPoint(event) {
                const rect = canvas.getBoundingClientRect();
                return { x:event.clientX-rect.left, y:event.clientY-rect.top };
            }
            function isOverPortrait(point) {
                const geometry = lanyardGeometry();
                const dx = point.x-width/2;
                const dy = point.y-(geometry.anchorY+motion.y);
                const localX = dx*Math.cos(motion.angle)+dy*Math.sin(motion.angle);
                const localY = -dx*Math.sin(motion.angle)+dy*Math.cos(motion.angle);
                return localX >= -geometry.photoWidth/2 && localX <= geometry.photoWidth/2
                    && localY >= geometry.photoY && localY <= geometry.photoY+geometry.photoHeight;
            }
            canvas.addEventListener('pointerleave', () => {
                if (!motion.dragging) { motion.hovered = false; canvas.style.cursor = 'default'; }
            });
            canvas.addEventListener('pointerdown', event => {
                const point = canvasPoint(event);
                if (!isOverPortrait(point)) return;
                motion.dragging = true;
                canvas.setPointerCapture(event.pointerId);
                motion.startX = point.x; motion.startY = point.y;
                motion.startAngle = motion.angle; motion.startOffsetY = motion.y;
                motion.lastX = point.x; motion.lastY = point.y; motion.lastTime = performance.now();
                canvas.classList.add('is-dragging');
            });
            canvas.addEventListener('pointermove', event => {
                const point = canvasPoint(event);
                if (motion.dragging) {
                    const safeAngle = lanyardGeometry().safeAngle;
                    motion.targetAngle = clamp(motion.startAngle + (point.x-motion.startX)/360, -safeAngle, safeAngle);
                    motion.targetY = clamp(motion.startOffsetY + point.y-motion.startY, -10, 60);
                    const now = performance.now();
                    const dt = Math.max((now-motion.lastTime)/1000, .008);
                    motion.angularVelocity = clamp((point.x-motion.lastX)/360/dt, -1.4, 1.4);
                    motion.yVelocity = clamp((point.y-motion.lastY)/dt, -220, 220);
                    motion.lastX = point.x; motion.lastY = point.y; motion.lastTime = now;
                } else {
                    motion.hovered = isOverPortrait(point);
                    canvas.style.cursor = motion.hovered ? 'grab' : 'default';
                    if (motion.hovered) {
                        const dx = (point.x-width/2)/(width/2 || 1);
                        const dy = (point.y-height/2)/(height/2 || 1);
                        motion.targetAngle = clamp(dx*.045, -lanyardGeometry().safeAngle, lanyardGeometry().safeAngle);
                        motion.targetY = clamp(dy*5, -7, 7);
                    } else {
                        motion.targetAngle = 0;
                        motion.targetY = 0;
                    }
                }
            });
            function releaseLanyard() {
                if (!motion.dragging) return;
                motion.dragging = false;
                motion.hovered = false;
                motion.angularVelocity *= .45;
                motion.yVelocity *= .4;
                motion.targetAngle = 0;
                motion.targetY = 0;
                canvas.classList.remove('is-dragging');
            }
            canvas.addEventListener('pointerup', releaseLanyard);
            canvas.addEventListener('pointercancel', releaseLanyard);
            canvas.addEventListener('lostpointercapture', releaseLanyard);

            function roundedRectPath(x,y,w,h,r) {
                ctx.beginPath(); ctx.roundRect(x,y,w,h,r);
            }
            function lanyardGeometry() {
                const anchorY = 16;
                const strapEnd = Math.min(190,height*.39);
                const photoY = strapEnd+42;
                const availableHeight = Math.max(80,height-anchorY-photoY-70);
                const maxPhotoWidth = Math.min(270,width*.78);
                let photoWidth = Math.min(maxPhotoWidth, 190);
                let photoHeight = photoWidth*1.47;
                if (portraitReady) {
                    const scale = Math.min(maxPhotoWidth/portrait.naturalWidth,availableHeight/portrait.naturalHeight);
                    photoWidth = portrait.naturalWidth*scale;
                    photoHeight = portrait.naturalHeight*scale;
                }
                const bottom = anchorY+60+photoY+photoHeight;
                const safeHorizontal = Math.max(0,width/2-photoWidth/2-6);
                const safeAngle = Math.asin(clamp(safeHorizontal/bottom,0,Math.sin(.32)));
                return { anchorY,strapEnd,photoY,availableHeight,maxPhotoWidth,photoWidth,photoHeight,safeAngle };
            }
            let previousTime = performance.now();
            function drawLanyard(now) {
                const dt = Math.min((now-previousTime)/1000, .035);
                previousTime = now;
                ctx.clearRect(0,0,width,height);
                const seconds = now/1000;
                const geometry = lanyardGeometry();
                const safeAngle = geometry.safeAngle;
                const automaticSway = motion.dragging ? motion.targetAngle : clamp(Math.sin(seconds*.72)*Math.min(.055,safeAngle*.7) + (motion.hovered ? motion.targetAngle : 0),-safeAngle,safeAngle);
                const targetAngle = motion.dragging ? motion.targetAngle : automaticSway;
                const targetY = motion.dragging ? motion.targetY : (motion.hovered ? motion.targetY : 0) + Math.sin(seconds*.62)*2.5;
                const angularSpring = 17, verticalSpring = 20;
                motion.angularVelocity += (targetAngle-motion.angle)*angularSpring*dt;
                motion.angularVelocity *= Math.exp(-4.4*dt);
                motion.angle += motion.angularVelocity*dt;
                motion.yVelocity += (targetY-motion.y)*verticalSpring*dt;
                motion.yVelocity *= Math.exp(-5.2*dt);
                motion.y += motion.yVelocity*dt;
                motion.angle = clamp(motion.angle,-safeAngle,safeAngle);
                motion.y = clamp(motion.y,-10,60);

                const anchorX = width/2;
                const {anchorY,strapEnd,photoY,availableHeight,maxPhotoWidth,photoWidth,photoHeight} = geometry;
                const clipY = strapEnd+5;
                // The strap, clip, and portrait share one motion, but only the portrait is draggable.
                ctx.save();
                ctx.translate(anchorX, anchorY+motion.y);
                ctx.rotate(motion.angle);

                // Woven strap with restrained stitching and a soft fabric highlight.
                const strapGradient = ctx.createLinearGradient(-21,0,21,0);
                strapGradient.addColorStop(0,'#263c53'); strapGradient.addColorStop(.48,'#496783'); strapGradient.addColorStop(1,'#263c53');
                ctx.fillStyle = strapGradient;
                roundedRectPath(-19,0,38,strapEnd,7); ctx.fill();
                ctx.strokeStyle = 'rgba(218,229,239,.52)'; ctx.lineWidth = 1;
                ctx.beginPath(); ctx.moveTo(-13,8); ctx.lineTo(-13,strapEnd-6); ctx.moveTo(13,8); ctx.lineTo(13,strapEnd-6); ctx.stroke();
                ctx.strokeStyle = 'rgba(17,30,45,.5)'; ctx.lineWidth = 2;
                ctx.beginPath(); ctx.moveTo(0,12); ctx.lineTo(0,strapEnd-7); ctx.stroke();

                // Portrait is drawn at its full aspect ratio, attached below the strap.
                if (portraitReady) {
                    ctx.drawImage(portrait,-photoWidth/2,photoY,photoWidth,photoHeight);
                } else {
                    ctx.fillStyle = '#9aaec1'; ctx.font = '12px Plus Jakarta Sans'; ctx.textAlign = 'center';
                    ctx.fillText('Tambahkan assets/andini-transparent.png',0,photoY+42,maxPhotoWidth);
                }

                // Clip is drawn in front of the portrait's top edge.
                ctx.save();
                ctx.lineWidth = 5; ctx.strokeStyle = '#a8b5c2'; ctx.fillStyle = '#718397';
                ctx.beginPath(); ctx.arc(0,clipY+8,15,Math.PI*.12,Math.PI*.88); ctx.stroke();
                roundedRectPath(-9,clipY+8,18,31,7); ctx.fill(); ctx.strokeStyle='#c8d1da';ctx.lineWidth=2;ctx.stroke();
                ctx.beginPath(); ctx.moveTo(0,clipY+37);ctx.bezierCurveTo(-12,clipY+48,-10,clipY+59,0,clipY+59);ctx.bezierCurveTo(10,clipY+59,12,clipY+48,0,clipY+42);ctx.stroke();
                ctx.restore();
                ctx.restore();
                requestAnimationFrame(drawLanyard);
            }
            requestAnimationFrame(drawLanyard);
        }

        // Two small hanging visuals in About Me; each has independent spring physics.
        const aboutRigs = Array.from(document.querySelectorAll('.about-rig'));
        if (aboutRigs.length) {
            const clampRig = (value,min,max) => Math.max(min,Math.min(max,value));
            const rigs = aboutRigs.map((element,index) => {
                element.querySelectorAll('img').forEach(image => {
                    image.draggable = false;
                    image.addEventListener('dragstart', event => event.preventDefault());
                });
                const motion = { element,phase:index ? 2.15 : .35,angle:0,angularVelocity:0,y:0,yVelocity:0,targetAngle:0,targetY:0,dragging:false,hovered:false,hoverAngle:0,hoverY:0,startX:0,startY:0,startAngle:0,startOffsetY:0,lastX:0,lastY:0,lastTime:0 };
                element.addEventListener('pointerenter',()=>{motion.hovered=true});
                element.addEventListener('pointerleave',()=>{motion.hovered=false;motion.hoverAngle=0;motion.hoverY=0});
                element.addEventListener('pointerdown',event=>{
                    motion.dragging=true;element.setPointerCapture(event.pointerId);const box=element.getBoundingClientRect();
                    motion.startX=event.clientX;motion.startY=event.clientY;motion.startAngle=motion.angle;motion.startOffsetY=motion.y;
                    motion.lastX=event.clientX;motion.lastY=event.clientY;motion.lastTime=performance.now();element.classList.add('is-dragging');
                    if(box.width)motion.hoverAngle=0;
                });
                element.addEventListener('pointermove',event=>{
                    if(motion.dragging){
                        motion.targetAngle=clampRig(motion.startAngle+(event.clientX-motion.startX)/250,-.28,.28);
                        motion.targetY=clampRig(motion.startOffsetY+(event.clientY-motion.startY)*.08,-8,12);
                        const now=performance.now(),dt=Math.max((now-motion.lastTime)/1000,.008);
                        motion.angularVelocity=clampRig((event.clientX-motion.lastX)/250/dt,-1.3,1.3);
                        motion.yVelocity=clampRig((event.clientY-motion.lastY)*.08/dt,-90,90);
                        motion.lastX=event.clientX;motion.lastY=event.clientY;motion.lastTime=now;
                    }else if(motion.hovered){
                        const box=element.getBoundingClientRect();motion.hoverAngle=clampRig(((event.clientX-box.left)/Math.max(box.width,1)-.5)*.055,-.028,.028);
                        motion.hoverY=clampRig(((event.clientY-box.top)/Math.max(box.height,1)-.5)*2,-1,1);
                    }
                });
                function release(){if(!motion.dragging)return;motion.dragging=false;motion.angularVelocity*=.42;motion.yVelocity*=.4;motion.element.classList.remove('is-dragging')}
                element.addEventListener('pointerup',release);element.addEventListener('pointercancel',release);element.addEventListener('lostpointercapture',release);
                return motion;
            });
            let lastFrame=performance.now();
            function animateAboutRigs(now){
                const dt=Math.min((now-lastFrame)/1000,.035);lastFrame=now;const seconds=now/1000;
                rigs.forEach(motion=>{
                    const ambient=Math.sin(seconds*.72+motion.phase)*.038;
                    const targetAngle=motion.dragging?motion.targetAngle:ambient+(motion.hovered?motion.hoverAngle:0);
                    const targetY=motion.dragging?motion.targetY:Math.sin(seconds*.53+motion.phase)*1.5+(motion.hovered?motion.hoverY:0);
                    motion.angularVelocity+=(targetAngle-motion.angle)*13*dt;motion.angularVelocity*=Math.exp(-4.25*dt);motion.angle+=motion.angularVelocity*dt;
                    motion.yVelocity+=(targetY-motion.y)*17*dt;motion.yVelocity*=Math.exp(-4.8*dt);motion.y+=motion.yVelocity*dt;
                    motion.angle=clampRig(motion.angle,-.3,.3);motion.y=clampRig(motion.y,-9,13);
                    motion.element.style.transform=`translate3d(0,${motion.y}px,0) rotate(${motion.angle}rad) rotate(var(--rig-lean,0deg)) scale(var(--rig-scale,1))`;
                });
                requestAnimationFrame(animateAboutRigs);
            }
            requestAnimationFrame(animateAboutRigs);
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
