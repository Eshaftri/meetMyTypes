const config = require('./config/config-aws.js');
const AWS = require("aws-sdk");
const express = require('express');
const app = express();

config.configAccess();
const docClient = new AWS.DynamoDB();

app.listen(5500,()=> console.log('Express server is running at port 5500'));
app.get('/users/:uid',(req,response)=>{
    docClient.query({
        KeyConditionExpression: "UID = :UID",
        ExpressionAttributeValues:{
            ":UID":{"S":[req.params.uid].toString()},
        },
        TableName:  "Users",
        },
        function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));  
        } else {
            if(data.ScannedCount > 0){
                let nickname = data.Items[0].Nickname.S;
                let lovetype = data.Items[0].LoveType.S;
                let toptype = data.Items[0].Top4LoveTypes.L;
                let profile = data.Items[0].Description.S;

                response.send(JSON.stringify(
                    [{"Nickname":nickname},{"lovetype":lovetype},{"Top":toptype},{"Profile":profile}]));
            }else{
                response.send(JSON.stringify(data,null,2)); 
            }
        }
    });
});

        