
 // ---------------------------------------------- Área ----------------------------------------//

function cuadrado(){
    var l = parseFloat(document.getElementById('lado').value);
    var a = parseFloat(l)*parseFloat(l);

    if (l <= 0){
        alert("The side must be different from 0 or a negative number");
        return 0;
    } else{
            document.getElementById('resultado').innerHTML = a.toFixed(2);
            return 0;
        }
    }

function circulo(){
    var r = parseFloat(document.getElementById('radio').value);
    var d = parseFloat(document.getElementById('diametro').value);
    const pi = 3.14;


    if (r > 0 && d > 0){
        alert("both fields cannot be full")
        return 0;
    }
    else if(d <= 0 ){
        alert("The diameter must be different from 0 or a negative number.");
        return 0;
    } 
    else if(r <= 0){
        alert("The radius must be different from 0 or a negative number.");
        return 0;
    } 
    else if( d > 0 ){
        var diametro2 = d / 2;
        var radio2 =(parseFloat(diametro2)* parseFloat(diametro2) * parseFloat(pi));
        document.getElementById('resultado').innerHTML = radio2.toFixed(2);
        return 0;
    }
     else if( r > 0){
        var solucion =(parseFloat(r)* parseFloat(r)) * parseFloat(pi); 
        document.getElementById('resultado').innerHTML = solucion.toFixed(2);
        return 0;
    }
}

function rectangulo(){
    var b = parseFloat(document.getElementById('base').value);
    var h = parseFloat(document.getElementById('altura').value);
    var r = parseFloat(b) * parseFloat(h);

    if (b <= 0 | h <= 0){
        alert("The base or height must be different from 0 or a negative number.");
        return 0;
    } else{
            document.getElementById('resultado').innerHTML = r.toFixed(2);
            return 0;
        }

    }


function triangulo(){
    var b = parseFloat(document.getElementById('base').value)
    var h = parseFloat(document.getElementById('altura').value);
    var r = (parseFloat(b) * parseFloat(h))/2;

    if (b <= 0 | h <= 0){
        alert("The base or height must be greater than 0");
        return 0;
    } else{
            document.getElementById('resultado').innerHTML = r.toFixed(2);
            return 0;
        }
}
//---------------------------------------------Perímetro------------------------------------------------//

function cuadradop(){
    var l = parseFloat(document.getElementById('ladop').value);

    if (l <= 0){
        alert("The side must be different from 0 or a negative number.");
        return 0;
    } else{
            var r = parseFloat(l)*4;
            document.getElementById('resultado').innerHTML = r.toFixed(2);
            return 0;
        }
    }


    function circulop(){
        var r = parseFloat(document.getElementById('radio').value);
        var d = parseFloat(document.getElementById('diametro').value);
        const pi = 3.14;
    
    
        if (r > 0 && d > 0){
            alert("both fields cannot be full")
            return 0;
        }
    
        if(d <= 0 ){
            alert("The diameter must be different from 0 or a negative number.");
            return 0;
        } else{
            if(r <= 0){
            alert("The radius must be different from 0 or a negative number.");
            return 0;
        } else{
            if( d > 0 ){
                var diametrop = d / 2;
            var perimetro =((parseFloat(pi) * 2) * parseFloat(diametrop));
            document.getElementById('resultado').innerHTML = perimetro.toFixed(2);
            return 0;
            }
         else{
            if( r > 0){
                var solucionp =(parseFloat(pi) * 2) * parseFloat(r); 
                document.getElementById('resultado').innerHTML = solucionp.toFixed(2);
                return 0;
            }
        }
    }       
    }
}
    function triangulop(){

    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var r = a+b+c;

    if( a <= 0 | b <= 0 | c <= 0){
        alert("Side must be greater than 0");
        return 0;
    } else{
        document.getElementById('resultado').innerHTML = r.toFixed(2);
        return 0;
    }
}

