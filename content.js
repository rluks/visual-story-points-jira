"use strict";

const testURL = "http://localhost:8000/test.html";

function Test(){
    var node = document.getElementById('modal-field-view');
    node.childNodes.forEach((childNode) => {
        if(childNode.className === 'jira-dialog-heading'){
            if(childNode.textContent.includes("Edit Story Points for")){
                globalThis.InjectStoryPoints(node, childNode);
            }
        }
    });
}

if(window.location.href === testURL){
    setTimeout(Test, 400);
}else{

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
                        if(childNode.classList.contains('jira-dialog-heading')){
                            if(childNode.textContent.includes("Edit Story Points for")){
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

}

