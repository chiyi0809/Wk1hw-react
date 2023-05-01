export default function ProductItem({product}){
    return(
        <section className="image__layout" key={product.id}>
            <div className="row">
                <div className="image">
                    <a href="" className="image__link">
                        <img src={product.img} alt={product.place} className="image__style"/>
                    </a>
                    <p className="image_title">{product.name}</p>
                </div>
            </div>
        </section>
    )
}