module.exports.handleBook = (req, res) => {
    console.log(req.params)
    res.send(req.params)
}
module.exports.intro = (req, res) => {
    res.send(`Express server`)
}