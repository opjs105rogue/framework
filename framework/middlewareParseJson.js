module.exports = (req,res) => {
    res.writeHead(200, {
        'content-type':'application/json'
    })
    res.send = (data) => {
        res.end(JSON.stringify(data));
    }
}