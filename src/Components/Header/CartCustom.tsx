import React, { Component } from 'react'
import Icon from 'react-icons-kit'
import { cart } from 'react-icons-kit/icomoon/cart'
import { ButtonToolbar, Button } from 'react-bootstrap'


interface ICartProp { };

interface ICartState { };

export default class CartCustom extends Component<ICartProp, ICartState>{
    constructor(props: ICartProp) {
        super(props)

    }

    render(): React.ReactNode {
        return (
            <ButtonToolbar>
                <Button variant="light"><Icon size={22} icon={cart} /> Cart</Button>
            </ButtonToolbar>
        )
    }
}
