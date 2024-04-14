let username = prompt(`Hola! ¿Cómo te llamás?`)
console.log(`Bienvenido ` + username + ` no te olvides de leer todos los poemas!`);

alert(`Su respuesta fue ` + username)

let confirmar = confirm(`¿Querés suscribirte a mi canal?`)

if (confirmar == true) {
    alert (`¡Muchas gracias!`)
}
else {
    alert (`Espero que la próxima tengas ganas.`);
}

for(let i=0;i<10;i++) {
    console.log(`Iteración n° ` + i);
}