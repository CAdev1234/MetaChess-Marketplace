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

const LandNFT = ({
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
    images,
}) => {
    const [showBidModal, setShowBidModal] = useState(false);
    const handleBidModal = () => {
        setShowBidModal((prev) => !prev);
    };
    return (
        <>
            <div
                className={clsx(
                    "landnft-style-one",
                    !overlay && "no-overlay",
                    // placeBid && "with-placeBid"
                )}
            >
                <div className="card-thumbnail">
                    {images[0]?.src && (
                        <Anchor path={`/land/${slug}`}>
                            <Image
                                src={images[0].src}
                                alt={images[0]?.alt || "NFT_portfolio"}
                                width={533}
                                height={533}
                            />
                        </Anchor>
                    )}
                </div>
                <div className="product-share-wrapper">
                    <div className="profile-share">
                    </div>
                </div>
                <Anchor path={`/land/${slug}`}>
                    <span className="product-name color-white fw-bold">{template} - {position}</span>
                </Anchor>
                
                <LandMint price={price}  />
            </div>
        </>
    );
};

LandNFT.propTypes = {
    overlay: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    images: PropTypes.arrayOf(ImageType),
    placeBid: PropTypes.bool,
};

LandNFT.defaultProps = {
    overlay: false,
};

export default LandNFT;
