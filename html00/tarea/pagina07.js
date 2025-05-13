console.log("inicio")

/* const boton = document.getElementById("enviar")
boton.addEventListener("click", 
    () => {
        console.log("los parametros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user.value) */
        




    const mostrar =  () => {
        console.log("los parametros")
        let user=document.getElementById("username")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user.value)

        let formulario = document.getElementsByTagName("form")
        console.log(formulario)
        user.setAttribute("name", "q")
        password.setAttribute("name","password")   
        formulario[0].setAttribute("action","https://google.com/search")
        formulario[0].submit()

    }

    const buton = document.getElementById("btn")
    buton.addEventListener("click", mostrar)