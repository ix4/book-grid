import React, {useState } from 'react';
import { getQuote, getGrade, setModalId } from './booksFunctions.js';

const BooksBox = ({ books, modalId, setModalId }) => {

  return(
    <div className='book-list'>
      {books.map((book) => (
        <div className='cell-parent' key={book.id} id={book.id}>
          <MainBox
            book={book}
            setModalId={setModalId}
          />
          <ModalWindow
            book={book}
            modalId={modalId}
            setModalId={setModalId}
          />
        </div>
      ))}
    </div>
  );
}

const MainBox = ({ book, setModalId }) => {
  const imageSource = `./img/${book.id}.jpg`;

  const divClick = event => {
    console.log(event.currentTarget.parentNode);
    setModalId(event.currentTarget.parentNode.id);
  }

  return(
    <div className='main-box' onClick={divClick}>
      <img className='img' alt='' src={imageSource}></img>
      <div id='book-info'>
        <p id="main-box-title">{book.title}</p>
        <p><i>{book.author}</i></p>
        {getGrade(book.grade)}
      </div>
    </div>
  );
}

const ModalWindow = ({ book, modalId, setModalId }) => {
  const imageSource = `./img/${book.id}.jpg`;
  const imageId = `img${book.id}`;
  const modalDivId = `modal${book.id}`;

  let modalDisplay = 'none';
  if (modalId === book.id) {modalDisplay = 'grid'};

  const divClick = () => {
    setModalId('');
  }

  return (
    <div className='modal' id={modalDivId} style={{display: modalDisplay}}>
      <div className="modal-table" onClick={divClick}>
        <div className="modal-cell">
          <img className="modal-content" alt='' src={imageSource} id={imageId}></img>
          <div className="caption">
            <p><b>Title:</b> {book.title}</p>
            <p><b>Author:</b> {book.author}</p>
            <p><b>Thoughts:</b> {book.description}</p>
            {getGrade(book.grade)}
            <p><b>Published:</b> {book.published}
            <b>&nbsp; &nbsp; &nbsp; Read:</b> {book.yearRead}</p>
            <p><b>Genre:</b> {book.genre.substr(0,1).toUpperCase()}{book.genre.substr(1)}</p>
            {getQuote(book.quote)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksBox;
