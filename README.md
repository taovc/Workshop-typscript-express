# tutorial-node-typescript
A workshop on writing an express server with ts

## utilisation

```
    // install dependencies before doing anything else
    make install

    // Execute the server
    make start
```
Open a browser and enter: http://localhost:3000/"endpoint"

Use this extension for chrome for your test : https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=fr
For advanced user you can use Postman

## description
1. Use tpyescript to develop express server
2. To use nodemon to refresh automatically, it must be paired with tpyescript-node (you can run tpyescript directly)
3. The concept of types (tpyescript hint)
4. The tsc command compiles tpyescript into js
5. Configuration function points of tsconfig

## exercise

### Exercise 1

Route: /hello-world

Type: ALL

Description: Make a '/hello' endpoint that display always "Hello World!"

Status: Always 200


### Exercise 2

Route: /message?message="xxxxx"
Type: ALL
Description: Make a endpoint that display the message argument
Status: 200 and message if not return 400 and "Bad request

### Exercise 3

Route: /header
Type: ALL
Description: Make a endpoint that if the request contains a `message` header
Status: 200 and message if not return 400 and "Bad request"

### Exercise 4

Route: /body
Type: ALL
Description: Make a endpoint that if the request contains a `message` body
Status: 200 and message if not return 400 and "Bad request"

/!\ The body is on json format !
Tips: use JSON.parse(message)

### Exercise 5

Route: /cookie
Type: ALL
Description: Make a endpoint that if the request contains a `message` cookie
Status: 200 and message if not return 400 and "Bad request"

### Exercise 6

Route: /admin
Type: ALL
Make a '/private' with a middleware that check if the Authorization header contain exactly this password: 'TAO_ET_FLO_LES_BGS'
Status: 200 and message "Welcome to admin page" if not return 400 and "Bad request"

/!\ Use a middleware
Tips: https://openclassrooms.com/fr/courses/6390246-passez-au-full-stack-avec-node-js-express-et-mongodb/6466605-configurez-le-middleware-dauthentification