function posicionarPelotas() {
    const billar = document.getElementById("billar");
    const { clientWidth: ancho, clientHeight: alto } = billar;
    const radio = 38;

    let i = 0;
    while (i <= 15) {
        const pelota = document.getElementById(`pelota${i}`);
        i++; // Avanzamos el índice para evitar que haga saltos

        if (!pelota) continue;

        let x = Math.random() * (ancho - radio);
        let y = Math.random() * (alto - radio);

        pelota.style.left = `${x}px`;
        pelota.style.top = `${y}px`;

        setInterval(() => {
            const paso = (Math.random() < 0.5 ? -1 : 1) * (40 + Math.random() * 60);
            x = Math.max(0, Math.min(ancho - radio, x + paso));
            y = Math.max(0, Math.min(alto - radio, y + paso));
            pelota.style.left = `${x}px`;
            pelota.style.top = `${y}px`;
        }, 1000);
    }
}
window.onload = posicionarPelotas;