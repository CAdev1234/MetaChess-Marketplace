import { useRouter } from "next/router";

import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";

// Demo data
// import landData from "../../data/nft/land.json";
import { landDataGen } from "src/data/nft/landDataGen";
import ExploreLandNFTArea from "@containers/explore-product/land-nft-layout";

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}


const LandExplorer = () => {
    const landData = landDataGen()
    return (
        <Wrapper>
            <SEO pageTitle="Place Bid With Filter" />
            <Header />
            <main id="main-content">
                <ExploreLandNFTArea
                    data={{
                        section_title: {
                            title: "Explore Land NFT",
                        },
                        products: landData,
                        placeBid: true,
                    }}
                />
            </main>
            <Footer />
        </Wrapper>

    )
}

export default LandExplorer;
