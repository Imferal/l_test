export type BookType = {
  "id": number,
  "author": string,
  "name": string,
  "date": number,
  "description": string,
  "genre": Array<GenreType>
}

export type GenreType = {
  "id": number,
  "name": "string"
}

export type FormData = {
  name: string,
  author: string,
  description: string,
  date: number,
  genreIds: Array<number>
}