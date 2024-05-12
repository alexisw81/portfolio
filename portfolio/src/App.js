import React, { Component } from 'react';

class App extends Component {

    state = { displayBio: false };

    togggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Alexis. I am a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Maryland, and I code every day.</p>
                            <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                            <p>Besides coding, I love rock climbing and cats!</p>

                            <button onClick={this.togggleDisplayBio}>Show Less</button>
                        </div>


                    ) : (
                        <div>
                            <button onClick={this.togggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default App;
