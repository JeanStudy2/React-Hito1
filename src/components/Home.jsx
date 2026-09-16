import Header from "./Header"
import CardPizza from "./CardPizza"

function Home (){
    return(
        <>
            <Header/>
            <div className="card_content" >
                <CardPizza
                    name="Napolitana"
                    price={5950}
                    ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                    img="https://images.pexels.com/photos/12096782/pexels-photo-12096782.jpeg"
                    />
                <CardPizza
                    name="Española"
                    price={6950}
                    ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                    img="https://images.pexels.com/photos/5017829/pexels-photo-5017829.jpeg"
                    />
                <CardPizza
                    name="Pepperoni"
                    price={6950}
                    ingredients={["mozzarella", "pepperoni", "orégano"]}
                    img="https://images.pexels.com/photos/30504705/pexels-photo-30504705.jpeg"
                    />
            </div>
        </>
    )
}

export default Home