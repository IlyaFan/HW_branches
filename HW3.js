//1. Send the request:
//	- set the environmental variable "token"
// 	- check if the status code is 200

jsonData = pm.response.json();                      //gets the response body as a JSON

pm.environment.set("token", jsonData.token)         //sets the environmental variable "token"

pm.test("Status code is 200", function () {         //assert if the status code is 200
    pm.response.to.have.status(200);                
});

//2. Send the request:
//	- check if the status code is 200
//	- validate the response schema
//	- check if the salary from request is equal to the [salary_after_6_month]/2 from the response
//	- check if the salary from request is equal to the [salary_after_12_month]/2.9 from the response 
//	- check if the salary from request is equal to the [u_salary_1_5_year]/4 from the response

var jsonData = pm.response.json();                                          //gets the response body as a JSON                       
var request = pm.request.body;                                              //gets the request body
var req_json = JSON.parse(request);                                         //pars the request body to a JSON
var req_salary = req_json.salary;;                                          //gets the salary from the request JSON
var schema = {                                                              //json schema to check the response
    "type": "object",
    "properties": {
        "person": {
            "type": "object",
            "properties": {
                "u_age": {
                    "type": "integer"},
                "u_name": {
                    "type": "array",
                    "items": {
                        "anyOf": [{
                            "type": "string"},
                        {"type": "integer"}]}},
                "u_salary_1_5_year": {
                    "type": "integer"}}},
        "qa_salary_after_12_months": {"type": "number"},
        "qa_salary_after_6_months": {"type": "integer"},
        "start_qa_salary": {"type": "integer"}
    },
    "required":[
        "person",
        "qa_salary_after_12_months",
        "qa_salary_after_6_months",
        "start_qa_salary",
    ]
}

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);                                        //assert if the status code is 200                  
});

pm.test("Validate schema", function () {                                    //validates the response schema
    pm.response.to.have.jsonSchema(schema);                 
});

pm.test("Request name is equal to response name", function () {
    pm.expect(jsonData.qa_salary_after_6_months/2).to.eql(req_salary);      //asserts if the salary from request is equal to the [salary_after_6_month]/2 from the response
});

pm.test("Request name is equal to response name", function () {
    pm.expect(jsonData.qa_salary_after_12_months/2.9).to.eql(req_salary);   //asserts if the salary from request is equal to the [salary_after_12_month]/2.9 from the response 
});

pm.test("Request name is equal to response name", function () { 
    pm.expect(jsonData.person["u_salary_1_5_year"]/4).to.eql(req_salary);   //asserts if the salary from request is equal to the [u_salary_1_5_year]/4 from the response   
});

//3. Send the request:
//	- check if the status code is 200
//	- validate the response schema
//	- check if the first element of salary from the response devide by 2 is equal to the zero element of salary from the response
//	- check if the second element of salary from the response devided by 3 is equal to the zero element of salary from the response
//	- check if the second element is bigger than the first element and the first element is bigger than the zero element

var jsonData = pm.response.json();                                                                  //gets the response body as a JSON
var schema = {                                                                                      //json schema to check the response
    "type": "object",
	"required": [
        "age",
        "name",
        "salary",
    ],
    "properties": {
        "age": {
            "type": "integer"
        },
        "name": {
            "type": "string"
        },
        "salary": {
            "type": "array",
            "items": {
                "anyOf": [{
                    "type": "integer"
                },
                {
                    "type": "string"
                }]
            }
        }
    }
}

pm.test("Status code is 200", function () {                         
    pm.response.to.have.status(200);                                                                    //assert if the status code is 200
});

pm.test("Validate schema", function () {
    pm.response.to.have.jsonSchema(schema);                                                             //validates the response schema                  
});

pm.test("First element of salary devided by 2 is equal to zero element of salary", function () {
    pm.expect(jsonData.salary[1]/2).to.eql(jsonData.salary[0]);                                         //asserts if the first element of salary from the response devide by 2 is equal to the zero element of salary from the response       
});

pm.test("Second salary's element devided by 3 is equal to zero salary's element", function () {
    pm.expect(jsonData.salary[2]/3).to.eql(jsonData.salary[0]);                                         //asserts if the second element of salary from the response devided by 3 is equal to the zero element of salary from the response
});

pm.test("Second element is bigger than the first element and the first element is bigger than the zero element", function () {
    var result;                                                                                         //asserts if the second element is bigger than the first element and the first element is bigger than the zero element 
    if (jsonData.salary[2]>jsonData.salary[0] && jsonData.salary[1]>jsonData.salary[0])
    {
        result = true;
    } else
    {
        result = false
    }
    pm.expect(result).to.eql(true);      
});

//4. Send the request:
//	- check if the status code is 200
//	- validate the response schema
//	- check if the daily_food from the request is equal to weight from the response*0.012
//	- check if the daily_sleep from the request is equal to weight from the response*2.5

jsonData = pm.response.json();                                      //gets the response body as a JSON
req_weight = pm.request.body.formdata.get("weight");                //gets the request weight value
schema = {                                                          //json schema to check the response
    "required": [
        "age",
        "daily_food",
        "daily_sleep",
        "name"
    ],
    "properties": {
        "age": {
            "type": "integer"
        },
        "daily_food": {
            "type": "number"
        },
        "daily_sleep": {
            "type": "number"
        },
        "name": {
            "type": "string"
        }
    }
}

