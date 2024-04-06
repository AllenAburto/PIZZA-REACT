import React, { useContext } from 'react';
import { ListGroup, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PizzaContext from '../context/PizzaContext';

const CardPizza = () => {
  const { pizzas, addPizza } = useContext(PizzaContext);
  const navigate = useNavigate();

  const renderIngredients = (ingredients) => {
    return ingredients.map((ingredient, index) => (
      <ListGroup.Item className='border-0 text-capitalize' key={index}>
        🍕{ingredient}
      </ListGroup.Item>
    ));
  };

  return (
    <>
      <div className='row justify-content-center'>
        {pizzas?.map((pizza) => (
          <div key={pizza.id} className='col-3 mt-3'>
            <Card>
              <Card.Img variant='top' src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title className='text-capitalize'>{pizza.name}</Card.Title>
                <hr />
                <ListGroup variant='flush'>
                  <b>Ingredientes:</b>
                  {renderIngredients(pizza.ingredients)}
                </ListGroup>
              </Card.Body>
              <Card.Footer>
                <h2 className='text-center'>$ {pizza.price.toLocaleString('es-CL')}</h2>
                <div className='d-flex justify-content-center gap-3'>
                  <Button className='btn-primary' onClick={() => navigate(`/pizza/${pizza.id}`)}>
                    Ver Más 👀
                  </Button>
                  <Button variant='danger' onClick={() => addPizza(pizza)}>
                    Añadir 🛒
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardPizza;