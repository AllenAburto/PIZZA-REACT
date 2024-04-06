import React, { useContext } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import PizzaContext from '../context/PizzaContext';
import { reduceItemQuantity, increaseItemQuantity, calculateTotal } from '../utilidades/cartUtils';

const Carrito = () => {
  const { detailsCart, setDetailsCart } = useContext(PizzaContext);
  const total = calculateTotal(detailsCart);

  const handleReduceQuantity = (index) => {
    const updatedCart = reduceItemQuantity(detailsCart, index);
    setDetailsCart(updatedCart);
  };

  const handleIncreaseQuantity = (index) => {
    const updatedCart = increaseItemQuantity(detailsCart, index);
    setDetailsCart(updatedCart); 
  };

  return (
    <div className='p-4'>
      <div className='bg-light m-auto p-5' style={{ width: '70rem' }}>
        <h5>Detalles del pedido:</h5>
        <ListGroup variant='flush' className='bg-white'>
          {detailsCart.length > 0 ? (
            detailsCart.map((product, index) => (
              <ListGroup.Item key={index} className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <img src={product.img} style={{ width: '4rem' }} alt='' />
                  <h6 className='p-2 text-capitalize'>{product.name}</h6>
                </div>
                <div className='d-flex align-items-center'>
                  <h6 className='p-2 text-success'>
                    ${(product.price * product.count).toLocaleString('es-CL')}
                  </h6>
                  <Button variant='danger' onClick={() => handleReduceQuantity(index)}>-</Button>
                  <b className='mx-2'>{product.count}</b>
                  <Button className='btn btn-primary' onClick={() => handleIncreaseQuantity(index)}>+</Button>
                </div>
              </ListGroup.Item>
            ))
          ) : (
            <h2 className='p-5 text-center'><b>Carrito Vacío</b></h2>
          )}
          <h2 className='my-4'>Total: ${(total.toLocaleString('es-CL'))}</h2>
          <Button variant='success' style={{ width: '6rem' }}>Ir a Pagar</Button>
        </ListGroup>
      </div>
    </div>
  );
};

export default Carrito;
