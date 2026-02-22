export function mostrarLoading(elements) {
    elements.cidade.textContent = "Carregando...";
    
    elements.temperatura.textContent = "";
    elements.condicao.textContent = "";
    elements.humidade.textContent = "";
    elements.velocidadeDoVento.textContent = "";
    elements.regiao.textContent = "";
    elements.dataEHora.textContent = "";
}

export function mostrarErro(elements) {
    elements.cidade.textContent = "Não foi possível encontrar a cidade";
    elements.temperatura.textContent = "";
    elements.condicao.textContent = "";
    elements.humidade.textContent = "";
    elements.velocidadeDoVento.textContent = "";
    elements.regiao.textContent = "";
    elements.dataEHora.textContent = "";
}



export function preencherDadosNaTela(elements, dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;
    const regiao = dados.location.region;
    const dataEHora = dados.location.localtime;

    elements.cidade.textContent = cidade;
    elements.temperatura.textContent = `${temperatura} °C`;
    elements.condicao.textContent = condicao;
    elements.humidade.textContent = `${humidade}%`;
    elements.velocidadeDoVento.textContent = `${velocidadeDoVento} km/h`;
    elements.iconeCondicao.setAttribute("src", iconeCondicao);
    elements.regiao.textContent = regiao;
    elements.dataEHora.textContent = dataEHora;

}