'use strict';

exports.handler = async (event, context)  => {
	console.log('Hello Simple Function')
	return sendResponse(200, "Hello Simple Function", context);
};

function sendResponse(statusCode, message, context) {
	const message1 = JSON.stringify(message) 
	const response = {
		statusCode: statusCode,
		body: `The version of your function is: ${context.functionVersion}. \n ${message1}`
	};
	return response
}
