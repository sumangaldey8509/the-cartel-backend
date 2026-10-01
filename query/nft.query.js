const axios = require("axios");

const getNftListQuery = async () => {
    try {
        const base_url = process.env.COINGECKO_BASE_URL;
        const coingecko_api_key = process.env.COINGECKO_API_KEY;

        console.log(base_url, coingecko_api_key)


        if (!base_url || !coingecko_api_key) {
            return {
                status: false,
                statusCode: 400,
                message: "Missing API configuration"
            };
        }

        const response = await axios.get(`${base_url}/nfts/pudgy-penguins`, {
            headers: {
                'x-cg-pro-api-key': coingecko_api_key
            }
        });

        return {
            status: true,
            statusCode: 200,
            data: response.data
        };

    } catch (error) {
        return {
            status: false,
            statusCode: error.response?.status || 500,
            message: error.response?.data?.error || error.message
        };
    }
};

module.exports = {
    getNftListQuery
};