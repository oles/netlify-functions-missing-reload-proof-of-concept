const {capitalize} = require('../utilities/index.js')


exports.handler = async function(event, context) {
    try {
        return {
            statusCode: 200,
            body: capitalize('NETLIFY IS GREAT')
        }
    }

    catch (error) {
        console.warn(error)

        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}
