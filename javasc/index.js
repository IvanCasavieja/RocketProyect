class infoPersonaObject {
  constructor(nameCalled, age, region, razon) {
    this.nameCalled = nameCalled;
    this.age = age;
    this.region = region;
    this.razon = razon;
  }
}

const infoPersona = [];

//constante para obtener el elemento
const conversar = document.getElementById("conversar");
console.log(conversar.innerHTML);
//----------------------------------

let nameCalled = prompt("Ingrese su nombre");
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
