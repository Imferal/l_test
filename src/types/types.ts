export type BookType = {
  "id": number,
  "author": string,
  "name": string,
  "date": number,
  "description": string,
  "genre": [
    {
      "id": number,
      "name": string
    }
  ]
}