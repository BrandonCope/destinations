// Form Box Fields
document.forms.destination_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = document.forms.destination_form;  
    createCard({
        name: form.elements.name.value,
        location: form.elements.location.value,
        image: form.elements.image_url.value,
        description: form.elements.description.value,
    });
    form.reset();
})

// Methods
function createCard({name, location, image, description}) {
    const card = elementFactory({
        parentElt: document.querySelector("#card_box"),
        eltType: "div",
        className: ["card"],
    });
    card.style.width = "18rem";
    
    createContent({
        card: card,
        name: name,
        location: location,
        image: image,
        description: description,
    })
}
function createContent({card, image, name, location, description}) {
    const cardBody = elementFactory({
        parentElt: card,
        eltType: "div",
        className: ["card-body"],
    })
    createIMG(card, image);
    createH5(cardBody, name);
    createParagraph(cardBody, location);
    createParagraph(cardBody, description);
    createEditButton(cardBody);
    createDeleteButton(cardBody);
    card.appendChild(cardBody);
}

function createIMG(card, input) {
    let imgSRC = ""
    const defaultIMG = "https://www.hotelierindia.com/cloud/2022/05/03/960x0.jpg";
    input.length === 0 ? imgSRC = defaultIMG : imgSRC = input;
    const image = elementFactory({
        parentElt: card,
        eltType: "img",
        className: ["card-img-top"],
        src: imgSRC
    })
    image.setAttribute("alt", "destination picture");
    // image.src = imgSRC;
}

function createH5(card, input) {
    elementFactory({
        parentElt: card,
        eltType: "h5",
        className: ["card-title"],
        text: input,
    })
}

function createParagraph(card, input) {
    elementFactory({
        parentElt: card,
        eltType: "p",
        className: ["card-text"],
        text: input,
    });
}

function createDeleteButton(cardBody) {
    const deleteBtn = elementFactory({
        parentElt: cardBody,
        eltType: "button",
        className: ["btn", "btn-block", "btn-danger"],
        text: "Remove",
        event: ["click", handleRemove],
    })
    deleteBtn.style.margin = "3px";
}

function handleRemove(e) {
    const removeElement = e.target.parentElement.parentElement;
    while (removeElement.firstChild) {
        removeElement.firstChild.remove();
    }
    removeElement.remove();
}

function createEditButton(cardBody) {
    const editBtn = elementFactory({
        parentElt: cardBody,
        eltType: "button",
        className: ["btn", "btn-block", "btn-warning"],
        text: "Edit",
        event: ['click', editInputs]
    })
    editBtn.style.margin = "3px";
}

function editInputs(e) {
    const editBtn = e.target
    const cardBody = editBtn.parentElement;
    const card = cardBody.parentElement;
    const imageEdit = prompt("Edit Image: ", `${card.children[0].src}`);
    const nameEdit = prompt("Edit Name: ", `${cardBody.children[0].innerText}`);
    const locationEdit = prompt("Edit Location: ", `${cardBody.children[1].innerText}`);
    const descriptionEdit = prompt("Edit Description: ", `${cardBody.children[2].innerText}`);
    validateInputs(imageEdit, nameEdit, locationEdit, descriptionEdit, card, cardBody);
}

function validateInputs(image, name, location, description, card, cardBody) {
    const defaultIMG = "https://www.hotelierindia.com/cloud/2022/05/03/960x0.jpg";
    const cardChild = card.children
    const bodyChild = cardBody.children
    image != null ? image != "" ? cardChild[0].src = image : cardChild[0].src = defaultIMG : false;
    name != null && name != "" ? bodyChild[0].innerText = name : false;
    location != null && location != "" ? bodyChild[1].innerText = location : false;
    description != null ? bodyChild[2].innerText = description : false;
}

function elementFactory({eltType, className, parentElt, text, event, src}) {
    !eltType ? undefined : false;
    
    const newElt = document.createElement(eltType);
    className ?  newElt.classList.add(...className) : false;
    text ?  newElt.innerText = text : false;
    parentElt ? parentElt.appendChild(newElt) : false;
    event ? newElt.addEventListener(...event) : false;
    src ? newElt.src = src : false;
 
    return newElt;
}