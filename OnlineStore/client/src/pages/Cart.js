import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {getAllCartItem, getCartId, removeAllItems, removeCartItem, removeCartITem} from "../http/cartAPI";
import {Button, Card, Container, Row} from "react-bootstrap";

const Cart = observer(() => {
    const {user, cart} = useContext(Context)
    const [order, setOrder] = useState([])
    const history = useNavigate()
    let totalCost = 0

    useEffect(() => {
        if (cart.cartId === null) {
            getCartId(user.user.id).then(cartId => {
                cart.setCartId(cartId)
            })
        }
    }, [user.user.id, cart])

    useEffect(() => {
        if (cart.cartId !== null) {
            getAllCartItem(cart.cartId).then(data => {
                setOrder(data)
            })
        }
    }, [cart.cartId])

    return (
        <Container>
            <h1>Моя корзина</h1>
            <Row className='d-flex flex-row justify-content-around'>
                {
                    order.map((item, index) => {
                            totalCost += item.priceDevice
                            return (
                                <Card key={index} className='m-1' style={{width: '19rem'}}>
                                    <Card.Img width={'100%'} height={200} variant="top"
                                              src={process.env.REACT_APP_API_URL + item.img}/>
                                    <Card.Body>
                                        <Card.Title>{item.nameDevice}</Card.Title>
                                        <div className='d-flex flex-column'>
                                            <p>Рейтинг: <b>{item.rating}</b></p>
                                            <p>Цена: <b>{item.priceDevice}</b></p>
                                        </div>
                                        <Button onClick={() => {
                                            removeCartItem(item.is, cart.cartId).then(data => {
                                                console.log(data)
                                            })

                                            history(`http://localhost:3000/cart/${cart.cartId}`)

                                        }} variant='outline-danger'>Удалить</Button>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    )
                }
            </Row>
            {
                order.length !== 0 ? <Row className='d-flex justify-content-around'>
                    <h4>Общая стоимость: {totalCost}</h4>
                    <Button onClick={() => {
                        removeAllItems(cart.cartId).then(data => {
                            console.log(data)
                        })
                        history('/')
                    }} className='btn-lg'
                            variant={'outline-dark'}>Оплата</Button>
                </Row> : <Row className='d-flex justify-content-center'>
                    <h3>Корзина пуста</h3>
                </Row>
            }
        </Container>
    );
});

export default Cart;