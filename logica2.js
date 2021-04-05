
var alumno1 = {
    name : "Roberto",
    apellido : "Gomez",
    edad : 35,
    fechaNa : 22/02/1986,
    mate : [5,7,9],
    Hist : [6,9,10],
    Leng : [4,2,6],
    Bio : [6,8,4],
}

var alumno2 = {
    name : "Carlos",
    apellido : "Quitero",
    edad : 25,
    fechaNa : 22/06/1996,
    mate : [6,9,4],
    Hist : [4,5,3],
    Leng : [5,6,7],
    Bio : [2,3,7],
}

var alumno3 = {
    name : "Lalo",
    apellido : "Mir",
    edad : 43,
    fechaNa : 11/04/1977,
    mate : [6,6,4],
    Hist : [2,5,3],
    Leng : [4,6,8],
    Bio : [4,3,6],
}

document.write("<br>")
document.write("Notas de Cada Materia")
document.write("<br>")


var curso = [alumno1, alumno2, alumno3]
for (var i = 0; i <curso.length; i++){
    var alumno = curso[i];
    document.write(alumno.name, " ", alumno.apellido, "</br>");
    document.write(" Nota Trimestre Matematica: ", alumno.mate, "</br>");
    document.write(" Nota Trimestre Historia: ", alumno.Hist, "</br>");
    document.write(" Nota Trimestre Lengua: ", alumno.Leng, "</br>");
    document.write(" Nota Trimestre Biologia: ", alumno.Bio, "</br>");
}

///------------------>resumido arriva<-------------///
/*document.write("</br>");
var matematica = [alumno1, alumno2, alumno3]
for (var i = 0; i< matematica.length; i++){
    var alumno = matematica[i];
    document.write(alumno.apellido , " Nota Trimestre Matematica: ", alumno.mate, "</br>");
}
document.write("</br>");
var historia = [alumno1, alumno2, alumno3]
for (var i = 0; i< historia.length; i++){
    var alumno = historia[i];
    document.write(alumno.apellido , " Nota Trimestre Historia: ", alumno.Hist, "</br>");
}
document.write("</br>");
var lengua = [alumno1, alumno2, alumno3]
for (var i = 0; i< lengua.length; i++){
    var alumno = lengua[i];
    document.write(alumno.apellido , " Nota Trimestre Lengua: ", alumno.Leng, "</br>");
}
document.write("</br>");
var biologia = [alumno1, alumno2, alumno3]
for (var i = 0; i< biologia.length; i++){
    var alumno = biologia[i];
    document.write(alumno.apellido , " Nota Trimestre Biologia: ", alumno.Bio, "</br>");
}
document.write("</br>")
-------------------------------------------------------------------------------------
**/


document.write("<br>")
document.write("Promedio por materia")
document.write("<br>")



var Promedio1 = [alumno1]
for (var i = 0; i <Promedio1.length; i++){
    var alumno = Promedio1[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador1 = 0;
    var acumulador1 = 0;
    var contadorH1 = 0;
    var acumuladorH1 = 0;
    var contadorL1 = 0;
    var acumuladorL1 = 0;
    var contadorB1 = 0;
    var acumuladorB1 = 0;
    
    alumno.mate.forEach(e=>{
        if (e>0){
            contador1+=1
            acumulador1+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH1+=1
            acumuladorH1+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL1+=1
            acumuladorL1+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB1+=1
            acumuladorB1+=j;
        }
    }) 
}
document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Matematica: ", acumulador1/contador1);
document.write("<br>")
document.write("Promedio Historia: ", acumuladorH1/contadorH1);
document.write("<br>")
document.write("Promedio Lengua: ", acumuladorL1/contadorL1);
document.write("<br>")
document.write("Promedio Biologia: ", acumuladorB1/contadorB1);
document.write("<br>")

/*/console.log(Promate)
console.log(ProBio)
console.log(ProHist)
console.log(ProLeng)
console.log(acumulador1/contador1)
console.log(acumuladorB1/contadorB1)
console.log(acumuladorL1/contadorL1)
console.log(acumuladorH1/contadorH1)
console.log((acumulador1/contador1 + acumuladorB1/contadorB1 + acumuladorL1/contadorL1 + acumuladorH1/contadorH1)/4 )/*/

var Promedio2 = [alumno2]
for (var i = 0; i <Promedio2.length; i++){
    var alumno = Promedio2[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador2 = 0;
    var acumulador2 = 0;
    var contadorH2 = 0;
    var acumuladorH2 = 0;
    var contadorL2 = 0;
    var acumuladorL2 = 0;
    var contadorB2 = 0;
    var acumuladorB2 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contador2+=1
            acumulador2+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH2+=1
            acumuladorH2+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL2+=1
            acumuladorL2+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB2+=1
            acumuladorB2+=j;
        }
    }) 
}
document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Matematica: ", acumulador2/contador2);
document.write("<br>")
document.write("Promedio Historia: ", acumuladorH2/contadorH2);
document.write("<br>")
document.write("Promedio Lengua: ", acumuladorL2/contadorL2);
document.write("<br>")
document.write("Promedio Biologia: ", acumuladorB2/contadorB2);
document.write("<br>")

