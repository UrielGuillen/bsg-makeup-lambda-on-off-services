import AWS from 'aws-sdk';
const ecs = new AWS.ECS();

export const handler = async (event) => {
  
  const params = {
    service: 'bsg-makeup-be-lb-service',
    cluster: 'bsg-makeup-be',
    desiredCount: event.desiredCount,
  };
    
  let response = {};
  
  try {
    response = await ecs.updateService(params).promise();
  } catch (error) {
    console.log('Error', error);
  }
  
  console.log('Response', response);
};
