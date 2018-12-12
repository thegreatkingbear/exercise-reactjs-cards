import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

// to format date in my taste
function formatDateNitty(dateString) {
    const date = new Date(dateString);
    return date.toDateString('mm dd, yyyy');
}

function Dishdetail (props) {
    const selectedDish = props.selectedDish;
    console.log(selectedDish);
    const comments = props.selectedDish.comments.map((comment) => {
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
        <div>
            <Card>
                <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
            
            {comments &&
                <div className="container">
                    <h4>Comments</h4>
                    {comments}
                </div>
            }
        </div>
    );
}

export default Dishdetail;