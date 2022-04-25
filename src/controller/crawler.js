const crawler = require('../crawler')

module.exports = async function crawl(req, res) {
    const body = req.body;
    if (body.depth > 5) {
        res.status(400).send('depth is not a valid number or it exceeds maximum (5)')
    }
    const result = await crawler(body.paths, body.depth, body.http);
    res.status(202).json(result);
}