import React, { Component } from 'react';
import Menu from './MenuComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutComponent';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

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
    console.log("map dispatch to props called");
    return {
        postComment: (dishId, rating, author, comment) => 
            dispatch(postComment(dishId, rating, author, comment)),
 
        fetchDishes: () => 
            dispatch(fetchDishes()),

        resetFeedbackForm: () =>
            dispatch(actions.reset('feedback')),

        fetchComments: () => 
            dispatch(fetchComments()),

        fetchPromos: () =>
            dispatch(fetchPromos())
    }
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    onDishSelect(dishid) {
        console.log(dishid);
        this.setState({ selectedDishId: dishid });
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    isLoading={this.props.dishes.isLoading}
                    errorMessage={this.props.dishes.errorMessage}
                    promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrorMessage={this.props.promotions.errorMessage}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            console.log("length of comments : " + this.props.comments.length);
            return (
                <Dishdetail 
                    selectedDish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishid, 10))[0]} 
                    isLoading={this.props.dishes.isLoading}
                    commentsLoading={this.props.comments.isLoading}
                    errorMessage={this.props.dishes.errorMessage}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishid, 10))} 
                    commentsErrorMessage={this.props.comments.errorMessage}
                    postComment={this.props.postComment}
                    dishId={match.params.dishid}
                />
            );
        }

        return (
            <div>
                <Header />
            
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path='/home' component={HomePage} />
                            <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                            <Route path='/menu/:dishid' component={DishWithId} />
                            <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>

                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));