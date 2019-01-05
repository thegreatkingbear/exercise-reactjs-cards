import React, { Component } from 'react';
import Menu from './MenuComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    console.log("map state to props called");
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => {
            console.log("dispatch addComment called");
            dispatch(addComment(dishId, rating, author, comment))
        }
    }
};

class Main extends Component {

    onDishSelect(dishid) {
        console.log(dishid);
        this.setState({ selectedDishId: dishid });
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            console.log("length of comments : " + this.props.comments.length);
            return (
                <Dishdetail 
                    selectedDish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishid, 10))[0]} 
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishid, 10))} 
                    addComment={this.props.addComment}
                    dishId={match.params.dishid}
                />
            );
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path='/menu' component={()=> <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishid' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));