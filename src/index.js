import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.disable('x-powered-by')
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use((req, res) => {
  res.status(404).send('Not Found')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
