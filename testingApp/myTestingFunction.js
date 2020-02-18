'use strict';

var AWS = require('aws-sdk');
var codepipeline = new AWS.CodePipeline();

// https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-invoke-lambda-function.html
exports.handler = async (event, context)  => {
	console.log('Hello my testing function')
	
	// Retrieve the Job ID from the Lambda action
	let jobId = event["CodePipeline.job"].id;

	// DO SOME INTEGRATION TESTS

	if (testsPassed) {
		let params = {
			jobId: jobId
		};

		return codepipeline.putJobSuccessResult(params).promise(data => {
			context.succeed('Test passed');      
		}).catch(error => {
			context.fail(error);
		});
	} else {
		let params = {
			jobId: jobId,
			failureDetails: {
				message: JSON.stringify('Test failed'),
				type: 'JobFailed',
				externalExecutionId: context.invokeid
			}
		};
		
		return codepipeline.putJobFailureResult(params).promise(data => {
			context.fail(message);      
		});
	}
};