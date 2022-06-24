/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronombre = ["el", "ese", "tu"];
let adjetivo = ["hediondo", "largo", "hermoso"];
let sustantivo = ["perrito", "gato", "cooper", "arbol"];
let dominio = [".com", ".cl", ".net"];

window.onload = function() {
  //write your code here
  for (let i = 0; i < pronombre.length; i++) {
    for (let j = 0; j < sustantivo.length; j++) {
      for (let h = 0; h < adjetivo.length; h++) {
        for (let k = 0; k < dominio.length; k++) {
          console.log(pronombre[i] + sustantivo[j] + adjetivo[h] + dominio[k]);
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
