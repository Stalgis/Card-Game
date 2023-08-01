const divCartas= document.getElementById("div-cartas")
const ListaCartas= document.getElementById("lista-carta")
const divErrores=document.getElementById("errores")
let itemLista= document.querySelectorAll(".item") /*Devuelve una lista con todos los que tienen ese ID*/
const arrayItemLista= Array.from(itemLista)
let itemRandom=[]
let clickeados=[]
let errores=0

ListaCartas.innerHTML=""/*ELimino todo lo de adentro para agregarlo en oden aleatorio*/
while (itemRandom.length<16) {
    let indiceAleatorio = Math.floor(Math.random() * arrayItemLista.length);
    let palabraAleatoria = arrayItemLista[indiceAleatorio];
    itemRandom.push(palabraAleatoria)
    arrayItemLista.splice(indiceAleatorio,1)
}

for (let index = 0; index < itemRandom.length; index++) {
    const element = itemRandom[index];
    ListaCartas.innerHTML+="<li class='item start'>"+element.textContent+"</li"
}

itemLista= document.querySelectorAll(".item")
/*Uso foreach para que a cada uno de los items se le agregue el listener*/
itemLista.forEach(item => {
    item.addEventListener("click", () => {
      console.log("Haz hecho clic en un elemento de la lista:", item.textContent);
      item.classList.add("dado-vuelta")
      clickeados.push(item)
      if (clickeados.length===2) {
        if (clickeados[0].textContent===clickeados[1].textContent) {
            console.log("advina")
            clickeados.splice(0,2)
        } else{
            const elemento1 = clickeados[0];
            const elemento2 = clickeados[1];
            errores++
            divErrores.innerHTML=("Errores: "+errores)
            setTimeout(() => {
            console.log("distintos");
            elemento1.classList.remove("dado-vuelta");
            elemento2.classList.remove("dado-vuelta");
            }, 1000);
            clickeados.splice(0,2)
      }}})})
      // Aquí puedes realizar las acciones que desees cuando se haga clic en un elemento de la lista

    

