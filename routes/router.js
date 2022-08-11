const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).json({status: true, msg: 'Drugi router działa.'})
})

router.post('/:id', (req, res) => {
    res.status(200).json({status: true, msg: `I got a request to post id = ${req.params.id}`})
})


router.put('/:id', (req, res) => {
    res.status(200).json({status: true, msg: `I got a request to PUT request parameters ${req.params}`})
})

module.exports = router

