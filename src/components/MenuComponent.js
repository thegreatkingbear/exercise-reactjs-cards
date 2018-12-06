import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
            //react debugger keeps complaining about key in array. that's why I added key to below div
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card
                        onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        // when user select one of the dishes, make it salient
        const selectedDish = this.state.selectedDish;

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {selectedDish ? 
                            <Dishdetail selectedDish={selectedDish} />
                        :
                            <div></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;