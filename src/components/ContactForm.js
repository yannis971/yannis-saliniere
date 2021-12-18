import React, { Component } from 'react'

class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             phone: '',
             message: ''
        }
    }

    nameHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    phoneHandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    messageHandler = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    render() {
        return (
        <div className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <p className="text-center">Vous souhaitez me contacter ? <br />N'hésitez pas à remplir le formulaire ci-dessous. <br />Je reviendrai vers vous dès que possible!</p>
                        <div className="my-5">
                            <form method="post" action=".">
                                <div className="form-floating">
                                    <input className="form-control" value={this.state.name} name="name" id="name" type="text" placeholder="Votre nom..." required onChange={this.nameHandler}/>
                                    <label for="name">Nom</label>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" value={this.state.email} name="email" id="email" type="email" placeholder="Votre email..." required onChange={this.emailHandler} />
                                    <label for="email">Email</label>
                                </div>
                                <div className="form-floating">
                                    <input className="form-control" value={this.state.phone} name="phone" id="phone" type="tel" placeholder="Votre numéro de téléphone..." required onChange={this.phoneHandler} />
                                    <label for="phone">Numéro de téléphone</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" value={this.state.message} name="message" id="message" placeholder="Votre message..." style={{height: "12rem"}} required onChange={this.messageHandler}></textarea>
                                    <label for="message">Message</label>
                                </div>
                                <br />
                                <button className="btn btn-primary text-uppercase align-right" id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ContactForm
