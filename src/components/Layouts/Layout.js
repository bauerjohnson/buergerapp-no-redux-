import React, {Component} from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../NavigationITEMS/Sidedrawer/Sidedrawer';

class Layout extends Component {

    state = {showsidedrawer : true}

    Sidedrawerclosehandler = () => (
        this.setState({showsidedrawer : false})
    )

    togglehandler = () => {
        this.setState ((prevState) => {
            return {showsidedrawer : !prevState.showsidedrawer}
        })
    }
    render () {
        return (
            <Aux>
            <Toolbar drawer = {this.togglehandler} />
            <Sidedrawer open = {this.state.showsidedrawer}
                        closed = {this.Sidedrawerclosehandler}/>
            <main className = {classes.Content}>
               {this.props.children}
            </main>
            </Aux>       
        )
    }  
}



export default Layout;