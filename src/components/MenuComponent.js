import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
        // react debugger keeps complaining about key in array. 
        // that's why I added key to below div
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errorMessage) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errorMessage}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Menu
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{menu}</h3>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;