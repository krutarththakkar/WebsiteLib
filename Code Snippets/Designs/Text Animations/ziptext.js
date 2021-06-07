/*

How to use this code snippet :

1) All variables "querySelectorAll" are connected to a specific CSS Class.
Those CSS class are used to list matching groups of textblock and buttons

2) The For Loop is used to modify a CSS Class on a textblock and add an effect on it (you can find classes on ziptext.css)

The point of this snippet is to drop down and wrap up a text, like opening a ancient scroll of paper ! 

You can see it working on my personal website : http://vl-dwj.surge.sh/, by clicking on the "Dérouler le contenu" buttons

*/ 

// ----- Dropdown & WrapUp articles -----

var articles = document.querySelectorAll(".list-item");
console.log("Tableau des articles");
console.log(articles);
var buttonDrop = document.querySelectorAll(".dropdown");
console.log("Listes des boutons DropDown");
console.log(buttonDrop);
var buttonWrap = document.querySelectorAll(".wrapUp");
console.log("Listes des boutons WrapUp");
console.log(buttonWrap);

for (let i = 0; i < articles.length; i++) {
    buttonDrop[i].addEventListener('click', () => {
        articles[i] = articles[i].classList.remove("hide")
        articles[i] = articles[i].classList.add("show")
    })
    buttonWrap[i].addEventListener('click', () => {
        articles[i] = articles[i].classList.add("hide")
        articles[i] = articles[i].classList.remove("show")
    })
    
}