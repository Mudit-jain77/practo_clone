let sme = {
    data: [
        {
            Name: "Mudit Gupta",
            location: "Delhi",
            speciality: "IT",
            image: "img/pexels-andrea-piacquadio-927022.jpg",
        },
        {
            Name: "Bhavya Sehgal",
            location: "Kolkata",
            speciality: "Sales",
            image: "img/pexels-andrea-piacquadio-762020.jpg",
        },
        {
            Name: "Kiran Magar",
            location: "Delhi",
            speciality: "Sales",
            image: "img/pexels-daniel-xavier-1239291.jpg",
        },
        {
            Name: "Aditi Garg",
            location: "Delhi",
            speciality: "Marketing",
            image: "img/pexels-andrea-piacquadio-733872.jpg",
        },
        {
            Name: "Keshav Kabra",
            location: "Chennai",
            speciality: "IT",
            image: "img/pexels-pixabay-220453.jpg",
        },
        {
            Name: "Sanskriti Sharma",
            location: "Mumbai",
            speciality: "Finance",
            image: "img/pexels-engin-akyurt-1642228.jpg",
        },
        {
            Name: "Sarthak Pahwa",
            location: "Chennai",
            speciality: "Finance",
            image: "img/pexels-simon-robben-614810.jpg",
        },
        {
            Name: "Rishnak Kapoor",
            location: "Kolkata",
            speciality: "IT",
            image: "img/pexels-spencer-selover-428364.jpg",
        },
    ],
};

for (let i of sme.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.location, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.Name.toUpperCase();
    container.appendChild(name);
    //price
    let speciality = document.createElement("h6");
    speciality.innerText = i.speciality;
    container.appendChild(speciality);

    card.appendChild(container);
    document.getElementById("sme").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all sme
window.onload = () => {
    filterProduct("all");
};