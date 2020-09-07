import React from 'react';
import emailjs from 'emailjs-com';
//import { init } from 'emailjs-com';
//init("user_niuE1DzlA4dZDnwlZLyb6");


export default class SubmitProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            feedback: '',
        };
    }
    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    }

    sendMessage(event) {
        event.preventDefault();
        // if (!this.validateMail()) {
        //     return;
        // }
        const templateParams = {
            from_name: this.state.name + " (" + this.state.email + ")",
            to_name: 'Tim',
            feedback: this.state.feedback
        };
        emailjs
            .send('service_jy4llgk', 'template_kxusod4', templateParams, 'user_niuE1DzlA4dZDnwlZLyb6')
            .then(
                function (response) {
                    console.log("Your message has successfully sent!")
                    console.log("SUCCESS!", response.status, response.text);
                    console.log(response);
                },
                function (err) {
                    console.error("Your message was not able to be sent");
                }
            );
        this.setState({
            name: "",
            email: "",
            feedback: ""
        });
    }

    render() {
        return (
            <div>
                <p>Use this form to either contact us or submit missing product</p>
                <form
                    className="ui form"
                    id={this.props.id}
                    name={this.props.name}
                    method={this.props.method}
                    action={this.props.action}
                >
                    <textarea
                        id="name"
                        name="name"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="your name"
                        required
                        value={this.state.name}
                        style={{ width: "50%" }}
                        rows={1}
                    />
                    <br />
                    <textarea
                        id="email"
                        name="email"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="your email address"
                        required
                        value={this.state.email}
                        style={{ width: "50%" }}
                        rows={1}
                    />
                    <br />
                    <textarea
                        id="feedback"
                        name="feedback"
                        onChange={this.handleInputChange.bind(this)}
                        placeholder="Please write information of what is missing from the previous page" required
                        value={this.state.feedback}
                        style={{ width: "50%", height: "250px" }}
                    />
                    <br />
                    <input
                        type="button"
                        value="Send"
                        className="ui button"
                        style={{
                            fontFamily: "Amatic SC",
                            fontSize: "20px",
                            color: "blue"
                        }}
                        onClick={this.sendMessage.bind(this)}
                    />
                </form>
            </div>
        );
    };
}