let box = document.querySelector(".box");



box.addEventListener("click", () => {
    var generateRandomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    box.style.backgroundColor = generateRandomColor
});