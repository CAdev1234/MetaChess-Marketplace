import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "@ui/button";

const MintLandModal = ({ show, handleModal }) => (
    <Modal
        className="rn-popup-modal placebid-modal-wrapper"
        show={show}
        onHide={handleModal}
        centered
    >
        {show && (
            <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleModal}
            >
                <i className="feather-x" />
            </button>
        )}
        <Modal.Header>
            <h3 className="modal-title">Mint a Land NFT</h3>
        </Modal.Header>
        <Modal.Body>
            <div className="placebid-form-box">
                <div className="bid-content">
                    <div className="bid-content-mid">
                        <div className="bid-content-left">
                            <span>Template</span>
                            <span>Position</span>
                            <span>Mint Price</span>
                        </div>
                        <div className="bid-content-right">
                            <span>Asian</span>
                            <span>A1</span>
                            <span>20 $SHAH</span>
                        </div>
                    </div>
                </div>
                <div className="bit-continue-button">
                    <Button path="/connect" size="medium" fullwidth>
                        Mint
                    </Button>
                    <Button
                        color="primary-alta"
                        size="medium"
                        className="mt--10"
                        onClick={handleModal}
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
);

MintLandModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
};
export default MintLandModal;
