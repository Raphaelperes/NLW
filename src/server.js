const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db.js")
/**
 * configurar pasta public
 * */
server.use(express.static("public"))


// utilizando template enginw
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

/**
 * Essa função soma dois numeros
 * @param {Integer} numero1      Numero qualquer
 * @param {Integer} numero2      Numero qualquer
 * @returns {Integer} total      Total da soma
 * @author Rafa https...
 */
function somaumedois(numero1, numero2) {
    return numero1 + numero2
}



// Configuraçao de rotas

/**
 * Método de acesso ao endpoint index
 * @param req  Dados da requisição
 * @param res  Serviço de resposta
 * @author RafaPreres  https:
 */
server.get("/", (req,res) =>{
    return res.render("index.html",{title: "Um titulo"})
})
server.get("/create-point", (req,res) =>{
    return res.render("create-point.html")
})

server.get("/search", (req,res) =>{
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places `,function(err,rows){
        if(err){
            return console.log(err)
        }
        const total = rows.length
        // mostrar a pagina do htlm com os dados do banco
        return res.render("search-results.html",{ places: rows, total: total})
    })

   
})

// ligar o servidor
server.listen(3000)