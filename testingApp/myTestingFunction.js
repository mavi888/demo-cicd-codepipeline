'use strict';

var AWS = require('aws-sdk');
var codepipeline = new AWS.CodePipeline();


// https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html
exports.handler = async (event, context)  => {
	console.log('Hello my testing function')
	// Retrieve the Job ID from the Lambda action
	var jobId = event["CodePipeline.job"].id;
	console.log(jobId);

	var params = {
		jobId: jobId
	};

	return codepipeline.putJobSuccessResult(params).promise(data => {
		console.log('sent?')
		console.log(data);
		context.succeed('yey!');      
	}).catch(error => {
		console.log(error);
		context.fail(error);
	});
};