export const baseURL = 'https://cors-anywhere.herokuapp.com/https://fosius-books.herokuapp.com/'

export const apiErr = function (error: any) {
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