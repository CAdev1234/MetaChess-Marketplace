import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { motion } from "framer-motion";
import { v4 as uuidV4} from 'uuid'
import SectionTitle from "@components/section-title/layout-02";
import Product from "@components/product/layout-04";
import FilterButtons from "@components/filter-buttons";
import { flatDeep } from "@utils/methods";
import { SectionTitleType, ProductType, LandNFTType } from "@utils/types";

const ExploreProductArea = ({ className, space, data }) => {
    // const filters = [
    //     ...new Set(
    //         flatDeep(data?.products.map((item) => item.categories) || [])
    //     ),
    // ];
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log(data)
        setProducts(data?.products);
    }, []);

    // const filterHandler = (filterKey) => {
    //     const prods = data?.products ? [...data.products] : [];
    //     if (filterKey === "all") {
    //         setProducts(data?.products);
    //         return;
    //     }
    //     const filterProds = prods.filter((prod) =>
    //         prod.categories.includes(filterKey)
    //     );
    //     setProducts(filterProds);
    // };
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
                                <Product
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

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(LandNFTType),
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
