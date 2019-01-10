import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import Comments from './CommentsComponent';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: props.selectedDish,
            comments: props.comments
        };
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if (this.props.errorMessage) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errorMessage}</h4>
                    </div>
                </div>
            );
        }
        else if (this.props.selectedDish) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                {this.state.selectedDish.name}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{this.state.selectedDish.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg 
                                    top 
                                    src={baseUrl + this.state.selectedDish.image} 
                                    alt={this.state.selectedDish.name} 
                                />
                                <CardBody>
                                    <CardTitle>{this.state.selectedDish.name}</CardTitle>
                                    <CardText>{this.state.selectedDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        
                        <div className="col">
                            <div className="col-12 col-md-5 m-1">
                                <div className="container">
                                    <h4>Comments</h4>
                                    <Comments comments={this.props.comments} addComment={this.props.addComment} dishId={this.props.dishId} />
                                </div>
                            </div>
    
                            <CommentForm dishId={this.props.dishId} addComment={this.props.addComment} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Dishdetail;