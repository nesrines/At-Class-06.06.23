let btn = document.getElementById("button");
btn.onmouseover = () => {
    let x = Math.round(Math.random() * 100);
    let y = Math.round(Math.random() * 100);
    btn.style.left = `${x}%`;
    btn.style.top = `${y}%`;
}