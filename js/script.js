function buscarNoticias() {
    const apiKey = 'a31b69babb5900539cd969d8838be2e2';
    const searchTerm = document.getElementById('searchInput').value;
    const url = `https://gnews.io/api/v4/search?q=${searchTerm}&token=${apiKey}&country=BR`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            exibirNoticias(data.articles.slice(0, 10));
        })
        .catch(error => {
            console.error('Erro ao buscar notícias:', error);
        });
}

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
        const imagem = noticia.image;

        const noticiaElement = document.createElement('div');
        noticiaElement.innerHTML = `
            <img src="${imagem}" alt="${titulo}" style="width: 20%;max-height: 120px; float:left; border-radius: 10px; margin-right: 10px;">
            <h2>${titulo}</h2>
            <p>${descricao}</p>
            <a href="${url}" target="_blank">Leia mais</a>
        `;

        noticiasDiv.appendChild(noticiaElement);
    });
}
