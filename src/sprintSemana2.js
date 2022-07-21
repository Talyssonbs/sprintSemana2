import express from "express"
import rotas from "./controller/create-controller.js";
/* import create from "./controller/create-controller.js"
import tips from "./controller/tips-controller.js"; */

const app = express()
const port = 3000;
app.use(express.json())
rotas(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})