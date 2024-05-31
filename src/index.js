function generateCompliment(event) {
  event.preventDefault();

  new Typewriter("#compliment", {
    strings: "The compliment will go here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let formElement = document.querySelector("#compliment-generator-form");
formElement.addEventListener("submit", generateCompliment);
