import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.use("/", (req, res) => {
  console.log("opened home page")
  res.json({ ok: "it works!" })
})

app.listen(4000, () => console.log("listening"))