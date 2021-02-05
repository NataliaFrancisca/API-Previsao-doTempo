const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

app.get('/', async(req,res) =>{

	try{
		const { data } = await axios("https://api.hgbrasil.com/weather?woeid=455827")
		return res.json(data)
	}catch(error){
		console.error(error)
	}
})

app.listen('2000')