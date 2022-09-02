// Form Box Fields
const form = document.forms.destination_form;
const nameInput = form.elements.name
const locationInput = form.elements.location
const imageInput = form.elements.image_url
const descriptionInput = form.elements.description
const submitBtn = form.lastElementChild

// Wishlist Box Fields
const cardBox = document.querySelector("#card_box");
const list = document.createElement("ul");
list.style.listStyleType = "none";
list.style.padding = "0";
cardBox.appendChild(list)

// Form Event Listeners
nameInput.addEventListener('input',() => setName)
locationInput.addEventListener('input',() => setLocation)
imageInput.addEventListener('input',() => setImage)
descriptionInput.addEventListener('input',() => setDescription)
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (nameInput.value != "" && locationInput.value != "" && imageInput.value != "") {
        createListCard()
    } 
    else {
        alert("Please input a destination name, location, and image URL.")
    }
})

// Methods
function createListCard() {
    const card = document.createElement("li");
    card.style.border = "3px solid black"
    card.style.margin = "0 0 5px 0"
    
    createContent(card);
    createEditButton(card);
    createDeleteButton(card)

    list.appendChild(card)
    reset();
}

function createContent(card) {
    const image = document.createElement("img");
    image.setAttribute("src", imageInput.value);
    image.setAttribute("alt", "destination picture")

    const nameTitle = document.createElement("h3");
    nameTitle.innerText = nameInput.value;

    const locationText = document.createElement("p");
    locationText.innerText = locationInput.value;

    const descriptionText = document.createElement("p");
    descriptionText.innerText = descriptionInput.value;

    card.appendChild(image)
    card.appendChild(nameTitle)
    card.appendChild(locationText)
    card.appendChild(descriptionText)
}

function createEditButton(card) {
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit"
    editBtn.setAttribute("class", "btn btn-block btn-primary")
    editBtn.addEventListener('click', () => editInputs(card))
    editBtn.style.margin = "3px"
    card.appendChild(editBtn)
}

function createDeleteButton(card) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove"
    deleteBtn.setAttribute("class", "btn btn-block btn-danger")
    deleteBtn.addEventListener('click', () => card.remove())
    deleteBtn.style.margin = "3px"
    card.appendChild(deleteBtn)
}

function editInputs(card) {
    const imageEdit = prompt("Edit Image: ", `${card.children[0].src}`)
    const nameEdit = prompt("Edit Name: ", `${card.children[1].innerText}`)
    const locationEdit = prompt("Edit Location: ", `${card.children[2].innerText}`)
    const descriptionEdit = prompt("Edit Description: ", `${card.children[3].innerText}`)

    if (imageEdit != null && imageEdit != "") {
        card.children[0].src = imageEdit;
    }
    if (nameEdit != null && nameEdit != "") {
        card.children[1].innerText = nameEdit;
    }
    if (locationEdit != null && locationEdit != "") {
        card.children[2].innerText = locationEdit;
    }
    if (descriptionEdit != null) {
        card.children[3].innerText = descriptionEdit;
    }
}


// Form Setters
function setName(e) {
    nameInput.texContent = e.target.value;
}
function setLocation(e) {
    locationInput.texContent = e.target.value;
}
function setImage(e) {
    imageInput.texContent = e.target.value;
}
function setDescription(e) {
    descriptionInput.texContent = e.target.value;
}

function reset() {
    nameInput.value = "";
    locationInput.value = "";
    imageInput.value = "";
    descriptionInput.value = "";
}