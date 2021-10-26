// botar label no sim e não ✓
// pegar todos os campos e inputs do formulario ✓
// verificar se o campo é radio, se for, verificar se ele tem outro campo com mesmo nome
// se for o mesmo nome, verificar se algum deles está checado, se não estiver dá erro de validação
// mexer no verifyErrors() e verificar se o campo que está vindo tem o required, se ele tiver, vai fazer a validacao normal
// se ele não tiver o required, vai ter que fazer a regra acima
const campos = document.querySelectorAll('input')

console.log(campos);

function ValidateField(campo) {
    function verifyErrors() {
        let foundError = false;

        for(let error in campo.validity) {
            // se não for customError, verifica se tem erro
            if (campo.validity[error] && !campo.validity.valid) {
                foundError = error
            }
        }

        console.log(campo)
        if (campo.getAttribute('type') == 'radio' && campo.getAttribute('name') == 'souEmpreendedor') {
            if (checkIsEmpreendedorRadioButton()) {
                foundError = 'valueMissing'
            }


        }
        return foundError;
    }

    function customMessage(typeError) {
        const messages = {
            text: {
                valueMissing: "Preencha este campo."
            },
            email: {
                valueMissing: "Insira um e-mail.",
                typeMismatch: "Preencha com um e-mail válido."
            },
            radio: {
                valueMissing: "Selecione uma opção."
            }
        }

        return messages[campo.type][typeError]
    }

    function setCustomMessage(message) {

        const spanError = campo.parentNode.querySelector("span.error")

        if (message) {
            spanError.classList.add("active")
            spanError.innerHTML = message
            return
        }
        spanError.classList.remove("active")
        spanError.innerHTML = ""
    }

    function checkIsEmpreendedorRadioButton() {

        const isEmpreendedor = document.querySelectorAll("input[type='radio'][name='souEmpreendedor']")

        console.log(isEmpreendedor)

        if(document.form1.souEmpreendedor[0].checked == false
            && document.form1.souEmpreendedor[1].checked == false) {
              return false;
            }
            return false;
    }

    return function() {
        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            campo.style.borderColor = "red"
            setCustomMessage(message)
            return
        }
            campo.style.borderColor = "green"
            setCustomMessage()
    }
}


function customValidation(event) {

    const campo =  event.target
    //validateField retorna uma função
    const validation = ValidateField(campo)

    validation()

}

for(const campo of campos) {
    campo.addEventListener("invalid", event => {
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    campo.addEventListener("blur", customValidation)
}

document.querySelector('form').addEventListener('submit', event => {
    console.log("enviar o formulario")

    const spanError = document.querySelector('form .radio-buttons .error')
    if (!checkIsEmpreendedorRadioButton()) {
        spanError.classList.add("active")
        spanError.innerHTML = 'bla'
        event.preventDefault()

        console.log('falhou')

        return
    }
    spanError.classList.remove("active")
    spanError.innerHTML = ""

    // impedir que envie os dados
    event.preventDefault()
})