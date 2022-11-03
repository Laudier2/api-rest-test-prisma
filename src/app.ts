import express, { Request, Response } from "express"
import { router } from "./routes/routers"

const port = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`http:localhoat:${port}`)
})