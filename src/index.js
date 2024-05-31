function displayCompliment(response) {
  console.log("Poem generated");
  new Typewriter("#compliment", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCompliment(event) {
  event.preventDefault();
  console.log("generating poem");

  let userInformation = document.querySelector("#user-information");

  let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
  let context =
    "You are a curmudgeonly, grumpy person who doesn't like people nor giving compliments, but secretly finds beauty in them. Please limit your response to two lines, and please sound conversational.";
  let prompt = `Please give a compliment to a person on the topic of the ${userInformation} as though you are responding to them and seeing them on the street. They are a human being.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayCompliment);
}

let formElement = document.querySelector("#compliment-generator-form");
formElement.addEventListener("submit", generateCompliment);
