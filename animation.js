//animação do menu ao passar o curso
const magneticItems = document.querySelectorAll(".link__menu");
magneticItems.forEach(item => {
    let xForce = 0;
    let yForce = 0;

    item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        xForce = x * 0.35;   // mais forte, porém suave
        yForce = y * 0.35;

        item.style.transform = `translate(${xForce}px, ${yForce}px)`;
    });

    item.addEventListener("mouseleave", () => {
        item.style.transform = "translate(0, 0)";
    });
});

//menu hamburger
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".list__menu");
const body = document.body; // Adiciona referência ao body

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("open");

    // NOVIDADE: Adiciona ou remove a classe no-scroll no body
    if (menu.classList.contains("open")) {
        // Bloqueia a rolagem quando o menu abre
        body.classList.add("no-scroll");
    } else {
        // Restaura a rolagem quando o menu fecha
        body.classList.remove("no-scroll");
    }
});

// === Alterar menu ao rolar ===
const header = document.querySelector(".header");
const firstSession = document.querySelector(".first__session");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {  // qualquer rolagem
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Fechar o menu ao clicar em qualquer item
document.querySelectorAll(".link__menu").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        menu.classList.remove("open");
        body.classList.remove("no-scroll"); // NOVIDADE: Garante que o scroll volte ao fechar
    });
});

const social = document.querySelector(".contact__images")
const mobileSocial = document.querySelector(".mobile__social")
const originalPlace = document.querySelector("#socialOriginal")

function handleSocialIcons() {
    if (window.innerWidth <= 768) {
        if (!mobileSocial.contains(social)) {
            mobileSocial.appendChild(social)
        }
    } else {
        if (!originalPlace.contains(social)) {
            originalPlace.appendChild(social)
            console.log("icons voltaram oa lugar original")
        }
    }
}

handleSocialIcons()
window.addEventListener("resize", handleSocialIcons)
console.log("img add com suceso")


//copiar numero
const btnContato = document.getElementById("btnContact");
const mensagem = document.getElementById("mensagem");
const numero = "+55 92 992199344 / +55 92 984448956"; // coloque seu número aqui

btnContato.addEventListener("click", () => {
    // Copia o número para a área de transferência
    navigator.clipboard.writeText(numero).then(() => {
        // Mostra a mensagem
        alert("Número copiado!")
        mensagem.classList.add("show");

        // Esconde a mensagem depois de 2 segundos
        setTimeout(() => {
            mensagem.classList.remove("show");
        }, 2000);
    });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            // remove quando sai da tela
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px"
});

reveals.forEach(el => observer.observe(el));
