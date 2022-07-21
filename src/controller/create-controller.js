import Dicas from "../models/caminhos.js"
const rotas = (app) => {
    app.get("/tips", (req,
        res) => {
        const dica = new Dicas()
        res.json({
            "Dica": dica.pegaDicas()
        })
    })
    app.post("/create", (req,
        res) => {
        const body = req.body
        const dica = new Dicas(body.Dica)
        dica.insereDica(dica)
        res.json({
            "Mensagem": "Dica inserida !",
            "Dica": dica
        })

    })
}
export default rotas