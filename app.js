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

