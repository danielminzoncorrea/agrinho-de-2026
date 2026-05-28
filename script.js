const mensagens = [

    "🌿 Plantar árvores ajuda a proteger os rios e melhorar o ar.",

    "💧 Economizar água é essencial para a agricultura sustentável.",

    "🚜 A tecnologia no campo reduz desperdícios e aumenta a produção.",

    "🌎 Preservar o meio ambiente garante um futuro melhor para todos.",

    "🐝 As abelhas são fundamentais para a produção de alimentos."

];

function mostrarMensagem(){

    const numero = Math.floor(Math.random() * mensagens.length);

    document.getElementById("mensagem").innerHTML = mensagens[numero];

}

/* AGRICULTOR */

const falas = [

    "👨‍🌾 Você sabia? O Brasil é um dos maiores produtores agrícolas do mundo!",

    "🌱 A agricultura sustentável protege a natureza e produz alimentos.",

    "💧 Sistemas modernos ajudam a economizar muita água no campo.",

    "🚜 Drones agrícolas ajudam produtores a cuidar melhor das plantações.",

    "🌳 Preservar as florestas ajuda no equilíbrio do clima."

];

function trocarFala(){

    const numero = Math.floor(Math.random() * falas.length);

    document.getElementById("fala-agricultor").innerHTML = falas[numero];

}
