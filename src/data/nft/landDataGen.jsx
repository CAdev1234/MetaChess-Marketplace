export const landDataGen = () => {
    let landData = []
    const BoardNameList = ["A", "B", "C", "D", "E", "F", "G", "H"]
    BoardNameList.forEach(itemX => {
        new Array(8).fill(true).map((item,idx) => {
            landData.push({
                "id": idx + 1,
                "template": "Asian",
                "position": `${itemX}${idx + 1}`,
                "price": {
                    "amount": 250,
                    "currency": "SHAH"
                },
                "openToBuy": idx % 2 !== 0 ? true : false,
                "expireTime": 1234345353,
                "lender": {
                    "name": "Brodband Lender",
                    "slug": "/author",
                    "image": {
                        "src": "/images/client/client-1.png"
                    }
                },
                "owner": {
                    "name": "Brodband Owner",
                    "slug": "/author",
                    "image": {
                        "src": "/images/client/client-1.png"
                    }
                },
                "lendExpireTime": 3234345353,
                "totalReward": 9000,
                "slug": `asian_${itemX}${idx + 1}`,
                "images": [{
                    "src": "/images/nft/land/land1.png"
                }]
            })
        })
        new Array(8).fill(true).map((item,idx) => {
            landData.push({
                "id": idx + 1,
                "template": "Egypt",
                "position": `${itemX}${idx + 1}`,
                "price": {
                    "amount": 320,
                    "currency": "SHAH"
                },
                "openToBuy": idx % 2 === 0 ? true : false,
                "expireTime": 1234345353,
                "lender": {
                    "name": "Brodband Lender",
                    "slug": "/author",
                    "image": {
                        "src": "/images/client/client-1.png"
                    }
                },
                "owner": {
                    "name": "Brodband",
                    "slug": "/author",
                    "image": {
                        "src": "/images/client/client-1.png"
                    }
                },
                "lendExpireTime": 3234345353,
                "totalReward": 9000,
                "slug": `egypt_${itemX}${idx + 1}`,
                "images": [{
                    "src": "/images/nft/land/land1.png"
                }]
            })
        })
    })
    return landData
}