
//variável de bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2 :

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo 
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
   trilha = loadSound("trilha,mp3');
 raquetada = loadSound("raquetada.mp3");
  ponto =loadSound(ponto.mp3");
}                           
     function setup() {
      createCanvas (600, 400);
    trilha.loop():
}
    function draw () {
      background(0)
    mostraBolinha();
      movimentarBolinha();
      verificarColisãoBorda();
      mostraRaquete(raquete, yRaquete);
      movimentarMinhaRaquete();
      //verificaColisãoRaquete();
      verificarColisaoRaquete(xRaquete, yRaquete);
      mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
      movimentaRaqueteOponente();
      verificarColisãoRaquete(xRaqueteOponente,yRaqueteOponente);
      incluiPlacar();
      marcaPonto();
}
function mostraBolinha(){
        circle(xBolinha, diametro);
}
  
  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
    
    function verificaColisaoBorda(){
      if (xBolinha + raio> widht ||
          xBolinha - raio< 0)(
        velocidadeXBolinha +=  -1;
        }
      if (yBolinha + raio> height ||
        yBolinha - rio < 0){function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaueteOponente += velocidadeYOponente
}
function incluiPlcr(){

  stroke(255);
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
function incluiPlcr(){

  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}     
function  marcaPonto(){
  if (xBolinha > 590){
   meusPonto += 1;
    ponto.play();
  }
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);

}     
function  marcaPonto(){
  if (xBolinha > 590){
   meusPonto += 1;
    ponto.play();
      velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento,
      raqueteAltura);    
}
function movimentaMinhRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
      }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}
     
function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x,
y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
   velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
    
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;yRaueteOponente += velocidadeYOponente
}
function incluiPlcr(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}     
function  marcaPonto(){
  if (xBolinha > 590){
   meusPonto += 1;
    ponto.play();
  }
  if (xBolinha < 10){
    pontosDoOponente += 1;
    ponto.play():
  }
}    
    
    
  
    
    
    
    
  
