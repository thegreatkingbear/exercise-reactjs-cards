import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">theGreatKingBear's Restaurant</NavbarBrand>
                    </div>
                </Navbar>

                <Menu dishes={this.state.dishes} onClick={(dishid) => 
                    this.onDishSelect(dishid)} />
                
                {this.state.selectedDishId && 
                <DishDetail selectedDish={this.state.dishes.filter((dish) => 
                    dish.id === this.state.selectedDishId)[0]} />}
            </div>
        );
    }
}

export default Main;