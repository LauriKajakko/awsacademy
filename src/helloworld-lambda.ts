import * as lambda from 'aws-lambda'

export const handler = async (event: lambda.APIGatewayEvent) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
            input: event,
        }),
    }
}
