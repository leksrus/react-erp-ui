import React, { Component } from 'react'
import { ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap'

interface IUserProp {
    userName: string;
};


export class LoggedUserCustom extends Component <IUserProp> {
    constructor(props: IUserProp) {
        super(props);       
    }
    render(): React.ReactNode {
        return (
            <ButtonToolbar>   
                <DropdownButton 
                    drop="down"
                    className="mr-sm-2"
                    variant="secondary"
                    title={`${this.props.userName}`}
                    id="dropdown-button-drop"
                    key="down"
                >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Sign Out</Dropdown.Item>
                </DropdownButton>
            </ButtonToolbar>
        )
    }
}

export default LoggedUserCustom
