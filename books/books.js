const searchTerm = document.querySelector(".searchTerm");
const searchButton = document.querySelector(".searchButton");
const resolve = document.querySelector(".resolve");

if (localStorage.cache) {  
  render(JSON.parse(localStorage.cache));
}

searchButton.addEventListener("click", () => {
  search();
});
searchTerm.addEventListener("keypress", e => {
  if (e.key === "Enter") 
    search();
});

function search() {
  const url ="https://openlibrary.org/search.json?q=" +
    searchTerm.value.split(" ").join("+");

  fetch(url)
    .then(response => response.json())
    .then(books => {
      localStorage.setItem("cache", JSON.stringify(books));
      return books;
    })
    .then(render);
}

function render(books) {
  resolve.innerHTML = "";
  books.docs.forEach(book => {    
    const title = book.title || "is missing";
    const authorName = book.author_name || "is missing";
    const firstPublishYear = book.first_publish_year || "is missing";
    const subject = book.subject ? `${book.subject[0]}` : "is missing";

    const div = document.createElement("div");
    div.innerHTML = `<p> Title:              <span> ${title}           </span> </p>
                     <p> Author Name:        <span> ${authorName}      </span> </p>
                     <p> First Publish Year: <span> ${firstPublishYear}</span> </p>
                     <p> Subject:            <span> ${subject}         </span> </p>`;
    resolve.appendChild(div);
  });
}
