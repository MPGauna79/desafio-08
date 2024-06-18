import './style.css';


//EJERCICIO 1//
let a,b,temp;
a=3;
b=1;
console.log("a="+a+" b="+b);
temp=a;
a=b;
b=temp;


console.log("a="+a+" b="+b);


//EJERCICIO 2//

function mayor(numero1, numero2){
  if (numero1>numero2){
    console.log("el mayor es "+numero1);
  }else if(numero1<numero2){
    console.log("el mayor es "+numero2);
  }
  
} 

mayor(5,4); //cuando nro1 es mayor
mayor(7,8); //cuando nro2 es mayor
mayor(5,5); //cuando son iguales


//EJERCICIO 3//

function par(numero){
  let resultado=numero%2;
  if (resultado==0){
    console.log(numero+" es par");
  }
  else {
    console.log(numero+" es impar");
  }
}

par(8);
par(7);


//EJERCICIO 4//

function preciofinal(precioinicial,porcentajedesc){
  let resultado=precioinicial-(precioinicial*porcentajedesc/100);
  console.log("preciofinal= "+resultado);
}

preciofinal(19000,10);


//EJERCICIO 5//

function area(radio){
  let resultado=3.14*(radio*radio);
  console.log("area= "+resultado)
}

area(10);

//EJERCIOCIO 6//

function temperaturaFarenheit(temperaturaCelsius){
  let resultado=(temperaturaCelsius*1.8)+32;
  console.log("la temperatura farenheit es "+resultado);
}

temperaturaFarenheit(5);


//EJERCICIO 7//

for (let i = 0; i < 10; i++){
  console.log(i)
}


//EJERCICIO 8//

let num=prompt("ingrese numero");
while(num >=0){
  num=prompt("ingrese numero");

}


//EJERCICIO 9//

let numMulti=prompt("ingrese multiplicador");
for (let i=1; i<=10; i ++){
  console.log(numMulti+" x "+i+" = "+i*numMulti);
}


//EJERCICIO 10//

let suma=0;
for (let i=1; i<=100; i ++){
  let espar=i%2;
  if (espar==0){
   suma=suma+i;
  }
}
console.log("la suma de los numeros pares entre 1 y 100 es" + suma)


//EJERCICIO 11//

class persona{
  constructor(nombre,edad,ciudad){
    this.nombre=nombre;
    this.edad=edad;
    this.ciudad=ciudad;
  }
  presentarse(){
    console.log("Hola, que tal, me llamo "+this.nombre+"soy de "+this.ciudad+"tengo "+this.edad+" años");
  }
}

let Jorge=new persona("Jorge",35,"Rio Grande");
Jorge.presentarse();



//EJERCICIO 12//

let Juan=new persona("Juan",47,"Rio Gallegos");
let Pedro=new persona("Pedro",28,"Buenos Aires");
let Jose=new persona("Jose",19,"Cordoba");
let Felipe=new persona("Felipe",57,"Corrientes");
let personas = [Jorge,Juan,Pedro,Jose,Felipe];

for(let i=0;i<personas.length;i++){
  console.log(personas[i].presentarse());
}



//EJERCICIO 13//

function promedio(numeros){
  let suma=0;
  let prom=0;
for(let i=0;i<numeros.length;i++){
  suma=suma+numeros[i];

}
prom=suma/numeros.length;
console.log("el promedio es "+prom);
}

let matnumero=[5,4,9,7,2];
promedio(matnumero);
