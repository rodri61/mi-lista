onload = function(){



const imagen = document.getElementById('banner');

let numImagen = 0;
const imagenes = [];
imagenes[0] = "img/interstellar-bg.jpg";
imagenes[1] = "img/fondo-03.jpg";
imagenes[2] = "img/jovencito.jpg";
this.console.log('funciona');

this.setInterval(function(){
    imagen.style.backgroundImage = "url("+imagenes[numImagen]+")";
    if(numImagen<imagenes.length-1){
        numImagen++;
    }else{
        numImagen=0;
    }
},5000);
}