var Promedio3 = [alumno3]
for (var i = 0; i <Promedio3.length; i++){
    var alumno = Promedio3[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador3 = 0;
    var acumulador3 = 0;
    var contadorH3 = 0;
    var acumuladorH3 = 0;
    var contadorL3 = 0;
    var acumuladorL3 = 0;
    var contadorB3 = 0;
    var acumuladorB3 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contador3+=1
            acumulador3+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH3+=1
            acumuladorH3+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL3+=1
            acumuladorL3+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB3+=1
            acumuladorB3+=j;
        }
    }) 
}
document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Matematica: ", acumulador3/contador3);
document.write("<br>")
document.write("Promedio Historia: ", acumuladorH3/contadorH3);
document.write("<br>")
document.write("Promedio Lengua: ", acumuladorL3/contadorL3);
document.write("<br>")
document.write("Promedio Biologia: ", acumuladorB3/contadorB3);
document.write("<br>")

document.write("<br>")
document.write("Mejor alumno segun promedio")
document.write("<br>")
var PormeAlumno = [alumno1]
for (var i = 0; i <PormeAlumno.length; i++){
    var alumno = PormeAlumno[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contadorP1 = 0;
    var acumuladorP1 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contadorP1+=1
            acumuladorP1+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorP1+=1
            acumuladorP1+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorP1+=1
            acumuladorP1+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorP1+=1
            acumuladorP1+=j;
        }
    }) 
}

document.write("<br>")
document.write( alumno1.name, " " , alumno1.apellido, "</br>", "Promedio Año Alumno: ", acumuladorP1/contadorP1);

var PormeAlumno2 = [alumno2]
for (var i = 0; i <PormeAlumno2.length; i++){
    var alumno = PormeAlumno2[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contadorP2 = 0;
    var acumuladorP2 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contadorP2+=1
            acumuladorP2+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorP2+=1
            acumuladorP2+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorP2+=1
            acumuladorP2+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorP2+=1
            acumuladorP2+=j;
        }
    }) 
}

document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Año Alumno: ", acumuladorP2/contadorP2);

var PormeAlumno3 = [alumno3]
for (var i = 0; i <PormeAlumno3.length; i++){
    var alumno = PormeAlumno3[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contadorP3 = 0;
    var acumuladorP3 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contadorP3+=1
            acumuladorP3+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorP3+=1
            acumuladorP3+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorP3+=1
            acumuladorP3+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorP3+=1
            acumuladorP3+=j;
        }
    }) 
}

document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Año Alumno: ", acumuladorP3/contadorP3);

var proAlum1 = acumuladorP1/contadorP1
var proAlum2 = acumuladorP2/contadorP2
var proAlum3 = acumuladorP3/contadorP3
var mejoralumno = [proAlum1, proAlum2, proAlum3]
mejoralumno.sort(function(a, b){
    return a - b;
});
/*/console.log(mejoralumno)/*/

document.write("<br>")
document.write("<br>")
document.write("Aprobado O Cuando Rinde")
document.write("<br>")

