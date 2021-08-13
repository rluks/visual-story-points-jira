"use strict";

function InjectStoryPoints(node, headingNode){

    console.log("injecting...");

    let mouseSP = 1;
    let catSP = 2;
    let dogSP = 5;

    console.log(node);
    var inputEl = node.getElementsByTagName("input")[0];

    var containerEL = document.createElement("div");
    containerEL.setAttribute("id", "visual-sps-jira");
    containerEL.classList.add("visual-story-points-jira");

    headingNode.parentNode.insertBefore(containerEL, headingNode.nextSibling);

    var small = document.createElement("button");
    var smallTxt = document.createTextNode("🐭(" + mouseSP + ")");
    small.classList.add("visual-story-points-jira-button");
    small.appendChild(smallTxt);
    small.onclick = function () {
        inputEl.value = mouseSP;
    };
    containerEL.appendChild(small);

    var medium = document.createElement("button");
    var mediumTxt = document.createTextNode("🐱(" + catSP + ")");
    medium.classList.add("visual-story-points-jira-button");
    medium.appendChild(mediumTxt);
    medium.onclick = function () {
        inputEl.value = catSP;
    };
    containerEL.appendChild(medium);

    var big = document.createElement("button");
    var bigTxt = document.createTextNode("🐶(" + dogSP + ")");
    big.classList.add("visual-story-points-jira-button");
    big.appendChild(bigTxt);
    big.onclick = function () {
        inputEl.value = dogSP;
        //TODO highlight input field
    };
    containerEL.appendChild(big);
}

globalThis.InjectStoryPoints = InjectStoryPoints;