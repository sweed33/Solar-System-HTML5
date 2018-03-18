//variables sol
var arrayPlanetas=[];
var XINI=395;
var YINI=240;
var canMercurio=0;
var canTierra=0;
var canVenus=0;
var canMarte=0;
var canJupiter=0;
///variables agujero negro
var arrayPlanetasAgu=[];
var XINIA=625;
var YINIA=430;
var canMercurioa=0;
var canTierraa=0;
var canVenusa=0;
var canMartea=0;
var canJupitera=0;

var padre=document.getElementById("padre");
window.onload=function(){
  
}

//definimos el método imprimete para la clase Planeta
function imprimete(){ 
  var art=document.createElement("article");
  padre.appendChild(art);
  art.innerHTML = "<img src='"+this.src+"'class='"+this.nombre+"'></img>";
} 

//definimos el método mover para la clase Planeta
function mover(planeta){
    this.i+=this.velocidad*this.vel;
    this.x=XINI+Math.cos(this.i)*this.r;
    this.y=YINI+Math.sin(this.i)*this.r;
    document.getElementsByClassName(planeta)[this.numeroInstancia].style.left=this.x+"px";
    document.getElementsByClassName(planeta)[this.numeroInstancia].style.top=this.y+"px";
 }

//definimos el constructor para la clase 
function Planet(x, y,nombre,vel,r,src,velocidad,numeroInstancia){ 
    this.nombre = nombre;
    this.x = x;
    this.y = y;
    this.vel=vel;
    this.r=r;
    this.src=src;
    this.i=0;
    this.velocidad=velocidad;
    this.imprimete = imprimete;
    this.mover = mover;
    this.numeroInstancia=numeroInstancia;
    arrayPlanetas.push(this);
    this.imprimete();
 } 

//creamos el sol
sol=new Planet(372,220,"sol",0,0,"../img/sol.png",0,0);

//los movemos
setInterval("moverPlanetas()",1);
function moverPlanetas(){
  for(var i=1;i<arrayPlanetas.length;i++){
    arrayPlanetas[i].mover(arrayPlanetas[i].nombre);
  }
}

//permitimos soltar
function allowDrop(ev) {
    ev.preventDefault();
}

//funcion cortar
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

//funcion soltar 
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //creamos el planeta arrastrado segun los datos de su input
      switch(data){
          case "drag1":
            var velocidad=document.getElementById("velmer").value/1000;
            if(velocidad=="")velocidad=0.001;
            mercurio=new Planet(390,220,"mercurio",4.8,50,"../img/mercurio.png",velocidad,canMercurio);
            canMercurio++;
            break;
          case "drag2":
            var velocidad=document.getElementById("veltie").value/1000;
            if(velocidad=="")velocidad=0.001;
            tierra=new Planet(380,220,"tierra",1.2,100,"../img/tierra.png",velocidad,canTierra);
            canTierra++;
            break;
          case "drag3":
            var velocidad=document.getElementById("velven").value/1000;
            if(velocidad=="")velocidad=0.001;
            venus=new Planet(400,220,"venus",1.9,75,"../img/venus.png",velocidad,canVenus);
            canVenus++;
            break;
          case "drag4":
            var velocidad=document.getElementById("velmar").value/1000;
            if(velocidad=="")velocidad=0.001;
            marte=new Planet(410,220,"marte",1.3,125,"../img/marte.png",velocidad,canMarte);
            canMarte++;
            break;
          case "drag5":
            var velocidad=document.getElementById("veljup").value/1000;
            if(velocidad=="")velocidad=0.001;
            jupiter=new Planet(420,220,"jupiter",0.6,175,"../img/jupiter.png",velocidad,canJupiter);
            canJupiter++;
            break;
          default:
            break;
      }
}

//definimos el método imprimeteAgu para la clase PlanetaAgu
function imprimeteAgu(){ 
  var art=document.createElement("article");
  padre.appendChild(art);
  art.innerHTML = "<img src='"+this.src+"'class='"+this.nombre+"'></img>";
} 

//definimos el método moverAgu para la clase PlanetaAgu
function moverAgu(planeta){
    if(this.r>0)this.r=this.r-0.03;
    else {
      document.getElementsByClassName(planeta)[this.numeroInstancia].src="../img/transparente.png";//si el agujero negro ha absorbido el planeta pongo la imagen transparente
      document.getElementsByClassName(planeta)[this.numeroInstancia].style.width="0px";
    }
    this.i+=this.velocidad*this.vel;
    this.x=XINIA+Math.cos(this.i)*this.r;
    this.y=YINIA+Math.sin(this.i)*this.r;
    document.getElementsByClassName(planeta)[this.numeroInstancia].style.left=this.x+"px";
    document.getElementsByClassName(planeta)[this.numeroInstancia].style.top=this.y+"px";
 }

//definimos el constructor para la clase PlanetaAgu
function PlanetAgu(x, y,nombre,vel,r,src,velocidad,numeroInstancia){ 
    this.nombre = nombre;
    this.x = x;
    this.y = y;
    this.vel=vel;
    this.r=r;
    this.src=src;
    this.i=0;
    this.velocidad=velocidad;
    this.imprimeteAgu = imprimeteAgu;
    this.moverAgu = moverAgu;
    this.numeroInstancia=numeroInstancia;
    arrayPlanetasAgu.push(this);
    this.imprimeteAgu();
 } 

//movemos los planetas hacia el agujero negro
setInterval("moverPlanetasAgu()",1);
function moverPlanetasAgu(){
  for(var i=0;i<arrayPlanetasAgu.length;i++){
    arrayPlanetasAgu[i].moverAgu(arrayPlanetasAgu[i].nombre);
  }
}
//funcion soltar en agujero negro
function dropAgu(ev){
    ev.preventDefault();
    ev.stopPropagation();
    var data = ev.dataTransfer.getData("text");
     switch(data){
          case "drag1":
            var velocidad=document.getElementById("velmer").value/1000;
            if(velocidad=="")velocidad=0.001;
            mercurio=new PlanetAgu(390,400,"mercurioa",4.8,50,"../img/mercurio.png",velocidad,canMercurioa);
            canMercurioa++;
            break;
          case "drag2":
            var velocidad=document.getElementById("veltie").value/1000;
            if(velocidad=="")velocidad=0.001;
            tierra=new PlanetAgu(380,400,"tierraa",1.2,100,"../img/tierra.png",velocidad,canTierraa);
            canTierraa++;
            break;
          case "drag3":
            var velocidad=document.getElementById("velven").value/1000;
            if(velocidad=="")velocidad=0.001;
            venus=new PlanetAgu(400,400,"venusa",1.9,75,"../img/venus.png",velocidad,canVenusa);
            canVenusa++;
            break;
          case "drag4":
            var velocidad=document.getElementById("velmar").value/1000;
            if(velocidad=="")velocidad=0.001;
            marte=new PlanetAgu(410,400,"martea",1.3,125,"../img/marte.png",velocidad,canMartea);
            canMartea++;
            break;
          case "drag5":
            var velocidad=document.getElementById("veljup").value/1000;
            if(velocidad=="")velocidad=0.001;
            jupiter=new PlanetAgu(420,400,"jupitera",0.6,175,"../img/jupiter.png",velocidad,canJupitera);
            canJupitera++;
            break;
          default:
            break;
      }
}