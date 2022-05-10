import { useRouter } from "next/router";

import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ExploreProductArea from "@containers/explore-product/layout-03";

// Demo data
import characterData from "../../data/nft/character.json";
import battlegroundData from "../../data/nft/battleground.json"

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { nft_type: 'all' } },
//             { params: { nft_type: 'character' } },
//             { params: { nft_type: 'battleground' } },
//         ],
//         fallback: true // false or 'blocking'
//     };
// }

// export async function getStaticProps({params}) {
//     let productData = []
//     console.log("params=", params)
//     switch (params.nft_type) {
//         case 'character':
//             productData = characterData
//             break;
//         case 'battleground':
//             productData = battlegroundData
//             break;
//         default:
//             break;
//     }
//     return { 
//         props: { className: "template-color-1", productData }, 
//     };
// }

const CharacterExplorer = () => {
    // const router = useRouter()
    // const {nft_type} = router.query
    // let productData = []
    // console.log("nft_type=", nft_type)
    // switch (nft_type) {
    //     case 'character':
    //         productData = characterData
    //         break;
    //     case 'battleground':
    //         productData = battlegroundData
    //         break;
    //     default:
    //         break;
    // }
    // console.log("ddddddddddddddd=", productData)
    return (
        <Wrapper>
            <SEO pageTitle="Place Bid With Filter" />
            <Header />
            <main id="main-content">
                {/* <Breadcrumb
                    pageTitle="Place Bid With Filter"
                    currentPage="Place Bid With Filter"
                /> */}
                <ExploreProductArea
                    data={{
                        section_title: {
                            title: "Explore Character NFT",
                        },
                        products: characterData,
                        placeBid: true,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>
        
    )
}

export default CharacterExplorer;
