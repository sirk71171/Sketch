var container = document.querySelector("#container");
const iput = document.querySelector("#iput");
const select = document.querySelector("#select");
let STAT = "not-clicked";


document.addEventListener("DOMContentLoaded", () => {
    STAT = "clicked";
    const input = prompt("Enter a number between 1 and 100: ");

    for (i = 1; i <= input; i++) {
        const rows = document.createElement("div");
        rows.setAttribute("style", "display:flex;flex:1;height:100%;width:100%;");
        rows.setAttribute("class", `boxrow${i}`);
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
        if (val !== "select" && val !== "iput") {
            document.getElementById(val).setAttribute("style", "display:flex;flex-basis:auto;flex-grow:1;flex-shrink:1;align-items:stretch;background-color:black;");
        }
        
    }
}

container.addEventListener("DOMContentLoaded", assignToElement());