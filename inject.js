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
    small.classList.add("vspj-button", "button");
    small.appendChild(smallTxt);
    small.onclick = function () {
        inputEl.value = mouseSP;
    };
    containerEL.appendChild(small);

    var smallAnimalImg = document.createElement("img");
    var imgURL = chrome.runtime.getURL("img/mouse.png");
    smallAnimalImg.src = imgURL;
    smallAnimalImg.classList.add("vspj-img", "vspj-img-small-animal");
    small.appendChild(smallAnimalImg);

    var medium = document.createElement("button");
    var mediumTxt = document.createTextNode("🐱(" + catSP + ")");
    medium.classList.add("vspj-button");
    medium.appendChild(mediumTxt);
    medium.onclick = function () {
        inputEl.value = catSP;
    };
    containerEL.appendChild(medium);

    var mediumAnimalImg = document.createElement("img");
    mediumAnimalImg.src = chrome.runtime.getURL("img/cat.png");
    mediumAnimalImg.classList.add("vspj-img", "vspj-img-medium-animal");
    medium.appendChild(mediumAnimalImg);

    var big = document.createElement("button");
    var bigTxt = document.createTextNode("🐶(" + dogSP + ")");
    big.classList.add("vspj-button");
    big.appendChild(bigTxt);
    big.onclick = function () {
        inputEl.value = dogSP;
        //TODO highlight input field
    };
    containerEL.appendChild(big);

    var bigAnimalImg = document.createElement("img");
    bigAnimalImg.src = chrome.runtime.getURL("img/dog.png");
    bigAnimalImg.classList.add("vspj-img", "vspj-img-big-animal");
    big.appendChild(bigAnimalImg);

}

globalThis.InjectStoryPoints = InjectStoryPoints;