import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Figure, ListGroup } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import PizzaContext from '../context/PizzaContext';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { addPizza } = useContext(PizzaContext);
  const { id } = useParams();

  const getPizza = async () => {
    try {
      const res = await fetch('../pizzas.json');
      const pizzas = await res.json();
      const result = pizzas.find((e) => e.id === id);
      setPizza(result);
    } catch (error) {
      console.error('Error fetching pizza:', error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <Container className='p-5 d-flex flex-row justify-center'>
      {pizza ? (
        <div>
          <Figure className='d-flex flex-row gap-3'>
            <Figure.Image width={400} alt={pizza.name} src={pizza.img} />
            <Figure.Caption>
              <h4 className='card-titlepizza text-capitalize'>
                <b>{pizza.name}</b>
              </h4>
              <hr />
              <p className='text-align-center'>{pizza.desc}</p>
              <p className='card-text'>
                <b>Ingredientes:</b>
              </p>
              <ListGroup variant='flush'>
                {pizza.ingredients.map((ingredient, i) => (
                  <ListGroup.Item className='border-0 text-capitalize' key={i}>
                    🍕
                    {ingredient}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className='d-flex justify-content-between'>
                <h2 className='text-pizza'><b>Precio $ {pizza.price.toLocaleString('es-CL')}</b></h2>
                <Button variant='danger' onClick={() => addPizza(pizza)}>
                  Añadir 🛒
                </Button>
              </div>
            </Figure.Caption>
          </Figure>
          <div className='p-5 d-flex justify-content-center'>
          <Link to="/" className="btn btn-primary mb-3">Volver a la página principal</Link>
          </div>
        </div>
      ) : (
        <h4 className='card-titlepizza text-capitalize'><b>PIZZA NO ENCONTRADA</b></h4>
      )}
    </Container>
  );
};

export default Pizza;
