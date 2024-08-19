var container = document.querySelector("#container");
const iput = document.querySelector("#iput");
const select = document.querySelector("#select");
let STAT = "not-clicked";
let input = null; 
while (input <= 0 || input > 100 || input == NaN || input == null) {
        input = window.prompt("Enter a number between 1 and 100: ");
    }
    
document.addEventListener("DOMContentLoaded", () => {
    STAT = "clicked";
    

    for (i = 1; i <= input; i++) {
        const rows = document.createElement("div");
        rows.setAttribute("style", "display:flex;flex:1;height:100%;width:100%;");
        rows.setAttribute("id", `boxrow${i}`);
        container.appendChild(rows);
        for (j = 1; j <= input; j++) {
            const boxes = document.createElement("div");
            boxes.setAttribute("style", "display:flex;flex-basis:auto;flex-grow:1;flex-shrink:1;align-items:stretch;")
            boxes.setAttribute("id", `box${i}*${j}`);
            rows.appendChild(boxes);
        }
    }
})
function assignToElement () {
    document.onmouseover = function(e) {
        val = e.target.id;
        if (val !== "select" && val !== "iput" && val !== "container") {
            document.getElementById(val).setAttribute("style", `display:flex;flex-basis:auto;flex-grow:1;flex-shrink:1;align-items:stretch;background-color:rgb(${colorVal()},${colorVal()},${colorVal()});`);
        }
    }
}
function colorVal () {
    return (Math.round(Math.random()*256));
}
container.addEventListener("mouseover", assignToElement());
select.addEventListener("click", () => {
    for (i = 1; i <= input; i++) {
        const boxElement = document.getElementById(`boxrow${i}`);
        console.log(boxElement);
        if (boxElement) {
            boxElement.remove();
        }

    }
    window.location.reload();
})