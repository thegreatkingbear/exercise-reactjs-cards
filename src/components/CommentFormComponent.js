import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handleSubmit(e) {
        this.toggleModal();
        this.props.addComment(parseInt(this.props.dishId), parseInt(e.rating), e.name, e.comment);
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>
                    Submit Comment
                </Button>

                <Modal 
                    isOpen={this.state.isOpen} 
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <Form model="comment" onSubmit={this.handleSubmit}>
                            <Row className="form-group">
                                <Label>Rating</Label>
                                <Col>
                                    <Control.select 
                                        model=".rating"
                                        id="rating"
                                        name="rating"
                                        className="form-control"
                                        defaultValue="5"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label>Your name</Label>
                                <Col>
                                    <Control.text
                                        model=".name"
                                        id="name"
                                        placeholder="your name here"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(10)
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "필요해. ",
                                            minLength: "세글자이상. ",
                                            maxLength: "10글자 이하. "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label>Comment</Label>
                                <Col>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        placeholder="type comments"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: "내용을 넣으셔야 합니다. "
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default CommentForm;