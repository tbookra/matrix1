1. first upload the server. using "npm i" and then "npm run start:dev"
2. create a JWT token using the route http://localhost:5001/auth. 
use the POST method. and in the body provide a json with the username, sub and authorized, which is an array of strings.
if you want to get the calculator to work. provide "admin" as one of the strings.
3. copy the "access token" provided, and open a new postman tab. with the following route: http://localhost:5001/calc - POST
4. on the headers add key=authorization value "Bearer <token>"
5. add another header. key=operation value=("Add", "Deduct", "Multiply" or "Divide")
6. add to the body a json with the keys of "num1" and "num2", with the number you wish to calculate. and send.
