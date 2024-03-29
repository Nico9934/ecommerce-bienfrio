import React from "react";
import { Link } from "react-router-dom";
import CheckOutList from "./CheckOutList";


const CartCheckOut = ({ compraFinal, idCompra }) => {
  
  const { nombre, mail, calle, altura, tarjeta, pedido, total } = compraFinal;

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout__container">
          <div className="checkout__grid">
            <div className="checkout__datos">
              <p className="checkout__datos-title">
                <span>Nombre: </span>
                {nombre}
              </p>
              <p className="checkout__datos-title">
                <span>Mail: </span>
                {mail}
              </p>
              <p className="checkout__datos-title">
                <span>Calle: </span>
                {calle}
              </p>
              <p className="checkout__datos-title">
                <span>Altura: </span>
                {altura}
              </p>
              <p className="checkout__datos-title">
                <span>Tarjeta: </span>
                {tarjeta}
              </p>
              <p className="checkout__datos-title">
                <span>Tracking Number : </span>
                {idCompra}
              </p>
            </div>

            <div className="checkout__productos">
            {pedido.map( producto => {
              return <CheckOutList
                key={producto.id}
                producto={producto}
              />
            })}
            </div>
          </div>
          <div className="checkout__total-container">
            <Link to={"/"}><p className="checkout__total">Cerrar</p></Link>
           
            <p className="checkout__total">Total: <span>${total}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckOut;
