(() => {
    const links = document.querySelectorAll('[data-certificate-zoom]');
    if (!links.length) return;

    const modal = document.createElement('div');
    modal.className = 'certificate-zoom';
    modal.innerHTML = '<div class="certificate-zoom-panel" role="dialog" aria-modal="true" aria-label="Pratinjau sertifikat"><button class="certificate-zoom-close" type="button" aria-label="Tutup pratinjau">&times;</button><img class="certificate-zoom-image" alt=""><p class="certificate-zoom-title"></p></div>';
    Object.assign(modal.style, {position:'fixed',inset:'0',zIndex:'1000',display:'none',placeItems:'center',padding:'1.25rem',background:'rgba(3,8,16,.88)',backdropFilter:'blur(8px)'});
    const panel = modal.querySelector('.certificate-zoom-panel');
    Object.assign(panel.style, {position:'relative',width:'min(96vw,1400px)',maxHeight:'96vh',padding:'1rem',border:'1px solid rgba(255,255,255,.2)',borderRadius:'1rem',background:'#111b2b',boxShadow:'0 24px 80px rgba(0,0,0,.5)',display:'grid',justifyItems:'center',gap:'.75rem'});
    const image = modal.querySelector('.certificate-zoom-image');
    Object.assign(image.style, {display:'block',width:'100%',maxWidth:'1300px',maxHeight:'86vh',objectFit:'contain',borderRadius:'.5rem'});
    const title = modal.querySelector('.certificate-zoom-title');
    Object.assign(title.style, {margin:'0',color:'#f1f5f9',font:'600 .9rem sans-serif'});
    const close = modal.querySelector('.certificate-zoom-close');
    Object.assign(close.style, {position:'absolute',top:'.5rem',right:'.5rem',zIndex:'1',width:'2.5rem',height:'2.5rem',border:'1px solid rgba(255,255,255,.3)',borderRadius:'50%',background:'rgba(3,8,16,.75)',color:'#fff',fontSize:'1.6rem',cursor:'pointer'});
    document.body.append(modal);

    let previousFocus;
    function closeZoom() {
        modal.style.display = 'none';
        image.removeAttribute('src');
        document.body.style.overflow = '';
        previousFocus?.focus();
    }
    links.forEach(link => link.addEventListener('click', event => {
        event.preventDefault();
        previousFocus = link;
        image.src = link.href;
        image.alt = link.dataset.title || 'Sertifikat';
        title.textContent = link.dataset.title || 'Sertifikat';
        modal.style.display = 'grid';
        document.body.style.overflow = 'hidden';
        close.focus();
    }));
    close.addEventListener('click', closeZoom);
    modal.addEventListener('click', event => { if (event.target === modal) closeZoom(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.style.display !== 'none') closeZoom(); });
})();
