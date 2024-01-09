/*---------------------------MRU-----------------------------------*/ 
function distancia(){
    /*variables*/
    var v = parseFloat(document.getElementById('velocidad').value);
    var t = parseFloat(document.getElementById('tiempo').value);
    var distancia = parseFloat(v) * parseFloat(t);

    /*operacion y validacion de campos*/
    if (v <= 0 | t <= 0){
        alert("The velocity must be different from 0 or a negative number.");
        return 0;
    } else{
            document.getElementById('resultado').innerHTML = distancia.toFixed(2) + ("m");
            return 0;
        }
    }

function velocidad(){
    var d = parseFloat(document.getElementById('distancia').value);
    var t = parseFloat(document.getElementById('tiempo').value);

    if(d <= 0 | t <= 0){
        alert("The distance or time must be different from 0 or a negative number.");
        return 0;
    } else{
        var velocidad = parseFloat(d) / parseFloat(t);
        document.getElementById('resultado').innerHTML = velocidad.toFixed(2) + ("m/s");
        return 0;
    }
}

function tiempo(){
    var d = parseFloat(document.getElementById('distancia').value);
    var v = parseFloat(document.getElementById('velocidad').value);

    if(d <= 0 | v <= 0){
        alert("The distance or speed must be different from 0 or a negative number.");
        return 0;
    } else{
        var tiempo = parseFloat(d) / parseFloat(v);
        document.getElementById('resultado').innerHTML = tiempo.toFixed(2) + ("s");
        return 0;
    }
}

/*---------------------------MRUA-----------------------------------*/ 
/**------------------Aceleracion----------------------- */
function acelerate(){
    var d1 = parseFloat(document.getElementById('distancia-i').value);
    var d2 = parseFloat(document.getElementById('distancia-f').value);
    var  t = parseFloat(document.getElementById('tiempo').value);
    var  acelerar = (d2-d1)/t;

    
    if(d1 <= 0 | d2 <= 0){
        alert("The distance is not a vector, it must be greater than 0.");
        return 0;
    }

    if(t <= 0){
        alert("Time must be greater than 0");
        return 0;
    }

    document.getElementById('resultado').innerHTML = acelerar.toFixed(2) + ("m/s2");
        return 0;
}


/**----------------------------Velocidad------------------------ */
function speed_mrua(){
    var sp1 = parseFloat(document.getElementById('speed-i').value);
    var acc = parseFloat(document.getElementById('acceleration-i').value);
    var  t = parseFloat(document.getElementById('tiempo').value);

    if(sp1<=0 | t<0){
        alert("Data must be greater than 0 or 0");
        return 0;
    }
    else{
        const formula_fspeed = (sp1+(acc*t));
        document.getElementById('resultado').innerHTML = formula_fspeed.toFixed(2)+("m/s");
    }
}

/**----------------------------Distancia-------------------- */
function distancia_mrua(){
    var di1 = parseFloat(document.getElementById('distancia-i').value);
    var sp1 = parseFloat(document.getElementById('speed-i').value);
    var acc = parseFloat(document.getElementById('acceleration-i').value);
    var  t = parseFloat(document.getElementById('tiempo').value);

    if(di1<0 | sp1<=0 | t<0){
        alert("Data must be greater than 0 or 0");
        return 0;
    }
    else{
        const formula_fdistancia = (di1+(sp1*t)+((acc*t)/2));
        document.getElementById('resultado').innerHTML = formula_fdistancia.toFixed(2)+("m");
    }
}

/*---------------------------ENERGIA POTENCIAL-----------------------------------*/ 
function potencial(){
    const g = 10;
    var ep = parseFloat(document.getElementById('ep').value);
    var m = parseFloat(document.getElementById('masa-ep').value);
    var h = parseFloat(document.getElementById('altura-ep').value);

    if(ep<=0 | m<=0 | h<=0){
        alert("Data must be greater than 0");
        return 0;
    }
        else{
            if(ep>0 && m>0 && h>0){
                alert("All fields cannot be full");
                return 0;
            }
        }

    if (m>0 && h>0){
        const formulaep = m*g*h;
        document.getElementById('resultado').innerHTML = ("The Potential Energy result is ") + formulaep.toFixed(2) + (" Jouls");
    }
        else{
            if(ep>0 && m>0){
                const formulah = (ep/(m*g));
                document.getElementById('resultado').innerHTML = ("The Height is") + formulah.toFixed(2) + (" m");
            }
                else{
                    if(ep>0 && h>0){
                        const formulam = (ep / (h*g));
                        document.getElementById('resultado').innerHTML = ("The Mass is ") + formulam.toFixed(2) + (" Kg");
                    }
                }
        }
}

/*---------------------------ENERGIA CINETICA-----------------------------------*/ 
function kinetics(){
    var ec = parseFloat(document.getElementById('ec').value);
    var m = parseFloat(document.getElementById('masa-ec').value);
    var v = parseFloat(document.getElementById('velocidad-ec').value);

    if(ec<0 | m<=0 | v<0){
        alert("Data must be greater than 0 or 0");
        return 0;
    }
    else if(ec>0 && m>0 && v>0){
        alert("All fields cannot be full");
        return 0;
    }

    /*---------------Formulas-------------*/ 
    if (m>0 && v>0){
        const formulaec = ((m*(v*v))/2);
        document.getElementById('resultado').innerHTML = ("The Kinetics Energy result is ") + formulaec.toFixed(2) + (" Jouls");
    }
    else if(ec>0 && m>0){
        const formulavel = Math.sqrt(((2*ec)/m));
        document.getElementById('resultado').innerHTML = ("The Speed is ") + formulavel.toFixed(2) + (" m/s");
    }
    else if(ec>0 && v>0){
            const formulamass = ((2*ec)/(v*v));
            document.getElementById('resultado').innerHTML = ("The Mass is ") + formulamass.toFixed(2) + (" Kg");
    }
}

