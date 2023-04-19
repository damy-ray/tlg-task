const Product = ({ img, description, price }) => {
    return <div className={'product'}>
        <img src={img} />
        <span>{description}</span>
        <span>€ {price}</span>
    </div>
}

export default Product;