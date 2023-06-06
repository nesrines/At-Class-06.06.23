document.getElementById("ChangeColor").onclick = () => {
    let x = Math.round(Math.random() * 255);
    let y = Math.round(Math.random() * 255);
    let z = Math.round(Math.random() * 255);
    let color = `rgb(${x}, ${y}, ${z})`;
    console.log(color);
    document.body.style.backgroundColor = color;
}