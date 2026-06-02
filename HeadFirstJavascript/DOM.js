function init() {
    let greenplanet = document.getElementById("greenplanet");
    greenplanet.innerHTML = `Red Alert: hit by phaser fire!`;
    greenplanet.setAttribute("class", "redtext");

    if (!greenplanet == null){
        console.log("Oh, I guess there isn't an alt attribute.");
    } else {
        console.log("I can't see the image in the console,");
        console.log(" but I'm told it looks like " + greenplanet);
    }
}

window.onload = init;