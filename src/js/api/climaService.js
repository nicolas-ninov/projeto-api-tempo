const chaveDaApi = "ab496ff367734c12a24191940232311";

export async function buscarDadosDaCidade(cidade) {
    try {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;
        const resposta = await fetch(apiUrl);
        if (!resposta.ok) {
            return null;
        }

        const dados = await resposta.json();
        return dados;

    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        return null;
    }
}