/*/
var pasanopasa1 = [alumno1]
for (var i = 0; i <pasanopasa1.length; i++){
    var alumno = pasanopasa1[i];
    var ProMedio1 = acumulador1/contador1;
    var ProMedioH1 = acumuladorH1/contadorH1;
    var ProMedioL1 = acumuladorL1/contadorL1;
    var ProMedioB1 = acumuladorB1/contadorB1;
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
document.write("<br>")
document.write(alumno.name, " ", alumno.apellido, " ", "</br>", "Matematicas" )
document.write("<br>")
console.log(ProHist)
console.log(ProMedioH1)
console.log(ProLeng)
console.log(ProBio)

        if(ProMedio1 >= 6){
            document.write("Matematica Aprovada")
        }
        else if (ProMedio1 <= 4){
             document.write("Matematica a Marzo")
        }
        else if (ProMedio1 < 6 || Promate < 6 ){
             document.write("Matemarica a Diciembre")
        }
        else if (ProMedio1 >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Historia" )
document.write("<br>")
        if(ProMedioH1 >= 6){
            document.write("Historia Aprovada")
        }
        else if (ProMedioH1 <= 4){
             document.write("Historia a Marzo")
        }
        else if (ProMedioH1 < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (ProMedioH1 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Lengua" )
document.write("<br>")
        if(ProMedioL1 >= 6){
            document.write("Lengua Aprovada")
        }
        else if (ProMedioL1 <= 4){
             document.write("Lengua a Marzo")
        }
        else if (ProMedioL1 < 6 || ProLeng < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (ProMedioL1 >= 6 && ProLeng < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Biologia" )
document.write("<br>")
        if(ProMedioB1 >= 6){
            document.write("Biologia Aprovada")
        }
        else if (ProMedioB1 <= 4){
            document.write("Biologia a Marzo")
        }
        else if (ProMedioB1 < 6 || ProBio < 6 ){
            document.write("Biologia a Diciembre")
        }
        else if (ProMedioB1 >= 6 && ProBio < 6 ){
            document.write("Se lleva Todos los trimestres menores a 6")
}
}
document.write("<br>")
document.write("<br>")

var pasanopasa2 = [alumno2]
for (var i = 0; i <pasanopasa2.length; i++){
    var alumno = pasanopasa2[i];
    var ProMedio2 = acumulador2/contador2;
    var ProMedioH2 = acumuladorH2/contadorH2;
    var ProMedioL2 = acumuladorL2/contadorL2;
    var ProMedioB2 = acumuladorB2/contadorB2;
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
document.write("<br>")
document.write(alumno.name, " ", alumno.apellido, " ", "</br>", "Matematicas" )
document.write("<br>")

        if(ProMedio2 >= 6){
            document.write("Matematica Aprovada")
        }
        else if (ProMedio2 <= 4){
             document.write("Matematica a Marzo")
        }
        else if (ProMedio2 < 6 || Promate < 6 ){
             document.write("Matemarica a Diciembre")
        }
        else if (ProMedio2 >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Historia" )
document.write("<br>")
        if(ProMedioH2 >= 6){
            document.write("Historia Aprovada")
        }
        else if (ProMedioH2 <= 4){
             document.write("Historia a Marzo")
        }
        else if (ProMedioH2 < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (ProMedioH2 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Lengua" )
document.write("<br>")
        if(ProMedioL2 >= 6){
            document.write("Lengua Aprovada")
        }
        else if (ProMedioL2 <= 4){
             document.write("Lengua a Marzo")
        }
        else if (ProMedioL2 < 6 || ProLeng < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (ProMedioL2 >= 6 && ProLeng < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Biologia" )
document.write("<br>")
        if(ProMedioB2 >= 6){
            document.write("Biologia Aprovada")
        }
        else if (ProMedioB2 <= 4){
            document.write("Biologia a Marzo")
        }
        else if (ProMedioB2 < 6 || ProBio < 6 ){
            document.write("Biologia a Diciembre")
        }
        else if (ProMedioB2 >= 6 && ProBio < 6 ){
            document.write("Se lleva Todos los trimestres menores a 6")
}
}
document.write("<br>")
document.write("<br>")

var pasanopasa3 = [alumno3]
for (var i = 0; i <pasanopasa3.length; i++){
    var alumno = pasanopasa3[i];
    var ProMedio3 = acumulador3/contador3;
    var ProMedioH3 = acumuladorH3/contadorH3;
    var ProMedioL3 = acumuladorL3/contadorL3;
    var ProMedioB3 = acumuladorB3/contadorB3;
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
document.write("<br>")
document.write(alumno.name, " ", alumno.apellido, " ", "</br>", "Matematicas" )
document.write("<br>")

        if(ProMedio3 >= 6){
            document.write("Matematica Aprovada")
        }
        else if (ProMedio3 <= 4){
             document.write("Matematica a Marzo")
        }
        else if (ProMedio3 < 6 || Promate < 6 ){
             document.write("Matemarica a Diciembre")
        }
        else if (ProMedio3 >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Historia" )
document.write("<br>")
        if(ProMedioH3 >= 6){
            document.write("Historia Aprovada")
        }
        else if (ProMedioH3 <= 4){
             document.write("Historia a Marzo")
        }
        else if (ProMedioH3 < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (ProMedioH3 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Lengua" )
document.write("<br>")
        if(ProMedioL3 >= 6){
            document.write("Lengua Aprovada")
        }
        else if (ProMedioL3 <= 4){
             document.write("Lengua a Marzo")
        }
        else if (ProMedioL3 < 6 || ProLeng < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (ProMedioL3 >= 6 && ProLeng < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Biologia" )
document.write("<br>")
        if(ProMedioB3 >= 6){
            document.write("Biologia Aprovada")
        }
        else if (ProMedioB3 <= 4){
            document.write("Biologia a Marzo")
        }
        else if (ProMedioB3 < 6 || ProBio < 6 ){
            document.write("Biologia a Diciembre")
        }
        else if (ProMedioB3 >= 6 && ProBio < 6 ){
            document.write("Se lleva Todos los trimestres menores a 6")
}
}/*/

 
function aprobadoMath (){ 

    document.write("</br>")
    document.write("</br>")
    document.write("MATEMATICA")
    document.write("</br>")
    document.write("</br>")

    document.write(alumno1.apellido, " ", alumno1.name, "</br>")
    if(acumulador1/contador1 >= 6){
        document.write("Matematica Aprobada")
    }
    else if (acumulador1/contador1 <= 4){
         document.write("Matematica a Marzo")
    }
    else if (acumulador1/contador1 < 6 || Promate < 6 ){
         document.write("Matemarica a Diciembre")
    }
    else if (acumulador1/contador1 >= 6 && Promate < 6 ){
         document.write("Se lleva Todos los trimestres menores a 6")
    }
    document.write("</br>")
    document.write(alumno2.apellido, " ", alumno2.name, "</br>")
    if(acumulador2/contador2 >= 6){
        document.write("Matematica Aprobada")
    }
    else if (acumulador2/contador2 <= 4){
         document.write("Matematica a Marzo")
    }
    else if (acumulador2/contador2 < 6 || Promate < 6 ){
         document.write("Matemarica a Diciembre")
    }
    else if (acumulador2/contador2 >= 6 && Promate < 6 ){
         document.write("Se lleva Todos los trimestres menores a 6")
    }
    document.write("</br>")
    document.write(alumno3.apellido, " ", alumno3.name, "</br>")
    if(acumulador3/contador3 >= 6){
        document.write("Matematica Aprobada")
    }
    else if (acumulador3/contador3 <= 4){
         document.write("Matematica a Marzo")
    }
    else if (acumulador3/contador3 < 6 || Promate < 6 ){
         document.write("Matemarica a Diciembre")
    }
    else if (acumulador3/contador3 >= 6 && Promate < 6 ){
         document.write("Se lleva Todos los trimestres menores a 6")
    }
}
aprobadoMath();

