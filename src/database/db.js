const sqlite3 = require("sqlite3").verbose()

// inciar o objetoo de banco
const db = new sqlite3.Database("./src/database/database.db")

//utilizar o objeto de banco de dados para nossas operações
module.exports = db

//db.serialize(()=>{
    // criar uma tabela com comando sql
/*    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    // inserir dados
    const query = `
    INSERT INTO places(
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES ( ?,?,?,?,?,?,?);
        `
        const values = [
            "https://images.unsplash.com/photo-https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
            "Papersider",
            "Guilerme Gemballa,Jardim América",
            "N°260",
            "Santa Catarina",
            "Rio do Sul",
            "Residuos Eletrônicos,Lâmpadas"
        ]
        function afterInserData(err){
            if(err){
                return console.log(err)
            }
            console.log("Cadastrado com sucesso")
            console.log(this)

        }
        db.run(query,values, afterInserData)
    
           //consultar dados

    /*db.all(`SELECT name FROM places`,function(err,rows ){
        if(err){
            return console.log(err)
        }

        console.log("Aqui estão os seus registros:")
        console.log(rows)

    })*/

    // deletar dados
    /*db.run(`DELETE FROM places WHERE id = ? `,[6], function(err){
        if(err){
           return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    })*/
        
 
//})