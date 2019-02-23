const express = require('express')

const app = express()
app.use(express.static('build')) // absolute or relative to CWD

const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}`))