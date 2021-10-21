
const campos = document.querySelectorAll('[required]')

// console.log(campos)

function customValidation(event) {
    // a fazer: customizar o layout e mensagens de erros





    const campo =  event.target

    // verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        // procurar dentro do validity algum item verdadeiro
        for(const error in campo.validity) {
            // se não for customError, verifica se tem erro
            if (error != "customError" && campo.validity[error]) {
                foundError = error
            }
        }

        return foundError;
    }

    const error = verifyErrors()
    console.log("Error exists: ", error)

    if (error) {
        // trocar mensagem de required
        campo.setCustomValidity("Este campo é obrigatório.")
    } else {
        campo.setCustomValidity("")

    }

}
for(const campo of campos) {
    campo.addEventListener("invalid", customValidation)
}

document.querySelector('form').addEventListener('submit', event => {
    console.log("enviar o formulario")

    // nao vai enviar o formulario
    event.preventDefault()
})