import fetch from 'node-fetch'

export default class CepController{

    static firstPage(req,res){
        res.render('cep/find')
    }

    static async findAddress(req, res){
        const cep = req.body.cep

        if(cep.length > 8){
            console.log('Erro: CEP não deve conter mais que 8 números!')

            res.status(404).redirect('/')
        }

        const reqCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        
        if(reqCep.size === 0){
            console.log('Erro: CEP não encontrado!');

            res.status(404).redirect('/')
        }

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

        res.render('cep/showAddress', {info} )
    }
}