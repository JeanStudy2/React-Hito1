function CardPizza (props){
    return(
        <>
            <div className="card">
                <img src={props.img} alt="" className="card_img" />
                <h2 className="card__name">Pizza {props.name}</h2>
                <p className="card__titleIngredient">Ingredientes:</p>
                <p className="card__ingredient">🍕{props.ingredients.join(', ')}</p>
                <h2 className="card__price">Precio: ${props.price.toLocaleString()}</h2>
                <div className="card__contentButton">
                    <button className="card__button vermas">Ver mas</button>
                    <button className="card__button añadir">Añadir 🛒 </button>
                </div>
            </div>
        </>
    )
}
export default CardPizza