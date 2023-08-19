document.getElementById("input_cal").addEventListener("click", ()=>{
    const a = getInput("triangle_b");
    const b = getInput("triangle_h");
    const area = .5*a*b;

    const ol = document.getElementById("showing_area");
    const count = ol.childElementCount + 1;
    const li = document.createElement("li");
    li.innerHTML  = `
    <p>${count}.) Area : ${area} cm<sup>2</sup>
    `

    if(isNaN(area)==false){
        ol.appendChild(li);
        document.getElementById("nan").innerText ="";
    }
})


