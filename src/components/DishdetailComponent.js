import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// to format date in my taste
function formatDateNitty(dateString) {
    const date = new Date(dateString);
    return date.toDateString('mm dd, yyyy');
}

function Dishdetail (props) {
    const selectedDish = props.selectedDish;
    console.log(selectedDish);
    const comments = props.comments.map((comment) => {
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
                        {selectedDish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{selectedDish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
                <div className="col-12 col-md-5 m-1">
                    {comments &&
                        <div className="container">
                            <h4>Comments</h4>
                            {comments}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;