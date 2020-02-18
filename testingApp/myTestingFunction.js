'use strict';

exports.handler = async (event, context)  => {
	console.log('Hello my testing function')
	
	return sendResponse(200, "Tests successful, yey", context);
};

function sendResponse(statusCode, message, context) {
	const message1 = JSON.stringify(message) 
	const response = {
		statusCode: statusCode,
		body: `The version of your function is: ${context.functionVersion}. \n ${message1}`
	};
	return response
}