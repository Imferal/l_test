// Повторяющиеся типы объектов
// Книга
export type BookType = {
  "id": number,
  "author": string,
  "name": string,
  "date": number,
  "description": string,
  "genre": Array<GenreType>
}

// Литературный жанр
export type GenreType = {
  "id": number,
  "name": "string"
}

// Данные формы добавления книги
export type FormData = {
  ID: number
  name: string
  author: string
  description: string
  date: number
  genreIds: Array<number>
}