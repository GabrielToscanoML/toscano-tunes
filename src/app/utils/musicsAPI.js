const getMusics = async (id) => {
    const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
    const { results } = await request.json();
    const teste = results.filter((item, index) => index > 0); // remove o primeiro elemento da requisição e retorna apenas as musicas
    return teste;
};
  
export default getMusics;