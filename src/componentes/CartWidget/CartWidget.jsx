import './CartWidget.scss'

const CartWidget = () => {
    const imgCarrito = "   "
  return (
    <div>
      <img className='imgCarrito' src="./img/carrito.png" alt="Carrito de compras" />
      <strong class="numeroCArrito"> 5 </strong>
    </div>
  )
}

export default CartWidget