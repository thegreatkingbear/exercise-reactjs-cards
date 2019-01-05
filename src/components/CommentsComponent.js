import React, { Component } from 'react';

// to format date in my taste
function formatDateNitty(dateString) {
    const date = new Date(dateString);
    return date.toDateString('mm dd, yyyy');
}


class Comments extends Component {
    render() {
        console.log("render comments : " + this.props.comments.length);
        return(
            this.props.comments.map((comment) => {
                return (
                    <div key={comment.id} className="row">
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author}, {formatDateNitty(comment.date)}</li>
                        </ul>
                    </div>
                )
            })
        );
    }
}

export default Comments;