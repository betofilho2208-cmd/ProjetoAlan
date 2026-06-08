const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


const cards = document.querySelectorAll(".card, .step");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

cards.forEach(card => observer.observe(card));


document.querySelectorAll(".btn-primary").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Redirecionando para o atendimento SOS Auto...");
    });
});


const counter = document.getElementById("counter");

if (counter) {
    let num = 0;

    const interval = setInterval(() => {
        num += 25;
        counter.textContent = num;

        if (num >= 5000) {
            clearInterval(interval);
        }
    }, 15);
}


const whatsappBtn = document.querySelector(".btn-secondary");

if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
        window.open(
            "https://wa.me/+55889933063031",
            "_blank"
        );
    });
}
const accordionHeaders =
    document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const content =
            header.nextElementSibling;

        document
            .querySelectorAll(".accordion-content")
            .forEach(item => {

                if (item !== content) {
                    item.style.maxHeight = null;
                }
            });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight =
                content.scrollHeight + "px";
        }

    });

});
function telaLogin() {
    setTimeout(() => {

        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "src/navigation/TeladeLogin.html";
        }, 500);

    }, 1500);
}
