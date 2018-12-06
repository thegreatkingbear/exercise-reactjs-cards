import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class Dishdetail extends Component {
    // to format date in my taste
    formatDateNitty(dateString) {
        const date = new Date(dateString);
        return date.toDateString('mmm dd, yyyy');
    }

    render() {
        const selectedDish = this.props.selectedDish;

        const comments = this.props.selectedDish.comments.map((comment) => {
            return (
                <div key={comment.id} className="row">
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {this.formatDateNitty(comment.date)}</li>
                    </ul>
                </div>
            )
        });

        return (
            <div>
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                {selectedDish.comments ?
                    <div className="container">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                :
                    <div></div>
                }
            </div>
        );
    }
}

export default Dishdetail;