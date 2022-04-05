let slider;
let kick;
let gradiente;
let boton;
let lista;
let sliderT;

let img1;
let img2;
let img3;

let listasSong

let canciones;
canciones = [];
i = 0;

function preload() {
  kick = loadImage("kick.jpg");
  canciones[0] = loadSound("Plan A.mp3");
  canciones[1] = loadSound("Ride.mp3");
  canciones[2] = loadSound("Bac in Black.mp3");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight); //300 , 600 el valor real

}



function draw() {
  /*canciones.setVolume(slider.value());*/
  image(kick, 0, 0, windowWidth, windowHeight);
  if (canciones[0].isPlaying() === true) image(img1, 400,330,400,200);
  //image(gradiente, 0, 0, windowWidth, windowHeight);
  textSize(50);
  textFont('ITC Machine Std');
  text('Reproductor MP3', 600, 54);
  fill(255, 255, 0); //letra amarilla

  textSize(50);
  textFont('ITC Machine Std');
  text('Reproductor MP3', 596, 50);
  fill(0); //letra de color negro

}

//Darle play
function Play() {
  canciones[i].play();
}

//Darle pause
function Pause() {
  canciones[i].pause();
}

/*function Duration(){
  canciones[i].duration(sliderT.value());
}*/


//siguiente cancion
function Next() {
  Pause();
  if (i < canciones.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
  Play();
  console.log(i);

}

//Retroceder cancion
function Back() {
  Pause();
  if (i < canciones.length + 1) {
    i -= 1;
  } else {
    i = 0;
  }
  Play();
  console.log(i);
}

