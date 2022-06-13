import * as lambda from 'aws-lambda'

export const handler = async (event: lambda.APIGatewayEvent) => {
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Braap!',
        }),
    }
}
