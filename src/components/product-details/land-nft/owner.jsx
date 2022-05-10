import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import TopSeller from "@components/top-seller/layout-01";
import { ImageType } from "@utils/types";
import Anchor from "@ui/anchor";

const LandNFTOwner = ({ className, owner, expireTime }) => {
    const dateTimeConvert = (num) => {
        const date = new Date(num)
        return date.toDateString()
    }
    return (
        <div className={clsx("owner", className)}>
            <div>
                <span>Owner</span>
                <span className="color-body">Expire at {dateTimeConvert(expireTime)}</span>
            </div>
            
            <div className={clsx("top-seller-inner-one", className)}>
                <div className="top-seller-wrapper">
                    <div className={clsx("thumbnail")}>
                        {owner.image?.src && (
                            <Anchor path={owner.slug}>
                                <Image
                                    src={owner.image.src}
                                    alt={owner.image?.alt}
                                    width={54}
                                    height={54}
                                    objectFit="fill"
                                />
                            </Anchor>
                        )}
                    </div>
                    <div className="top-seller-content">
                        <Anchor path={owner.slug}>
                            <h6 className="name">{owner.name}</h6>
                        </Anchor>
                    </div>
                </div>
            </div>
        </div>
    )
};

LandNFTOwner.propTypes = {
    className: PropTypes.string,
    owner: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        image: ImageType,
    }),
    expireTime: PropTypes.number
};

export default LandNFTOwner;
