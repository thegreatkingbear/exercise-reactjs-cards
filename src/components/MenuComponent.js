import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
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

export default Menu;