var alturaAba = window.innerHeight;
var alturaHeader = document.querySelector('header').clientHeight;
document.querySelector('#inicio').style.height = (alturaAba-alturaHeader)+'px'
var slide = document.querySelector('#grandfather');
slide.style.height = (alturaAba*.45)+'px'
var horario = document.querySelector('#horario');
var estamosAbertos = document.querySelector('#funcionamento h3');

var horarioF = document.querySelector('#funcionamento p');
var seta = document.querySelector('#botaoHorario img');
/* Horário */
var tempo = new Date();
var semana = ["Hoje é Domingo",
  "Hoje é Segunda",
  "Hoje é Terça",
  "Hoje é Quarta",
  "Hoje é Quinta",
  "Hoje é Sexta",
  "Hoje é Sábado"];
var dia = tempo.getDay();
var hora = tempo.getHours();
var min = tempo.getMinutes();
var situacao = '';
var horasF = '';
if(dia > 0) {
  horasF = '07:00-21:00';
  if(hora > 6 && hora < 21) {
    situacao = 'Estamos abertos'
  } else {
    situacao = 'Estamos fechados'
  }
} else {
  horasF = '07:00-20:00';
  if(hora > 6 && hora < 20) {
    situacao = 'Estamos abertos';
  } else {
    situacao = 'Estamos fechados';
  }
}

/* interruptor do Horário */

var interruptor = false;
function showHorario() {
  if(interruptor === false) {
    interruptor = true;
    window.scroll(0, 120)
    horario.style.height = .40*alturaAba+'px'
    seta.style.transform = 'rotate(180deg)';
    estamosAbertos.classList.add('fh3a');
    estamosAbertos.innerHTML = semana[dia]
    if(situacao === "Estamos abertos") {
      horarioF.style.color = 'green'
    } else {
      horarioF.style.color = 'red'
    }
    horarioF.innerHTML = situacao;
    horarioF.classList.add('fpa')

  } else {
    interruptor = false;
    window.scroll(0, 0)
    horario.style.height = '70px'
    seta.style.transform = 'rotate(0deg)';
    estamosAbertos.classList.remove('fh3a')
    estamosAbertos.innerHTML = situacao
    horarioF.style.color = 'black'
    horarioF.innerHTML = horasF
    horarioF.classList.remove('fpa');
  }
}
seta.addEventListener("click", () => {
  showHorario();
})

estamosAbertos.innerHTML = situacao

horarioF.innerHTML = horasF

/* ⚠️⚠️⚠️ SEÇÃO DE ENCARTE ⚠️⚠️⚠️ */

    let count = 1;
    setInterval(() => {
      nextSlide();
    }, 3000)
    function nextSlide() {
      count++
      if(count > 3) {
        count = 1;
      }
      document.getElementById('r'+count).checked = true;
    }
    
var ativarAvisos = document.querySelector('#fatura .servicos div p:last-child');
var verHorarios = document.getElementById('horarioPagamentos');
function avisos() {
  if(verHorarios.style.height < '100px'){
    ativarAvisos.innerHTML = 'Fechar'
    verHorarios.style.height = '300px'
  } else{
    ativarAvisos.innerHTML = 'Ver horários'
    verHorarios.style.height = '0px'
}
}

/* Animação scroll */
const target = document.querySelectorAll('[data-show]');
function apresentar() {
  const janelaTop = window.pageYOffset + ((window.innerHeight * 3) / 4) 
  target.forEach((element) => {
    if((janelaTop) > element.offsetTop){
      element.classList.add('apresentar')
    }})
}
window.addEventListener("scroll", () =>{
  apresentar();
} )
