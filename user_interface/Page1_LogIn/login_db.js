
const formularioDeLogin = document.getElementById("auth")

const loginEmailInput = document.getElementById("email")
const loginPasswordInput = document.getElementById("password")

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

formularioDeLogin.addEventListener("submit", async (evento) => {
  evento.preventDefault()

  const usuario = await enviarDatos({ email: loginEmailInput.value, password: loginPasswordInput.value }, "acceder")

  if(usuario.msg) {
    alert(usuario.msg)
  } else {
    alert(`Sesion iniciada. Bienvenido ${usuario.full_name}!`)
    localStorage.setItem("datos-de-usuario", JSON.stringify(usuario))

    window.location.href = "/user_interface/Page3_Cart/index.html"
  }
})