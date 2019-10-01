import React from 'react';

// DATA MANAGEMENT

const sortAsc = books => {
  // sort results
  books.sort(function(a,b) {
    return b.yearOrder - b.yearOrder;
  });

  books.sort(function(a,b) {
    return b.yearRead - a.yearRead;
  });
}

const sortDsc = books => {
  // sort results
  books.sort(function(a,b) {
    return a.yearOrder - b.yearOrder;
  });

  books.sort(function(a,b) {
    return a.yearRead - b.yearRead;
  });
}

const getQuote = quote => {
  return (quote === '' ? '' : <p><b>Favorite Quote:</b> {quote}</p>)
};

const getGrade = grade => {
  grade = +grade;
  return (grade === 0 ? '' : <p><b>Rating:</b> {grade.toPrecision(2)}</p>)
};


// HTML

// let buildBookDiv = (book, index) => {
//
//   document.getElementById("bookList").innerHTML += `
//     <div class="cellParent">
//       <div id="${index}" class='mainBox'>
//         <img class="img" src="/img/books/${book.id}.jpg">
//         <div id='bookInfo'>
//           <p id="mainBox-title">${book.title}</p>
//           <p><i>${book.author}</i></p>
//           ${getGrade(book.grade)}
//         </div>
//       </div>
//       <div id="modal${index}" class="modal">
//         <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
//         <a class="next" onclick="plusSlides(1)">&#10095;</a>
//         <div class="modal-table">
//           <div class="modal-cell">
//             <img class="modal-content" src="/img/books/${book.id}.jpg" id="img${index}">
//             <div class="caption">
//               <p><b>Title:</b> ${book.title}</p>
//               <p><b>Author:</b> ${book.author}</p>
//               <p><b>Thoughts:</b> ${book.description}</p>
//               ${getGrade(book.grade)}
//               <p><b>Published:</b> ${book.published}
//               <b>&nbsp; &nbsp; &nbsp; Read:</b> ${book.yearRead}</p>
//               <p><b>Genre:</b> ${book.genre.substr(0,1).toUpperCase()}${book.genre.substr(1)}</p>
//               ${getQuote(book.quote)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>`;
// }


// MODAL


var slideIndex, slides = document.getElementsByClassName("modal"), modalUp = false;

function showSlides(n) {
  if (n > slides.length -1) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length-1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "grid";
  modalUp = true;
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function closeSlide(){
  slides[slideIndex].style.display = "none";
  modalUp = false;
}

// Keypress listener
document.addEventListener("keydown", function(event) {
  if(modalUp){
    if(event.which === 37){
    plusSlides(-1)
    }
    if(event.which === 39){
      plusSlides(1)
    }
    if(event.which === 27){
      closeSlide();
    }
  }
});

let buildModalFunctionality = () => {
  document.querySelectorAll('.main-box').forEach(function(elem) {

    let id = +elem.getAttribute('id');
    let modal = document.getElementById("modal" + id);

    elem.onclick = () => currentSlide(id);

    modal.childNodes[0].onclick = () => plusSlides(-1);

    modal.childNodes[1].onclick = () => plusSlides(1);

    modal.childNodes[5].onclick = () => closeSlide();

  })
}

// // SEARCH FUNCTIONALITY
// function checkList(){
//   // Declare variables
//   var input, filter, ul, li, a, i;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("bookList");
//   li = ul.getElementsByTagName('div');
//
//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("h3")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//     } else {
//         li[i].style.display = "none";
//     }
//   }
// }

// get & parse results
const renderBooks = books => {

  // Sort data
  //sortBooks(books);

  // Remove 'Loading...'
  //document.getElementById("root").innerHTML = '';

  // Build HTML for each book
  //books.forEach(buildBookDiv);

	// Add modal for each book
  //buildModalFunctionality();
};

export { sortAsc, sortDsc, getQuote, getGrade, buildModalFunctionality };
