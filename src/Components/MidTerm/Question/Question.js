import React, { Component } from 'react';


class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            result : ""
        }
    }

    onClickHandler = (result) =>{
        this.setState({
            result : result
        })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);
        if(this.state.result !== "")
        {
            this.props.onChangeQuestion(this.state.result);

            this.setState({
                result : ""
            })
        }
    }

    render() {
        const {question,a,b,c,d} = this.props.item;
        return (
            <form className = "quiz" onSubmit = {this.onSubmit}>
                    <div className = "bg-question">
                        <p className = "question">
                            {question}
                        </p>

                        <div className = "answers">
                            <input type="radio" name="answer" id="a" onClick = {()=>this.onClickHandler("a")}/>
                            <label htmlFor="a">{a}</label><br />
                            <input type="radio" name="answer" id="b" onClick = {()=>this.onClickHandler("b")}/>
                            <label htmlFor="b">{b}</label><br />
                            <input type="radio" name="answer" id="c" onClick = {()=>this.onClickHandler("c")}/>
                            <label htmlFor="c">{c}</label><br />
                            <input type="radio" name="answer" id="d" onClick = {()=>this.onClickHandler("d")}/>
                            <label htmlFor="d">{d}</label><br />
                        </div>
                    </div>
                    <button type ="submit" className ="btn-submit">Submit</button>

                </form>
        );
    }
}

export default Question;