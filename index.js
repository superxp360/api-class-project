import express from "express"
import cors from "cors"
import { addNewCar, getCars, updateCar} from "./src/cars.js"
const PORT = 3060

const app = express()
app.use(cors())
app.use(express.json())

app.get("/cars", getCars)
app.post("/cars", addNewCar)
app.patch("/cars", updateCar)


app.listen(PORT, () => {
    console.log(`/Listening on http://localhost:${PORT}...`)
})