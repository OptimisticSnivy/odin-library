function addBook(bname, inp_author, inp_rstatus) {
	let bookName= document.createElement("div");
	bookName.className = "bookins";
	bookName.textContent = bname;

	let author = document.createElement("div");
	author.className = "bookins";
	author.textContent = inp_author;

	let rstatus = document.createElement("div");
	rstatus.className = "bookins";
	rstatus.textContent = inp_rstatus;

	let book = document.createElement("div");
	book.className = "book";
	
	let bookCon = document.createElement("div");
	bookCon.className = "bookContainer";
	
	book.appendChild(bookName);
	book.appendChild(author);
	book.appendChild(rstatus);
	bookCon.appendChild(book);

	let btn = document.createElement("button");
	btn.textContent = "Remove";
	btn.className = "book";
	book.appendChild(btn);

	let rbtn = document.createElement("button");
	rbtn.textContent = "Change Read Status";
	rbtn.className = "book";
	book.appendChild(rbtn);

	let bookBuff = document.querySelector(".bookBuff");
	bookBuff.appendChild(bookCon);
	btn.addEventListener("click", function() {
		console.log("Remove!");
		bookBuff.removeChild(bookCon);
	});

	// To-do: Optimize this!
	let rtoggle = document.querySelector(".bookBuff");
	rtoggle.appendChild(bookCon);
	rbtn.addEventListener("click", function() {
		if(book.firstChild.nextSibling.nextSibling.innerText== "Read"){
			book.firstChild.nextSibling.nextSibling.innerText= "Not Read";
		}
		else if(book.firstChild.nextSibling.nextSibling.innerText== "Not Read"){
			book.firstChild.nextSibling.nextSibling.innerText= "Read";
		}
	});
}

let bname = "Dune";
let author = "Frank Herbert";
let read = "Read";

addBook(bname,author,read);
