/*Crear un constructor alumno e instanciar los 22 alumnos de la clase de daw
Crear un div contenedor de cartas vacíos y un botón generar. 
El botón generar debe insertar una nueva carta en container 
que muestre los atributos de un alumno elegido de manera aleatoria.
 Hay que verificar que ese alumno no se ha generado antes y que el container 
 no esté lleno (no haya más de 22 alumnos). En caso de haber generado ya a todos los alumnos,
  debe aparecer un alert que te diga que no puede generar más. Poner en cada card un botón que borre dicha card.
  */
import {Alumno} from "./Alumno.js";
  const nombres = ["David", "Kike","Luna","Alicia","Fernando","Hugo","Jose","Juanan","Ortega","Laura","Diana","Santiago","Pepe","Polo","Miguel","Iván","Jose María","Fernando","Jose Antonio", "Sergio","Alejandro"];
  const apellidos = ["Cuevas","Díaz","García","Hernández","Iglesias","Jiménez","Martínez","Nunez","Reina","Padilla","Pascual","Pérez","Rivas","Reyes","Sánchez","Silva","Vaquero","Ramírez","Vázquez","Velasco","Navarro"];
  const colorPelo = ["Castano","Rubio","Pelirrojo","Negro"];
const listaClase = [];
for(let i = 0; i < 21; i++){
    listaClase.push(new Alumno(nombres[i], apellidos[i], colorPelo[Math.floor(Math.random()*colorPelo.length)]));
}
for(let n of listaClase){
    console.log(n);
}
const btn = document.createElement("button");
btn.textContent = "Generar";
btn.classList.add("bg-red-500", "text-white", "font-bold", "py-2", "px-4", "rounded");
document.body.append(btn);
const container =document.createElement("div");
container.classList.add("grid", "grid-cols-7", "gap-4", "container","h-screen");
document.body.append(container);
const alreadyGenerated = [];
let aleatorio;
btn.addEventListener("click", ()=>{
    if(container.children.length < 21){
        do{
            aleatorio = Math.floor(Math.random()*21);
            if(!alreadyGenerated.includes(aleatorio)){
                alreadyGenerated.push(aleatorio);
                let card = document.createElement("div"); //creo un contenedor
                card.classList.add("flex", "flex-col", "justify-center", "items-center", "card",);
                card.id = String(`${aleatorio}`);
                container.append(card);
                card.innerHTML = `<h3 class="font-bold text-xl text-center">${listaClase[aleatorio].Nombre} ${listaClase[aleatorio].Apellidos}</h3>
                <p class="font-light text-lg text-center">Su color de pelo es: ${listaClase[aleatorio].ColorPelo}</p>`;
                //boton delete
                let btnDelete = document.createElement("button");
                btnDelete.textContent = "Borrar";
                btnDelete.classList.add("bg-red-500", "text-white", "font-bold", "py-2", "px-4", "rounded");
                card.append(btnDelete);
                btnDelete.addEventListener("click", ()=>{
                    card.remove();
                    alreadyGenerated.splice(alreadyGenerated.indexOf(parseInt(card.id)), 1);
                });
                break;
                //-------------------------------
            }
        }while(alreadyGenerated.includes(aleatorio));
    }else{
        alert("No puede generar mas");
    }
});

