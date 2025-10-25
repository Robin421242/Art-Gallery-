 const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => { navLinks.classList.remove('active'); });
        });
        
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if(window.scrollY>50){ 
                nav.style.background='rgba(0,0,0,0.9)'; 
                nav.style.padding='15px 50px'; 
            }
            else { 
                nav.style.background='rgba(0,0,0,0.7)'; 
                nav.style.padding='20px 50px'; 
            }
            
            const scrollToTop = document.getElementById('scrollToTop');
            if(window.scrollY > 300) {
                scrollToTop.classList.add('active');
            } else {
                scrollToTop.classList.remove('active');
            }
        });
        
    
        document.querySelector('form').addEventListener('submit',(e)=>{
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            document.querySelector('form').reset();
        });
        

        window.addEventListener('load', () => {
            const paintingLeft = document.getElementById('painting-left');
            const paintingRight = document.getElementById('painting-right');
    
            setTimeout(() => {
                paintingLeft.classList.add('active');
                paintingRight.classList.add('active');
            }, 500);
        });
    
        document.getElementById('scrollToTop').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
      
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });

document.querySelectorAll('.project-card .btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); 

        const userConfirmed = confirm("🖼️ Would you like to proceed with purchasing this artwork?");
        if (!userConfirmed) {
            alert("❌ Purchase cancelled. Feel free to explore other artworks!");
            return;
        }

        const buyerName = prompt("Please enter your full name to confirm your interest:");
        if (!buyerName || buyerName.trim() === "") {
            alert("⚠️ Name is required to proceed with the purchase.");
            return;
        }

        alert(`✅ Thank you, ${buyerName}! Our sales team will contact you shortly to finalize your purchase.`);
    });
});