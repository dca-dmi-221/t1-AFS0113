let slider;
let kick;
let gradiente;
let boton;
let lista;
let input;

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
  //listasSong = []
  botonPlay = createButton("PLAY");
  botonPlay.mousePressed(Play);
  botonPlay.position(450, 600);
  botonPause = createButton("PAUSE");
  botonPause.mousePressed(Pause);
  botonPause.position(520, 600);
  botonNext = createButton("NEXT");
  botonNext.mousePressed(Next);
  botonNext.position(600, 600);
  botonBack = createButton("BACK");
  botonBack.mousePressed(Back);
  botonBack.position(680, 600);
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(445, 636)
  //input = createFileInput(handleFile);
  //input.position(750, 600)
  //button.mousePressed(togglePlaying);
}



function draw() {
  /*canciones.setVolume(slider.value());*/
  image(kick, 0, 0, windowWidth, windowHeight);
  //image(gradiente, 0, 0, windowWidth, windowHeight);
  textSize(50);
  textFont('ITC Machine Std');
  text('Reproductor MP3', 600, 54);
  fill(255, 255, 0); //letra amarilla

  textSize(50);
  textFont('ITC Machine Std');
  text('Reproductor MP3', 596, 50);
  fill(0); //letra de color negro
  canciones[i].setVolume(slider.value());
  /*fill(0);
  text('pos Mouse X: ' + mouseX, 50, 100);
  text('pos Mouse Y: ' + mouseY, 50, 200);*/

}

//Para cagar los archivos
/*function handleFile(file) {
  console.log(file);
  if (file.type === 'audio') {
    let musica = loadSound(file, () => {
      listasSong.push(musica)
      listasSong[0].play()
      listasSong[0].currentTime()
    })
  }
}*/

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

