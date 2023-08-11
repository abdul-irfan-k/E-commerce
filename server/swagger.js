import swaggerAutoGen from 'swagger-autogen'

const swaggerAutoGenFunc = swaggerAutoGen()
const outputFile = './swaggerOutput.json'
const endpointFiles = ['./routes/UserRouter.js']

swaggerAutoGenFunc(outputFile, endpointFiles)