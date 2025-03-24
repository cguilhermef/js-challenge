const data = require("./data.json");

/**
 * Etapa 1: Contagem Básica
 *
 * Implemente uma função que retorna o número total de livros na biblioteca.
 *
 * Dicas:
 * - Use um loop for para contar os elementos do array
 * - Ou use a propriedade length do array
 *
 * @returns {number} Número total de livros
 */
function countTotalBooks() {
  // TODO: Implemente sua solução aqui
}

/**
 * Etapa 2: Filtragem Simples
 *
 * Implemente uma função que retorna todos os livros de um determinado gênero.
 *
 * Dicas:
 * - Use o método filter() do array
 * - Compare o gênero do livro com o gênero passado como parâmetro
 *
 * @param {string} genre - O gênero dos livros a serem filtrados
 * @returns {Array} Array com os livros do gênero especificado
 */
function getBooksByGenre(genre) {
  // TODO: Implemente sua solução aqui
}

/**
 * Etapa 3: Busca Avançada
 *
 * Implemente uma função que encontra o primeiro livro que atende a todos os critérios:
 * - Preço menor ou igual ao preço máximo
 * - Rating maior ou igual ao rating mínimo
 * - Disponível em estoque
 *
 * Dicas:
 * - Use o método find() do array
 * - Use operadores lógicos (&&) para combinar condições
 *
 * @param {number} maxPrice - Preço máximo do livro
 * @param {number} minRating - Rating mínimo do livro
 * @returns {Object|null} O primeiro livro que atende aos critérios ou null se nenhum for encontrado
 */
function findBookByCriteria(maxPrice, minRating) {
  // TODO: Implemente sua solução aqui
}

/**
 * Etapa 4: Análise de Dados
 *
 * Implemente uma função que retorna um objeto com estatísticas sobre os livros:
 * - Média de preços
 * - Média de ratings
 * - Número de livros em estoque
 * - Gênero mais comum
 *
 * Dicas:
 * - Use reduce() para calcular médias e contagens
 * - Use um objeto para contar ocorrências de gêneros
 *
 * @returns {Object} Objeto com as estatísticas calculadas
 */
function getBookStatistics() {
  // TODO: Implemente sua solução aqui
}

/**
 * Etapa 5: Transformação de Dados
 *
 * Implemente uma função que reorganiza os livros agrupando-os por autor.
 * O resultado deve ser um objeto onde as chaves são os nomes dos autores
 * e os valores são arrays com os livros de cada autor.
 *
 * Dicas:
 * - Use reduce() para criar o objeto agrupado
 * - Use o nome do autor como chave
 * - Inicialize arrays vazios para novos autores
 *
 * @returns {Object} Objeto com os livros agrupados por autor
 */
function groupBooksByAuthor() {
  // TODO: Implemente sua solução aqui
}

module.exports = {
  countTotalBooks,
  getBooksByGenre,
  findBookByCriteria,
  getBookStatistics,
  groupBooksByAuthor,
};
