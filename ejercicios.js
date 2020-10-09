// CASO 01: 

let expr = prompt("Ingrese el numero del dia");

switch (expr) {
    case '0':
      console.log('Domingo')
      document.write('Domingo');
      break;
    case '1':
      console.log("Lunes")
      document.write('Lunes');
      break;
    case '2':
      console.log("Martes")
      document.write('Martes');
      break;
    case '3':
      console.log("Miercoles")
      document.write('Miercoles');
      break;
    case '4':
      console.log("Jueves")
      document.write('Jueves');
      break;
    case '5':
      console.log("Viernes")
      document.write('Viernes');
      break;
      case '6':
      console.log("Sabado")
      document.write('Sabado');
      break;
    default:
      console.log('Lo lamentamos, ese numero no coincide con ningun dia de la semana')
      document.write('Lo lamentamos, ese numero no coincide con ningun dia de la semana');
  }

  

