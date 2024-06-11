//Comienzo del programa

let Bienvenida = alert ('Bienvenido al Cofre');

function SaludarUsuario () {
    let nombreingresado = prompt ('¿Cual es tu nombre?');
    alert ('Gracias por elegirnos ' + nombreingresado);
    console.log(nombreingresado);
}

SaludarUsuario();

//Capas del programa


// Inicio Case 1 menu

function agregarinformacion () {
    let volvermenu = false;
    while (!volvermenu){
        const tipodeinfo = prompt ("Que tipo de información desea guardar?\nSeleccione una opción:\n1.Fecha de cumpleaños\n2.Turnos\n3.Futuros Examenes\n4.Volver a Menu");
        switch (tipodeinfo) {
            case "1":
                cumplea();
                break;
            case "2":
                turnos();
                break;
            case "3":
                Examenes();
                break;
            case "4":
                volvermenu = true;
                confirm ("¿Desea volver al menu?")
                break;
            default:
                alert ("Opción inválida. Por favor, seleccione una opción del 1 al 4")
        }
    }
}

// Agregar Cumpleaños

const cumple = []

function cumplea() {
    const nuevocumple = prompt("Ingrese una fecha y un nombre");
    if (nuevocumple){
        cumple.push(nuevocumple);
        alert("Fecha de cumpleaños agregado correctamente");
    }else{
        alert("No se ingreso ninguna fecha.");
    }
    console.log (cumple)
}

// Agregar Turnos
const turno = []

function turnos() {
    const nuevoturno = prompt("Ingrese una fecha y a que corresponde el turno");
    if (nuevoturno){
        turno.push(nuevoturno);
        alert("Turno agregado correctamente");
    }else{
        alert("No se ingreso ninguna fecha.");
    }
    console.log (turno)
}

// Agregar Fecha de Examen

const Examen = []

function Examenes() {
    const NuevoExamen = prompt("Ingrese una fecha y a que materia corresponde");
    if (NuevoExamen){
        Examen.push(NuevoExamen);
        alert("Fecha de examen agregada correctamente");
    }else{
        alert("No se ingreso ninguna fecha.");
    }
    console.log (Examen)
}

// Fin Case 1 menu

// Inicio Case 2 menu

function Buscarinformacion () {
    let volvermenu = false;
    while (!volvermenu){
        const tipodeinfo = prompt ("Que tipo de información desea ver?\nSeleccione una opción:\n1.Fecha de cumpleaños\n2.Turnos\n3.Futuros Examenes\n4.Volver a Menu");
        switch (tipodeinfo) {
            case "1":
                verCumple();
                break;
            case "2":
                verTurno();
                break;
            case "3":
                verExamen();
                break;
            case "4":
                volvermenu = true;
                confirm ("¿Desea volver al menu?")
                break;
            default:
                alert ("Opción inválida. Por favor, seleccione una opción del 1 al 4")
        }
    }
}

function verCumple() {
    if (cumple.length === 0) {
        alert("No hay cumpleaños agendados.");
    } else {
        let mensaje = "Proximos cumpleaños:\n";
        for (let i = 0; i < cumple.length; i++) {
            mensaje += `${i + 1}. ${cumple[i]}\n`;
        }
        alert(mensaje);
    }
}

function verTurno() {
    if (turno.length === 0) {
        alert("No hay turnos agendados.");
    } else {
        let mensaje = "Proximos Turnos:\n";
        for (let i = 0; i < turno.length; i++) {
            mensaje += `${i + 1}. ${turno[i]}\n`;
        }
        alert(mensaje);
    }
}

function verExamen() {
    if (Examen.length === 0) {
        alert("No hay examenes agendados.");
    } else {
        let mensaje = "Proximos Examenes:\n";
        for (let i = 0; i < Examen.length; i++) {
            mensaje += `${i + 1}. ${Examen[i]}\n`;
        }
        alert(mensaje);
    }
}

// Fin Case 2 menu

// Inicio Case 3 menu


