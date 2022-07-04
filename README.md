# simple-aws-lambda-mongodb

This example demonstrates how to deploy a [NodeJS](https://nodejs.org/en/docs/) function running on [AWS Lambda](https://aws.amazon.com/lambda/) using the traditional [Serverless](https://www.serverless.com/framework/docs/providers/aws/guide/intro) Framework. The deployed function works with multiple type of event definitions.

This Example works with both `cron` events and `httpApi` events. 

When deployed the [AWS Lambda](https://aws.amazon.com/lambda/) function sends Emails by using [AWS Simple Email Service(SES)](https://aws.amazon.com/ses/). Now the Emails can be sent either by an [AWS HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop.html) event or by a `cron` like fashion to a stipulated time interval set in the [AWS Cloudformation](https://aws.amazon.com/cloudformation/) Stack.

All *logs* for the function is kept in [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/) i.e *persistent*. [AWS EventBridge](https://aws.amazon.com/about-aws/whats-new/2019/07/introducing-amazon-eventbridge/) is used to handle **both** types of `schedule` and `http` events.

To use the code in this example you **must** have an valid [AWS account](https://aws.amazon.com/account/) and necessary [AWS IAM](https://aws.amazon.com/iam/) roles and programmatic access to an user.

## Features
1. [AWS Lambda](https://aws.amazon.com/lambda/) function using [NodeJS](https://nodejs.org/en/docs/)
2. Function is using latest version of [AWS SDK JavaScript v3](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html) with all **ES6+**  syntaxes like Promises, `async/await`

<ol start="3">
  <li>
     Function are deployed using <a href="https://www.serverless.com/framework/docs/providers/aws/guide/intro">Serverless</a> Framework.
  </li>  
  <li>
    <code>serverless.json</code> is used for deployment configuration instead of <code>serverless.yml</code>.
  </li>  
  <li>
    All the deployment is created in <a href="https://aws.amazon.com/s3/">AWS S3</a> to store the <code>.zip</code> of the function code and <a href="https://aws.amazon.com/cloudformation/">AWS CloudFormation</a> Stack.
  </li>  
</ol>  


6. **Two** types of events are supported `httpAPi` and `schedule`
7. [AWS HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop.html) are using [AWS API GateWay](https://aws.amazon.com/api-gateway/)

<ol start="8">
  <li> All Emails are sent using <a href="https://aws.amazon.com/ses/">AWS Simple Email Service(SES)</a>. For that purpose valid <i>Identities</i> must be created.</li>
  <li>  Email Templates are created using <a href="https://www.w3schools.com/html/default.asp">HTML5</a> and <a href="https://www.w3schools.com/css/">CSS3</a></li> 
  <li> This APIs can also be consumed by any <b>Frontend Application</b>.</li> 
</ol>  

11. [NPM](https://www.npmjs.com/) dependencies are used for various purposes.
12. **Custom Headers** are added with the response for *obvious security* reasons.

## Usage

First clone the repo

```bash
$ git clone git@github.com:anijitsahu/simple-aws-lambda-mongodb.git
```
Install all the necessary dependencies by going inside the directory

```bash
$ cd simple-aws-lambda-mongodb
$ npm install
```


### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### Invocation

After successful deployment, you can invoke the deployed function. 
All the `cron` events will invoke the deployed functions in stipulated time interval. 

However, to call using `httpApi` you can use any REST Client like [Talend API Tester](https://chrome.google.com/webstore/detail/talend-api-tester-free-ed/aejoelaoggembcahagimdiliamlcdmfm?hl=en) with the `url` and *HTTP Verbs* as shown in Terminal after using `serverless deploy`.



