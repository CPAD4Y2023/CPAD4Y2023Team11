const axios = require("axios");

exports.handler = async (event) => {
    let api2Resp = await axios.get(`https://serpapi.com/search.json?engine=google_jobs_listing&q=${event['queryStringParameters']['job_id']}&api_key=be925143f97259684901e389ce9b75ae1a8f6eada0371c0256bb064064993381`)
    const response = {
        statusCode: 200,
        body: JSON.stringify(api2Resp.data),
    };
    return response;
};
