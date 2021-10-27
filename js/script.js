"use strict"

// Creo array vuoto dove inserire i numeri casuali

const listNum = []

// Individuo nel DOM la sezione dove andrò ad inserire il risultato

const resultContainer = document.getElementById("check_result")

// Inserisco numeri pseudo-casuali unici nell'array tramite ciclo while
while (listNum.length < 5) {
    let numRandom = getRandomNum(1, 100)

    console.log(numRandom);

    if (listNum.indexOf(numRandom) === -1) {
        listNum.push(numRandom)
    }
}

console.log(listNum);

// Espongo all'utente i numeri usciti
alert(`Memorizza i seguenti numeri
${listNum[0]} - ${listNum[1]} - ${listNum[2]} - ${listNum[3]} - ${listNum[4]}`)

// Creo 2 contatori che mi tengono il punteggio in base ai numeri indovinati

let numRight = 0
let numWrong = 0

let listNumRight = ""

// Dopo x secondi chiedo all'utente di inserire uno ad uno ogni singolo numero
setTimeout(() => {

    for (let i = 0; i < 5; i++) {
        let numUser = prompt(`Inserire il ${i + 1}° numero.`)

        console.log(numUser);

        if (listNum.includes(parseInt(numUser))) {
            numRight++
            listNumRight += numUser + " "
        } else {
            numWrong++
        }

    }

    resultContainer.innerHTML += `
    <div class="result">
        <h3>Numeri corretti: <span class="num_result num_right">${numRight}</span></h3>
        <p>${listNumRight}</p>
        <hr>
        <h3>Numeri sbagliati: <span class="num_result num_wrong">${numWrong}</span></h3>
        <hr>
        <div class="btn_container">
            <form>
                <button type="submit" class="btn_submit">Play!</button>
            </form>
        </div>
    </div>`

}, 30000)


/***********************************
FUNCTION
***********************************/

/**
 * La funzione serve per generare un numero pseudo-casuale compreso 
 * fra un valore minimo e massimo (min e max INCLUSI)
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}