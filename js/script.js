document.addEventListener("DOMContentLoaded", () => {
    const bttBtn = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            bttBtn.classList.add("show");
        } else {
            bttBtn.classList.remove("show");
        }
    });

    bttBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    const animatedElements = document.querySelectorAll("h2, p, .data-pribadi, h2 + ul");
    
    animatedElements.forEach((el) => {
        el.classList.add("fade-in");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    animatedElements.forEach((el) => {
        observer.observe(el);
    });

    const profileImg = document.querySelector(".data-pribadi img");
    if (profileImg) {
        profileImg.addEventListener("mouseenter", () => {
            profileImg.style.transform = "scale(1.08) rotate(5deg)";
            profileImg.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        });
        
        profileImg.addEventListener("mouseleave", () => {
            profileImg.style.transform = "scale(1) rotate(0deg)";
        });
    }
});
