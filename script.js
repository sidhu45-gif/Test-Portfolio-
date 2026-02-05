// Certificates Data with Categories
const certificates = [
    {
        title: "Web Development Fundamentals",
        issuer: "IBM",
        description: "Completed comprehensive training in web development fundamentals including HTML, CSS, and JavaScript basics.",
        category: "ibm",
        icon: "fab fa-ibm"
    },
    {
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM SkillsBuild",
        description: "Gained foundational knowledge in AI concepts, machine learning basics, and AI applications in modern technology.",
        category: "ibm",
        icon: "fab fa-ibm"
    },
    {
        title: "Data Analyst",
        issuer: "Deloitte",
        description: "Learned data analysis techniques, data interpretation, and business intelligence fundamentals.",
        category: "data",
        icon: "fas fa-chart-line"
    },
    {
        title: "GenAI Powered Data Analytics",
        issuer: "Tata",
        description: "Explored the integration of generative AI in data analytics and modern data-driven decision making.",
        category: "data",
        icon: "fas fa-brain"
    },
    {
        title: "Data Visualization: Empowering Business with Effective Insights",
        issuer: "Tata",
        description: "Mastered data visualization techniques and tools to create impactful business insights and reports.",
        category: "data",
        icon: "fas fa-chart-bar"
    },
    {
        title: "Cybersecurity Analyst",
        issuer: "Tata",
        description: "Studied cybersecurity fundamentals, threat analysis, and security best practices.",
        category: "security",
        icon: "fas fa-shield-alt"
    },
    {
        title: "Software Engineering",
        issuer: "Accenture",
        description: "Completed training in software engineering principles, development methodologies, and best practices.",
        category: "tech",
        icon: "fas fa-code"
    },
    {
        title: "Developer & Technology",
        issuer: "Accenture",
        description: "Gained knowledge in modern development technologies and industry-standard development practices.",
        category: "tech",
        icon: "fas fa-laptop-code"
    },
    {
        title: "Solutions Architecture",
        issuer: "Amazon",
        description: "Learned about cloud solutions architecture, AWS services, and scalable system design.",
        category: "tech",
        icon: "fab fa-aws"
    },
    {
        title: "AI for All",
        issuer: "Intel",
        description: "Explored artificial intelligence applications and how AI is transforming various industries.",
        category: "tech",
        icon: "fas fa-robot"
    },
    {
        title: "Career Edge (Young Professional)",
        issuer: "TCS ION",
        description: "Developed professional skills for career growth including workplace readiness and soft skills.",
        category: "career",
        icon: "fas fa-briefcase"
    },
    {
        title: "Interview & Job Readiness",
        issuer: "TCS ION",
        description: "Prepared for interviews and developed job readiness skills including resume building and communication.",
        category: "career",
        icon: "fas fa-handshake"
    },
    {
        title: "Power BI Workshop",
        issuer: "Office Master",
        description: "Hands-on workshop on Microsoft Power BI for business intelligence and data visualization.",
        category: "career",
        icon: "fas fa-chart-pie"
    }
];

// Typing Effect - Continuous Loop
class TypingEffect {
    constructor(element, text, speed = 100, deleteSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.index = 0;
        this.isDeleting = false;
    }
    
    type() {
        if (!this.isDeleting && this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        } else if (!this.isDeleting && this.index === this.text.length) {
            setTimeout(() => {
                this.isDeleting = true;
                this.type();
            }, this.pauseTime);
        } else if (this.isDeleting && this.index > 0) {
            this.element.textContent = this.text.substring(0, this.index - 1);
            this.index--;
            setTimeout(() => this.type(), this.deleteSpeed);
        } else if (this.isDeleting && this.index === 0) {
            this.isDeleting = false;
            setTimeout(() => this.type(), this.speed);
        }
    }
    
    start() {
        this.element.textContent = '';
        this.index = 0;
        this.isDeleting = false;
        this.type();
    }
}

// Typing Effects - Continuous
window.addEventListener('load', () => {
    const nameTyping = new TypingEffect(
        document.getElementById('nameTyping'),
        'Pottabathini Sidhu',
        100,
        50,
        2000
    );
    nameTyping.start();
    
    setTimeout(() => {
        const subtitleTyping = new TypingEffect(
            document.getElementById('subtitleTyping'),
            'BCA Graduate/Fresher',
            80,
            40,
            2000
        );
        subtitleTyping.start();
    }, 500);
});

