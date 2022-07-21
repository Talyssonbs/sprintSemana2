import bd from "../database/bd.js"

export default class Dicas {
    constructor(Dica) {
        this.dica = Dica
    }

    insereDica = (dicas) => {
        bd.dicas.push(dicas)
    }
    pegaDicas = () => {
        let embaralhar = Math.floor(Math.random() * bd.dicas.length)
        return bd.dicas[embaralhar]
    }
}