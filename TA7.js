function getTheTitles(books) {
    // Metodo map que crea un nuevo arreglo que contiene unicamente los titulos
    const titles = books.map(book => book.title);
    console.log(titles);
    return titles;
}

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    },
    {
        title: 'Book4',
        author: 'Name4'
    },
    {
        title: 'Book5',
        author: 'Name5'
    }
  ]

getTheTitles(books);