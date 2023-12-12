import express from "express"
import cors from "cors"

const app = express()
app.use(cors({ origin: "http://localhost:3000" }))

app.use("/", (req, res) => {
  res.json({ ok: "it works!" })
})

app.listen(4000, () => console.log("listening"))