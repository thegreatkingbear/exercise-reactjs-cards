import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

// to format date in my taste
function formatDateNitty(dateString) {
    const date = new Date(dateString);
    return date.toDateString('mm dd, yyyy');
}

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: props.selectedDish,
            comments: props.comments,
            submitComment: false
        };
    }

    render() {
        const renderComments = this.state.comments.map((comment) => {
            return (
                <div key={comment.id} className="row">
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {formatDateNitty(comment.date)}</li>
                    </ul>
                </div>
            )
        });
    
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
                            <CardImg top src={this.state.selectedDish.image} alt={this.state.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.state.selectedDish.name}</CardTitle>
                                <CardText>{this.state.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    
                    <div className="col">
                        <div className="col-12 col-md-5 m-1">
                            {renderComments &&
                                <div className="container">
                                    <h4>Comments</h4>
                                    {renderComments}
                                </div>
                            }
                        </div>

                        <CommentForm isOpen={this.state.submitComment} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;