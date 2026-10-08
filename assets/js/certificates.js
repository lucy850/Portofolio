const themeButton=document.getElementById('themeToggle');
        function setTheme(theme){const light=theme==='light';document.body.classList.toggle('light-theme',light);try{localStorage.setItem('portfolio-theme',light?'light':'dark')}catch(error){}themeButton.innerHTML=`<i class="fa-solid fa-${light?'moon':'sun'}"></i><span>Toggle theme</span>`;themeButton.setAttribute('aria-label',`Switch to ${light?'dark':'light'} mode`)}
        let savedTheme='dark';try{savedTheme=localStorage.getItem('portfolio-theme')||'dark'}catch(error){}setTheme(savedTheme);themeButton.addEventListener('click',()=>setTheme(document.body.classList.contains('light-theme')?'dark':'light'));
        const menuButton=document.getElementById('menuBtn'),navPanel=document.getElementById('navPanel'),navScrim=document.getElementById('navScrim');
        function setMenuOpen(open){menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');navPanel.classList.toggle('is-open',open);navPanel.setAttribute('aria-hidden',String(!open));navScrim.classList.toggle('is-open',open);navScrim.setAttribute('aria-hidden',String(!open))}
        menuButton.addEventListener('click',()=>setMenuOpen(menuButton.getAttribute('aria-expanded')!=='true'));
        navPanel.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenuOpen(false)));
        navScrim.addEventListener('click',()=>setMenuOpen(false));
        document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenuOpen(false)});

        const revealTargets=document.querySelectorAll('[data-reveal],[data-reveal-item]');
        if('IntersectionObserver' in window){
            const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
                entry.target.classList.toggle('is-revealed',entry.isIntersecting);
            }),{threshold:.12,rootMargin:'0px 0px -30px 0px'});
            revealTargets.forEach((element,index)=>{element.classList.add('reveal-ready');element.style.setProperty('--delay',`${index%4*65}ms`);revealObserver.observe(element)});
        }else revealTargets.forEach(element=>element.classList.add('is-revealed'));
