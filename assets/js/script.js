var todo = document.querySelector("#magic");
todo.addEventListener("click", function(event) {
  var element = event.target;
  element.remove();
  console.log(element);
});
