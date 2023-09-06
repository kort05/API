function buscarNoticias() {
    const apiKey = '46eeb39276e247b4a52a2e6408dfbef4'; 
    const searchTerm = document.getElementById('searchInput').value;
    const fonte = 'globo';
    const serverUrl = `http://localhost:3000/noticias?searchTerm=${searchTerm}`; // Altere para o URL do seu servidor intermediário

    fetch(serverUrl)
        .then(response => response.json())
        .then(data => {
            exibirNoticias(data.articles.slice(0, 10)); 
        })
        .catch(error => {
            console.error('Erro ao buscar notícias:', error);
        });

function exibirNoticias(noticias) {
    const noticiasDiv = document.getElementById('noticias');
    noticiasDiv.innerHTML = '';

    if (noticias.length === 0) {
        noticiasDiv.innerHTML = 'Nenhuma notícia encontrada.';
        return;
    }

    noticias.forEach(noticia => {
        const titulo = noticia.title;
        const descricao = noticia.description;
        const url = noticia.url;

        const noticiaElement = document.createElement('div');
        noticiaElement.innerHTML = `
            <h2>${titulo}</h2>
            <p>${descricao}</p>
            <a href="${url}" target="_blank">Leia mais</a>
        `;

        noticiasDiv.appendChild(noticiaElement);
    });
}
