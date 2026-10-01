const { getNftListQuery } = require("../query/nft.query")


const getNftListController = async (req, res, next) => {
    try {
        const response = await getNftListQuery()
        return res.send(response)
    } catch (error) {
        next
    }
}

module.exports = {
    getNftListController
}