const projects = {
            'cryptopet': {
                title:'CryptoPet', category:'Web3 / 3D Game', github:'https://github.com/lucy850/PETCOIN_WCHL_PROJECT1',
                overview:'Prototipe game 3D berbasis Web3 yang dibuat untuk kompetisi WCHL. Project ini menggabungkan interaksi visual 3D dan simulasi transaksi crypto.',
                background:'Project dikembangkan dalam konteks kompetisi WCHL dengan tema game 3D dan Web3.',
                objective:'Membuat prototipe game 3D Web3 dengan interaksi visual menggunakan Three.js.',
                features:['Visual game 3D dan interaksi berbasis Three.js','Integrasi konsep Web3 pada prototipe','Simulasi transaksi crypto'],
                tech:['Three.js','Motoko','Internet Computer'],
                process:['Membangun visual dan interaksi 3D menggunakan Three.js.','Menghubungkan konsep Web3 dengan Motoko dan Internet Computer pada prototipe.'],
                shots:['assets/projects/sscrypto.png','assets/projects/sscrypto1.png','assets/projects/sscrypto2.png']
            },
            'photo-strip': {
                title:'Photo Strip', category:'Web / Photo Booth', github:'https://github.com/lucy850/Photo-Strip/',
                overview:'Aplikasi photo booth berbasis web untuk mengambil foto, menyusunnya menjadi photo strip, menambahkan filter dan stiker, lalu mengunduh hasilnya.',
                background:'Photo Strip menyediakan pengalaman membuat photo strip digital dengan tampilan yang sederhana dan dekoratif.',
                objective:'Membantu pengguna membuat dan menyimpan photo strip langsung melalui browser.',
                features:['Mengambil foto melalui antarmuka photo booth','Memilih filter dan stiker untuk dekorasi','Menyusun foto dalam format strip dan mengunduh hasilnya'],
                tech:['HTML','CSS','JavaScript'],
                process:['Pengguna mengambil foto melalui photo booth.','Foto disusun menjadi strip, lalu pengguna dapat menambahkan filter dan stiker.','Hasil photo strip dapat diunduh.'],
                shots:['assets/projects/photo-strip.png','assets/projects/photo-strip1.png','assets/projects/photo-strip (24).png']
            },            'belajaryuk': {
                title:'Belajaryuk', category:'Project Belajaryuk', github:'https://github.com/AldiTaufikurohman/project-digital-entrepreneurship',
                overview:'Belajaryuk adalah platform belajar digital yang menampilkan modul e-learning dan program bootcamp, dengan halaman pengguna serta dashboard admin.',
                background:'Materi project memperlihatkan platform untuk mempelajari skill digital melalui modul terstruktur dan program bootcamp. Tampilan sebelum login, setelah login, dan dashboard admin menunjukkan kebutuhan untuk menyajikan pengalaman bagi pengguna sekaligus menyediakan pemantauan bagi pengelola.',
                objective:'Menyajikan platform belajar digital yang membantu pengguna menemukan program belajar, serta memberi pengelola tampilan untuk memantau produk, transaksi, dan aktivitas pengguna.',
                features:['Landing page memperkenalkan modul Web Development, UI/UX, Data Science, dan Machine Learning.','Pilihan Masuk dan Daftar Gratis tersedia pada tampilan awal untuk akses pengguna.','Dashboard admin merangkum penjualan, e-learning dan bootcamp terjual, serta total pengguna.','Tampilan database memperlihatkan tabel bootcamp, products, orders, order_details, transaksi, dan users.'],
                tech:['HTML','JavaScript','PHP','MySQL'],
                techDescription:'HTML dan JavaScript digunakan pada sisi antarmuka, PHP untuk logika aplikasi, dan MySQL sebagai database.',
                process:['Pengunjung melihat landing page dan informasi program belajar.','Video project memperlihatkan tampilan sebelum login dan setelah login.','Dashboard admin menampilkan ringkasan penjualan, produk, dan pengguna.','Screenshot database menunjukkan struktur data produk, pesanan, transaksi, bootcamp, dan pengguna.'],
                shots:['assets/belajaryuk1.png','assets/belajaryuk2.png','assets/belajaryuk3.png']
            },
            'student-performance': {
                title:'Student Performance Data Mining', category:'Data Mining', github:'',
                overview:'Analisis performa akademik siswa menggunakan data nilai, kebiasaan belajar, waktu luang, dan absensi.',
                background:'Project menganalisis pola performa siswa dari data akademik dan kehadiran.',
                objective:'Menggunakan metode data mining untuk membaca pola dan memprediksi performa akademik siswa.',
                features:['Classification untuk prediksi lulus/gagal','Regression untuk prediksi nilai akhir','K-Means dan Hierarchical Clustering untuk pengelompokan'],
                tech:['Python','Jupyter Notebook','Pandas','Scikit-learn'],
                process:['Menyeleksi enam fitur akademik yang relevan.','Menguji model classification dan regression.','Mengevaluasi clustering dengan Elbow Method dan Dendrogram.'],
                shots:[]
            },
            'face-recognition': {
                title:'Face Recognition Attendance System', category:'Java / Computer Vision', github:'', pdf:'TUGAS%20WEB.pdf',
                overview:'Aplikasi absensi berbasis Java dan OpenCV yang mendeteksi wajah melalui kamera untuk mencatat kehadiran mahasiswa. Sistem juga mengelola status seperti Hadir, Terlambat, Alfa, dan Tidak Valid.',
                background:'Project ini mengembangkan pencatatan kehadiran mahasiswa melalui pengenalan wajah menggunakan kamera.',
                objective:'Mendeteksi wajah melalui kamera dan mencatat status kehadiran mahasiswa.',
                features:['Deteksi wajah melalui kamera','Pencatatan status Hadir, Terlambat, Alfa, dan Tidak Valid','Penyimpanan data menggunakan MySQL'],
                tech:['Java','OpenCV 4.8.0','MySQL','NetBeans'],
                process:['Kamera menangkap gambar wajah.','OpenCV memproses deteksi wajah untuk proses absensi.','Aplikasi mencatat kehadiran dan status mahasiswa ke database MySQL.'],
                result:'Project terpilih sebagai project terbaik mata kuliah Pemrograman Web. Draf buku sedang disiapkan.',
                shots:['assets/java.png','assets/java2.png','assets/java3.png']
            },
            'glowcheck': {
                title:'GlowCheck / Skin Detection', category:'Machine Learning / Skin Detection', github:'https://github.com/lucy850/Skincare',
                overview:'GlowCheck membantu pengguna mengenali kondisi kulit wajah melalui unggahan foto, lalu memberikan rekomendasi bahan aktif skincare yang sesuai.',
                background:'Pengguna memerlukan cara untuk mengenali kondisi kulit dan mencari bahan aktif skincare yang sesuai.',
                objective:'Menganalisis kondisi kulit dari foto dan menyajikan rekomendasi skincare.',
                features:['Analisis kulit kering, berjerawat, berminyak, atau sensitif','Rekomendasi bahan aktif skincare berdasarkan hasil analisis'],
                tech:['Python','Computer Vision','Recommendation Engine'],
                process:['Pengguna mengunggah foto wajah.','Sistem menganalisis foto untuk mengenali kondisi kulit.','Hasil analisis digunakan untuk menyajikan rekomendasi bahan aktif.'],
                shots:['assets/projects/glowcheck.jpeg','assets/projects/glowcheck1.jpeg','assets/projects/glowcheck3.jpeg']
            },
            'training-center-unpam': {
                title:'Training Center UNPAM', category:'Web Administration', github:'https://github.com/muhamadrivaldi1/Traning-Center',
                overview:'Project magang sebagai Web Administrator untuk mengelola konten situs Training Center UNPAM, antarmuka pengguna, dan alur pendaftaran peserta.',
                background:'Situs Training Center memerlukan pengelolaan konten dan pemeliharaan alur pendaftaran peserta.',
                objective:'Menjaga konten dan alur pendaftaran Training Center melalui administrasi portal.',
                features:['Pengelolaan konten website','Pemeliharaan admin dashboard','Dukungan alur pendaftaran peserta'],
                tech:['JSX','PHP','Tailwind CSS'],
                process:['Mengelola konten pada portal Training Center.','Memelihara dashboard admin dan antarmuka.','Menangani alur pendaftaran peserta.'],
                shots:['assets/projects/traningunpam.png','assets/projects/traningunpam1.png','assets/projects/traningunpam2.png']
            },
            'password-strength-checker': {
                title:'Password Strength Checker', category:'Web Development / Cybersecurity', github:'https://github.com/lucy850/short-course',
                overview:'Aplikasi untuk membantu pengguna mengevaluasi tingkat kekuatan password.',
                background:'Pengguna sering kesulitan mengetahui apakah password yang dibuat sudah cukup kuat. Pemeriksaan langsung dapat membantu menunjukkan bagian yang perlu diperbaiki sebelum password digunakan.',
                objective:'Membantu pengguna mengevaluasi kekuatan password secara langsung dan memberi arahan untuk membuat password yang lebih kuat.',
                features:['Menilai password melalui 8 kriteria dan menampilkan skor pemeriksaan','Menampilkan tingkat kekuatan seperti Weak, Medium, dan Very Strong','Memberi saran berdasarkan kriteria yang belum terpenuhi','Menyediakan kontrol untuk menampilkan atau menyembunyikan password'],
                tech:['HTML','CSS','JavaScript'],
                process:['Pengguna memasukkan password pada kolom pemeriksaan.','Aplikasi mengevaluasi password berdasarkan kriteria yang tersedia.','Skor, tingkat kekuatan, dan saran perbaikan ditampilkan langsung.'],
                shots:['assets/password.png','assets/password2.png','assets/password3.png']
            },
            'uiux-showcase': {
                title:'UI/UX Mobile & Web Showcase', category:'Figma / Design', github:'', figma:'',
                overview:'Kumpulan rancangan antarmuka web dan mobile untuk dashboard, aplikasi produktivitas, jadwal pelatihan, layanan PPDB, dan website informasi.',
                background:'Kumpulan screenshot ini menunjukkan kebutuhan antarmuka yang berbeda: pemantauan data, pengelolaan tugas, penjadwalan pelatihan, informasi pendaftaran siswa, dan penyampaian layanan publik.',
                objective:'Menyusun tampilan antarmuka yang memudahkan pengguna memahami informasi dan menemukan tindakan utama pada tiap produk.',
                features:['Dashboard administrasi dengan ringkasan data dan navigasi.','Rancangan mobile task manager dengan daftar tugas dan kategori.','Kartu jadwal pelatihan dengan navigasi kategori kegiatan.','Dashboard PPDB untuk status pendaftaran calon siswa.','Landing page dan formulir pelaporan pada website Peduli Kita.','Dashboard admin Training Center dengan ringkasan pelatihan.'],
                tech:['Figma','UI Design','Prototyping'],
                process:['Merancang struktur informasi dan navigasi untuk tiap kebutuhan.','Menyusun komponen seperti dashboard, kartu, status, formulir, dan menu.','Menyajikan rancangan desktop dan mobile melalui screenshot.'],
                shots:['uiux1.png','uiux2.png','uiux3.png','uiux4.png','uiux5.png','uiux6.png','uiux.png','assets/cryptopet.jpeg'],
                shotDescriptions:[
                    'Dashboard Product Requirement Document dengan ringkasan email baru, email tertunda, prioritas tinggi, grafik distribusi, dan notifikasi.',
                    'Rancangan aplikasi mobile Mebtodo untuk mengelola daftar tugas, kategori, dan aktivitas harian.',
                    'Halaman Jadwal Pelatihan dengan navigasi jadwal, event, kegiatan berlangsung, dan kartu informasi pelatihan.',
                    'Dashboard PPDB Online yang menampilkan status pendaftaran, berkas, pilihan jurusan, dan hasil seleksi calon siswa.',
                    'Website Peduli Kita dengan informasi layanan pelaporan kekerasan, formulir laporan, bagian tentang, dan kontak.',
                    'Dashboard admin Training Center yang merangkum peserta, pelatihan, pelatihan aktif, dan pelatihan selesai.',
                    'Landing page otomotif Luycra dengan hero visual, navigasi kategori, dan kartu katalog mobil.',
                    'Tampilan antarmuka CryptoPet.'
                ],
                figmaLinks:[
                    {label:'Figma 01',href:'https://www.figma.com/design/eHmIXPMRibI9r1TvmpIujE/Untitled?node-id=0-1&t=rjUGPCCG4qfDtsSl-1'},
                    {label:'Figma 02 — Web Training UNPAM',href:'https://www.figma.com/design/iVbMfKBkkWfPoIwDeyCVdS/Web-Training-UNPAM?node-id=270-2898&t=qyEhjviTGUSJFkYS-1'},
                    {label:'Figma 03 — Mobile',href:'https://www.figma.com/design/jad69okMKVQ0HVCwunLmbj/Mobile?node-id=0-1&t=OboZssNrYxCsK2YE-1'},
                    {label:'Figma 04 — Landing Page',href:'https://www.figma.com/design/2dqzUJzPZDwUSy9FkeVjYA/Landing-page?node-id=0-1&t=5k23T8e7af6c8Q78-1'}
                ]
            },
            'digital-manual-art': {
                title:'Digital & Manual Art', category:'Illustration / Art', github:'',
                overview:'Galeri untuk menampilkan karya ilustrasi digital dan karya seni manual.',
                background:'Bagian ini mengumpulkan karya visual dalam dua medium: digital dan manual.',
                objective:'Menampilkan karya seni beserta medium yang digunakan dalam satu halaman portfolio.',
                features:['Galeri karya digital','Galeri karya manual'],
                tech:['Digital illustration','Traditional / manual art'],
                process:['Pilih kategori karya digital atau manual.','Buka setiap karya untuk melihat detail dan medium-nya.'],
                shots:[]
            }
        };
        const toggleButtons=[document.getElementById('themeToggle')].filter(Boolean);
        function setTheme(theme){const light=theme==='light';document.body.classList.toggle('light-theme',light);try{localStorage.setItem('portfolio-theme',light?'light':'dark')}catch(error){}toggleButtons.forEach(button=>{button.setAttribute('aria-checked',String(light));button.setAttribute('aria-label',`Switch to ${light?'dark':'light'} mode`);button.title=`Switch to ${light?'dark':'light'} mode`})}
        let saved='dark';try{saved=localStorage.getItem('portfolio-theme')||'dark'}catch(error){}setTheme(saved);
        toggleButtons.forEach(button=>button.addEventListener('click',()=>setTheme(document.body.classList.contains('light-theme')?'dark':'light')));

        const cursorGlow=document.querySelector('.cursor-glow');
        if(cursorGlow&&window.matchMedia('(hover: hover) and (pointer: fine)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
            window.addEventListener('pointermove',event=>{cursorGlow.style.setProperty('--cursor-x',`${event.clientX}px`);cursorGlow.style.setProperty('--cursor-y',`${event.clientY}px`)},{passive:true});
            window.addEventListener('pointerleave',()=>{cursorGlow.style.setProperty('--cursor-x','-1000px');cursorGlow.style.setProperty('--cursor-y','-1000px')});
        }

        const menuButton=document.getElementById('menuBtn'),navPanel=document.getElementById('navPanel'),navScrim=document.getElementById('navScrim');
        function setMenuOpen(open){menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');navPanel.classList.toggle('is-open',open);navPanel.setAttribute('aria-hidden',String(!open));navScrim.classList.toggle('is-open',open);navScrim.setAttribute('aria-hidden',String(!open))}
        menuButton.addEventListener('click',()=>setMenuOpen(menuButton.getAttribute('aria-expanded')!=='true'));
        navPanel.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenuOpen(false)));
        navScrim.addEventListener('click',()=>setMenuOpen(false));
        document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenuOpen(false)});

        function renderDetail(project,projectKey){
            const section=document.getElementById('projectDetail');
            const list=document.getElementById('projectList');
            list.hidden=true;section.hidden=false;document.title=`${project.title} | Project Case Study`;
            const field=(title,body)=>`<article class="case-section"><h2>${title}</h2>${body}</article>`;
            const paragraph=value=>`<p>${value}</p>`;
            const listItems=items=>`<ul>${items.map(item=>`<li>${item}</li>`).join('')}</ul>`;
            const tech=items=>`<div class="tech-list">${items.map(item=>`<span class="tech-tag">${item}</span>`).join('')}</div>`;
            const screenshots=project.shots.map((src,index)=>`<figure class="shot"><div class="shot-frame${projectKey==='uiux-showcase'?' uiux-frame':''}">${projectKey==='uiux-showcase'?`<span class="uiux-index">${String(index+1).padStart(2,'0')}</span>`:''}<img class="${/password[23]\.png$/i.test(src)?'password-zoom-up':''}" src="${src}" alt="${project.shotDescriptions?.[index]||`${project.title} screenshot ${index+1}`}" onload="this.parentElement.querySelector('.shot-fallback').hidden=true" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="shot-fallback">Screenshot belum tersedia<br>${src}</span></div><figcaption>${project.shotDescriptions?.[index]||`${project.title} / Screenshot ${index+1}`}</figcaption></figure>`).join('');
            const figmaLinks=project.figmaLinks?`<div class="uiux-figma-links"><h3>Figma Files</h3><div>${project.figmaLinks.map(item=>`<a class="resource-link" href="${item.href}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-figma" aria-hidden="true"></i>${item.label}<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`).join('')}</div></div>`:'';
            const videoPath=`assets/projects/${projectKey}-demo.mp4`;
            const video=projectKey==='belajaryuk'?[['01','Belum login','assets/projects/belum%20login.mp4','Rekaman tampilan Belajaryuk sebelum login.'],['02','Sudah login','assets/projects/uda%20login.mp4','Rekaman tampilan Belajaryuk setelah login.'],['03','Tampilan admin','assets/projects/belajaryuk-demo.mp4','Rekaman tampilan halaman admin Belajaryuk.']].map(([number,label,src,description])=>`<section class="case-video belajaryuk-video"><p class="video-step">${number} / PROJECT VIDEO</p><h2>${label}</h2><p class="video-description">${description}</p><video controls preload="metadata" playsinline webkit-playsinline src="${src}" aria-label="Belajaryuk — ${label}"></video></section>`).join(''):['training-center-unpam','face-recognition','uiux-showcase'].includes(projectKey)?'':`<section class="case-video"><h2>Project Video</h2><video controls preload="metadata" playsinline webkit-playsinline src="${videoPath}" onerror="this.hidden=true;this.nextElementSibling.hidden=false"></video><p class="video-placeholder" hidden>Tambahkan video project ke <code>${videoPath}</code>.</p></section>`;
            const resourceLink=(href,label,icon)=>href?`<a class="resource-link" href="${href}" target="_blank" rel="noopener noreferrer"><i class="${icon}" aria-hidden="true"></i>${label}</a>`:`<span class="resource-link is-unavailable"><i class="${icon}" aria-hidden="true"></i>${label} belum ditambahkan</span>`;
            if(projectKey==='digital-manual-art'){
                const digitalArt=['art2.png','art3.png','art4.png','art6.png','assets/projects/poster.jpeg'];
                const posterArt=['assets/art8.jpeg','assets/art9.jpeg','assets/art10.jpeg'];
                const manualArt=['art.png','art5.png','art7.png'];
                const artworkFigures=(images,label)=>images.map((src,index)=>`<figure><img src="${src}" alt="${label} ${index+1}" loading="lazy"><figcaption><span>${String(index+1).padStart(2,'0')}</span>${label} ${index+1}</figcaption></figure>`).join('');
                section.innerHTML=`<div class="case-top"><a class="back-link" href="projek.html"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to Projects</a></div><header class="case-hero"><p class="category">${project.category}</p><h1>${project.title}</h1><p class="case-overview">${project.overview}</p></header><nav class="artwork-nav" aria-label="Pilih kategori karya"><a href="#digital-art"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Digital Art · ${digitalArt.length} karya</a><a href="#poster-art"><i class="fa-regular fa-images" aria-hidden="true"></i> Poster · ${posterArt.length} karya</a><a href="#manual-art"><i class="fa-solid fa-pencil" aria-hidden="true"></i> Manual Art · ${manualArt.length} karya</a></nav><div class="artwork-grid"><section class="artwork-slot" id="digital-art"><span>01 / DIGITAL COLLECTION</span><h2>Digital Art</h2><p>Eksplorasi karya ilustrasi digital.</p><div class="artwork-gallery">${artworkFigures(digitalArt,'Digital Art')}</div></section><section class="artwork-slot" id="poster-art"><span>02 / POSTER COLLECTION</span><h2>Poster</h2><p>Kumpulan karya poster.</p><div class="artwork-gallery">${artworkFigures(posterArt,'Poster')}</div></section><section class="artwork-slot" id="manual-art"><span>03 / MANUAL COLLECTION</span><h2>Manual Art</h2><p>Karya yang dibuat dengan media manual.</p><div class="artwork-gallery">${artworkFigures(manualArt,'Manual Art')}</div></section></div>`;
                const artworkViewer=document.createElement('dialog');
                artworkViewer.className='artwork-viewer';
                artworkViewer.setAttribute('aria-label','Artwork preview');
                artworkViewer.innerHTML='<img alt=""><button type="button">Close</button>';
                section.append(artworkViewer);
                section.addEventListener('click',event=>{
                    const artwork=event.target.closest('.artwork-gallery figure img');
                    if(!artwork)return;
                    const preview=artworkViewer.querySelector('img');
                    preview.src=artwork.currentSrc||artwork.src;
                    preview.alt=artwork.alt;
                    artworkViewer.showModal();
                });
                artworkViewer.addEventListener('click',event=>{
                    if(event.target===artworkViewer||event.target.closest('button'))artworkViewer.close();
                });
                return;
            }
            if(projectKey==='student-performance'){
                section.innerHTML=`<div class="case-top"><a class="back-link" href="projek.html"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to Projects</a></div>
                <header class="case-hero notebook-hero"><p class="category">Data Mining <span class="notebook-status"><i class="fa-solid fa-circle-check" aria-hidden="true"></i> Completed</span></p><p class="notebook-kicker">ANALYSIS NOTEBOOK · STUDENT PERFORMANCE</p><h1>Student Performance Data Mining</h1><p class="notebook-subtitle">Data Mining Analysis of Student Academic Performance</p><p class="case-overview">${project.overview}</p><div class="notebook-meta"><span><small>Dataset</small>Student Performance</span><span><small>Total rows</small>395 students</span><span><small>Analysis</small>Classification · Regression · Clustering</span><span><small>Tools</small>Python · Jupyter · Pandas · Scikit-learn</span></div></header>
                <div class="notebook-body">
                <section class="notebook-cell"><div class="cell-mark">01</div><div class="cell-content"><p class="cell-label">Markdown</p><h2>Project Overview</h2><p>Project ini menganalisis performa akademik siswa berdasarkan waktu belajar, waktu luang, ketidakhadiran, dan nilai akademik. Metode data mining digunakan untuk membaca pola data dan memprediksi performa siswa.</p></div></section>
                <section class="notebook-cell"><div class="cell-mark">02</div><div class="cell-content"><p class="cell-label">Dataset</p><h2>Student Performance</h2><p class="dataset-total"><strong>395</strong> siswa pada data awal notebook. Setelah 9 data duplikat dihapus, data bersih berjumlah 386 baris.</p><div class="table-wrap"><table class="notebook-table"><thead><tr><th>Feature</th><th>Description</th></tr></thead><tbody><tr><td>studytime</td><td>Waktu belajar siswa</td></tr><tr><td>freetime</td><td>Waktu luang siswa</td></tr><tr><td>absences</td><td>Jumlah ketidakhadiran</td></tr><tr><td>G1</td><td>Nilai periode pertama</td></tr><tr><td>G2</td><td>Nilai periode kedua</td></tr><tr><td>G3</td><td>Nilai akhir — indikator utama performa akhir</td></tr></tbody></table></div><p>Fitur yang dipilih sama dengan seleksi pada notebook. G3 menjadi target nilai akhir dan dasar label lulus/gagal.</p></div></section>
                <section class="notebook-cell"><div class="cell-mark">03</div><div class="cell-content"><p class="cell-label">Preparation</p><h2>Data Preparation</h2><p>Data dipilih berdasarkan variabel yang relevan terhadap performa akademik. Persiapan dilakukan agar data siap untuk kebutuhan analisis.</p><div class="prep-grid"><article><b>01</b><h3>Data Selection</h3><p>Memilih studytime, freetime, absences, G1, G2, dan G3.</p></article><article><b>02</b><h3>Data Inspection</h3><p>Memeriksa struktur, karakteristik, nilai kosong, dan duplikasi.</p></article><article><b>03</b><h3>Feature Preparation</h3><p>Menyiapkan fitur untuk classification, regression, dan clustering.</p></article></div></div></section>
                <section class="notebook-cell"><div class="cell-mark">04</div><div class="cell-content"><p class="cell-label">Exploration</p><h2>Exploratory Data Analysis</h2><p>Eksplorasi melihat pola antara kebiasaan belajar, absensi, dan nilai akademik.</p><div class="insight-box"><strong>Key Observation</strong><p>Visualisasi evaluasi pada notebook membandingkan performa model klasifikasi. Notebook memilih G1 dan G2 sebagai sumbu visual pada decision boundary SVM; tidak disimpulkan korelasi atau statistik tambahan di sini.</p></div></div></section>
                <section class="notebook-cell"><div class="cell-mark">05</div><div class="cell-content"><p class="cell-label">Classification</p><h2>Student Pass Prediction</h2><p>Klasifikasi memprediksi kategori <strong>Pass</strong> atau <strong>Fail</strong> menggunakan aturan <strong>G3 ≥ 10 → Pass</strong> dan <strong>G3 &lt; 10 → Fail</strong>.</p><div class="table-wrap"><table class="notebook-table result-table"><thead><tr><th>Model</th><th>Accuracy</th></tr></thead><tbody><tr><td>Naive Bayes</td><td>86.08%</td></tr><tr class="best-result"><td>Decision Tree <span>Best result</span></td><td>89.87%</td></tr><tr><td>SVM</td><td>88.61%</td></tr></tbody></table></div><div class="insight-box"><strong>Interpretation</strong><p>Decision Tree menghasilkan performa klasifikasi terbaik pada dataset yang digunakan, dengan accuracy 89.87%.</p></div><figure class="analysis-figure"><img src="assets/projects/student-model-comparison.png" alt="Visualisasi evaluasi model classification dari notebook"><figcaption>Analysis output · evaluasi model tersimpan dari notebook</figcaption></figure></div></section>
                <section class="notebook-cell"><div class="cell-mark">06</div><div class="cell-content"><p class="cell-label">Regression</p><h2>Predicting Final Grade</h2><p>Regression digunakan untuk memprediksi nilai akhir siswa (G3) sebagai nilai numerik.</p><div class="metric-grid"><article><small>Performance</small><strong>84.81%</strong><span>Akurasi setelah prediksi numerik dikonversi ke kelas</span></article><article><small>Mean Squared Error</small><strong>4.09</strong><span>Rata-rata kuadrat selisih prediksi dengan nilai aktual</span></article></div><p>Hasil SVR pada notebook menunjukkan prediksi nilai akhir dengan MSE 4.09. Nilai MSE yang lebih rendah berarti selisih prediksi rata-rata lebih kecil.</p></div></section>
                <section class="notebook-cell"><div class="cell-mark">07</div><div class="cell-content"><p class="cell-label">Clustering</p><h2>Student Group Analysis</h2><p>Clustering mencari kelompok siswa dengan karakteristik data yang mirip, tanpa label lulus/gagal.</p><div class="cluster-facts"><div><small>Optimal K pada pemodelan</small><strong>3</strong></div><ul><li>Elbow Method</li><li>Dendrogram</li><li>Euclidean Distance</li></ul></div><div class="analysis-gallery"><figure class="analysis-figure"><img src="assets/projects/student-elbow.png" alt="Elbow Method plot dari notebook untuk pemilihan jumlah cluster"><figcaption>Elbow Method · output visual dari notebook</figcaption></figure><figure class="analysis-figure"><img src="assets/projects/student-dendrogram.png" alt="Dendrogram hasil hierarchical clustering menggunakan jarak Euclidean"><figcaption>Dendrogram · visualisasi hierarchical clustering</figcaption></figure></div><h3 class="cluster-subheading">Penjelasan Cluster</h3><p class="cluster-source">Interpretasi berikut disalin dari catatan analisis pada notebook.</p><div class="cluster-profiles"><article><span>CLUSTER 0</span><h3>Sering bolos</h3><p>Absences = <strong>24.24</strong> (tertinggi), studytime = <strong>1.73</strong> (terendah), dan G3 = <strong>9.21</strong>. Catatan notebook menggambarkan kelompok ini sebagai siswa dengan banyak ketidakhadiran, waktu belajar rendah, dan nilai akhir pas-pasan.</p></article><article><span>CLUSTER 1</span><h3>Ambis (juara)</h3><p>Studytime = <strong>2.19</strong> (tertinggi), G1 = <strong>14.67</strong>, G3 = <strong>14.89</strong>, dan absences sekitar <strong>3</strong>. Catatan notebook menggambarkan nilai yang tinggi dan stabil serta ketidakhadiran paling sedikit.</p></article><article><span>CLUSTER 2</span><h3>Butuh bimbingan ekstra</h3><p>Absences = <strong>2.80</strong> (terendah). Catatan notebook menyebut kelompok ini jarang absen, tetapi nilai awal rendah dan G3 menurun. Ini adalah interpretasi yang tertulis di notebook, bukan hasil sebab-akibat yang dibuktikan model.</p></article><article><span>CLUSTER 3</span><h3>Rata-rata (normal)</h3><p>Studytime = <strong>2.04</strong>, absences = <strong>4.63</strong>, dan G3 = <strong>10.23</strong>. Catatan notebook menggambarkannya sebagai profil dengan nilai dan kebiasaan belajar di kisaran tengah.</p></article></div><div class="notebook-note"><strong>Catatan konsistensi sumber</strong><p>Cell pemodelan pada notebook menetapkan K = 3 dan output tabel rata-rata hanya menampilkan Cluster 0–2 (G3 masing-masing 2.89, 10.00, dan 14.61). Sementara itu, catatan “Penjelasan Cluster” menuliskan empat profil dengan angka berbeda di atas. Keduanya ditampilkan sesuai sumbernya; angka profil belum cocok dengan tabel output tersimpan.</p></div></div></section>
                <section class="notebook-cell"><div class="cell-mark">08</div><div class="cell-content"><p class="cell-label">Results</p><h2>Model Performance Comparison</h2><div class="table-wrap"><table class="notebook-table"><thead><tr><th>Method</th><th>Model</th><th>Result</th></tr></thead><tbody><tr><td>Classification</td><td>Naive Bayes</td><td>86.08%</td></tr><tr class="best-result"><td>Classification</td><td>Decision Tree</td><td>89.87%</td></tr><tr><td>Classification</td><td>SVM</td><td>88.61%</td></tr><tr><td>Regression</td><td>SVR</td><td>MSE 4.09</td></tr><tr><td>Clustering</td><td>K-Means / Clustering</td><td>K = 3</td></tr></tbody></table></div></div></section>
                <section class="notebook-cell"><div class="cell-mark">09</div><div class="cell-content"><p class="cell-label">Takeaways</p><h2>Key Findings</h2><div class="finding-list"><p><b>01</b><span>Decision Tree mendapat accuracy tertinggi pada classification: 89.87%.</span></p><p><b>02</b><span>G1 dan G2 digunakan bersama fitur terkait kebiasaan belajar untuk analisis performa.</span></p><p><b>03</b><span>Elbow Method dan dendrogram mendukung pemilihan K = 3 pada pemodelan clustering.</span></p><p><b>04</b><span>Notebook mengevaluasi performa melalui classification, regression, serta clustering.</span></p></div></div></section>
                <section class="notebook-cell conclusion-cell"><div class="cell-mark">10</div><div class="cell-content"><p class="cell-label">Conclusion</p><h2>Conclusion</h2><p>Student Performance Data Mining menunjukkan bagaimana classification, regression, dan clustering dapat digunakan untuk menganalisis performa akademik. Decision Tree memberikan accuracy classification tertinggi sebesar 89.87%. Evaluasi clustering memilih tiga kelompok siswa berdasarkan kemiripan karakteristik data yang dianalisis.</p></div></section></div>`;
                return;
            }
            const links=projectKey==='uiux-showcase'?'':`<div class="case-links">${projectKey==='face-recognition'?resourceLink(project.pdf,'Tugas Web (PDF)','fa-regular fa-file-pdf'):resourceLink(project.github,'GitHub','fa-brands fa-github')}</div>`;
            section.innerHTML=`<div class="case-top"><a class="back-link" href="projek.html">← Back to Projects</a></div><header class="case-hero"><p class="category">${project.category}</p><h1>${project.title}</h1><p class="case-overview">${project.overview}</p>${links}</header><div class="case-grid">${field('Background / Problem',paragraph(project.background))}${field('Objective',paragraph(project.objective))}${field('Features',listItems(project.features))}${field('Technology Used',tech(project.tech)+(project.techDescription?paragraph(project.techDescription):''))}${field('Project Process / How It Works',listItems(project.process))}${project.result?field('Result / Output',paragraph(project.result)):''}</div>${video}<section class="screenshots">${projectKey==='belajaryuk'?'<p class="video-step">04 / VISUAL OVERVIEW</p><h2>Screenshots</h2><p class="video-description">Cuplikan gambar antarmuka Belajaryuk untuk melengkapi tiga rekaman video di atas.</p>':projectKey==='uiux-showcase'?'<h2>UI/UX Screenshots</h2>':'<h2>Screenshots</h2>'}<div class="shot-grid${projectKey==='uiux-showcase'?' uiux-shot-grid':''}">${screenshots}</div>${figmaLinks}</section>`;
        }
        const filterButtons=document.querySelectorAll('.project-filter');
        const projectCards=document.querySelectorAll('.project-grid .project-card');
        filterButtons.forEach(button=>button.addEventListener('click',()=>{
            const filter=button.dataset.filter;
            filterButtons.forEach(item=>{const active=item===button;item.classList.toggle('is-active',active);item.setAttribute('aria-pressed',String(active))});
            projectCards.forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter});
        }));
        const selected=new URLSearchParams(location.search).get('project');
        if(selected&&projects[selected])renderDetail(projects[selected],selected);
        else if(selected){const detail=document.getElementById('projectDetail');detail.hidden=false;detail.innerHTML='<div class="case-top"><a class="back-link" href="projek.html">← Back to Projects</a></div><h1>Project tidak ditemukan</h1>';document.getElementById('projectList').hidden=true}

        const revealItems=document.querySelectorAll('.reveal-target,.case-hero,.case-section,.notebook-cell,.shot');
        if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-revealed',entry.isIntersecting)),{threshold:.12,rootMargin:'0px 0px -30px 0px'});revealItems.forEach((element,index)=>{element.classList.add('reveal-ready');element.style.setProperty('--delay',`${index%4*55}ms`);observer.observe(element)})}else revealItems.forEach(element=>element.classList.add('is-revealed'))
