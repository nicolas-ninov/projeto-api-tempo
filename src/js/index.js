import { buscarDadosDaCidade } from "./api/climaService.js";
import { mostrarLoading, preencherDadosNaTela, mostrarErro } from "./ui/climaUI.js";


const elements = {
    cidade: document.getElementById("cidade"),
    temperatura: document.getElementById("temperatura"),
    condicao: document.getElementById("condicao"),
    humidade: document.getElementById("humidade"),
    velocidadeDoVento: document.getElementById("velocidade-do-vento"),
    iconeCondicao: document.getElementById("icone-condicao"),
    regiao: document.getElementById("regiao"),
    dataEHora: document.getElementById("data-e-hora")
};

const botaoDeBusca = document.querySelector(".btn-busca");

let buscando = false

botaoDeBusca.addEventListener("click", async () => {
    if (buscando) return;
    buscando = true;

    const input = document.getElementById("input-busca");
    const cidade = input.value.trim();

    if (!cidade) {
        buscando = false;
        return;
    }

    try {
        mostrarLoading(elements);
        const dados = await buscarDadosDaCidade(cidade);

        if (dados) {
        preencherDadosNaTela(elements, dados, cidade);
        } else {
        mostrarErro(elements)
        }
    } catch (erro) {
        console.error(erro);
        mostrarErro(elements);
    } finally {
        buscando = false
    }
    
});