// Hamburger Menu - Fixed to not show on load
const hamburgerIcon = document.getElementById('hamburgerIcon');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Ensure menu is hidden on page load
navMenu.classList.remove('active');

hamburgerIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});

// Close button click
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburgerIcon.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Background Color Selection
const bgColorBtn = document.getElementById('bgColorBtn');
const bgColorModal = document.getElementById('bgColorModal');
const closeModal = document.querySelector('.close-modal');
const colorBtns = document.querySelectorAll('.color-btn');

bgColorBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    bgColorModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    bgColorModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === bgColorModal) {
        bgColorModal.style.display = 'none';
    }
});

colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        document.documentElement.style.setProperty('--primary-color', color);
        
        // Adjust secondary colors based on primary
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        const secondary = `rgb(${Math.max(0, r - 30)}, ${Math.max(0, g - 30)}, ${Math.max(0, b - 30)})`;
        const accent = `rgb(${Math.min(255, r + 50)}, ${Math.min(255, g + 50)}, ${Math.min(255, b + 50)})`;
        
        document.documentElement.style.setProperty('--secondary-color', secondary);
        document.documentElement.style.setProperty('--accent-color', accent);
        
        bgColorModal.style.display = 'none';
    });
});

// Theme Toggle
const themeBtn = document.getElementById('themeBtn');
let isDark = true;

themeBtn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Section Visibility Animation
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Certifications System
const certificatesGrid = document.getElementById('certificatesGrid');
const categoryBtns = document.querySelectorAll('.cert-category-btn');

// Function to render certificates
function renderCertificates(category = 'all') {
    certificatesGrid.innerHTML = '';
    
    const filteredCerts = category === 'all' 
        ? certificates 
        : certificates.filter(cert => cert.category === category);
    
    filteredCerts.forEach((cert, index) => {
        const certCard = document.createElement('div');
        certCard.className = 'cert-card';
        certCard.style.animationDelay = `${index * 0.1}s`;
        
        certCard.innerHTML = `
            <div class="cert-card-icon">
                <i class="${cert.icon}"></i>
            </div>
            <h3>${cert.title}</h3>
            <p class="cert-card-issuer">Issued by: ${cert.issuer}</p>
            <p class="cert-card-desc">${cert.description}</p>
        `;
        
        certificatesGrid.appendChild(certCard);
    });
}

// Category button click handlers
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get category and render
        const category = btn.getAttribute('data-category');
        renderCertificates(category);
    });
});

// Initial render
renderCertificates('all');

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.length > 1) { // Not just '#'
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        bgColorModal.style.display = 'none';
    }
});

// Add active state to nav links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Resume Download Handler
const resumeDownload = document.getElementById('resumeDownload');
if (resumeDownload) {
    resumeDownload.addEventListener('click', (e) => {
        // Check if there's an actual PDF file
        if (resumeDownload.href.includes('data:application/pdf;base64,') || 
            resumeDownload.href === window.location.href + '#') {
            e.preventDefault();
            alert('Please add your resume.pdf file to this folder and update the link in index.html.\n\nChange this line:\n<a href="data:application/pdf;base64," ...>\n\nTo:\n<a href="resume.pdf" download="Sidhu_Resume.pdf" ...>');
        }
    });
}

// Console Easter Egg
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #14b8a6;');
console.log('%cWelcome to my portfolio!', 'font-size: 16px; color: #5eead4;');
console.log('%cI\'m Pottabathini Sidhu, a BCA Graduate passionate about web development.', 'font-size: 14px;');
console.log('%cFeel free to explore and reach out if you\'d like to connect!', 'font-size: 14px; color: #14b8a6;');

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Smooth scrolling enhancement
document.documentElement.style.scrollBehavior = 'smooth';

// Add parallax effect to hero section  
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-section');
            if (hero && scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${scrolled * 0.3}px)`;
                hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
            }
            ticking = false;
        });
        ticking = true;
    }
});

// Prevent zooming on mobile - additional JS fix
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
