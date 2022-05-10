const EXAMPLE_PATH = "blog-starter";
const CMS_NAME = "Markdown";
const HOME_OG_IMAGE_URL =
    "https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg";


const crypto_data = {
    prod: {
        chainId: 56,
        chainIdHex: "0x38"
    },
    dev: {
        chainId: 97,
        chainIdHex: "0x61",
        WearTokenParams: {
            type: 'ERC20',
            options: {
                address: '0xab8B18b4cd61F30EE9d256D49A53CD8B17DeDDB8',
                symbol: 'WEAR',
                decimals: 18
            },
        },
        Contracts: {
            mallNFT: {
                address: '0x310649e23D90aafb2532628c25125f79CFC557D5',
            },
            mallNFTMinter: {
                address: '0xe722B7820bE0A82c83Ed87C6b8BEA6367f7e0b9d',
                mintPrice: 20
            }
        }
    }
};

const CRYPTO_DATA = process.env.NODE_ENV === "development" ? crypto_data.dev : crypto_data.prod;

const MALL_TYPES = {
    diamond_shop: "Diamond Shop",
    platinum_shop: "Platinum Shop",
    golden_shop: "Golden Shop",
}

module.exports = {
    EXAMPLE_PATH,
    CMS_NAME,
    HOME_OG_IMAGE_URL,
    CRYPTO_DATA,
    MALL_TYPES
};
