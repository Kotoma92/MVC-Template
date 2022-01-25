function buttonOne() {
    if (templateInput == "69420") templateDiv = "Du fant min hemmelige kode!";
    else if (templateInput == "Snømann") templateDiv = `
    
    <svg width="300" height="600">
    <circle cx="150" cy="150" r="35" stroke="black" stroke-width="4" fill="white" />
    <circle cx="150" cy="220" r="45" stroke="black" stroke-width="4" fill="white" />
    <circle cx="150" cy="300" r="55" stroke="black" stroke-width="4" fill="white" />
    <circle cx="135" cy="140" r="4" fill="black" />
    <circle cx="165" cy="140" r="4" fill="black" />
    <path d="M130,160 Q128,185 156,160"/>
    <circle cx="150" cy="190" r="4" fill="black" />
    <circle cx="150" cy="210" r="4" fill="black" />
    <circle cx="150" cy="230" r="4" fill="black" />
    <line x1="110" y1="200" x2="40" y2="100" style="stroke:black;stroke-width:4px";/>
    <line x1="190" y1="200" x2="240" y2="100" style="stroke:black;stroke-width:4px";/>
    </svg>`;

    else templateDiv = "";

    updateView();
}