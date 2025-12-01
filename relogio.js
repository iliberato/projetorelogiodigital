const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");
const caixaData = document.getElementById("data");

const opcoes = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const relogio = setInterval(() => {
    
    let dateToday = new Date();
    
    let segundos = dateToday.getSeconds();
    let minutos = dateToday.getMinutes();
    let horas = dateToday.getHours();


    if (segundos < 10) segundos = "0" + segundos;
    if (minutos < 10) minutos = "0" + minutos;
    if (horas < 10) horas = "0" + horas;
    
    
    caixaHoras.textContent = horas;
    caixaMinutos.innerText = minutos;
    caixaSegundos.innerHTML = segundos;

    caixaData.innerHTML = dateToday.toLocaleDateString("pt-BR", opcoes)
}, 1)




       