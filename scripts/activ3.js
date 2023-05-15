var entrada = "";

while (entrada != "ESC") {
  entrada = prompt("Ingrese los numeros del 1 al 4");

  var producto = "";
  switch (entrada) {
    case "1":
      producto = "Tomate";
      break;
    case "2":
      producto = "Papa";
      break;
    case "3":
      producto = "Papa";
      break;
    case "4":
      producto = "Pollo";
      break;
  }

  alert(producto);
}