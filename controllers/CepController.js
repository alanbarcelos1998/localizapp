import fetch from 'node-fetch'

export default class CepController{

    static firstPage(req,res){
        res.render('cep/find')
    }

    static async findAddress(req, res){
        const cep = req.body.cep

        const reqCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        
        const data = await reqCep.json()

        const info = { 
            localidade: data.localidade,
            logradouro: data.logradouro,
            bairro: data.bairro,
            complemento: data.complemento,
            uf: data.uf,
            ddd: data.ddd,
            cep: data.cep
        }

        console.log(info)

        res.render('cep/showAddress', {info} )
    }
}