"use strict";

function Test(){
    var node = document.getElementById('modal-field-view');
    node.childNodes.forEach((childNode) => {
        if(childNode.className === 'jira-dialog-heading'){
            if(childNode.textContent.includes("Edit Story Points for")){
                //console.log("It's a dialogue window for editing story points!");
                //console.log(childNode);
                globalThis.InjectStoryPoints(node, childNode);
            }
        }
    });
}

setTimeout(Test, 1000);


/*
// Select the node that will be observed for mutations
const targetNode = document.getElementById('jira');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: false };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach( (node) => {
               if(node.id === 'modal-field-view'){
                   node.childNodes.forEach((childNode) => {
                       if(childNode.className === 'jira-dialog-heading'){
                           if(childNode.textContent.includes("Edit Story Points for")){
                               //console.log("It's a dialogue window for editing story points!");
                               //console.log(childNode);
                               InjectStoryPoints(node, childNode);
                           }
                       }
                   });
               }
            });
        }
    }
};



// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
*/


