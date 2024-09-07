function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);


    let campoPesquisa = document.getElementById("campo-pesquisa").value


    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Nenhuma série foi encontrado. Digite o nome de uma série ou uma categoria.</p>"
        return
    }


    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let categoria = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        categoria = dado.categoria.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || categoria.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <h3>${dado.categoria}</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>


           
`;
        }


        dado.titulo.includes(campoPesquisa)


    }

    if (!resultados) {
        resultados = "<p class='mensagem-erro'>Humm acho que essa série não é a melhor de todos os tempos!</p>"
    }

    section.innerHTML = resultados
}