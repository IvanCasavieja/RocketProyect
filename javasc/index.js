class infoPersonaObject {
  constructor(nameCalled, age, razon, region) {
    this.nameCalled = nameCalled;
    this.age = age;
    this.razon = razon;
    this.region = region;
  }
}

const infoPersona = [];

//constante para obtener el elemento
const conversar = document.getElementById("conversar");
console.log(conversar.innerHTML);
//----------------------------------

const txtConversar = document.getElementById("txt-conversar");
let infoPersonaArray = []; //declarar array
txtConversar.addEventListener("keypress", function (event) {  //añadir evento
  if (event.key == "Enter") { //key del evento
    let userInput = txtConversar.value;
    switch (infoPersonaArray.length) { //condicional del evento
      case 0:
        txtConversar.placeholder = "Hola " + userInput + " ¿Que edad tienes?"; //en el caso 1
        break;
      case 1:
        txtConversar.placeholder = "¿Por que razón visitas este sitio?";  //en el caso 2
        break;
      case 2:
        txtConversar.placeholder = "¿De donde eres?";  //en el caso 3
        break;
    }
    txtConversar.value = "";
    infoPersonaArray.push(userInput);
    if (infoPersonaArray.length == 4) { //pushearal array
      let nombre = infoPersonaArray[0];
      let edad = infoPersonaArray[1];
      let razon = infoPersonaArray[2];
      let region = infoPersonaArray[3];

      infoPersona.push(new infoPersonaObject(nombre, edad, razon, region)); //crear objeto
      alert(
        "De acuerdo " +
          infoPersonaArray[0] +
          " ahora que te conozco, puedo contarte un poco sobre mi..."
      );
      infoPersonaArray = [];
      txtConversar.placeholder = "¡Hola! ¿Como es tu nombre?";
      console.log(infoPersona);
    } else {
      console.log(infoPersonaArray);
    }
    event.preventDefault(); //evitar recharge de pagina
  }
});

/*let nameCalled = prompt("Ingrese su nombre");
if (nameCalled == "") {
  while (nameCalled == "") {
    alert("Al menos contestame");
    nameCalled = prompt("Ingrese su nombre");
  }
}

//cambiar valores innerhtml
conversar.innerHTML = "Hola " + nameCalled;
console.log(conversar.innerHTML);
//----------------------------------

infoPersona.push(nameCalled);
//comprobar si funciona el push
//console.log(infoPersona.length);

let age = prompt("Hola " + nameCalled + "!" + " " + "¿que edad tienes?");
if (age == "") {
  while (age == "") {
    alert("Al menos contestame");
    age = prompt("Hola " + nameCalled + "!" + " " + "¿que edad tienes?");
  }
}
infoPersona.push(age);
//comprobar si funciona el push
//console.log(infoPersona.length);

let region = prompt("¿De donde eres?");
if (region == "") {
  while (razon == "") {
    alert("Al menos contestame");
    region = prompt("¿De donde eres?");
  }
}
infoPersona.push(region);
//comprobar si funciona el push
//console.log(infoPersona.length);

let razon = prompt("¿Por que razón visitas el sitio?");
if (razon == "") {
  while (razon == "") {
    alert("Al menos contestame");
    razon = prompt("¿Por que razón visitas el sitio?");
  }
}
infoPersona.push(razon);
//comprobar si funciona el push
//console.log(infoPersona.length);

infoPersona.push(new infoPersonaObject(nameCalled, age, region, razon));
//probar si funciona el push new
//console.log(infoPersona);

alert(
  "De acuerdo " +
    nameCalled +
    " ahora que te conozco, puedo contarte un poco sobre mi..."
);

//guia turistica

function responder() {
  alert("Al menos contestame");
  decision = prompt("¿Por donde quieres pasar primero?");
}

alert("Vayamos directo a lo que te interesa " + nameCalled);
const indicePorta = "Profile," + " Projects," + " Tecnologies ";
alert("Aqui tienes un indice ==> " + indicePorta);
let decision = prompt("¿Por donde quieres pasar primero?");

if (decision == "") {
  while (decision == "") {
    responder();
  }
  if (decision == "profile") {
    alert("De acuerdo, te mostrare mi curriculum");
  } else if (decision == "projects") {
    alert("¡Directo a lo practico!");
  } else if (decision == "tecnologies") {
    alert("Veamos de que estoy hecho, ¿no?");
  }
} else if (decision == "profile") {
  alert("De acuerdo, te mostrare mi curriculum");
} else if (decision == "projects") {
  alert("¡Directo a lo practico!");
} else if (decision == "tecnologies") {
  alert("Veamos de que estoy hecho, ¿no?");
}

//despegue

function contestame() {
  alert("Al menos contestame");
  despegue = prompt("¿Quieres despegar?");
}

let despegue = prompt("¿Entonces, despegamos?").toLowerCase();

if (despegue == "si") {
  for (let i = 3; i >= 1; i--) {
    alert("En " + i);
  }
  alert("Despegamos, fiiiiium 🚀");
} else if (despegue == "") {
  while (despegue == "") {
    contestame();
  }
  if (despegue == "si") {
    for (let i = 3; i >= 1; i--) {
      alert("En " + i);
    }
    alert("Despegamos, fiiiiium 🚀");
  } else if (despegue == "no") {
    alert("Aburrido");
    while (despegue == "no") {
      alert("¿Como puedo convencerte");
      let convencer = prompt("Te leo");
      break;
    }
  } else if (despegue == "no se" || "tal vez" || "quizas" || "me lo pienso") {
    while (despegue == "no se" || "tal vez" || "quizas" || "me lo pienso") {
      alert("¿Como puedo convencerte");
      let convencer = prompt("Te leo");
      break;
    }
  }
} else if (despegue == "no") {
  alert("Aburrido");
  while (despegue == "no") {
    alert("¿Como puedo convencerte");
    let convencer = prompt("Te leo");
    break;
  }
} else if (despegue == "no se" || "tal vez" || "quizas" || "me lo pienso") {
  while (despegue == "no se" || "tal vez" || "quizas" || "me lo pienso") {
    alert("¿Como puedo convencerte");
    let convencer = prompt("Te leo");
    break;
  }
}
*/
