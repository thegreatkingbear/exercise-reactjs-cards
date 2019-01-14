import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
        const RenderCard = ({item, isLoading, errorMessage}) => {
            if (isLoading) {
                return (
                    <Loading/>
                );
            }
            else if (errorMessage) {
                return (
                    <h4>{errorMessage}</h4>
                );
            }
            else {
                return (
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                        <Card>
                            <CardImg src={baseUrl + item.image} alt={item.name} />
                            <CardBody>
                                <CardTitle>{item.name}</CardTitle>
                                {item.designation && 
                                <CardSubtitle>{item.designation}</CardSubtitle>}
                                <CardText>{item.description}</CardText>
                            </CardBody>
                        </Card>
                    </FadeTransform>
                );
            }
        };

        return(
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                            item={this.state.dish} 
                            isLoading={this.props.isLoading} 
                            errorMessage={this.props.errorMessage} 
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                            item={this.state.promotion} 
                            isLoading={this.props.promotionLoading} 
                            errorMessage={this.props.promotionErrorMessage} 
                        />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard 
                            item={this.state.leader} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;