function Quitarinformacion () {
    let volvermenu = false;
    while (!volvermenu){
        const tipodeinfo = prompt ("Que tipo de información desea quitar? \nSeleccione una opción:\n1.Fecha de cumpleaños\n2.Turnos\n3.Futuros Examenes\n4.Volver a Menu");
        switch (tipodeinfo) {
            case "1":
                cumpleFecha();
                break;
            case "2":
                turnosFecha();
                break;
            case "3":
                ExamenesFecha();
                break;
            case "4":
                volvermenu = true;
                confirm ("¿Desea volver al menu?")
                break;
            default:
                alert ("Opción inválida. Por favor, seleccione una opción del 1 al 4")
        }
    }
}



function cumpleFecha() {
    if (cumple.length === 0) {
        alert("No hay fecha para eliminar.");
        return;
    }
    let mensaje = "Proximos cumpleaños:\n";
        for (let i = 0; i < cumple.length; i++) {
            mensaje += `${i + 1}. ${cumple[i]}\n`;
        }
    alert(mensaje);
    const ordendecumple = parseInt(prompt("Ingrese la opcion a quitar:"));
    
    if (isNaN(ordendecumple) || ordendecumple < 1 || ordendecumple > cumple.length) {
        alert("Número de opcion inválido.")
    } else {
        const confirmacion = confirm(`¿Está seguro de que desea eliminar la opcion ${ordendecumple}: "${cumple[ordendecumple - 1]}"?`);
        if (confirmacion) {
            cumple.splice(ordendecumple - 1, 1);
            alert("Fecha eliminada exitosamente.");
        }
    volvermenu = true;
    confirm ("¿Desea volver al menu?")}
}

function turnosFecha() {
    if (turno.length === 0) {
        alert("No hay fecha para eliminar.");
        return;
    }
    let mensaje = "Proximos Turnos:\n";
        for (let i = 0; i < turno.length; i++) {
            mensaje += `${i + 1}. ${turno[i]}\n`;
        }
    alert(mensaje);
    const ordendeturno = parseInt(prompt("Ingrese la opcion a quitar:"));
    
    if (isNaN(ordendeturno) || ordendeturno < 1 || ordendeturno > turno.length) {
        alert("Número de opcion inválido.")
    } else  {
        const confirmacion = confirm (`¿Está seguro de que desea eliminar la opcion ${ordendeturno}: "${turno[ordendeturno - 1]}"?`);
        if (confirmacion){ 
            turno.splice(ordendeturno - 1, 1);
            alert("Opción eliminada exitosamente.");
        }
    volvermenu = true;
    confirm ("¿Desea volver al menu?")}
}


function ExamenesFecha() {
    if (Examen.length === 0) {
        alert("No hay fecha para eliminar.");
        return;
    }
    let mensaje = "Proximos Examenes:\n";
        for (let i = 0; i < Examen.length; i++) {
            mensaje += `${i + 1}. ${Examen[i]}\n`;
        }
    alert(mensaje);
    const ordendeexamen = parseInt(prompt("Ingrese la opcion a quitar:"));

    if (isNaN(ordendeexamen) || ordendeexamen < 1 || ordendeexamen > Examen.length) {
        alert("Número de opcion inválido.")
    } else {
        const confirmacion = confirm (`¿Está seguro de que desea eliminar la opcion ${ordendeexamen}: "${Examen[ordendeexamen - 1]}"?`);
        if (confirmacion){ 
            Examen.splice(ordendeexamen - 1, 1);
            alert("Opción eliminada exitosamente.");
        }
    volvermenu = true;
    confirm ("¿Desea volver al menu?")}
}

// Fin Case 3 menu


// Función menu
function menu () {
    let salir = false;
    while (!salir){
        const opcion = prompt ("Seleccione una opción:\n1. Agendar informacion\n2. Buscar informacion\n3. Quitar informacion\n4. Salir de la app");
        switch (opcion) {
            case "1":
                agregarinformacion();
                break
            case "2":
                Buscarinformacion();
                break
            case "3":
                Quitarinformacion();
                break
            case "4":
                salir = true;
                confirm ("¿Desea salir de la app?");
                break
            default:
                alert("Opción inválida. Por favor, seleccione una opción del 1 al 4.")
        }
    }
}

// Llamada a la funcion para iniciar app
menu (); 