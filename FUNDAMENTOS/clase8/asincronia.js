// Sincronico
console.log("Inicio")
console.log("Medio")
console.log("Final")

console.log("------------------------")

// console.log("Inicio")
// setTimeout(() => {
//     console.log("Medio")
// }, 2000)
// console.log("Final")


// 🎯 Analogía de la Vida Real
// Síncrono = Fila del Banco 🏦
//
// Esperas a que la persona delante termine
// No puedes hacer nada más mientras esperas
// Todo en orden estricto

// Asíncrono = Ordenar Pizza por Teléfono 🍕
//
// Llamas, ordenas la pizza
// Mientras la preparan, puedes hacer otras cosas (ver TV, trabajar)
// Cuando llega, dejas lo que estás haciendo y comes
// No te quedaste esperando sin hacer nada


// Callbacks
// Es una funcion que se ejecuta dentro de otra
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

function procesarEntrada(callback) {
    const nombre = "Juan";
    callback(nombre);
}

procesarEntrada(saludar);

// Ejemplo de la asincronia

// console.log("1. Pedí la pizza");
//
// setTimeout(() => {
//     console.log("2. La pizza llegó! 🍕");
// }, 2000);
//
// console.log("3. Mientras tanto, veo TV 📺");

// Ejemplo  peddido Pizza con callbacks
//
function hacerPedido(producto, callback) {
    console.log(`📝 Pedido realizado: ${producto}`);  // 1.

    setTimeout(() => {
        console.log(`✅ ${producto} está listo!`); // 2.
        callback(producto);
    }, 2000);
}

function entregarPedido(producto) {
    console.log(`🚚 Entregando ${producto}`); // 3.
}

// hacerPedido("Pizza", entregarPedido);

const pedidoPizza = () => {
    console.log("Pedir Pizza")
}

const pizzaLlego = () => {
    console.log("Pizza Llego")
}

const preparandoPizza = () => {
    return new Promise(resolve => setTimeout(() => {
        console.log("Preparando Pizza")
        resolve()
    }, 1000));
}

const procesoPizzaSecuencial = async () => {
    pedidoPizza();
    await preparandoPizza();
    await preparandoPizza();
    pizzaLlego();
}

procesoPizzaSecuencial();


// CALLBACK HELL - Código difícil de leer
// obtenerUsuario(1, (usuario) => {
//     obtenerPedidos(usuario.id, (pedidos) => {
//         obtenerDetallePedido(pedidos[0].id, (detalle) => {
//             calcularTotal(detalle, (total) => {
//                 console.log(`Total: $${total}`);
//             });
//         });
//     });
// });
