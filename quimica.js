    //---------------------------------fórmulas de boyle ----------------------------------------//
function boyle(){
    var p1 = parseFloat(document.getElementById('presion1-b').value);
    var v1 = parseFloat(document.getElementById('volumen1-b').value);
    var p2 = parseFloat(document.getElementById('presion2-b').value);
    var v2 = parseFloat(document.getElementById('volumen2-b').value);

    // variables del resultado final
        var vol1  = parseFloat((v2 * p2)/p1);
        var pres1 = parseFloat((v2 * p2)/v1);
        var pres2 = parseFloat((v1 * p1)/v2);
        var vol2  = parseFloat((v1 * p1)/p2);
    //parte operativa y condicional

          if( p1 > 0 && v1 > 0 && p2 > 0 && v2 > 0){
        alert("All fields cannot be full");
        return 0;
    } else{
        if ( v1 <= 0 | v2 <= 0){
            alert("Volume must be greater than 0");
            return 0;
        } else{
            if (p1 == 0 | p2 == 0){
                alert("Pressure cannot be equal to 0");
                return 0;
                }
            }
        }       
    //el valor faltante es volumen 1//
    if ( p1 > 0 && v2 > 0 && p2 > 0){
        document.getElementById('resultado').innerHTML = vol1.toFixed(2) + ("L");
    }else{ 
        if( p1 < 0 && v2 > 0 && p2 < 0){
            document.getElementById('resultado').innerHTML = vol1.toFixed(2) + ("L");
        } else{

            //el valor faltante es presión 1
            if(v1 > 0 && v2 > 0 && p2 > 0){
                document.getElementById('resultado').innerHTML = pres1.toFixed(2) + ("atm");
            } else{
                if(v1 > 0 && v2 > 0 && p2 < 0){
                    document.getElementById('resultado').innerHTML = pres1.toFixed(2) + ("atm");
                }else{

                // el valor faltante es presion 2             
                    if(v1 > 0 && p1 > 0 && v2 > 0){
                        document.getElementById('resultado').innerHTML = pres2.toFixed(2) + ("atm"); 
                    }else{
                        if(v1 > 0 && p1 < 0 && v2 > 0){
                            document.getElementById('resultado').innerHTML = pres2.toFixed(2) + ("atm");
                        } else{

                            //el valor faltante es volumen 2
                            if( v1 > 0 && p1 > 0 && p2 > 0){
                                document.getElementById('resultado').innerHTML = vol2.toFixed(2) + ("L");
                            }else{
                                if(v1 > 0 && p1 < 0 && p2 < 0){
                                    document.getElementById('resultado').innerHTML = vol2.toFixed(2) + ("L");
                                }    
                            }
                        }                     
                    }
                }
            }
        }
    }
}


/*-----------------------------------------Fórmulas de Charles -------------------------*/

function charles(){
    var t1 = parseFloat(document.getElementById('temperatura1c').value);
    var v1 = parseFloat(document.getElementById('volumen1c').value);
    var t2 = parseFloat(document.getElementById('temperatura2c').value);
    var v2 = parseFloat(document.getElementById('volumen2c').value);

    //variables del resultado final
        var vol1  = parseFloat((v2*t1)/t2);
        var vol2  = parseFloat((t2*v1)/t1);
        var temp1 = parseFloat((v1*t2)/v2);
        var temp2 = parseFloat((v2*t1)/v1);

    //parte operativa y condicional

    if(t1 > 0 && v1 > 0 && t2 > 0 && v2 > 0){
        alert("All fields cannot be full");
        return 0;
    }else{
        if(v1 <= 0 | v2 <= 0){
            alert("Volume must be greater than 0");
            return 0;
        } else{
            if( t1 <= 0 | t2 <= 0){
                alert("Temperature must be greater than 0°K");
                return 0;
            }
        }
    }

     //el valor faltante es volumen 1//
     if ( t1 > 0 && v2 > 0 && t2 > 0){
        document.getElementById('resultado').innerHTML = vol1.toFixed(2) + ("L");
     }else{ 
        if( t1 > 0 && v2 > 0 && t2 > 0){
            document.getElementById('resultado').innerHTML = vol1.toFixed(2) + ("L");
        } else{

            //el valor faltante es temperatura 1
            if(v1 > 0 && v2 > 0 && t2 > 0){
                document.getElementById('resultado').innerHTML = temp1.toFixed(2) + ("°K");
            } else{
                if(v1 > 0 && v2 > 0 && t2 > 0){
                    document.getElementById('resultado').innerHTML = temp1.toFixed(2) + ("°K");
                }else{

                // el valor faltante es temperatura 2             
                    if(v1 > 0 && t1 > 0 && v2 > 0){
                        document.getElementById('resultado').innerHTML = temp2.toFixed(2) + ("°K"); 
                    }else{
                        if(v1 > 0 && t1 > 0 && v2 > 0){
                            document.getElementById('resultado').innerHTML = temp2.toFixed(2) + ("°K");
                        } else{

                            //el valor faltante es volumen 2
                            if( v1 > 0 && t1 > 0 && t2 > 0){
                                document.getElementById('resultado').innerHTML = vol2.toFixed(2) + ("L");
                            }else{
                                if(v1 > 0 && t1 > 0 && t2 > 0){
                                    document.getElementById('resultado').innerHTML = vol2.toFixed(2) + ("L");
                                }    
                            }
                        }                     
                    }
                }
            }
        }
    }
}


