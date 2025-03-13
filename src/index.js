import express from 'express'
import { moviesRouter } from './routes/movies.js'
const PORT = process.env.PORT || 3000

const app = express()
app.disable('x-powered-by')
app.use(express.json())

app.use('/movies', moviesRouter)

app.use((req, res) => {
  // console.log('test')
  // console.log('Request to unknown path:', req.path)
  // app._router.stack.forEach(function (r) {
  //   if (r.route && r.route.path) {
  //     console.log(r.route.path)
  //   }
  // })
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
