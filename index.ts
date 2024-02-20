const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

// for future uses in case we want to use a server
app.listen(8000, () => console.log(`Server is running on port ${PORT}`))