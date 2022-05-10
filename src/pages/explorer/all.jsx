import SEO from "@components/seo";
import Wrapper from "@layout/wrapper";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import Breadcrumb from "@components/breadcrumb";
import ProductArea from "@containers/explore-product/layout-01";

// Demo Data
import characterData from "../../data/nft/character.json";
import battlegroundData from "../../data/nft/battleground.json"

export async function getStaticProps() {
    return { props: { className: "template-color-1" } };
}

const AllExplorer = () => {
    var productData = []
    productData = productData.concat(characterData, battlegroundData)
    return (
        <Wrapper>
            <SEO pageTitle="Product" />
            <Header />
            <main id="main-content">
                <Breadcrumb pageTitle="Our Product" currentPage="Our Product" />
                <ProductArea data={{ products: productData }} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default AllExplorer;