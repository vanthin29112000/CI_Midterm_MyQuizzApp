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
            <form className = "quiz" onSubmit = {this.onSubmit} autoComplete = "off">
                    <div className = "bg-question">
                        <p className = "question">
                            {question}
                        </p>

                        <div className = "answers">
                            <div>
                                <input type="radio" name="answer" id="a" onClick = {()=>this.onClickHandler("a")} autoComplete = "off" />
                                <label htmlFor="a">{a}</label>
                            </div>
                            <div>   
                                <input type="radio" name="answer" id="b" onClick = {()=>this.onClickHandler("b")} autoComplete = "off"/>
                                <label htmlFor="b">{b}</label>
                            </div>  
                            <div>
                                <input type="radio" name="answer" id="c" onClick = {()=>this.onClickHandler("c")} autoComplete = "off"/>
                                <label htmlFor="c">{c}</label>
                            </div>
                            <div>
                                <input type="radio" name="answer" id="d" onClick = {()=>this.onClickHandler("d")} autoComplete = "off"/>
                                <label htmlFor="d">{d}</label>
                            </div>
                            
                        </div>
                    </div>
                    <button type ="submit" className ="btn-submit">Submit</button>

                </form>
        );
    }
}

export default Question;