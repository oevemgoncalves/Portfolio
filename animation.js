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

