const cb_UF = document.getElementById("UF");

fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
.then(data => data.json())
.then(post => {
    post.forEach(estados => {
        cb_UF.append(new Option(`${estados.nome} / ${estados.sigla}`, estados.id));
    });
})

function preencher_Cidade()
{
    const cb_Cidades = document.getElementById("Cidades");
    var valueUF = document.getElementById("UF").value;
    console.log(valueUF)
    cb_Cidades.textContent = " ";
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${valueUF}/municipios`)
    .then(data => data.json())
    .then(post => {
        post.forEach(cidades => {
            cb_Cidades.append(new Option(cidades.nome, cidades.nome))
        })
    })
}

function Clima()
{
    const graus = document.getElementById("Temperatura")
    var cidade = document.getElementById("Cidades").value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=fb560aaf73d14ef4956184118240711&q=${cidade}&aqi=no`)
    .then(data => data.json())
    .then(post => {
        var temperaturaC = `${post.current.feelslike_c}°C`;
        var condição =  `${post.current.condition.text}`;
        var icon = `https:${post.current.condition.icon}`;

        document.getElementById("temperatura").innerHTML = temperaturaC;
        document.getElementById("iconClima").innerHTML = icon;
    })
}

