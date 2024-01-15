let header = document.querySelector(".bookHeader");

let addBtn = document.createElement("button");
addBtn.textContent = "+ Add Book";
addBtn.className = "book";
header.appendChild(addBtn);

favDialog = document.querySelector("#favDialog");
favDialog = document.getElementById("favDialog");
inputEl = favDialog.querySelector("#name");
inputAuthor = favDialog.querySelector("#author");
inputStatus = favDialog.querySelector("select");
jsCloseBtn = favDialog.querySelector("#js-close");

addBtn.addEventListener("click", function() {
	favDialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
	let inpn = inputEl.value;
	let inpa = inputAuthor.value;
	let inps = inputStatus.value;
	addBook(inpn,inpa,inps);
	e.preventDefault();
	favDialog.close();
});

function addBook(bname, inp_author, inp_rstatus) {
	let bookName = document.createElement("div");
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
		book.firstChild.nextSibling.nextSibling.innerText == "Read"
			? (book.firstChild.nextSibling.nextSibling.innerText = "Not Read")
			: (book.firstChild.nextSibling.nextSibling.innerText = "Read");
	});
}

let bname = "Dune";
let author = "Frank Herbert";
let read = "Read";

addBook(bname, author, read);
addBook("Dune Messiah", author, read);
