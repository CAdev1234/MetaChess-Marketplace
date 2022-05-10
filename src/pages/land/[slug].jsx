import PropTypes from "prop-types";
import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductArea from "@containers/product/layout-03";
import { shuffleArray } from "@utils/methods";

// demo data
import productData from "../../data/nft/land.json";
import { landDataGen } from "src/data/nft/landDataGen";
import LandNFTDetailsArea from "@containers/product-details/land-nft";
import { LandNFTType } from "@utils/types";

const LandNFTDetails = ({ product, recentViewProducts, relatedProducts }) => {
    return (
        <Wrapper>
            <SEO pageTitle="Product Details" />
            <Header />
            <main id="main-content">
                <Breadcrumb
                    pageTitle="Product Details"
                    currentPage="Product Details"
                />
                <LandNFTDetailsArea product={product} />
                {/* <ProductArea
                    data={{
                        section_title: { title: "Recent View" },
                        products: recentViewProducts,
                    }}
                />
                <ProductArea
                    data={{
                        section_title: { title: "Related Item" },
                        products: relatedProducts,
                    }}
                /> */}
            </main>
            <Footer />
        </Wrapper>
    )
};

export async function getStaticPaths() {
    const landNftData = landDataGen()
    return {
        paths: landNftData.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const landNftData = landDataGen()
    const product = landNftData.find(({ slug }) => slug === params.slug);
    return {
        props: {
            className: "template-color-1",
            product,
        }, // will be passed to the page component as props
    };
}

LandNFTDetails.propTypes = {
    product: PropTypes.shape({}),
};

export default LandNFTDetails;
