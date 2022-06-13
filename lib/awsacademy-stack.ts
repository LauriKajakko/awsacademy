import { Stack, StackProps } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { handler } from '../src/helloworld-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsacademyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
      const fn = new NodejsFunction(this, 'HelloWorldFunction', {
        handler: 'handler',
        entry: path.join(__dirname, '../src/helloworld-lambda.ts'),
        runtime: lambda.Runtime.NODEJS_16_X,
      });
      const fn2 = new NodejsFunction(this, 'Function2', {
        handler: 'handler',
        entry: path.join(__dirname, '../src/second-lambda.ts'),
        runtime: lambda.Runtime.NODEJS_16_X,
      });
      const apiGateway = new apigateway.LambdaRestApi(this, 'ApiGateway', {
        handler: fn,
        proxy: false,
      });
      apiGateway.root.addMethod('GET', new apigateway.LambdaIntegration(fn2));
  }
}
