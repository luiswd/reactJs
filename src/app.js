
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    render() {
        return <div>
            <h1>{this.props.text}</h1>
            <p>Thi is my first React component</p>
            <p>{this.props.children}</p>
        </div>
    }
}

// This is a way to create a React component
const YourComponent = () => {
    return <div> 
            <h1>Hello everybody!!!</h1>
            <p>Thi is YOUR first React component</p>
        </div>
}
// ====================

ReactDOM.render(<div>
<MyComponent text="Hello World!">
    This is a new line
    </MyComponent>
    <MyComponent text="Hello Everybody!"/>
</div>, 
document.getElementById('wrapper'));

// ======================

class Note extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false
        }
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
    
    }
    edit (){
        this.setState({editing: true})
    }
    save(){
        this.setState({editing: false});
    }
    remove(){
        console.log(this)
    }
    renderForm(){
        return(
            <div className="note">
                <textarea>
                </textarea>
                <button onClick={this.save}>Save</button>
            </div>
        )
    }

    renderDisplay(){
        return (
            <div className="note">
                <p></p>
                <span>
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.remove}>Remove</button>
                </span>
            </div>
        )
    }

    render(){
        return (this.state.editing) ? this.renderForm() : this.renderDisplay()
    }
}

ReactDOM.render(<Note></Note>, document.getElementById('wrapper'));