pm.test("Status code is 200", function () {                         
    pm.response.to.have.status(200);                        		//assert if the status code is 200
});

pm.test("Validate schema", function () {
    pm.response.to.have.jsonSchema(schema);                 		//validates the response schema                   
});

pm.test("The daily_food from the request is equal to weight from the response*0.012", function () {     //assert if the daily_food from the request is equal to weight from the response*0.012
    pm.expect(req_weight*0.012).to.eql(jsonData.daily_food);        
});

pm.test("The daily_sleep from the request is equal to weight from the response*2.5", function () {
    pm.expect(req_weight*2.5).to.eql(jsonData.daily_sleep);                                             //assert if the daily_sleep from the request is equal to weight from the response*2.5
});

//5. Send the request:
//	- check if the status code is 200
//	- validate the response schema
//	- check if the name from the response is equal to environmental variable [name]
//	- check if the age from the response is equal to environmental variable [age]

jsonData = pm.response.json();                                      //gets the response body as a JSON
req_env_name = pm.environment.get("name");                          //gets the value of environmental variable name
schema = {                                                          //json schema to check the response
    "required": [
        "age",
        "family",
        "name",
        "salary"
    ],
    "properties": {
        "age": {
            "type": "string"
        },
        "family": {
            "type": "object",
            "required": [
                "children",
                "u_salary_1_5_year"
            ],
            "properties": {
                "children": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "anyOf": [{
                                "type": "string"
                            },
                            {
                                "type": "integer"
                            }]
                        }
                    }
                },
                "u_salary_1_5_year": {
                    "type": "integer"
                }
            }
        },
        "name": {
            "type": "string"
        },
        "salary": {
            "type": "integer"
        }
    }
}

pm.test("Status code is 200", function () {                         
    pm.response.to.have.status(200);                        		//assert if the status code is 200
});

pm.test("Validate schema", function () {
    pm.response.to.have.jsonSchema(schema);                    		//validates the response schema                    
});

pm.test("If the name from the response is equal to environmental variable [name]", function () {
    pm.expect(jsonData.name).to.eql(req_env_name);                                                  //asserts if the name from the response is equal to environmental variable [name]                    
});

pm.test("If the age from the response is equal to environmental variable [age]", function () {
    pm.expect(pm.request.body.formdata.get("age")).to.eql(jsonData.age);                            //asserts if the age from the response is equal to environmental variable [age]                
});

//6. Send the request:
//	- set envoronmental variable using random Cur_ID value

jsonData = pm.response.json();                                  	//gets the response body as a JSON
var rand = Math.round(Math.random() * jsonData.length);         	//gets random number
var cur_id = jsonData[rand].Cur_ID;                             	//gets random Cur_ID related to random number
pm.environment.set("cur_id", cur_id);                           	//sets random Cur_ID as environmental variable cur_id for the next request (curr_byn)

//7. Send the rquest:
//	- send the request, using Cur_ID parameter from environment (from previous request)
//	- check if the status code is 200
//	- validate the response schema

schema = {                                                        	//json schema to check the response
    "required": [
        "Cur_Abbreviation",
        "Cur_ID",
        "Cur_Name",
        "Cur_OfficialRate",
        "Cur_Scale",
        "Date"
    ],
    "properties": {
        "Cur_Abbreviation": {
            "type": "string"
        },
        "Cur_ID": {
            "type": "integer"
        },
        "Cur_Name": {
            "type": "string"
        },
        "Cur_OfficialRate": {
            "type": "number"
        },
        "Cur_Scale": {
            "type": "integer"
        },
        "Date": {
            "type": "string"
        }
    }
}

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);                        		//assert if the status code is 200                
});

pm.test("Validate schema", function () {
    pm.response.to.have.jsonSchema(schema);                    		//validates the response schema            
});

//8. Send the request:
//	- gets each Cur_ID of the response list, sends request using each Cur_ID and checks if the response has [Cur_OfficialRate] property

jsonData = pm.response.json();                                      //gets the response body as a JSON

for (let i = 0; i < jsonData.length; i++)                           //gets each Cur_ID of the response list, sends request using each Cur_ID and checks if the response has [Cur_OfficialRate] property
    {
        pm.sendRequest(
        {
            url: 'http://54.157.99.22:80/curr_byn',
            method: 'POST',
            header: {'Content-Type' : 'multipart/form-data'},
            body:
            {
                "mode": "formdata",
                formdata: 
                    [
                    {key: "auth_token", value: pm.environment.get("token"), disabled: false, description: {content:"", type:"text/plain"}},
                    {key: "curr_code", value: jsonData[i].Cur_ID, disabled: false, description: {content:"", type:"text/plain"}}
                    ]
            }, function(error, res)
            {  
                if (error)
                {
                    console.log(error);
                } else if (hasOwnProperty('Cur_OfficialRate'))
                {
                    console.log(data)
                }
            }
        });
    }