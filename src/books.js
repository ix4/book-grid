import { render } from './booksFunctions.js';
const csv = d3.csv;

const csvData = csv('./modules/books.csv').then(books => {
  render(books);
});
