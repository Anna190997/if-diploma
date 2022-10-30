import './BagCard.css';

const BagCard = ({bagImg, nameCardBag, currency, valuePrice }) => {
    return (
        <div className="bag_card">
            <div className="bag_card_wrapper">
                <div className="bag_img">
                    <img src={bagImg} className="bag_img_card" alt="bag_img"/>
                </div>
                <div className="bag_description">
                    <div className="name_card_bag">
                        <span>{nameCardBag}</span>
                    </div>
                    <div className="price_product">
                        <span className="price_product_detail">{currency}</span>
                        <span className="price_product_detail">$ {valuePrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BagCard;