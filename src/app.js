/* eslint-disable */
/*import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico"; */

window.onload = function() {
  //write your code here  // listado opciones excusas //
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the phone", "the car"];
  const when = [
    "before the class",
    "When I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    console.log(randomWho);

    const excuse =
      randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
    document.querySelector("#Excuse").textContent = excuse;
    console.log(excuse);
    // console.log(document.getElementById("Excuse"));
  }

  generateExcuse();
};
