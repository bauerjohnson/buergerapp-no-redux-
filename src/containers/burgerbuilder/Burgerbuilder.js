import React, {Component} from 'react';

import axios from '../../axios-order';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import Buildcontrols from '../../components/Burger/Buildcontrols/Buildcontrols';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/Ordersummary/Ordersummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorhandler from '../../components/Witherrorhandler/Witherrorhandler';



const INGREDIENTPRICES = {
    salad : 400,
    butter : 100,
    meat : 500,
    bacon : 300
}

class Burgerbuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={...}
    // }

    

    state = {
        ingredients: null,
        //{
        // salad : 0,
        // bacon : 0,
        // butter : 0,
        // meat : 0,
        // },
        loading : false,
        totalprice : 0,
        Purchaseable : false,
        purchasing : false,
        error : false
        
    }

    componentDidMount () {
        axios.get('https://react-my-burger-a1064-default-rtdb.firebaseio.com/ingredients.json') //.json is added
        .then(response => {
            this.setState({ingredients : response.data})
        })
        .catch(error => {
         this.setState({error : true})
        })
    }

    updatepurchasestate (ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];
        })
       
         .reduce ((sum, el) => {
     return sum + el;
         }, 0);
         this.setState({Purchaseable: sum > 0});
     };
     
     
    addingredienthandler = (type) => {
     const oldcount = this.state.ingredients[type];
     const updatedcount = oldcount + 1 ;
     const updatedingredients = {
         ...this.state.ingredients
     };
     updatedingredients[type] = updatedcount;
     const priceaddition = INGREDIENTPRICES[type];
     const oldprice = this.state.totalprice;
     const newprice = oldprice + priceaddition;
     this.setState({totalprice: newprice, ingredients : updatedingredients});
     this.updatepurchasestate(updatedingredients);
    }

    removeingredienthandler = (type) => {
        const oldcount = this.state.ingredients[type];
        if(oldcount <= 0) {
            return;
        }
        const updatedcount = oldcount - 1 ;
        const updatedingredients = {
            ...this.state.ingredients
        };
        updatedingredients[type] = updatedcount;
        const pricesubtract = INGREDIENTPRICES[type];
        const oldprice = this.state.totalprice;
        const newprice = oldprice - pricesubtract;
        this.setState({ingredients : updatedingredients, totalprice : newprice});
       this.updatepurchasestate(updatedingredients);
    }

    purchasehandler = () => {
        this.setState({purchasing : true});
    };

    purchasecancelhandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinuehandler = () => {
        //alert('you continue!');
        // this.setState({loading : true})
        // const order = {
        //     ingredient : this.state.ingredients,
        //     price : this.state.totalprice,
        //     customer : {
        //         name : 'jerry johnson',
        //         address : {
        //             street : 'teststreet 1',
        //             zipcode : '41351',
        //             country : 'nigeria'
        //         },
        //  email : 'test@gmail.com'
        
        //     }, 
        //     deliverymethod : 'fatest'
        // }
        //     axios.post('/orders.json', order)
        //     .then(response => 
        //         this.setState({loading : false, purchasing : false}))
        //     .catch(error => 
        //         this.setState({loading : false, purchasing : false}))
        const queryParams = [];
for (let i in this.state.ingredients) {
queryParams.push(encodeURIComponent(i) + '=' +
   encodeURIComponent(this.state.ingredients[i]));

}
queryParams.push('price=' + this.state.totalprice)
    const queryString = queryParams.join('&');
    this.props.history.push({
        pathname : '/checkout',
        search : '?' + queryString
    })
}
        
    
    


    render () {
        const disableinfo = {...this.state.ingredients}
        for (let key in disableinfo) {
            disableinfo[key] = disableinfo[key] <= 0;
        }
        
        let burger = this.state.error ? <p style = {{textAlign : 'center'}}>cant be loaded</p> : <Spinner/>;
        let ordersummary = null;

        if(this.state.ingredients) {
            burger = (
                <Aux>
                 <Burger ingredients = {this.state.ingredients}/>
                <Buildcontrols  
                ingredientadded = {this.addingredienthandler}
                ingredientRemove = {this.removeingredienthandler}
                 disableRemove = {disableinfo}
                 Purchaseable = {this.state.Purchaseable}
                price = {this.state.totalprice}
                ordered = {this.purchasehandler} />
                </Aux>
            )

            ordersummary = <OrderSummary ingredients = {this.state.ingredients}
            purchasecancel = {this.purchasecancelhandler}
             purchasecontinue = {this.purchaseContinuehandler}
             price = {this.state.totalprice}/>
        }
    
         if(this.state.loading) {
             ordersummary = <Spinner/>
         }
       
        return (
            <Aux>
                <Modal show = {this.state.purchasing}
                        modalclosed = {this.purchasecancelhandler}>
                        {ordersummary}
            </Modal>
                {burger}
               
                
            </Aux>
        )
    }

}

export default WithErrorhandler(Burgerbuilder, axios);