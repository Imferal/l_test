import axios from "axios";

export const baseURL = 'https://cors-anywhere.herokuapp.com/https://fosius-books.herokuapp.com/'

// Загрузить книги
// export const getBooks = () => {
//   return axios.get(`${baseURL}books`)
//     .then(response => response.data)
// .catch((error) => apiErr(error))
// }

// Создать новую книгу
// export const addBook = (formData) => {//  
//   axios.post(`${baseURL}books`, formData)
//     .catch((error) => apiErr(error));
// }

// Удалить книгу
// export const deleteBook = (id) => {  
//   axios.delete(`${baseURL}books/${id}`)
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