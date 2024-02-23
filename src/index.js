function displayTravel(response) {
  new Typewriter("#travel-itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0,
    cursor: "",
  });
}

function generateTravel(event) {
  event.preventDefault();

  let userInput = event.target[0].value;

  let key = "24f4f42o4c9743877a07b1152a0tb959";
  let prompt = `User instructions are: Give a detailed 5 days itinerary for ${userInput}. Make sure at the end of each <strong> to add line breaks <br/>.`;
  let notValidPlace = `There seems to be a problem. I don't recognise this place, please try again`;
  let context = `You are a travel itinerary planner who has information about cities and countries all over the world. Include activities and places to eat. Make sure to include the city name on each day. Use HTML tags for formatting text. Your mission is to generate a 5 line intinerary for 5 days. Separate each day for the itinerary with 2 line breaks <br/> Have the word Day and the city in <strong>. If you do not recognise the city respond with ${notValidPlace}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayTravel);

  let loading = document.getElementById("travel-itinerary");
  loading.innerHTML = `<div class="loading">Fetching your itinerary... packing your toothbrush... </div>
  <img
      src="https://cdn.dribbble.com/users/846207/screenshots/7617197/media/e87a923768846bc12f00539d66e80931.gif"
      alt="Yellow airplane"
    />
  `;
}

let travelFormElement = document.getElementById("travel-form");
travelFormElement.addEventListener("submit", generateTravel);
