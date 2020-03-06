import React, { Component } from 'react'
import { Form, FormControl, ButtonGroup, Button } from 'react-bootstrap'

export class NotLoggerUserCustom extends Component {
    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                <FormControl type="text" placeholder="Password" className="mr-sm-2" />
                <ButtonGroup className="mr-sm-2">
                    <Button variant="outline-success">Sing In</Button>
                    <Button variant="outline-primary">Sign Up</Button>
                </ButtonGroup>
            </Form>
        )
    }
}

export default NotLoggerUserCustom
