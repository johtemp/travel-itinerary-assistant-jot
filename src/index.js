function generateTravel(event) {
  event.preventDefault();

  let travelItineraryElement = document.getElementById("travel-itinerary");
  travelItineraryElement.innerHTML =
    "Full day: Colosseum, Ancient Rome, Pantheon, Spanish Steps, Trevi Fountain";
}

let travelFormElement = document.getElementById("travel-form");
travelFormElement.addEventListener("submit", generateTravel);
