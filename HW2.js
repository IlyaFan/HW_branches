//1. Send the request:
//	- assert if the status code is 200
//	- asserts if the request has certain string
	
var responseString = pm.response.text();            //gets response text
var responseCode = pm.response.code;                //gets response status code

pm.test("Status code is 200", function () { 
    pm.response.to.have.status(200);                //assert if the status code is 200
});

pm.test("Response has certain string", function() {
    pm.response.to.have.body(responseString);       //asserts if the request has certain string
})

console.log("Request string is", responseString);   //outputs the response string into console
console.log("Status code is", responseCode);        //outputs the response status code 