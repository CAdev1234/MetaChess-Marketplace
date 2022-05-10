import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";
import { v4 as uuidV4} from 'uuid'
import SectionTitle from "@components/section-title/layout-02";
import { SectionTitleType, LandNFTType } from "@utils/types";
import LandNFT from "@components/product/land-nft-layout";

const ExploreLandNFTArea = ({ className, space, data }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log(data)
        setProducts(data?.products);
    }, []);
    return (
        <div
            className={clsx(
                "rn-product-area masonary-wrapper-activation",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row align-items-center mb--60">
                    <div className="col-lg-4">
                        {data?.section_title && (
                            <SectionTitle
                                className="mb--0"
                                disableAnimation
                                {...data.section_title}
                            />
                        )}
                    </div>
                    {/* <div className="col-lg-8">
                        <FilterButtons
                            buttons={filters}
                            filterHandler={filterHandler}
                        />
                    </div> */}
                </div>
                <div className="col-lg-12">
                    <motion.div layout className="isotope-list item-5">
                        {products?.map((prod) => (
                            <motion.div
                                key={uuidV4()}
                                className={clsx("grid-item")}
                                layout
                            >
                                <LandNFT
                                    overlay
                                    template={prod.template}
                                    position={prod.position}
                                    openToBuy={prod.openToBuy}
                                    expireTime={prod.expireTime}
                                    lender={prod.lender}
                                    owner={prod.owner}
                                    lendExpireTime={prod.lendExpireTime}
                                    totalReward={prod.totalReward}
                                    slug={prod.slug}
                                    images={prod.images}
                                    price={prod.price}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

ExploreLandNFTArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(LandNFTType),
        placeBid: PropTypes.bool,
    }),
};

ExploreLandNFTArea.defaultProps = {
    space: 1,
};

export default ExploreLandNFTArea;
