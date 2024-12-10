const numberArr = {
    1:"Uno",
    2:"Dos",
    3:"Tres",
    4:"Cuatro",
    5:"Cinco",
    6:"Seis"
}

function numberToText(number){
    return numberArr[number] || number
}

async function getData() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json()
    console.log(coctail);
    const randomDrink = coctail.drinks.sort(() => 0.5 - Math.random()).slice(0, 6)
    randomDrink.forEach((element, index) => {
        const box = document.createRange().createContextualFragment(`
            
            <div class="box-1">
                <img src="${element.strDrinkThumb}" alt="">
                <h4>project ${numberToText(index + 1)}</h4>
            </div>
            
            `)
            const porfolio_flex = document.querySelector('.porfolio-flex');
            porfolio_flex.append(box)
    });
}
getData()

const techArr = ["Boostrap", "Css", "Html", "Sass", "Js", "Wordpress"]
async function getData2() {
    const result = await fetch('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    const coctail = await result.json();
    console.log(coctail);   
        coctail.drinks.forEach((element, index)=> {
            const nombre = techArr[index % techArr.length]; // Asigna un nombre del array
            const box = document.createRange().createContextualFragment(`
                
                <div class="about-box">
                    <img src="${element.strDrinkThumb}" alt="">
                    <div class="about-skills-text">
                        <h3>${nombre}</h3>
                        <h4>80%</h4>
                    </div>
                </div>
                
                `)
                const about = document.querySelector('.about-skills-flex');
                about.append(box)
        })
}
getData2()

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault()
    console.log("hola");
    const inputArr = [
        {id:"nombre", name:"Nombre"},
        {id:"email", name:"Email"},
        {id:"fecha", name:"Fecha"},
        {id:"hora", name:"Hora"},
        {id:"mensaje", name:"Mensaje"},
    ]
    for(let {id, name} of inputArr){
        const elemento = document.getElementById(id);
        if(elemento.value.trim() === "") {
            return swal({
                title: `El campo ${name} no puede estar vacío`,
                icon: "error",
                 })
        }
        if(id === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(elemento.value)){
            return swal({
                title: `El campo ${name} no tiene el formato correcto`,
                icon: "error",
                 })
        }
    }
    swal({
        title: `Datos enviados satisfactoriamente`,
        icon: "success",
         })
    inputArr.forEach(({id})=> document.getElementById(id).value = "")
    
}