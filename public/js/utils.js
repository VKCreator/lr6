const womenCelebrating = {
    "March": "8 Марта",
    "MotherDay": "День матери",
};

const menCelebrating = {
    "February": "23 Февраля",
    "FatherDay": "День отца",
};

const imageLibrary = {
    "Birthday": ["rose.png", "car.png", "cake.png", "flower.png", "bear.png"],
    "Christmas": ["angel.png", "santa.png", "santa_2.png", "snowman.png", "tree.png"],
    "Easter": ["bunny_egg.png", "easter.png", "eggs.png", "eggs_2.png", "pole_eggs.png"],
    "FatherDay": ["family.png", "fathers-day.png"],
    "February": ["23.png", "military.png", "star.png"],
    "Knowledge": ["books.png", "pupil.png"],
    "March": ["8_march.png", "flowers.png", "tulip.png"],
    "MotherDay": ["heart.png", "mother_day.png"],
    "NewYear": ["coronet.png", "ded-moroz.png", "deers.png"],
    "Sun": ["pancakes.png", "sun.png"],
}

// changeGender();
changeCelebrate();
restoreState();

document.getElementById("selectGender").addEventListener("change", changeGender);
document.getElementById("selectCelebrating").addEventListener("change", changeCelebrate);
// document.getElementById("pict").addEventListener("change", () => {console.log(2)});

document.getElementById("flush_common").addEventListener('shown.bs.collapse', () =>  localStorage.setItem("isOpenCommon", "show"))
document.getElementById("flush_common").addEventListener('hidden.bs.collapse', () =>  localStorage.setItem("isOpenCommon", "hide"))
document.getElementById("flush_textAcc").addEventListener('shown.bs.collapse', () =>  localStorage.setItem("isOpenText", "show"))
document.getElementById("flush_textAcc").addEventListener('hidden.bs.collapse', () =>  localStorage.setItem("isOpenText", "hide"))
document.getElementById("flush_pictAcc").addEventListener('shown.bs.collapse', () =>  localStorage.setItem("isOpenPict", "show"))
document.getElementById("flush_pictAcc").addEventListener('hidden.bs.collapse', () =>  localStorage.setItem("isOpenPict", "hide"))

// document.querySelector(".vh-lg-100").addEventListener("scroll", () => localStorage.setItem("scrollTop", document.querySelector(".vh-lg-100").scrollTop));

function restoreState() {
    let common = localStorage.getItem("isOpenCommon");
    let textAcc = localStorage.getItem("isOpenText");
    let pictAcc = localStorage.getItem("isOpenPict");

    if (common == "show" || common == null)
        document.getElementById("common").click()

    if (textAcc == "show")
        document.getElementById("textAcc").click()

    if (pictAcc == "show")
        document.getElementById("pictAcc").click()

    // document.querySelector(".vh-lg-100").scrollTop = 0
    // document.querySelector(".vh-lg-100").scrollTop += (+localStorage.getItem("scrollTop"))
    // console.log(+localStorage.getItem("scrollTop"))

    // console.log(document.querySelector(".vh-lg-100").scrollTop)
}



function deleteCelebrating(objCeleb, className) {

    for (const key in objCeleb) {
        let el = document.createElement("option");

        el.classList.add(className);
        el.value = key;
        el.textContent = objCeleb[key];

        document.getElementById("selectCelebrating").appendChild(el);
    }
}

function changeGender() {
    let gender = document.getElementById("selectGender").value;

    if (gender == "male") {
        let els = document.querySelectorAll(".woman");
        els.forEach(els => els.remove())

        deleteCelebrating(menCelebrating, "man")
    }
    else {
        let els = document.querySelectorAll(".man");
        els.forEach(els => els.remove())

        deleteCelebrating(womenCelebrating, "woman")
    }

    changeCelebrate();
}

function changeCelebrate() {
    let cel = document.getElementById("selectCelebrating").value;

    let selectedEl;
    selectedEl = document.getElementById("pict").dataset.postCurrent;

    let container = document.getElementById('pict');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let index = 0; index < imageLibrary[cel].length; index++) {
        const createEl = document.createElement('option');
        createEl.value = imageLibrary[cel][index];
        createEl.textContent = imageLibrary[cel][index].split(".png")[0];
        
        if (createEl.value == selectedEl) 
            createEl.selected = "selected"

        container.appendChild(createEl);
    }
}

