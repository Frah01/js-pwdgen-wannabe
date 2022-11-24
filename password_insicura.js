
//INSERISCI IL NOME

let user_name= prompt('Inserisci il tuo nome')
console.log (user_name)

//INSERISCI IL TUO COGNOME

let user_last_name= prompt('Inserisci il tuo cognome')
console.log (user_last_name)

//INSERISCI IL TUO COLORE PREFERITO

let user_fav_color= prompt ('Inserisci il tuo colore preferito')
console.log (user_fav_color)

//CONCATENO I VALORI DELLE VARIABILI

let conc= user_name + user_last_name + user_fav_color + 21
console.log (conc)

//MOSTRO A SCHERMO LA PASSWORD

document.getElementById('password').innerHTML= ('La tua password è' + " " + conc)
console.log('La tua password è' + " " + conc)
