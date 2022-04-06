let slider;
let pantalla1;
let Rectangle;
let boton;
let lista;
let input;

let img1;
let img2;
let img3;

let listasSong

let crntm;
let sliderT;

let canciones;
canciones = [];
i = 0;

function preload() {
  pantalla1 = loadImage("pantalla1.jpg");
  Rectangle = loadImage("Rectangle.png");
  canciones[0] = loadSound("Plan A.mp3");
  canciones[1] = loadSound("Ride.mp3");
  canciones[2] = loadSound("Bac in Black.mp3");  
  img1 = loadImage("img1.jpg");
  img2 = loadImage("img2.jpg");
  img3 = loadImage("img3.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight); //300 , 600 el valor real
  //listasSong = []
  botonPlay = createButton("PLAY");
  botonPlay.mousePressed(Play);
  botonPlay.position(710, 580);

  botonPause = createButton("PAUSE");
  botonPause.mousePressed(Pause);
  botonPause.position(765, 580);

  botonNext = createButton("NEXT");
  botonNext.mousePressed(Next);
  botonNext.position(840, 580);

  botonBack = createButton("BACK");
  botonBack.mousePressed(Back);
  botonBack.position(640, 580);

  botonStop = createButton("STOP");
  botonStop.mousePressed(Stop);
  botonStop.position(750, 615);

  /*crntm = createSlider("Current Time");
  crntm.mousePressed(Currenttime);
  crntm.position(200, 600);*/


  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(710, 650)
  //input = createFileInput(handleFile);
  //input.position(750, 600)
  //button.mousePressed(togglePlaying);
}

/*function Currenttime(){
  canciones[0].currentTime; 
  //console.log(crrnt);
}*/

function draw() {
  image(pantalla1, 0, 0, windowWidth, windowHeight);
  image(Rectangle, 0, 0, windowWidth, windowHeight);
  textSize(50);
  textFont('ITC Machine Std');
  text('Reproductor MP3', 650, 54);
  fill(255, 255, 0); //letra amarilla

  textSize(50);
  textFont('ITC Machine Std');
  text('Reproductor MP3', 646, 50);
  fill(0); //letra de color negro
  canciones[i].setVolume(slider.value());
  if(canciones[0].isPlaying() === true){
    image (img1, 600, 150, 400, 300);
  } else if(canciones[1].isPlaying() === true){
    image (img2, 660, 190, 250, 250);
  } else if(canciones[2].isPlaying() === true){
    image (img3, 660, 190, 250, 250);
  } 

  

  if(canciones[0].isPlaying() === true){
    text ("Plan A", 750, 550);
  } else if(canciones[1].isPlaying() === true){
    text ("Ride", 750, 550);
  } else if(canciones[2].isPlaying() === true){
    text ("Back in Black", 660, 550);
  } 


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
  crntm = canciones[0].currentTime();
  console.log(crntm());
}

//Darle pause
function Pause() {
  canciones[i].pause();
}

function Stop(){
  canciones[i].stop();
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

