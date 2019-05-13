// JS by Dan Høegh
// UCN MMD 2019

function showBox(elementId){
    let elms = document.getElementsByClassName("box");
    for (let i = 0; i < elms.length; i++){
        elms[i].classList.remove("active");
    }
    document.getElementById(elementId).classList.add("active");
}