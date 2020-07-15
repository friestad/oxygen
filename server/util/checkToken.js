exports.checkToken = function (req, res, next) {
    const header = req.headers.authorization;
    if(header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.sendStatus(403)
    }
}