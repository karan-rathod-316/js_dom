//Select the section with an id of container without using querySelector.
let newContainer = document.getElementById("container")

//Select the section with an id of container using querySelector.
document.querySelector("#container")

//Select all of the list items with a class of "second".
document.getElementsByClassName("second")


//Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol").querySelector(".third")


//Give the section with an id of container the text "Hello!".
let newPara = document.createElement("p")
newPara.textContent = "Hello";
newContainer.prepend(newPara);
//Doubt

//Add the class main to the div with a class of footer.
let footer = document.querySelector(".footer")
footer.classList.add("main");

//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
let newLi = document.createElement("li")


//Give the li the text "four".
newLi.textContent = "Four";



//Append the li to the ul element.
let newUl = document.querySelector("ul")
newUl.append(newLi)

//Loop over all of the list inside the ol tag and give them a background color of "green".
let ol = document.getElementByTagName("ol");

let olLi = ol.getElementsByTagName("li")

for (i of olLi) {
    i.style.backgroundColor = "Green"
}

//Remove the div with a class of footer.A

footer.remove()