function aprobadoHist(){
        document.write("</br>")
        document.write("</br>")
        document.write("HISTORIA")
        document.write("</br>")
        document.write("</br>")
        document.write(alumno1.apellido, " ", alumno1.name, "</br>")
        
        if(acumuladorH1/contadorH1 >= 6){
            document.write("Historia Aprobada")
        }
        else if (acumuladorH1/contadorH1 <= 4){
             document.write("Historia a Marzo")
        }
        else if (acumuladorH1/contadorH1 < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (acumuladorH1/contadorH1 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
        
        document.write("</br>")
        document.write(alumno2.apellido, " ", alumno2.name, "</br>")

        if(acumuladorH2/contadorH2 >= 6){
            document.write("Historia Aprobada")
        }
        else if (acumuladorH2/contadorH2 <= 4){
             document.write("Historia a Marzo")
        }
        else if (acumuladorH2/contadorH2 < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (acumuladorH2/contadorH2 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
        document.write("</br>")
        document.write(alumno3.apellido, " ", alumno3.name, "</br>")

        if(acumuladorH3/contadorH3 >= 6){
            document.write("Historia Aprobada")
        }
        else if (acumuladorH3/contadorH3 <= 4){
             document.write("Historia a Marzo")
        }
        else if (acumuladorH3/contadorH3 < 6 || Promate < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (acumuladorH3/contadorH3 >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
}
aprobadoHist();

function aprobadoLeng(){

    document.write("</br>")
        document.write("</br>")
        document.write("LENGUA")
        document.write("</br>")
        document.write("</br>")
        document.write(alumno1.apellido, " ", alumno1.name, "</br>")
        
        if(acumuladorL1/contadorL1 >= 6){
            document.write("Lengua Aprobada")
        }
        else if (acumuladorL1/contadorL1 <= 4){
             document.write("Lengua a Marzo")
        }
        else if (acumuladorL1/contadorL1 < 6 || ProHist < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (acumuladorL1/contadorL1 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
        
        document.write("</br>")
        document.write(alumno2.apellido, " ", alumno2.name, "</br>")

        if(acumuladorL2/contadorL2 >= 6){
            document.write("Lengua Aprobada")
        }
        else if (acumuladorL2/contadorL2 <= 4){
             document.write("Lengua a Marzo")
        }
        else if (acumuladorL2/contadorL2 < 6 || ProHist < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (acumuladorL2/contadorL2 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
        document.write("</br>")
        document.write(alumno3.apellido, " ", alumno3.name, "</br>")

        if(acumuladorL3/contadorL3 >= 6){
            document.write("Lengua Aprobada")
        }
        else if (acumuladorL3/contadorL3 <= 4){
             document.write("Lengua a Marzo")
        }
        else if (acumuladorL3/contadorL3 < 6 || Promate < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (acumuladorL3/contadorL3 >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
}
aprobadoLeng();

function aprobadoBio(){
    document.write("</br>")
        document.write("</br>")
        document.write("BIOLAGIA")
        document.write("</br>")
        document.write("</br>")
        document.write(alumno1.apellido, " ", alumno1.name, "</br>")
        
        if(acumuladorB1/contadorB1 >= 6){
            document.write("Biologia Aprobada")
        }
        else if (acumuladorB1/contadorB1 <= 4){
             document.write("Biologia a Marzo")
        }
        else if (acumuladorB1/contadorB1 < 6 || ProHist < 6 ){
             document.write("Biologia a Diciembre")
        }
        else if (acumuladorB1/contadorB1 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
        
        document.write("</br>")
        document.write(alumno2.apellido, " ", alumno2.name, "</br>")

        if(acumuladorB2/contadorB2 >= 6){
            document.write("Biologia Aprobada")
        }
        else if (acumuladorB2/contadorB2 <= 4){
             document.write("Biologia a Marzo") 
        }
        else if (acumuladorB2/contadorB2 < 6 || ProHist < 6 ){
             document.write("Biologia a Diciembre")
        }
        else if (acumuladorB2/contadorB2 >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
        document.write("</br>")
        document.write(alumno3.apellido, " ", alumno3.name, "</br>")

        if(acumuladorB3/contadorB3 >= 6){
            document.write("Biologia Aprobada")
        }
        else if (acumuladorB3/contadorB3 <= 4){
             document.write("Biologia a Marzo")
        }
        else if (acumuladorB3/contadorB3 < 6 || Promate < 6 ){
             document.write("Biologia a Diciembre")
        }
        else if (acumuladorB3/contadorB3 >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
}
aprobadoBio();

/*/
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador = 0;
    var acumulador = 0;
    var contadorH = 0;
    var acumuladorH = 0;
    var contadorL = 0;
    var acumuladorL = 0;
    var contadorB = 0;
    var acumuladorB = 0;


function promedioAlmn(){
    var Promedio1 = [alumno1,alumno2,alumno3]
    for (var i = 0; i <Promedio1.length; i++){
    var alumno = Promedio1[i];
    

    alumno.mate.forEach(e=>{
        if (e>0){
            contador+=1
            acumulador+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH+=1
            acumuladorH+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL+=1
            acumuladorL+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB+=1
            acumuladorB+=j;
        }
    }) 
}}
promedioAlmn(alumno1.name, " ", alumno1.apellido, " ", "Promedio de materias");


console.log(alumno1.acumulador)/*/