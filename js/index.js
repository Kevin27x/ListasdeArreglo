let radiologia = [{
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    }
];

let traumatologia = [{
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "CECILIA MENDEZ",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10.30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    }
];


let dental = [{
        hora: "8:30",
        especialista: "ANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11.30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    }
];
//var guardarEspecialidad = "";
//LISTA SELECTOR
const listaSelect = document.getElementById("listaSelect");
listaSelect.addEventListener("change", function(){
    
    switch(listaSelect.value){
        case "":
            
            console.log("nada");
        break;

        case "sRadio":
            
            tabla(radiologia);
            listado(radiologia);
            creaBoton("radiologia");

        break;

        case "sTrauma":
        
            tabla(traumatologia);
            listado(traumatologia);
            creaBoton("traumatologia");
            
        break;

        case "sDental":

            tabla(dental);
            listado(dental);
            creaBoton("dental");
            
        break;
    };
});
//FUNCIONES
//Remueve la fila "n", n es dado por el DOM
function clean(n){
    $(document).ready(function(){
        $(`#${n}`).remove(); 
    })
}
//Crea la tabla según la especialidad dada por el "select"
function tabla(especialidad){
    //Crea la cabecera de la tabla
    var texto = `<tr><th><span id='orden' onclick='ordenFunc()'><i class="fas fa-sort-down"></i></span>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>`;
    //Itera las posiciones del arreglo dado, y las propiedades de los objetos dentro
    for (let i = 0; i < especialidad.length; i++) {
        texto += `<tr id="${i}" class="filasTabla">
        <td>${especialidad[i].hora}</td>
        <td>${especialidad[i].paciente}</td>
        <td>${especialidad[i].rut}</td>
        <td>${especialidad[i].prevision}</td>
        <td>${especialidad[i].especialista}</td>
        <td><div class="eliminar" onclick="clean('${i}')"><i class="fas fa-times-circle"></i></td>
        </tr>`;
        //agrega "x" con evento onclick en ultima fila de la tabla, con su correspondiente "i", para eliminar la fila completa "<tr>" con su "id = i"
    }
    let tabla = document.getElementById("tabla"); 
    tabla.innerHTML = texto;
    
    //Almacenar primer y ultimo paciente, con sus previsiones 
    let pacienteUno = especialidad[0].paciente;
    let previsionUno = especialidad[0].prevision;
    let pacienteFinal = especialidad[especialidad.length - 1].paciente;
    let previsionFinal = especialidad[especialidad.length - 1].prevision;
    document.getElementById("pacientes").innerHTML = `<h4>Primera Atención: ${pacienteUno} - ${previsionUno} | Última Atención: ${pacienteFinal} - ${previsionFinal}</h4>`
    //Crear boton para agregar nuevos pacientes 
    

}
//Invierte elementos ".filasTabla" creados en la función "tabla"
function ordenFunc(){
    $("tbody").each(function(){
        var arr = $.makeArray($(".filasTabla",this).detach());
        arr.reverse();
        $(this).append(arr);
    });
}

function listado(especialidad){
    let listaGuionTitulo = document.getElementById("listaGuionTitulo");
    listaGuionTitulo.innerHTML = "<p>Lista de pacientes separado por guiones</p>"; 
    let listaGuion = document.getElementById("listaGuion");
    var listado = "";
    for (let i = 0; i < especialidad.length; i++){
        listado += `<p>${especialidad[i].hora} - ${especialidad[i].especialista} - ${especialidad[i].paciente} - ${especialidad[i].rut} - ${especialidad[i].prevision}</p>`;
    }
    listaGuion.innerHTML = listado;
    
    let arrayLast = listado.split("</p>");
    //ejecuta la función fonasa
    fonasa(especialidad)
}
//Distingue el valor = "FONASA" o "PREVISION" en cada objeto dentro del ARRAY (ESPECIALIDAD). Los escribe en el DOM en la lista correspondiente
function fonasa(especialidad){
    let ingresePaciente = document.getElementById("ingresePaciente");
    ingresePaciente.innerHTML = "INGRESE EL SIGUIENTE PACIENTE"


    //apuntadores a titulo fonasa y lista de pacientes fonasa
    let listaFonasa = document.getElementById("listaFonasa");
    listaFonasa.innerHTML = "<p>Lista de pacientes FONASA</p>"; 
    var fonasa = document.getElementById("fonasa");
    //Resetear lista fonasa
    fonasa.innerHTML = "";

    //apuntadores a titulo isapre y lista de pacientes isapre
    let listaIsapre = document.getElementById("listaIsapre");
    listaIsapre.innerHTML = "<p>Lista de pacientes ISAPRE</p>"; 
    var isapre = document.getElementById("isapre");
    //Resetear lista isapre
    isapre.innerHTML = "";
    //recorre el objeto especialidad y pergunta si la previsión es fonasa. Si es fonasa, arroja true, y se registra el usuario en lista fonasa. En caso contrario, se registra en lista isapre
    for (let i = 0; i < especialidad.length; i++){
        
        if (especialidad[i].prevision == "FONASA"){
                
            let nombre = especialidad[i].paciente;
            
            fonasa.innerHTML += `<p>${nombre} - FONASA</p>`
        }
        else {
            
            let nombre = especialidad[i].paciente; 
            
            isapre.innerHTML += `<p>${nombre} - ISAPRE</p>`
        }  
    }
    listaCompleta()
    
}
//Imprime con método .forEach,solo la propiedad PACIENTE de los arrays. Y la escribe en el DOM separado por párrafos
function listaCompleta(){
    let listaCompleta = document.getElementById("listaCompleta");
    let completa = document.getElementById("completa"); 
    listaCompleta.innerHTML = "Lista completa de pacientes"
    completa.innerHTML = "";
    
    radiologia.forEach(function(element){
        let paciente = element.paciente
        completa.innerHTML += `<p>${paciente}</p>`

    })

    traumatologia.forEach(function(element){
        let paciente = element.paciente
        completa.innerHTML += `<p>${paciente}</p>`

    })

    dental.forEach(function(element){
        let paciente = element.paciente
        completa.innerHTML += `<p>${paciente}</p>`

    })
}
//Crear sección de inputs y el botón con evento ONCLICK, para agregar pacientes
function creaBoton(especialidad){
    //Crear un boton con contenido, valor (el valor es almacenado acá para rescatarlo luego, en la función ONCLICK) y id
    let newButton = document.createElement("button");
    newButton.innerHTML = "<i class='fas fa-plus'></i>";
    newButton.value = especialidad;
    newButton.id = "botonAgregar";
    //Crear todos los inputs con type, placeholder e id. El id servirá para recoger el valor del input en el evento ONCLICK del botón
    let newHora = document.createElement("input");
    newHora.type = "text";
    newHora.placeholder = "Hora";
    newHora.id = "hora";

    let newEspecialista = document.createElement("input");
    newEspecialista.type = "text";
    newEspecialista.placeholder = "Especialista";
    newEspecialista.id = "especialista";

    let newPaciente = document.createElement("input");
    newPaciente.type = "text";
    newPaciente.placeholder = "Paciente"
    newPaciente.id = "paciente";

    let newRut = document.createElement("input");
    newRut.type = "text";
    newRut.placeholder = "Rut"
    newRut.id = "rut";

    let newPrevision = document.createElement("input");
    newPrevision.type = "text";
    newPrevision.placeholder = "Previsión"
    newPrevision.id = "prevision";
    
    //Se vacía el div que guarda los inputs (porque acumulaba los anteriores)
    document.getElementById("entradas").innerHTML = "";
    //Se crean los inputs dentro del div (#entradas)
    document.getElementById("entradas").appendChild(newHora);
    document.getElementById("entradas").appendChild(newEspecialista);
    document.getElementById("entradas").appendChild(newPaciente);
    document.getElementById("entradas").appendChild(newRut);
    document.getElementById("entradas").appendChild(newPrevision);
    document.getElementById("entradas").appendChild(newButton);
    //contenido al botón eliminar
    let eliminarBoton = document.getElementById("eliminarBoton");
    eliminarBoton.textContent = "Eliminar primer y último paciente";


    //Se establece la función del evento ONCLICK
    newButton.onclick = function(){
        //Recoger los valores de todos los inputs
        let valorHora = document.getElementById("hora").value;
        let valorEspecialista = document.getElementById("especialista").value;
        let valorPaciente = document.getElementById("paciente").value; 
        let valorRut = document.getElementById("rut").value;
        let valorPrevision = document.getElementById("prevision").value;
        //Recoger el valor de la especialidad actual (radiologia, traumatologia o dental)
        let valorBoton = (this).value;
        //crear un objeto con todos los inputs (con .push), dentro del array correspondiente (según el valor de valorBoton)
        //No podía invocar la tabla directamente con valorBoton, porque interpretaba el valor como String y no como array
        
        switch(valorBoton){
            case "radiologia":
                radiologia.push({hora: `${valorHora}`, especialista: `${valorEspecialista}`, paciente: `${valorPaciente}`, rut: `${valorRut}`, prevision: `${valorPrevision}`})  
                tabla(radiologia);
                //Actualiza todas las listas después de la tabla
                listado(radiologia);
                fonasa(radiologia);
                listaCompleta();
            break;
    
            case "traumatologia":
                traumatologia.push({hora: `${valorHora}`, especialista: `${valorEspecialista}`, paciente: `${valorPaciente}`, rut: `${valorRut}`, prevision: `${valorPrevision}`})
                tabla(traumatologia);
                listado(traumatologia);
                fonasa(traumatologia);
                listaCompleta();
                
            break;
    
            case "dental":
                dental.push({hora: `${valorHora}`, especialista: `${valorEspecialista}`, paciente: `${valorPaciente}`, rut: `${valorRut}`, prevision: `${valorPrevision}`})
                tabla(dental);
                listado(dental);
                fonasa(dental);
                listaCompleta();

            break;
        };

        
    }  
}
//Elimina el primer y último paciente del Array actuál (valor del botonAgregar) y luego, actualiza tabla y listas
function eliminar(){
    
    let valorBoton = document.getElementById("botonAgregar").value;
    switch(valorBoton){
        case "radiologia":
            radiologia.pop();
            radiologia.shift();
            
            tabla(radiologia);
            listado(radiologia);
            fonasa(radiologia);
            listaCompleta();
        break;

        case "traumatologia":
            traumatologia.pop();
            traumatologia.shift();
            tabla(traumatologia);
            listado(traumatologia);
            fonasa(traumatologia);
            listaCompleta();
            
        break;

        case "dental":
            dental.pop();
            dental.shift();
            tabla(dental);
            listado(dental);
            fonasa(dental);
            listaCompleta();

        break;
    };
}
