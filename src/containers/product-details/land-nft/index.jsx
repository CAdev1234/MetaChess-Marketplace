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
import LandNFTOwner from "@components/product-details/land-nft/owner";
import LandNFTLender from "@components/product-details/land-nft/lender";

// Demo Image

const LandNFTDetailsArea = ({ space, className, product }) => (
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
                    <div className="rn-landnft-content-area">
                        <ProductTitle
                            title={`${product.template} - ${product.position}`}
                        />
                        <span className="bid">
                            <span className="price">
                                {product.price.amount}
                                {" "}
                                {product.price.currency}
                            </span>
                        </span>
                        <h6 className="total-reward">Total Rewards:<span>{product.totalReward} SHAH</span></h6>
                        <div className="owner-lender">
                            <LandNFTOwner owner={product.owner} expireTime={product.expireTime} />
                            <br />
                            <LandNFTLender lender={product.lender} lendExpireTime={product.lendExpireTime} />
                        </div>
                        {product.openToBuy && <Button color="primary-alta" path="#">
                            Buy NFT
                        </Button>}
                    </div>
                </div>
            </div>
        </div>

        {/* <span style={{position: 'absolute', top: '200px', left: '50px', color: 'green', fontSize: '20px'}}>{JSON.stringify(product)}</span> */}
    </div>
);

LandNFTDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    product: PropTypes.shape({}),
};

LandNFTDetailsArea.defaultProps = {
    space: 1,
};

export default LandNFTDetailsArea;
