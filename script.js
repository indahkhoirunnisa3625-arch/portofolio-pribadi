document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMASI MEKANISME STICKY NAVBAR SAAT SCROLL
    const navbar = document.getElementById("main-navbar");
    
    window.addEventListener("scroll", () => {
        // Jika layar di-scroll ke bawah lebih dari 50px, tambahkan background blur
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

    // 2. SCROLL REVEAL TRIGGER (Memunculkan Elemen Otomatis)
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MECHANISM STICKY NAVBAR
    const navbar = document.getElementById("main-navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

    // 2. SCROLL REVEAL & PROGRESS BAR TRIGGER
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Aktifkan efek muncul bawaan CSS (.reveal)
                entry.target.classList.add("active");

                // JIKA elemen yang terdeteksi adalah bar skill, picu animasinya mengisi
                if (entry.target.classList.contains("skill-item")) {
                    const progressLine = entry.target.querySelector(".skill-progress");
                    const targetPercent = entry.target.getAttribute("data-percent");
                    progressLine.style.width = targetPercent + "%";
                }
            }
        });
    }, {
        threshold: 0.15 // Dipicu setelah elemen masuk 15% ke layar
    });

    // Daftarkan semua elemen reveal umum dan item skill ke pengawas observer
    revealElements.forEach(element => {
        observer.observe(element);
    });
    
    document.querySelectorAll(".skill-item").forEach(item => {
        observer.observe(item);
    });
});


// Tambahkan baris ini di dalam scope DOMContentLoaded atau langsung di bawah kode yang sudah ada:

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    // Saat kursor bergerak di atas kartu
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        // Menghitung posisi kursor relatif terhadap dimensi kartu
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Menentukan titik tengah kartu
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Menghitung sudut kemiringan (maksimal 10 derajat)
        const rotateX = ((centerY - y) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        // Terapkan transformasi 3D ke elemen
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    // Saat kursor meninggalkan area kartu, kembalikan ke posisi semula secara halus
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
});




document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL REVEAL FOR CONTACT SECTION
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => observer.observe(element));

    // 2. MAGNETIC SUBMIT BUTTON EFFECT
    const magneticBtn = document.getElementById('magnetic-btn');
    if (magneticBtn) {
        magneticBtn.addEventListener('mousemove', (e) => {
            const rect = magneticBtn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            // Menggerakkan tombol mengikuti arah kursor sebesar efek 30%
            magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        magneticBtn.addEventListener('mouseleave', () => {
            magneticBtn.style.transform = 'translate(0px, 0px)';
        });
    }
});

// ==============================
// DARK / LIGHT MODE TOGGLE
// ==============================
const html  = document.documentElement;
const btn   = document.getElementById('theme-toggle');
const thumb = document.getElementById('theme-toggle-thumb');

// Ambil preferensi tersimpan (kalau pernah dipilih sebelumnya)
const saved = localStorage.getItem('theme') || 'dark';
setTheme(saved);

btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

function setTheme(mode) {
    html.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    // Ganti ikon di tombol
    thumb.textContent = mode === 'dark' ? '🌙' : '☀️';
}
