const hoursData = {
    "Monday" : "6am - 8pm",
    "Tuseday" : "8am - 10pm",
    "Wendesday" : "8am - 10pm",
    "Thursday" : "8am - 10pm",
    "Friday" : "10am - 12am",
    "Saturday" : "10am - 12am",
    "Sunday" : "10am - 12am"
}

function loadHomePage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const homeHeader = document.createElement("h1");
    homeHeader.classList.add("home-header");
    homeHeader.textContent = "ICHIRAKU RAMEN";
    container.appendChild(homeHeader);

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("home");
    container.appendChild(mainDiv);

    const div1 = document.createElement("div");
    div1.classList.add("home-content");
    div1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus necessitatibus modi qui excepturi fuga quibusdam harum est at. Est quis non aut perspiciatis voluptas!";
    mainDiv.appendChild(div1);

    const div2 = document.createElement("div");
    div2.classList.add("home-content");
    div2.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, pariatur doloremque esse, blanditiis laboriosam nisi voluptas odio officia ex perspiciatis voluptatem porro quo! Aliquid ex ad vero voluptas facere dicta!";
    mainDiv.appendChild(div2);

    const hours = document.createElement("div");
    hours.classList.add("home-content", "hours", "flex");
    mainDiv.appendChild(hours);

    const hoursH3 = document.createElement("h3");
    hoursH3.textContent = "Hours";
    hours.appendChild(hoursH3);

    const hoursList = document.createElement("ul");
    hours.appendChild(hoursList);

    for (const day in hoursData) {
        const li = document.createElement("li");
        li.textContent = `${day}: `;
        const span = document.createElement("span");
        span.classList.add("highlight");
        span.textContent = hoursData[day];
        li.appendChild(span);
        hoursList.appendChild(li);
    }

    const location = document.createElement("div");
    location.classList.add("home-content", "location", "flex");
    mainDiv.appendChild(location);

    const locationP = document.createElement("p");
    locationP.textContent = "Location: ";
    const locationSpan = document.createElement("span");
    locationSpan.classList.add("highlight");
    locationSpan.textContent = "Hidden Leaf Village";
    locationP.appendChild(locationSpan);
    location.appendChild(locationP);

    return container;
}

function loadMenuPage() {
    const container = document.createElement("div");
    container.classList.add("container", "flex");

    const p = document.createElement("p");
    p.classList.add("big");
    p.textContent = "We only have ramen bro";
    container.appendChild(p);

    return container;
}

function loadContactPage() {
    const container = document.createElement("div");
    container.classList.add("container", "flex");

    const p = document.createElement("p");
    p.classList.add("big");
    p.textContent = "We don't have phones just come to the Hidden Leaf Village";
    container.appendChild(p);

    return container;
}

export { loadHomePage, loadMenuPage, loadContactPage };