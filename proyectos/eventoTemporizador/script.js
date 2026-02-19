const btn = document.getElementById("btn");
const num = document.getElementById("num");

setTimeout(() => btn.disabled = false, 3000);

btn.onclick = () => {
    let count = 5;
    const interval = setInterval(() => {
        count--;
        num.textContent = count;
        if (count === 0) clearInterval(interval);
    }, 1000);
};