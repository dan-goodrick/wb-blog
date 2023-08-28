import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import ctrl from './controller.js'

const PORT = 8000
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// app.use(express.static('public')) // not used with vite

// endpoints
app.get("/getCandidates", ctrl.show)
app.post("/addCandidate", ctrl.add)
app.put("/editCandidate/:key", ctrl.edit)
app.delete("/delCandidate/:key", ctrl.del)

ViteExpress.config({ printViteDevServerHost: true });
ViteExpress.listen(app, PORT, ()=>console.log(`Hosting Backend on http://localhost:${PORT}`))