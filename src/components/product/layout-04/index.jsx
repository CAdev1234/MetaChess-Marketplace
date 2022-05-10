import { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import clsx from "clsx";
import Anchor from "@ui/anchor";
import CountdownTimer from "@ui/countdown/layout-01";
import ClientAvatar from "@ui/client-avatar";
import ShareDropdown from "@components/share-dropdown";
import LandMint from "@components/land-mint";
import Button from "@ui/button";
import { ImageType } from "@utils/types";
import MintLandModal from "@components/modals/mint-land-modal";

const Product = ({
    overlay,
    // placeBid,
    template,
    position,
    openToBuy,
    expireTime,
    lender,
    owner,
    lendExpireTime,
    totalReward,
    price,
    slug,
    image,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div
                className={clsx(
                    "product-style-one",
                    !overlay && "no-overlay",
                    // placeBid && "with-placeBid"
                )}
            >
                <div className="card-thumbnail">
                    {image?.src && (
                        <Anchor path={`/land/${slug}`}>
                            <Image
                                src={image.src}
                                alt={image?.alt || "NFT_portfolio"}
                                width={533}
                                height={533}
                            />
                        </Anchor>
                    )}
                    {/* {auction_date && <CountdownTimer date={auction_date} />} */}
                    {/* {placeBid && (
                        <Button onClick={handleBidModal} size="small">
                            Mint Land NFT
                        </Button>
                    )} */}
                </div>
                <div className="product-share-wrapper">
                    <div className="profile-share">
                    </div>
                </div>
                    <span className="product-name color-white fw-bold">{template}-{position}</span>
                <LandMint price={price}  />
            </div>
            {/* <MintLandModal show={showBidModal} handleModal={handleBidModal} /> */}
        </>
    );
};

Product.propTypes = {
    overlay: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    image: ImageType.isRequired,
    placeBid: PropTypes.bool,
};

Product.defaultProps = {
    overlay: false,
};

export default Product;
