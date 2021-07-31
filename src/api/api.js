export const baseURL = 'https://cors-anywhere.herokuapp.com/https://fosius-books.herokuapp.com/'

// Загрузить книги
// export const getBooks = () => {
//   debugger
//   setBooksFetchingStatus(true);
//   axios.get(`${baseURL}books`)
//     .then(response => {
//       setBooks(response.data);
//       setBooksFetchingStatus(false);
//     })
//     .catch((error) => apiErr(error));
// }

// Создать новую книгу
// export const addBook = (formData) => {
//   debugger
//   axios.post(`${baseURL}books`, formData).then(() => getBooks())
//     .catch((error) => apiErr(error));
// }

// Удалить книгу
// export const deleteBook = (id) => {
//   debugger
//   axios.delete(`${baseURL}books/${id}`).then(() => getBooks())
//     .catch((error) => apiErr(error));
// }

export const apiErr = function (error) {
  // Что-то пошло не так 😨
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
}