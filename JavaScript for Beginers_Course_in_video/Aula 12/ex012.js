var agora = new Date()
var hora = agora.getHours() /* pega a hora atual do sistema */
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora <=7) {
    console.log(`Boa Madrugada`)
} else if (hora >7 && hora < 12) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora <= 18) {
    console.log(`Boa Tarde!`)
} else if (hora > 18 && hora <= 24) {
    console.log(`Boa Noite`)
}