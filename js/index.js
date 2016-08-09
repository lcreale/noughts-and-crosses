//This is the Drag and Drop
document.ondragstart = function(event) {
  event.dataTransfer.setData("Text", event.target.id);
};
document.ondragover = function(event) {
  event.preventDefault();
};
document.ondrop = function(event) {
  event.preventDefault();
  var gamepiece = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(gamepiece));
};


//GAME RESET

//GAME LOGIC

//TBC...