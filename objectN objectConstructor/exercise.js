//Construct a book object constructor 'book'

function Book(title,author,page,read){
  if(!new.target){
    console.log('please use meta-property new to access this constructor');
  }
  this.title = title,
  this.author = author,
  this.page = page,
  this.read = read,
  this.info = function(){
    console.log(`${this.title} is written by ${this.author} ,${this.page} pages , ${this.read}`);
  }
};

// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295 , 'not read yet');
// book1.status();

new Book('The Hobbit', 'J.R.R. Tolkien', 295 , 'not read yet').info();