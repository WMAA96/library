let myLibrary = [];

const cardsContainer = document.getElementById("cardsContainer");
const addBtn = document.getElementById("addBtn");
const addForm = document.getElementById("addForm");
addForm.style.display="none";

const field = document.getElementsByClassName("field");
const submit = document.getElementById("submit");


addBtn.addEventListener("click", () => {
    addForm.style.display="block";
})


submit.addEventListener("click", addBook);  

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
      return title + " by " + author + " , " + pages + " pages" + " , " +  read;
  }

  this.readStatus = function () {
    objIndex = myLibrary.findIndex((obj => obj.title == title));

      if(read === "Not read") {
          read = "Read";
          myLibrary[objIndex].read = "Read"
      }
      else
      read = "Not read";
      myLibrary[objIndex].read = "Not read"
  }
}

let theHobbit = new Book("The Hobbit", "Tolkien", "521", "Not read");
addBookToLibrary(theHobbit);

let PJ = new Book ("PJ", "Rick R", "434", "Read");
addBookToLibrary(PJ);

display();



function addBookToLibrary(book) {
myLibrary.push(book);

}


function display() {

    // Removes all the current cards, then adds  any new ones with updated buttons etc
    let cards = document.getElementById("cardsContainer").childNodes;
    for (let i = cards.length - 1; i >= 0; i --) {
        cards[i].remove();
    }

    for (let i = 0; i < myLibrary.length; i++) {
        
        let card = document.createElement("div");
        card.textContent = myLibrary[i].info();
        cardsContainer.appendChild(card).className = "card";

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete" + i;
        deleteButton.addEventListener("click", removeFromLibrary);
        card.appendChild(deleteButton).className = i;
        
        let read = document.createElement("button");
        read.textContent = "Read";
        read.addEventListener("click", changeRead);
        card.appendChild(read).className = i;

    }
    
}



function addBook() {

    let book = new Book(
        title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        pages = document.getElementById("pages").value,
        read = document.getElementById("read").value,
    )

    addBookToLibrary(book);
    display();

    addForm.style.display="none";

    
}

function removeFromLibrary(e) {
    console.log(e.target.className);

    for(let i = myLibrary.length -1; i>= 0; i--) {
        if(e.target.className == i) {
            myLibrary.splice(i, 1);
            display();
        }
        
    }

    
}

function changeRead(e) {
    for(let i = myLibrary.length -1; i>= 0; i--) {
        if(e.target.className == i) {
            myLibrary[i].readStatus();
            display();
        }
        
    }

}