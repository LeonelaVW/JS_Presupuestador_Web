
const formularioDeRegistro = document.getElementById("user")

const fullNameInput = document.getElementById("name")
const cuitDniInput = document.getElementById("cuit")
const phoneNumberInput = document.getElementById("phoneNumber")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")


async function enviarDatos(usuario, ruta) {
    const res = await fetch(`http://localhost:3000/${ruta}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
    })
    const datos = await res.json()
  
    return datos
  }
  
  formularioDeRegistro.addEventListener("submit", async (evento) => {
    evento.preventDefault()
  
    const usuario = {
      email: emailInput.value,
      full_name: fullNameInput.value,
      cuit_dni: cuitDniInput.value,
      phone: phoneNumberInput.value,
      password: passwordInput.value,
    }
  
    await enviarDatos(usuario, "registrar")
  
    formularioDeRegistro.reset()

    window.location.href = "./Page1_Login/index.html"
  })