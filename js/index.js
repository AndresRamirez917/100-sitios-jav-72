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

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
    e.preventDefault()
    console.log("hola");
}