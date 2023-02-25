const middlewares = (app, jwt) => {

    // custom middlewares
    app.use(['/dashboard', '/admin', '/dashboard/students', '/logout'], (req,res,next) => {
        const token = req.cookies.authenticate_token;
        jwt.verify(token, process.env.JWT_KEY, (error,payload) => {
            if (error) {
                res.status(401).send("Please Login first");
            }
            else {
                req.payload = payload;
                next();
            }
        });
    });
    app.use('/admin', (req,res,next) => {
        if (req.payload.role == 'Admin') {
            next();
        } else {
            res.status(403).send('Forbidden: You are not allowed');
        }
    });
    app.use('/dashboard/students', (req,res,next) => {
        if (req.payload.role=='Admin' || req.payload.role=='Teacher') {
            next();
        } else {
            res.status(403).send('Forbidden: You are not allowed');
        }
    });

}
module.exports = middlewares;