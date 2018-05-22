import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';
import '../style/main.scss';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <h1>Generate Cowsay Lorem</h1>
      </header>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({ text: faker.lorem.words(3) }),
    };
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange() {
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(2) }),
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent/>
        <pre> { this.state.content } </pre>        
        <button onClick= { this.handleTextChange }> Click me to change my Moo! </button>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDom.render(<App/>, rootNode);
