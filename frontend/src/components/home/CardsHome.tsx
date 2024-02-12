import CardGeneric from "../Card"
import netflix from "./images/netflix.jpg"
import prime from "./images/prime.jpg"
import apple from "./images/apple.jpg"
import amazon from "./images/amazon.jpg"

function CardsHome() {
  
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Seleção de produtos para você</h2>
    </div>
    <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
    <CardGeneric
    imageUrl={netflix}
    title="Netflix"
    text="Texto do Card"
    buttonText="Adicionar ao carrinho"
  />
    <CardGeneric
        imageUrl={prime}
        title="Prime Video"
        text="Texto do Card"
        buttonText="Adicionar ao carrinho"
    />
     <CardGeneric
        imageUrl={apple}
        title="Apple TV"
        text="Texto do Card"
        buttonText="Adicionar ao carrinho"
    />
     <CardGeneric
        imageUrl={amazon}
        title="Amazon Video"
        text="Texto do Card"
        buttonText="Adicionar ao carrinho"
    />
  </div>
  </>
  )
}

export default CardsHome
