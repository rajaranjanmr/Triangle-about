const sides = document.querySelectorAll(".side-triangle");
const btn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");
function area(){
    const area = Math.round(0.5 * Number(sides[0].value) * Number(sides[1].value));
    outputEl.innerText = "Area of Triangle is " + area;

}
btn.addEventListener("click",area);