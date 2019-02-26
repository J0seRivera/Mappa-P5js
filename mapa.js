let myMap;
let canvas;
const mappa = new Mappa("Leaflet");
const options ={
  lat: 14.7060401,
  lng: -91.2049259,
  zoom:11,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}
function setup()
{
  canvas = createCanvas(1300,600);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  fill(200,100,100);
  myMap.onChange(drawPoint);
}
function draw(){

}
function drawPoint()
{
  clear();
  const solola = myMap.latLngToPixel(14.768742, -91.182506);
  ellipse(solola.x, solola.y, 20, 20);
}