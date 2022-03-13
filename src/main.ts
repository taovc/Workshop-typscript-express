//
// exercise 1: make a '/hello' endpoint with get methode that display "world"
//

import express from "express";

const app = express();

app.get("/hello", (_req, res, _next) => {
  return res.status(200).send("world");
});

//
// exercise 2: make a '/message' endpoint with get methode that display the message argument, return 200 if have not message return 400 and "bad request"
//

app.get("/message/", (_req, res, _next) => {
  const a = _req.query.message;
  if (a == undefined)
    return res.status(400).send("Bad request")
  return res.status(200).send(a)
});

//
// exercise 3: make a '/header' endpoint with get methode that If the request contains a `message` header, return 200 and message if not return 400 and "bad request"
//

app.get('/header', (_req, res, _next) => {
  var myheader = _req.headers['message'];
  if (myheader != undefined && myheader != "")
      return res.status(200).send(myheader)
  return res.status(400).send("Bad Request")
});

//
// exercise 4: make a '/body' endpoint with get methode that If the request contains a `message` body, return 200 and message if not return 400 and "bad request"
//

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.post('/body', (_req, res, _next) => {
    var body_message = _req.body.message;
    if (body_message != "" && body_message != undefined) {
        return res.status(200).send(body_message)
    }
    return res.status(400).send("Bad Request")
});

//
// exercise 5: make a '/cookie' endpoint with get methode that If the request contains a `message` cookie, return 200 and message if not return 400 and "bad request"
//

var cookieParser = require('cookie-parser');
app.use(cookieParser())

app.get('/cookie', (_req, res, _next) => {
    if (_req.cookies.message)
        return res.status(200).send(_req.cookies.message)
    return res.status(400).send("Bad Request")
});

app.listen(3000, () => {
  console.log("Server listening on Port", 3000); 
})
