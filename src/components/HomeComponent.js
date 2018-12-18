import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dish: props.dish,
            promotion: props.promotion,
            leader: props.leader
        };
    }

    render() {
        const RenderCard = ({item}) => {
            return (
                <Card>
                    <CardImg src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        {item.designation && 
                        <CardSubtitle>{item.designation}</CardSubtitle>}
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            );
        };

        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={this.state.dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={this.state.promotion} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={this.state.leader} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;