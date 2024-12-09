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

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault()
    console.log("hola");
}