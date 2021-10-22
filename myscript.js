let myLibrary = [];

const cardsContainer = document.getElementById("cardsContainer");
const addBtn = document.getElementById("addBtn");
const addForm = document.getElementById("addForm");
addForm.style.display="none";


addBtn.addEventListener("click", test);   

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
      return title + " by " + author + " , " + pages + " pages" + " ," +  read;
  }
}

let theHobbit = new Book("Hobbit", "me", "5", "no");
addBookToLibrary(theHobbit);

let PJ = new Book ("PJ", "Rick R", "434", "Read");
addBookToLibrary(PJ);

console.log(theHobbit.info());

display();



function addBookToLibrary(book) {
myLibrary.push(book);

}


function display() {
    for (var i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        let card = document.createElement("div");
        card.textContent = myLibrary[i].info();
        cardsContainer.appendChild(card).className = "card";

    }
}

function test() {
    addForm.style.display="block";
}