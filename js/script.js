// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno-form
// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

const button = document.querySelector('#genera')
console.log(button)
const resetBtn = document.querySelector('#reset')
console.log(resetBtn)



// resetBtn.addEventListener('click', function(){
//     const nome = document.getElementById('nome').value = '';
//     const km = parseInt(document.getElementById('km').value = '');
//     const age = document.getElementById('age').value = '';
//     //controllare che l'utente abbia inserito i dati
//     if(nome === '' || km ==='' || age === ''){
//         alert('Devi compilare tutti i campi')
//     } else{
//         // console.log(nome)
//         // console.log(km)
//         // console.log(age)
//         const offerta = document.getElementById('offerta');
//         const carrozza = document.getElementById('carrozza');
//         const CP = document.getElementById('CP');
//         const price = document.getElementById('price');
//         if (age == 'minorenne') {
//             prezzo = (prezzo - (prezzo* 0.20));
//             console.log('prezzo €', prezzo.toPrecision(3));
//             nome.innerHTML = nome;
//             offerta.innerHTML = `Biglietto Under 18`;
//             carrozza.innerHTML = `5`;
//             CP.innerHTML = `92911`;
//             price.innerHTML = prezzo;
//         } else if (age == 'over65'){
//             prezzo = (prezzo - (prezzo* 0.40));
//             console.log('prezzo €', prezzo.toPrecision(3));
//             nome.innerHTML = nome;
//             offerta.innerHTML = `Biglietto Over 65`;
//             carrozza.innerHTML = `5`;
//             CP.innerHTML = `92911`;
//             price.innerHTML = prezzo;
//         } else{
//             prezzo = prezzo;
//             console.log('prezzo €', prezzo.toPrecision(3));
//             nome.innerHTML = nome;
//             offerta.innerHTML = `Biglietto Standard`;
//             carrozza.innerHTML = `5`;
//             CP.innerHTML = `92911`;
//             price.innerHTML = prezzo;
//         }
        

//     }
// });


button.addEventListener('click', function(){
    const nome = document.getElementById('nome').value;
    const km =parseInt(document.getElementById('km').value);
    const age = document.getElementById('age').value;
    console.log(km)
    if (isNaN(km)){
        window.location.reload();
    }
    let prezzo = (0.21 * km);
    console.log(prezzo)
    //controllare che l'utente abbia inserito i dati
    if(nome === '' || km ==='' || age === ''){
        alert('Devi compilare tutti i campi')
    } else{
        console.log(nome)
        console.log(km)
        console.log(age)
        const offerta = document.getElementById('offerta');
        const carrozza = document.getElementById('carrozza');
        const CP = document.getElementById('CP');
        const price = document.getElementById('price');
        if (age === 'minorenne') {
            prezzo = (prezzo - (prezzo* 0.20));
            console.log('prezzo €', prezzo.toPrecision(3));
            nome.innerHTML = `<div>${nome}€</div>`;
            offerta.innerHTML = `Biglietto Under 18`;
            carrozza.innerHTML = `5`;
            CP.innerHTML = `92911`;
            price.innerHTML = `<div>${prezzo , prezzo.toPrecision(3)}€</div>`;
        } else if (age === 'over65'){
            prezzo = (prezzo - (prezzo* 0.40));
            console.log('prezzo €', prezzo.toPrecision(3));
            nome.innerHTML = `<div>${nome}</div>`;
            offerta.innerHTML = `Biglietto Over 65`;
            carrozza.innerHTML = `7`;
            CP.innerHTML = `92911`;
            price.innerHTML = `<div>${prezzo , prezzo.toPrecision(3)}€</div>`;
        } else{
            prezzo = prezzo;
            console.log('prezzo €', prezzo.toPrecision(3));
            nome.innerHTML = `<div>${nome}</div>`;
            offerta.innerHTML = `Biglietto Standard`;
            carrozza.innerHTML = `12`;
            CP.innerHTML = `92911`;
            price.innerHTML = `<div>${prezzo , prezzo.toPrecision(3)}€</div>`;
        }
        

    }
    

} );