// Form card

let source = `./images/${document.getElementById("selectCelebrating").value}/${document.getElementById("pict").value}`
let img = new Image();
img.src = source;

let card = document.getElementById("card");

let sizes = document.getElementById("cardSize").value.split("x");
card.width = sizes[0];
card.height = sizes[1];

const ctx = card.getContext("2d");


// Image align vertical and horizontal with offset

img.addEventListener("load", (e) => {

    let scale = Number(document.getElementById("scalePicture").value)
    let newW = img.width * scale;
    let newH = img.height * scale;

    let xPict;
    let yPict;
    let alignH = document.getElementById("alignHorizontalPicture").value;
    if (alignH === "center")
        xPict = (card.width - newW) / 2;
    else if (alignH === "right")
        xPict = card.width - newW;
    else
        xPict = 0;

    let alignV = document.getElementById("alignVerticalPicture").value;
    if (alignV === "middle")
        yPict = (card.height - newH) / 2;
    else if (alignV === "top")
        yPict = 0;
    else
        yPict = card.height - newH;

    xPict -= +document.getElementById("offsetLeftPicture").value;   
    xPict += +document.getElementById("offsetRightPicture").value;  

    yPict -= +document.getElementById("offsetTopPicture").value;   
    yPict += +document.getElementById("offsetBottomPicture").value; 

    ctx.drawImage(img, xPict, yPict, newW, newH);
});

ctx.globalCompositeOperation='source-over';

// Background card

ctx.fillStyle = document.getElementById("colorCard").value;
ctx.fillRect(0, 0, card.width, card.height);


// Border

ctx.strokeStyle = document.getElementById("colorBorder").value;
ctx.lineWidth = document.getElementById("borderWidth").value;

ctx.strokeRect(0, 0, card.width, card.height);


// Vertical Align Text with offset

ctx.textBaseline = document.getElementById("alignVertical").value;

let y;
if (ctx.textBaseline === "middle") {
    y = card.height / 2;
}
else if (ctx.textBaseline === "top") {
    y = 0;
}
else {
    y = card.height - ctx.lineWidth;
}

y -= +document.getElementById("offsetTopText").value;   
y += +document.getElementById("offsetBottomText").value; 


// Horizontal Align Text with offset

ctx.textAlign = document.getElementById("alignHorizontal").value;

let x;
if (ctx.textAlign === "center") {
    x = card.width / 2;
}
else if (ctx.textAlign === "left") {
    x = 0 + ctx.lineWidth;
}
else {
    x = card.width - ctx.lineWidth;
}

x -= +document.getElementById("offsetLeftText").value;   
x += +document.getElementById("offsetRightText").value;  


// Draw text 

ctx.fillStyle = document.getElementById("colorText").value;

let arrayOfStrings = textCelebrating.value.replace('\r','').split('\n');

if (arrayOfStrings.length > 1 && ctx.textBaseline === "middle")
    y -= ((document.getElementById("fontSize").value / 2) * (arrayOfStrings.length - 1));
else if (ctx.textBaseline === "top") 
    y += ctx.lineWidth + 15;
else if (arrayOfStrings.length > 1 && ctx.textBaseline === "bottom") 
    y -= ((document.getElementById("fontSize").value) * (arrayOfStrings.length - 1));


let fontStr = `${document.getElementById("fontSize").value}px ${document.getElementById("typeFont").value}`;

const font  = new FontFace(document.getElementById("typeFont").value, `url(../fonts/${document.getElementById("typeFont").value}.ttf)`);

font.load().then(function() {
    document.fonts.add(font);
    ctx.font = fontStr;
    for (let index = 0; index < arrayOfStrings.length; index++) {
        const element = arrayOfStrings[index];
        ctx.fillText(element, x, y);
        y += (+document.getElementById("fontSize").value);
    }
})


// Save image

document.getElementById("saveCardPNG").addEventListener("click", () => {
    let canvasUrl = document.getElementById("card").toDataURL('image/png', 1);
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "postcard_high";
    createEl.click();
    createEl.remove();
});

document.getElementById("saveCardJPG").addEventListener("click", () => {
    let canvasUrl = document.getElementById("card").toDataURL('image/jpeg', 1);
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;
    createEl.download = "postcard_low";
    createEl.click();
    createEl.remove();
});