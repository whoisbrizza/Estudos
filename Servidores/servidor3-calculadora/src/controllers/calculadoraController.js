//GET que vai somar

const getSomar = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let somar = numero1Request + numero2Request
        response.status(200).send({
            message: `O resultado da soma é ${somar}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

//GET que vai subtrair

const getSubtrair = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let subtrair = numero1Request - numero2Request
        response.status(200).send({
            message: `O resultado da subtração é ${subtrair}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

//GET que vai dividir

const getDividir = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let dividir = numero1Request / numero2Request
        response.status(200).send({
            message: `O resultado da divisão é ${dividir}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

//GET que vai multiplicar

const getMultiplicar = async (request, response) => {
    try {
        let numero1Request = Number(request.query.numero1)
        let numero2Request = Number(request.query.numero2)
        let multiplicar = numero1Request * numero2Request
        response.status(200).send({
            message: `O resultado da multiplicação é ${multiplicar}`
        })
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

module.exports ={
    getSomar,
    getSubtrair,
    getDividir,
    getMultiplicar
}