//--------------------------------------- Formulas de Gay-Lusacc --------------------------------------//
function lussac(){

    var t1 = parseFloat(document.getElementById('temperatura1l').value);
    var p1 = parseFloat(document.getElementById('presion1l').value);
    var p2 = parseFloat(document.getElementById('presion2l').value);
    var t2 = parseFloat(document.getElementById('temperatura2l').value);
    

    //variables del resultado final
        var pres1 = parseFloat((p2*t1)/t2);
        var pres2 = parseFloat((t2*p1)/t1);
        var temp1 = parseFloat((p1*t2)/p2);
        var temp2 = parseFloat((p2*t1)/p1);

    //parte operativa y condicional

    if(t1 > 0 && p1 > 0 && t2 > 0 && p2 > 0){
        alert("All fields cannot be full");
        return 0;
    }else{
        if(t1 < 0 && p1 < 0 && t2 < 0 && p2 < 0){
            alert("All fields cannot be full");
            return 0;
        }else{
        if(p1 == 0 | p2 == 0){
            alert("pressure should not be 0");
            return 0;
        } else{
            if( t1 <= 0 | t2 <= 0 ){
                alert("Temperature must be greater than 0°K");
                return 0;
            }
        }
    }
}

     //el valor faltante es presión 1//
     if ( t1 > 0 && t2 > 0 && p2 > 0){
        document.getElementById('resultado').innerHTML = pres1.toFixed(2) + (" atm");
     }else{ 
        if( t1 > 0 && t2 > 0 && p2 < 0){
            document.getElementById('resultado').innerHTML = pres1.toFixed(2) + (" atm");
        } else{

            //el valor faltante es temperatura 1
            if(p1 > 0 && p2 > 0 && t2 > 0){
                document.getElementById('resultado').innerHTML = temp1.toFixed(2) + (" °K");
            } else{
                if(p1 < 0 && p2 < 0 && t2 > 0){
                    document.getElementById('resultado').innerHTML = temp1.toFixed(2) + (" °K");
                }else{
                // el valor faltante es temperatura 2             
                    if(p1 > 0 && t1 > 0 && p2 > 0){
                        
                        document.getElementById('resultado').innerHTML = temp2.toFixed(2) + (" °K"); 
                    } else{
                        if(p1 < 0 && t1 > 0 && p2 < 0){
                            console.log(temp2);
                            //document.getElementById('resultado').innerHTML = temp2.toFixed(2) + (" °K");
                        } else{

                            //el valor faltante es presión 2
                            if( p1 > 0 && t1 > 0 && t2 > 0){
                                document.getElementById('resultado').innerHTML = pres2.toFixed(2) + (" atm");
                            }else{
                                if(p1 < 0 && t1 > 0 && t2 > 0){
                                    document.getElementById('resultado').innerHTML = pres2.toFixed(2) + (" atm");
                                }    
                            }
                        }                     
                    }
                }
            }
        }
    }
}

//---------------------------------------------estequiometría----------------------------------------//
function mol(){
    var g = parseFloat(document.getElementById('masa').value);
    var mol = parseFloat(document.getElementById('mol').value);
    var Mr = parseFloat(document.getElementById('masa molar').value);

    if(g>=0 && mol>=0 && Mr>=0){
        alert("All fields cannot be full");
        return 0;
    }
        else{
            if(g<=0 | mol<=0 | Mr<=0){
                alert("Fields must be greater than 0");
                return 0;
            }
        }

    //valor faltante es masa//
    if(mol>0 && Mr>0){
        var masa = mol * Mr;
        document.getElementById('resultado').innerHTML = masa.toFixed(2) + "g";
    }
        else{
            if(g>0 && Mr>0){
                var n = g/Mr;
                document.getElementById('resultado').innerHTML = n.toFixed(2) + "mol";
            }
                else{
                    if(g>0 && mol>0){
                        var mm = g/mol;
                        document.getElementById('resultado').innerHTML = mm.toFixed(2) + "g/mol";
                    }
                }
        }
}