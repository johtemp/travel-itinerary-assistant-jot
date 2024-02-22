function generateTravel(event) {
  event.preventDefault();

  new Typewriter("#travel-itinerary", {
    strings:
      "Full day: Colosseum, Ancient Rome, Pantheon, Spanish Steps, Trevi Fountain",
    autoStart: true,
    delay: 1,
  });
}

let travelFormElement = document.getElementById("travel-form");
travelFormElement.addEventListener("submit", generateTravel);
