const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const APP_ID = 'W2TAgTVlPqLEGcqZHoYR';

const defaultState = [];

export default function books(state = defaultState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload.map((bookObject) => ({...bookObject, author: 'Suzanne Collins', progress: 74 }));
    case ADD_BOOKS:
      return state.concat({
        id: action.payload.item_id,
        title: action.payload.title,
        author: 'suzanne Collins',
        category: action.payload.category,
        progress: 74,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

function loadbooks(payload) {
  return {
    type: LOAD_BOOKS,
    payload,
  };
}

function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

function removeBook(payload) {
  return {
    type: REMOVE_BOOK,
    payload,
  };
}

