console.log("Iniciando preparacion de cafe")

function molerCafe(callback) {
    console.log("Moliendo Cafe...")
    setTimeout(() => {
        console.log("Cafe Molido")
        callback()
    }, 2000)
}

function hervirAgua(callback) {
    console.log("Hirviendo Agua...")
    setTimeout(() => {
        console.log("Agua hervida")
        callback()
    }, 3000)
}

function prepararCafe(callback) {
    console.log("Preparando Cafe...")
    setTimeout(() => {
        console.log("Cafe Listo!")
        callback()
    }, 1000)
}

// //  Callback Hell
// molerCafe(() => {
//     hervirAgua(() => {
//         prepararCafe(() =>
//             console.log("Entregar Cafe! Disfrutalo"))
//     })
// })

console.log(" Lo mismo pero utilizando Promesas!! ----*****-----")

console.log("Iniciando preparacion de cafe")

function molerCafeP() {
    console.log("Moliendo Cafe...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cafe Molido!")
            resolve()
        }, 2000)
    })
}

function hervirAguaP() {
    console.log("Hirviendo Agua...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Agua hervida!")
            resolve()
        }, 3000)
    })
}

function prepararCafeP() {
    console.log("Preparando Cafe...")
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Cafe Listo!")
            resolve()
        }, 1000)
    })
}


async function procesoCafe() {
    await molerCafeP();
    await hervirAguaP();
    await prepararCafeP();
    console.log("Entregar Cafe! Disfrutalo")
}

procesoCafe()


