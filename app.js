const destinations = [
    {
        number: "01",
        counter: "01 / 04",
        country: "FRANCE",
        city: "Paris",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        image: "images/paris.jpg",
        moreInfo: "Known as the City of Light, Paris offers world-renowned museums like the Louvre, charming sidewalk cafés, historic boulevards, and iconic landmarks along the Seine River."
    },
    {
        number: "02",
        counter: "02 / 04",
        country: "JAPAN",
        city: "Tokyo",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        image: "images/tokyo.jpg",
        moreInfo: "From neon-lit skyscrapers in Shinjuku to peaceful historic temples in Asakusa, Tokyo delivers an unforgettable blend of futuristic innovation and centuries-old heritage."
    },
    {
        number: "03",
        counter: "03 / 04",
        country: "ITALY",
        city: "Rome",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        image: "images/roma.jpg",
        moreInfo: "The Eternal City is an open-air museum filled with ancient Roman ruins, Renaissance masterpieces, vibrant piazzas, and authentic culinary traditions."
    },
    {
        number: "04",
        counter: "04 / 04",
        country: "EGYPT",
        city: "Cairo",
        description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        image: "images/cairo.jpg",
        moreInfo: "Set along the Nile River, Cairo connects thousands of years of pharaonic wonders at Giza with historic mosques, bustling bazaars, and warm Egyptian hospitality."
    }
];

let currentIndex = 0;

// DOM Elements
const slideCounter = document.getElementById("slide-counter");
const countryName = document.getElementById("country-name");
const cityName = document.getElementById("city-name");
const cityDesc = document.getElementById("city-desc");
const continent = document.getElementById("continent");
const famousFood = document.getElementById("famous-food");
const famousPlace = document.getElementById("famous-place");
const language = document.getElementById("language");
const cityImage = document.getElementById("city-image");
const badgeNumber = document.getElementById("badge-number");
const dots = document.querySelectorAll(".dot");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const exploreMoreBtn = document.getElementById("explore-more-btn");

// Modal Elements
const modalOverlay = document.getElementById("modal-overlay");
const closeModal = document.getElementById("close-modal");
const modalCountry = document.getElementById("modal-country");
const modalCity = document.getElementById("modal-city");
const modalText = document.getElementById("modal-text");

function updateDestination(index) {
    const item = destinations[index];

    slideCounter.textContent = item.counter;
    countryName.textContent = item.country;
    cityName.textContent = item.city;
    cityDesc.textContent = item.description;
    continent.textContent = item.continent;
    famousFood.textContent = item.food;
    famousPlace.textContent = item.place;
    language.textContent = item.language;
    cityImage.src = item.image;
    cityImage.alt = `${item.city} City`;
    badgeNumber.textContent = item.number;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
    updateDestination(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % destinations.length;
    updateDestination(currentIndex);
});

dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.index);
        updateDestination(currentIndex);
    });
});

// Modal Events
exploreMoreBtn.addEventListener("click", () => {
    const item = destinations[currentIndex];
    modalCountry.textContent = item.country;
    modalCity.textContent = item.city;
    modalText.textContent = item.moreInfo;
    modalOverlay.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modalOverlay.classList.remove("show");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("show");
    }
});