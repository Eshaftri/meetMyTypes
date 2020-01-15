const awskeys = require('./aws.js');
const AWS = require("aws-sdk");

module.exports = {
  configAccess: function (){
    AWS.config.update({
      region: awskeys.nkeys.region,
      endpoint: "http://dynamodb.us-east-1.amazonaws.com",
      accessKeyId: awskeys.nkeys.accessKeyId,
      secretAccessKey: awskeys.nkeys.secretAccessKey
    });
  }
}