"use strict";

function InjectStoryPoints(node, headingNode){

    let animals = {//key = story points
        1: {
            icon: "🐭",
            img: "img/mouse.png"
        },
        2: {
            icon: "🐱",
            img: "img/cat.png"
        },
        5: {
            icon: "🐶",
            img: "img/dog.png"
        }
    };

    var inputEl = node.getElementsByTagName("input")[0];
    var containerEL = document.createElement("div");
    containerEL.setAttribute("id", "visual-sps-jira");
    containerEL.classList.add("visual-story-points-jira");
    headingNode.parentNode.insertBefore(containerEL, headingNode.nextSibling);

    Object.entries(animals).forEach(([key, value]) => {

        var button = document.createElement("button");
        var txtEl = document.createTextNode(value.icon + "(" + key + ")");

        button.classList.add("vspj-button", "button");
        button.appendChild(txtEl);
        button.onclick = function () {
            inputEl.value = key;
            //TODO highlight input field
        };
        containerEL.appendChild(button);

        var animalImg = document.createElement("img");
        var imgURL = chrome.runtime.getURL(value.img);
        animalImg.src = imgURL;
        animalImg.classList.add("vspj-img");
        button.appendChild(animalImg);
    });
}

globalThis.InjectStoryPoints = InjectStoryPoints;