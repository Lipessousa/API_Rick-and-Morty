function findPers(){    
    let personagem = document.getElementById('personagem').value
    var id = document.getElementById('idPer').value

    let urlAPI = `https://rickandmortyapi.com/api/character/?name=${personagem}`

    if(id >= 20){
        alert('cada personagem tem um id de 0 a 19')
    }

    fetch(urlAPI)
    .then(resp =>  resp.json())
    .then((conteudo) =>{
        console.log(conteudo.results[id])
        document.getElementById('img-personagem').setAttribute("src", conteudo.results[id].image)
        document.getElementById('name').innerText = `name: ${conteudo.results[id].name}`
        document.getElementById('status').innerText = `status: ${conteudo.results[id].status}`
        document.getElementById('origin').innerText = `origin: ${conteudo.results[id].origin.name}`
        document.getElementById('species').innerText = `species: ${conteudo.results[id].species}`
        document.getElementById('location').innerText = `location: ${conteudo.results[id].location.name}`
    })
}



