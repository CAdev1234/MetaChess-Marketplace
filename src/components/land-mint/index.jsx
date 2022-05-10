import PropTypes from "prop-types";

const LandMint = ({ price, likeCount = 0 }) => (
    <div className="bid-react-area">
        <div className="last-bid">
            {price.amount}
            {' '}
            {price.currency}
        </div>
    </div>
);

LandMint.propTypes = {
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
    likeCount: PropTypes.number,
};

export default LandMint;
