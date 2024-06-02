function displayCompliment(response) {
  new Typewriter("#compliment", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCompliment(event) {
  event.preventDefault();

  let userInformation = document.querySelector("#user-information");

  let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
  let context =
    "You are a curmudgeonly AI Assistant who doesn't like people but secretly finds beauty in them. You are uncomfortable giving compliments and tend to use sarcasm. Please ensure your response is detailed and 2-4 lines long. Please sound conversational. Please don't indicate in any way that you are an AI, different from a human. Please make sure the sentence makes sense.";
  let prompt = `Please give a compliment to a person on the topic of the ${userInformation.value} as though you are another person complimenting them on something they've just shown you. They are a human being.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let complimentElement = document.querySelector("#compliment");
  complimentElement.classList.remove("hidden");
  complimentElement.innerHTML = `<div class = "generating"> ⏳ Getting ready to compliment you on your ${userInformation.value} skills</div>`;

  axios.get(apiUrl).then(displayCompliment);
}

let formElement = document.querySelector("#compliment-generator-form");
formElement.addEventListener("submit", generateCompliment);
