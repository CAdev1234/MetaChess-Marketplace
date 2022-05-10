import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import Button from "@ui/button";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import ProductCategory from "@components/product-details/category";
import ProductCollection from "@components/product-details/collection";
import BidTab from "@components/product-details/bid-tab";
import PlaceBet from "@components/product-details/place-bet";
import { ImageType, LandNFTType } from "@utils/types";

// Demo Image

const ProductDetailsArea = ({ space, className, product }) => (
    <div
        className={clsx(
            "product-details-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <Sticky>
                        <GalleryTab images={product.images} />
                    </Sticky>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                    <div className="rn-pd-content-area">
                        <ProductTitle
                            title={`${product.template} - ${product.position}`}
                        />
                        <span className="bid">
                            Height bid{" "}
                            <span className="price">
                                {product.price.amount}
                                {product.price.currency}
                            </span>
                        </span>
                        <h6 className="title-name">#22 Portal , Info bellow</h6>
                        <div className="catagory-collection">
                            <ProductCategory owner={product.owner} />
                            {/* <ProductCollection
                                collection={product.collection}
                            /> */}
                        </div>
                        <Button color="primary-alta" path="#">
                            Buy NFT
                        </Button>
                        {/* <div className="rn-bid-details">
                            <BidTab
                                bids={product?.bids}
                                owner={product.owner}
                                properties={product?.properties}
                                tags={product?.tags}
                                history={product?.history}
                            />
                            <PlaceBet
                                highest_bid={product.highest_bid}
                                auction_date={product?.auction_date}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        <span style={{position: 'absolute', top: '200px', left: '50px', color: 'green', fontSize: '20px'}}>{JSON.stringify(product)}</span>
    </div>
);

ProductDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.shape(LandNFTType),
};

ProductDetailsArea.defaultProps = {
    space: 1,
};

export default ProductDetailsArea;
