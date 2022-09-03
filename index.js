
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())
const usersRoutes=require("./route/users.route")





app.use('/api/user',usersRoutes)
// app.use('/api/user',usersRoutes)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})