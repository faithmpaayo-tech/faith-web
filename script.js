document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll effect for buttons (optional later upgrade)
    const button = document.querySelector("button");

    if(button){
        button.addEventListener("click", () => {
            window.scrollTo({
                top: document.querySelector(".about-page")?.offsetTop || 0,
                behavior: "smooth"
            });
        });
    }

});
