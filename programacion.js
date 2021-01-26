function movimiento(){
    var pos = 330;
    var top = 230;
    var box = document.getElementById('objeto2');
    var t = setInterval(mover,1);
    var count = -90;
    var frecuencia_angular = document.getElementById('frecuencia_angular').value;

    function mover(){
        if(pos>=1500){
            clearInterval(t);
        }else if(count <=90){
            let pos = 455;
            let top = 230;
            pos += 130*Math.sin(count*Math.PI/180);
            top -= 130*Math.cos(count*Math.PI/180);
            box.style.left = pos +'px';
            box.style.top = top+'px';
        }else if(count<=275){
            let pos = 715;
            let top = 230;
            pos -= 130*Math.sin(count*Math.PI/180);
            top -= 130*Math.cos(count*Math.PI/180);
            box.style.left = pos +'px';
            box.style.top = top+'px';
        }else if(count <=460){
            let pos = 970;
            let top = 230;
            pos += 130*Math.sin(count*Math.PI/180);
            top -= 130*Math.cos(count*Math.PI/180);
            box.style.left = pos +'px';
            box.style.top = top+'px';
        }else if(count<=635){
            let pos = 1220;
            let top = 230;
            pos -= 130*Math.sin(count*Math.PI/180);
            top -= 130*Math.cos(count*Math.PI/180);
            box.style.left = pos +'px';
            box.style.top = top+'px';
        }else{
            count = -90;
        }
        count += 1*frecuencia_angular;
    }
    

    var pos2= 100;
    var top2 = 125;
    var box2 = document.getElementById('objeto1');
    var t2 = setInterval(mover2,1);

    function mover2(){
        if(pos2>=1310){
            clearInterval(t2);
        }else{
            var count2 = 10;
            let pos2 = 105;
            let top2 = 105;
            pos2 += 125*Math.sin(count*Math.PI/180);
            top2 -= 125*Math.cos(count*Math.PI/180);
            box2.style.left = pos2 +'px';
            box2.style.top = top2+'px';
            count2 += 1*frecuencia_angular;
        }
    }
}

function prueba(){
    var amplitud = document.getElementById('amplitud').value;
    var frecuencia_angular = document.getElementById('frecuencia_angular').value;
    var tiempo = document.getElementById('tiempo').value;
    let posicion;
    let velocidad;
    let aceleracion;
    posicion = amplitud*Math.sin(frecuencia_angular*tiempo+90*Math.PI/2);
    velocidad = amplitud*frecuencia_angular*Math.cos(frecuencia_angular*tiempo+90*Math.PI/2);
    aceleracion = -1*amplitud*Math.pow(frecuencia_angular,2)*Math.sin(frecuencia_angular*tiempo+90*Math.PI/2);
    document.getElementById('textoPosicion').innerHTML = "La posición del elemento es:  "+posicion;
    document.getElementById('textoVelocidad').innerHTML = "La velocidad del elemento es: "+velocidad;
    document.getElementById('textoAceleracion').innerHTML = "La aceleración del elemento es: "+aceleracion;
    movimiento();
    agregarAmplitud();
}

function agregarAmplitud(){
    var amplitud = document.getElementById('amplitud').value;
    document.getElementById('textoAmplitudX1').innerHTML = 1*amplitud;
    document.getElementById('textoAmplitudX2').innerHTML = 3*amplitud;
    document.getElementById('textoAmplitudX3').innerHTML = 5*amplitud;
    document.getElementById('textoAmplitudX4').innerHTML = 7*amplitud;
    document.getElementById('textoAmplitudY1').innerHTML = 1*amplitud;
    document.getElementById('textoAmplitudY2').innerHTML = -1*amplitud;
}
