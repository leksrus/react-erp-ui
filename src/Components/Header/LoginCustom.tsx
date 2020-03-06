import React, { Component } from 'react'
import LoggedUserCustom from './LoggedUserCustom';
import NotLoggedUserCustom from './NotLoggedUserCustom';

interface ILoginProp { }

interface ILoginState {
    isLogged: boolean;
}


export class LoginCustom extends Component<ILoginProp, ILoginState>{
    constructor(props: ILoginProp) {
        super(props);
        this.state = { isLogged: true }
    }

    render(): React.ReactNode {
        return (
         this.state.isLogged ? <LoggedUserCustom userName="Leksus" /> : <NotLoggedUserCustom />
        )
    }
}

export default LoginCustom