function rectangulop2(){
    var b = parseFloat(document.getElementById('base2').value);
    var h = parseFloat(document.getElementById('altura2').value);
    var r = b+b+h+h;

    if (b <= 0 | h <= 0){
        alert("The base or height must be greater than 0");
        return 0;
    } else{
            document.getElementById('resultado').innerHTML = r.toFixed(2);
            return 0;
        }
    }


//--------------------------------------------volumen------------------------------------------------------//    

function cubo(){
    var l = parseFloat(document.getElementById('lado-v').value);
    var V = l*l*l;
    
    if(l <= 0){
        alert("Side must be greater than 0");
        return 0;

    } 
        else{
            document.getElementById('resultado').innerHTML = V.toFixed(2);
            return 0;
       }
}

function ortoedro(){
    var a = parseFloat(document.getElementById('ladoa-v').value);
    var b = parseFloat(document.getElementById('ladob-v').value);
    var c = parseFloat(document.getElementById('ladoc-v').value);

    if(a <= 0 | b <= 0 | c <= 0){
        alert("Side must be greater than 0");
        return 0;
    } else{
        var V = a*b*c;

        document.getElementById('resultado').innerHTML = V.toFixed(2);
    }
}

function esfera(){
    var r = parseFloat(document.getElementById('radio-v').value);
    var d = parseFloat(document.getElementById('diametro-v').value);
    const pi = 3.14;

    if (r > 0 && d > 0){
        alert("both fields cannot be full");
        return 0;
    } 
      else{
            if( r <= 0 | d <= 0){
                alert("Field cannot be a negative number");
                return 0;
            }
        }

    if(r > 0){
        var r3 = r*r*r;
        var v = (((4/3)*pi)*r3);
        document.getElementById('resultado').innerHTML = v.toFixed(2);
    }    
        else{
            if(d > 0){
                var dfinal = d / 2;
                var r3 = dfinal*dfinal*dfinal;
                var v = (((4/3)*pi)*r3);
                document.getElementById('resultado').innerHTML = v.toFixed(2);
            }
        }
}


function cilindro(){
    var r = parseFloat(document.getElementById('radio-c').value);
    var d = parseFloat(document.getElementById('diametro-c').value);
    var h = parseFloat(document.getElementById('altura-c').value);
    const pi = 3.14;


    if(r>=0 && d>=0 ){
        alert("Radius and diameter cannot be full");
    } 

    if(r<=0 | d<=0 | h<=0 ){
        alert("Fields must be greater than 0");
    }

    if(r>0){
        var ab = ((parseFloat(r)* parseFloat(r)) * parseFloat(pi))*h;

        document.getElementById('resultado').innerHTML = ab.toFixed(2);
        return 0;
    }
        else{
            if(d>0){
                var r2=d/2;
                var abd= ((parseFloat(r2)* parseFloat(r2)) * parseFloat(pi))*h;

                document.getElementById('resultado').innerHTML = abd.toFixed(2);
                return 0;
            }
        }
}

function cono(){

    var r = parseFloat(document.getElementById('radio-cono').value);
    var h = parseFloat(document.getElementById('altura-cono').value);
    var r2 = r*r;
    var pi = 3.14;

    if(r<=0 | h<=0){
        alert("Fields must be greater than 0");
        return 0;
    }

    if(r>0 && h>0){
        var formula = ((pi*r2)*h) / 3;
        document.getElementById('resultado').innerHTML = formula.toFixed(2);
    }
}

function piramide(){
    var b = parseFloat(document.getElementById('base-piramide').value);
    var h = parseFloat(document.getElementById('altura-piramide').value);

    if(b<=0 | h<= 0){
        alert("Sides must be greater than 0");
    }

    if(b>0 && h>0){
        var formula = (b*h)/3;
        document.getElementById('resultado').innerHTML = formula.toFixed(2);
    }
}

//---------------------------------------------teoremas-------------------------------------------------//

