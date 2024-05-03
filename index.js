const express = require("express"); // importa o módulo express neste arquivo
const app = express();


/*              NESSA ETAPA SERA CRIADO A ROTA INICIAL                          */


app.get("/", function(req, res){
    res.send("ROTEMANTO")
})


/*              NESSA ETAPA SERA CRIADO A SEGUNDA ROTA                          */

app.get("/metodoshttp", function(req, res){
    res.send("<h1>Os Quatros Metodos HTTP!</h1>")
})


/*              NESSA ETAPA SERA CRIADO A TERCEIRA ROTA                          */

app.get("/metodoshttp/protecaoendpoint", function(req, res){
    res.send("<h1>Formas de proteger seus endpoints de API!</h1>")
})

/*              NESSA ETAPA SERA CRIADO A QUARTA ROTA                        

app.get("/metodoshttp/protecaoendpoint", function(req, res){
    res.send("<h1>TESTE COMIT!</h1>")
})*/ 


/*              NESSA ETAPA IREMOS DIRECIONAR PARA PORTA 4000                    */

 app.listen(4000, function(erro){
        if (erro){
           console.log("Erro ao iniciar");
        }else{
         console.log("Servidor Iniciado")
               }
        })