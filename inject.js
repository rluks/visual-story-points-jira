"use strict";

function InjectStoryPoints(node, headingNode){

    console.log("injecting...");

    let mouseSP = 1;
    let catSP = 2;
    let dogSP = 5;

    let baseHeight = 40;
    let smallHeight = baseHeight + 'px';
    let mediumHeight = 1.618 * baseHeight + 'px';
    let bigHeight = 1.618 * 1.618 * baseHeight + 'px';

    console.log(node);
    var inputEl = node.getElementsByTagName("input")[0];

    var containerEL = document.createElement("div");
    containerEL.setAttribute("id", "visual-sps-jira");
    containerEL.style.width = '100%';
    containerEL.style.textAlign = 'center';

    headingNode.parentNode.insertBefore(containerEL, headingNode.nextSibling);

    var small = document.createElement("button");
    var smallTxt = document.createTextNode("🐭(" + mouseSP + ")");
    small.style.height = smallHeight;
    small.style.fontSize = "large";
    small.appendChild(smallTxt);
    small.onclick = function () {
        inputEl.value = mouseSP;
    };
    document.getElementById("visual-sps-jira").appendChild(small);

    var medium = document.createElement("button");
    var mediumTxt = document.createTextNode("🐱(" + catSP + ")");
    medium.style.height = mediumHeight;
    medium.style.fontSize = "large";
    medium.appendChild(mediumTxt);
    medium.onclick = function () {
        inputEl.value = catSP;
    };
    document.getElementById("visual-sps-jira").appendChild(medium);

    var big = document.createElement("button");
    var bigTxt = document.createTextNode("🐶(" + dogSP + ")");
    big.style.height = bigHeight;
    big.style.fontSize = "large";
    big.appendChild(bigTxt);
    big.onclick = function () {
        inputEl.value = dogSP;
        //TODO highlight input field
    };
    document.getElementById("visual-sps-jira").appendChild(big);
}

globalThis.InjectStoryPoints = InjectStoryPoints;