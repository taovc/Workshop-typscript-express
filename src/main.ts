//
// exercise 1: make a '/hello' endpoint with get methode that display "world"
//

import express from "express";

const app = express();

app.get("/hello", (_req, res, _next) => {

});

//
// exercise 2: make a '/message' endpoint with get methode that display the message argument
// return 200 if have not message return 400 and "bad request"
//

app.get("/message", (_req, res, _next) => {
    
});

//
// exercise 3: make a '/header' endpoint with get methode that If the request contains a `message` header
// return 200 and message if not return 400 and "bad request"
//

app.get('/header', (_req, res, _next) => {
  
});

//
// exercise 4: make a '/body' endpoint with get methode that If the request contains a `message` body
// return 200 and message if not return 400 and "bad request"
//

app.post('/body', (_req, res, _next) => {
    
});

//
// exercise 5: make a '/cookie' endpoint with get methode that If the request contains a `message` cookie
// return 200 and message if not return 400 and "bad request"
//

app.get('/cookie', (_req, res, _next) => {
    
});

//
// exercise 6: make a '/private' endpoint with get methode that If the request contains a `Authorization` header
// return 200 and "Welcome to admin page" when the password is good if not return 400 and "bad request"
//

app.get('/private', (_req, res, _next) => {

});

app.listen(3000, () => {
    console.log("Server listening on Port", 3000); 
})
