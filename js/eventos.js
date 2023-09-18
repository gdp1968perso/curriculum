

document.getElementById('italiano').onclick = function () {  
    document.getElementById("datospersonales").innerHTML =" Dati personali";
    document.getElementById("formacion").innerHTML =" Formazione";
    document.getElementById("experiencialaboral").innerHTML =" Experinze lavorative";
    document.getElementById("aptitudes").innerHTML ="Attitudini";
    document.getElementById("habilidades").innerHTML ="competenze";
    document.getElementById("idiomas").innerHTML ="Lingue";
    document.getElementById("rsociales").innerHTML ="I social";
    idiomaElegido('green');   
}

document.getElementById('espanol').onclick =  function () {
    document.getElementById("datospersonales").innerHTML =" Datos personales";
    document.getElementById("formacion").innerHTML =" Formación";
    document.getElementById("experiencialaboral").innerHTML =" Experiencia laboral";
    document.getElementById("aptitudes").innerHTML ="Aptitudes";
    document.getElementById("habilidades").innerHTML ="Habilidades";
    document.getElementById("idiomas").innerHTML ="Idiomas";
    document.getElementById("rsociales").innerHTML ="Redes sociales";
    idiomaElegido('Blue');
}

function idiomaElegido(colorDeCambio) {
    const elementos = document.getElementsByClassName("colorLeyenda");
    for (let i=0; i < elementos.length; i++){
        elementos[i].style.color = colorDeCambio;
    }
}

const foto = document.getElementById('foto');
const apeynom = document.getElementById('nombre');

const importardatos = async() => {
    const url= 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    foto.src = datos.picture.medium;
    apeynom.textContent = datos.name.first +', '+ datos.name.last;
}

document.addEventListener('DOMContentLoaded',importardatos);
