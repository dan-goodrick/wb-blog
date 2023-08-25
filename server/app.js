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
app.get("/candidates", ctrl.show)
app.post("/candidates", ctrl.add)
app.put("/candidate/:key", ctrl.edit)
app.delete("/candidate/:key", ctrl.delete)

ViteExpress.config({ printViteDevServerHost: true });
ViteExpress.listen(app, PORT, ()=>console.log(`Hosting Backend on http://localhost:${PORT}`))