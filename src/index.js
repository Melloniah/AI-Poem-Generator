function displayPoem(response){

new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 2,
  cursor: "",
});
}


function poemGenerator(event){
 event.preventDefault();

 let instructionsInput = document.querySelector("#user-instructions");
 let apiKey="174a9t51702bfd0f87690008ad3b3o2f";

 let context =
    "You are an activist Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Kenyan poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

   let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Kenyan poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement=document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator)



























