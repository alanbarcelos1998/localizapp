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

        const data = await reqCep.json()        

        let vazio = data.localidade == undefined ? true : false

        res.render('cep/showAddress', {data: data, vazio} )
    }

    static async findCep(req, res){
        res.render('cep/findCep')
    }

    static async findCepPost(req, res){
            const reqPost = {
                uf: req.body.uf,
                cidade: req.body.cidade,
                rua: req.body.rua
            }
    
            const reqResult = await fetch(`https://viacep.com.br/ws/${reqPost.uf}/${reqPost.cidade}/${reqPost.rua}/json/`)
    
            const data = await reqResult.json()
    
            console.log(data);

            res.render('cep/showCep', {data})
    }
}