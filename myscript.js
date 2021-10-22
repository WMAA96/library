let myLibrary = [];

const cardsContainer = document.getElementById("cardsContainer");
const addBtn = document.getElementById("addBtn");
const addForm = document.getElementById("addForm");
addForm.style.display="none";

const field = document.getElementsByClassName("field");
const submit = document.getElementById("submit");


addBtn.addEventListener("click", addNewBook);   
submit.addEventListener("click", addBook);  

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

function addNewBook() {
    addForm.style.display="block";

    
}

function addBook() {

    let book = new Book(
        title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        pages = document.getElementById("pages").value,
        read = document.getElementById("read").value,
    )

    addBookToLibrary(book);
    

    addForm.style.display="none";

    console.log(title, author, pages, read);
}