//---------------------------------------------pitagoras--------------------------------------------//
function pitagoras(){
    var h = parseFloat(document.getElementById('hipotenusa').value);
    var co = parseFloat(document.getElementById('cateto1').value);
    var ca = parseFloat(document.getElementById('cateto2').value);

    if(h>=0 && ca>=0 && co>=0){
        alert("All fields cannot be full");
        return 0;
    } 
    else if(h<=0 | ca<=0 | co<=0){
        alert("Sides must be greater than 0");
        return 0;
    }

    if(co>0 && ca>0){
        var result = Math.sqrt((ca*ca)+(co*co));
        document.getElementById('resultado').innerHTML = result.toFixed(2);
    }
    else if(h>0 && ca>0){
        var resulthca = Math.sqrt((h*h)-(ca*ca));
        document.getElementById('resultado').innerHTML = resulthca.toFixed(2);
    }
    else if(h>0 && co>0){
        var resulthco = Math.sqrt((h*h)-(co*co));
        document.getElementById('resultado').innerHTML = resulthco.toFixed(2);
    }
    }


//-------------------------------------------teorema del seno----------------------------------------------//

function seno(){
    var a= parseFloat(document.getElementById('a').value);
    var b= parseFloat(document.getElementById('b').value);
    var c= parseFloat(document.getElementById('c').value);
    var angle_a= parseFloat(document.getElementById('angle-a').value);
    var angle_b= parseFloat(document.getElementById('angle-b').value);
    var angle_c= parseFloat(document.getElementById('angle-c').value);

    if(a<=0 | b<=0 | c<=0){
        alert("Data must be greater than 0");
    }
        if(a>0 && b>0 && c>0 && angle_a>=0 && angle_b>=0 && angle_c>=0){                                                           
            alert("All fields cannot be full");
        }

       //console.log(Math.sin(30))

        //-------------------falta el lado a---------------------//
        if(b>0 && angle_a>0 && angle_b>=0 ){
            const a_value = b*(Math.sin(angle_a)/Math.sin(angle_b));

            if (a_value <= 0){
                alert("your triangle does not comply with the fundamental theorem of triangles.")
            }
            else{
                document.getElementById('resultado').innerHTML = a_value.toFixed(2)+(" (Side A)");
            }
        }
        //-------------------falta el lado b---------------------//
        else if(a>0 && angle_a>=0 && angle_b>=0){
            const b_value = a*(Math.sin(angle_b)/Math.sin(angle_a));

            if (b_value <= 0){
                alert("your triangle does not comply with the fundamental theorem of triangles.")
            }
            else{
                document.getElementById('resultado').innerHTML = b_value.toFixed(2)+(" (Side B)");
            }
        }

        //-------------------falta el lado c---------------------//
        else if(a>0 && angle_a>0 && angle_c>=0){
            const c_value = a*(Math.sin(angle_c)/Math.sin(angle_a));

            if (c_value <= 0){
                alert("your triangle does not comply with the fundamental theorem of triangles.")
            }
            else{
                document.getElementById('resultado').innerHTML = c_value.toFixed(2)+(" (Side C)");
            }
        }

        //-------------------falta el angle(A)---------------------//
        else if(a>0 && c>0){
            const angle_a_value = Math.asin(a/c);
            document.getElementById('resultado').innerHTML = angle_a_value.toFixed(2)+("° (Angle A)");
        }

        //-------------------falta el angle(B)---------------------//
        else if(a>0 && b>0){
            const angle_b_value = Math.asin(b/c);
            document.getElementById('resultado').innerHTML = angle_b_value.toFixed(2)+("° (Angle B)");
        }

        //--------------------falta el seno(C)-------------------//
        else if(c>0 && a>0){
            const angle_c_value = Math.asin(c/a);
            document.getElementById('resultado').innerHTML = angle_c_value.toFixed(2)+("° (Angle C)");
        }        
}