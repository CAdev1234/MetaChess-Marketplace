import PropTypes from "prop-types";
import clsx from "clsx";
import Image from 'next/image'
import TopSeller from "@components/top-seller/layout-01";
import { ImageType } from "@utils/types";
import Anchor from "@ui/anchor";

const LandNFTLender = ({ className, lender, lendExpireTime }) => {
    const dateTimeConvert = (num) => {
        const date = new Date(num)
        return date.toDateString()
    }
    return (
        <div className={clsx("lender", className)}>
            <div>
                <span>Lender</span>
                <span className="color-body">Expire at {dateTimeConvert(lendExpireTime)}</span>
            </div>
            
            <div className={clsx("top-seller-inner-one", className)}>
                <div className="top-seller-wrapper">
                    <div className={clsx("thumbnail")}>
                        {lender.image?.src && (
                            <Anchor path={lender.slug}>
                                <Image
                                    src={lender.image.src}
                                    alt={lender.image?.alt}
                                    width={54}
                                    height={54}
                                    objectFit="fill"
                                />
                            </Anchor>
                        )}
                    </div>
                    <div className="top-seller-content">
                        <Anchor path={lender.slug}>
                            <h6 className="name">{lender.name}</h6>
                        </Anchor>
                    </div>
                </div>
            </div>
        </div>
    )
};

LandNFTLender.propTypes = {
    className: PropTypes.string,
    lender: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        image: ImageType,
    }),
    lendExpireTime: PropTypes.number
};

export default LandNFTLender;
