const AWS = require("aws-sdk");
const codepipeline = new AWS.CodePipeline();

exports.handler = async (event, context) => {
  console.log("Starting integration tests....");
  const jobId = event["CodePipeline.job"].id;

  // DO SOME INTEGRATION TESTS
  const testsPassed = true;

  if (testsPassed) {
    console.log("test passed");
    let params = {
      jobId: jobId,
    };

    return codepipeline
      .putJobSuccessResult(params)
      .promise((data) => {
        console.log("Time to return the results");
        context.succeed("Test passed");
      })
      .catch((error) => {
        console.log("Something went wrong");
        context.fail(error);
      });
  } else {
    let params = {
      jobId: jobId,
      failureDetails: {
        message: JSON.stringify("Test failed"),
        type: "JobFailed",
        externalExecutionId: context.invokeid,
      },
    };

    return codepipeline.putJobFailureResult(params).promise((data) => {
      context.fail(message);
    });
  }
};
