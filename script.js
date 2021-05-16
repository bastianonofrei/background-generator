let paragraph = document.getElementById("colorValue");
let fontSize = 0;
let fontfamilies = ['Arial', 'monospace', 'Helvetica', 'Impact'];
let randomFont = 0;
let btn = document.getElementById("btn");
function changeColor() {
    while (fontSize < 10) {
        fontSize = Math.random() * 40;
    }
    randomFont = Math.random() * 4;
    randomFont = randomFont.toFixed(0);
    let num1 = Math.random() * 255;
    num1 = num1.toFixed(0);
    let num2 = Math.random() * 255;
    num2 = num2.toFixed(0);
    let num3 = Math.random() * 255;
    num3 = num3.toFixed(0);
    console.log("You clicked the button Yaay");
    paragraph.style.fontSize = `${fontSize}px`;
    paragraph.style.fontFamily = `${fontfamilies[randomFont]}`;
    paragraph.textContent = `RGB(${num1},${num2},${num3})`;
    document.body.style.backgroundColor = `rgb(${num1},${num2},${num3})`;
    btn.style.fontFamily = `${fontfamilies[randomFont]}`;
    fontSize = Math.random() * 40;
}

