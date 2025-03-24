const {
  countTotalBooks,
  getBooksByGenre,
  findBookByCriteria,
  getBookStatistics,
  groupBooksByAuthor,
} = require("./challenge");

describe("Etapa 1: Contagem Básica", () => {
  test("deve retornar o número total de livros", () => {
    const total = countTotalBooks();
    expect(total).toBe(8);
  });
});

describe("Etapa 2: Filtragem Simples", () => {
  test("deve retornar todos os livros de fantasia", () => {
    const fantasyBooks = getBooksByGenre("Fantasia");
    expect(fantasyBooks).toHaveLength(3);
    expect(fantasyBooks.every((book) => book.genre === "Fantasia")).toBe(true);
  });

  test("deve retornar array vazio para gênero inexistente", () => {
    const books = getBooksByGenre("Gênero Inexistente");
    expect(books).toHaveLength(0);
  });
});

describe("Etapa 3: Busca Avançada", () => {
  test("deve encontrar livro que atende aos critérios", () => {
    const book = findBookByCriteria(50, 4.7);
    expect(book).toBeTruthy();
    expect(book.price).toBeLessThanOrEqual(50);
    expect(book.rating).toBeGreaterThanOrEqual(4.7);
    expect(book.inStock).toBe(true);
  });

  test("deve retornar null quando nenhum livro atende aos critérios", () => {
    const book = findBookByCriteria(10, 5.0);
    expect(book).toBeNull();
  });
});

describe("Etapa 4: Análise de Dados", () => {
  test("deve retornar estatísticas corretas", () => {
    const stats = getBookStatistics();

    // Verifica se todas as propriedades necessárias existem
    expect(stats).toHaveProperty("averagePrice");
    expect(stats).toHaveProperty("averageRating");
    expect(stats).toHaveProperty("inStockCount");
    expect(stats).toHaveProperty("mostCommonGenre");

    // Verifica se os valores são números
    expect(typeof stats.averagePrice).toBe("number");
    expect(typeof stats.averageRating).toBe("number");
    expect(typeof stats.inStockCount).toBe("number");
    expect(typeof stats.mostCommonGenre).toBe("string");

    // Verifica se os valores estão dentro de intervalos razoáveis
    expect(stats.averagePrice).toBeGreaterThan(0);
    expect(stats.averageRating).toBeGreaterThanOrEqual(0);
    expect(stats.averageRating).toBeLessThanOrEqual(5);
    expect(stats.inStockCount).toBeGreaterThanOrEqual(0);
  });
});

describe("Etapa 5: Transformação de Dados", () => {
  test("deve agrupar livros por autor corretamente", () => {
    const groupedBooks = groupBooksByAuthor();

    // Verifica se é um objeto
    expect(typeof groupedBooks).toBe("object");

    // Verifica se cada autor tem um array de livros
    Object.values(groupedBooks).forEach((books) => {
      expect(Array.isArray(books)).toBe(true);
      expect(books.length).toBeGreaterThan(0);
    });

    // Verifica se os livros estão corretamente associados aos autores
    Object.entries(groupedBooks).forEach(([author, books]) => {
      expect(books.every((book) => book.author === author)).toBe(true);
    });

    // Verifica se todos os autores estão incluídos
    expect(Object.keys(groupedBooks)).toContain("J.R.R. Tolkien");
    expect(Object.keys(groupedBooks)).toContain("George Orwell");
    expect(Object.keys(groupedBooks)).toContain("Machado de Assis");
  });
});
