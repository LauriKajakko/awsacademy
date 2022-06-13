#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsacademyStack } from '../lib/awsacademy-stack';

const app = new cdk.App();
new AwsacademyStack(app, 'AwsacademyStack', {});