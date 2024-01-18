// Cartera Virtual como Simulador


let savedPIN = "messi";
let ingresar = false;

// login
for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingrese su contraseña. tenes " + (i + 1) + " intentos");
    if (userPIN == savedPIN) {
        alert("Login Exitoso");
        ingresar = true;
        break
    } else {
        alert("Incorrecta. te quedan " + i + " intentos")
    }
}

if (ingresar) {
    //info de la cuenta
    let saldo = 1000
    let opcion = prompt("Elegi una opcion: \n1-Saldo \n2-Retirar Dinero \n3-Depositar \n4-Escriba x Para finalizar");
    while (opcion != "X" && opcion != "x") {
        switch (opcion) {
            case "1": alert("tu saldo es $"+saldo)
                break
            case "2": retirarDinero()
                break
            case "3": depositarDinero()
                break
        }
        opcion = prompt("Elegi una opcion: \n1-Saldo \n2-Retiro de Dinero \n3-Depositar \n4-Escriba x Para finalizar");
    }

    function retirarDinero() {
        let retiro = parseInt(prompt("Ingrese la cantidad a retirar"))
        if (retiro <= saldo) {
            saldo -= retiro
            alert("Retiro Exitoso. Tu nuevo saldo es $ "+saldo)
        } else {
            alert("Cantidad insuficiente!")
        }
    }

    function depositarDinero() {
        let depositar = parseInt(prompt("Ingrese la cantidad a depositar"))
        if (depositar >= saldo) {
            saldo += depositar
            alert("Deposito Exitoso. Tu nuevo saldo es $ "+saldo)
        }
}
    alert("Gracias vuelva pronto.")
}