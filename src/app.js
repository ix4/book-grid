import React from 'react';
import { sortAsc, sortDsc, getQuote, getGrade, buildModalFunctionality } from './booksFunctions.js';

const App = ({ books }) => {
  // constructor(books) {
  //     super(books);
  //
  //     this.initialState = {
  //       sort: 'asc'
  //     };
  //
  //     this.state = this.initialState;
  //   }

  const handleSort = sortInput => {
    switch(sortInput) {
      case 'asc':
        sortAsc(books);
        break;
      case 'dsc':
        sortDsc(books);
        break;
      default:
        sortAsc(books);
        break;
    }
  }

  handleSort('asc');
  buildModalFunctionality();

  return(
    <>
      <FilterBox
        handleSort={handleSort}
      />
      <BooksBox
        books={books}
      />
    </>
  )
}

const FilterBox = ({ handleSort }) => {
  return(
    <div className='filter-box'>
      <p>Sort
        <select onChange={handleSort}>
          <option value='asc'>Ascending</option>
          <option value='dsc'>Descending</option>
        </select>
      </p>
    </div>
  )
}

const BooksBox = ({ books }) => {
  return(
    <div className='book-list'>
      {books.map((book, index) => (
        <div className='cell-parent' key={book.id}>
          <MainBox
            book={book}
            bookIndex={index}
          />
          <ModalWindow
            book={book}
            bookIndex={index}
          />
        </div>
      ))}
    </div>
  );
}

const MainBox = ({ book, bookIndex }) => {
  const imageSource = `./img/${book.id}.jpg`;

  return(
    <div className='main-box' id={bookIndex}>
      <img className='img' alt='' src={imageSource}></img>
      <div id='book-info'>
        <p id="main-box-title">{book.title}</p>
        <p><i>{book.author}</i></p>
        {getGrade(book.grade)}
      </div>
    </div>
  );
}

const ModalWindow = ({ book, bookIndex }) => {
  const imageSource = `./img/${book.id}.jpg`;
  const imageId = `img${bookIndex}`;

  return (
    <div className='modal' id={bookIndex}>
      <div className="modal-table">
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

// const App  {
//   constructor(props) {
//     super(props);
//
//     this.initialState = {
//       books: 'csvData'
//     };
//
//     this.state = this.initialState;
//   }

  // handleConversion = inputData => {
  //   const value = inputData.adjective;
  //   const syllables = inputData.syllables;
  //   let adverb, adverbMethod, adverbExample, comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample;
  //
  //   // no input
  //   if (value === '') {
  //     this.setState({
  //       adjective: '',
  //       adverb: '',
  //       adverbMethod: '',
  //       adverbExample: '',
  //       comparative: '',
  //       comparativeMethod: '',
  //       comparativeExample: '',
  //       superlative: '',
  //       superlativeMethod: '',
  //       superlativeExample: ''
  //     });
  //     return;
  //   } else {
  //
  //     // check for exceptions
  //     for(var i in Exceptions) {
  //       if (value === Exceptions[i].adjective) {
  //         adverbExample = 'Harold ate the jello ' + Exceptions[i].adverb + '.';
  //         comparativeExample = 'Staci is way ' + Exceptions[i].comparative + ' than Tiffani.';
  //         superlativeExample = 'It was the ' + Exceptions[i].superlative + ' kiss I ever saw.';
  //
  //         if (Exceptions[i].adverb === '') {
  //           adverbExample = '';
  //         }
  //
  //         if (Exceptions[i].comparative === '') {
  //           comparativeExample = '';
  //           superlativeExample = '';
  //         }
  //
  //         // set state and exit loop
  //         this.setState({
  //           adjective: value,
  //           adverb: Exceptions[i].adverb,
  //           adverbMethod: Exceptions[i].adverb_method,
  //           adverbExample: adverbExample,
  //           comparative: Exceptions[i].comparative,
  //           comparativeMethod: Exceptions[i].comparative_method,
  //           comparativeExample: comparativeExample,
  //           superlative: Exceptions[i].superlative,
  //           superlativeMethod: Exceptions[i].superlative_method,
  //           superlativeExample: superlativeExample
  //         });
  //         return;
  //       }
  //     }
  //
  //     let adverbValues = adverbConjugate(value, syllables, adverb, adverbMethod, adverbExample);
  //
  //     adverb = adverbValues[0];
  //     adverbMethod = adverbValues[1];
  //     adverbExample = adverbValues[2];
  //
  //     //comparativeExample = 'Staci is way ' + comparative + ' than Brad.';
  //     let compSupValues = comSupConjugate(value, syllables, adverb, comparative, comparativeMethod, comparativeExample, superlative, superlativeMethod, superlativeExample);
  //
  //     comparative = compSupValues[0];
  //     comparativeMethod = compSupValues[1];
  //     comparativeExample = compSupValues[2];
  //     superlative = compSupValues[3];
  //     superlativeMethod = compSupValues[4];
  //     superlativeExample = compSupValues[5];
  //   }
  //
  //   this.setState({
  //     adjective: value,
  //     adverb: adverb,
  //     adverbMethod: adverbMethod,
  //     adverbExample: adverbExample,
  //     comparative: comparative,
  //     comparativeMethod: comparativeMethod,
  //     comparativeExample: comparativeExample,
  //     superlative: superlative,
  //     superlativeMethod: superlativeMethod,
  //     superlativeExample: superlativeExample
  //   });
  // }
//
//   render() {
//     const { books } = this.state;
//
//     return (
//       <div className='app-container'>
//         <Grid
//
//         />
//       </div>
//     );
//   }
// }

export default App;
