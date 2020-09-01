# CI/CD for serverless applications

In this repository you will find a deployment pipeline and 2 AWS SAM demo projects.

If you want to setup your pipeline you can read the [pipeline documentation](/pipeline/Pipeline-instructions.md)

## Test Lambda function

In the project 'integration-test-lambda' you will find a sample of a lambda function that you need to run integration tests in the pipeline.

Deploy this function first and get the name. Then with that name you can go and configure the pipeline SSM parameters.

## Simple App project

This is a simple test project. This will be the AWS SAM project we will be deploying using the pipeline.

This project contains the buildspec and also it has configuration for safe deployments using AWS CodeBuild
