import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDishId: null
        };
    }

    onDishSelect(dishid) {
        console.log(dishid);
        this.setState({ selectedDishId: dishid });
    }

    render() {
        return (
            <div>
                <Header />

                <Menu dishes={this.state.dishes} onClick={(dishid) => 
                    this.onDishSelect(dishid)} />
                
                {this.state.selectedDishId && 
                <DishDetail selectedDish={this.state.dishes.filter((dish) => 
                    dish.id === this.state.selectedDishId)[0]} />}

                <Footer />
            </div>
        );
    }
}

export default Main;