import React, { Component } from 'react';

class Result extends Component {
    render() {
        const {correct,amountQuestion} = this.props;
        return (
            
            <form className = "quiz">
                <div className = "bg-question">
                    <p className = "question">
                        You answered {correct}/{amountQuestion} questions correctly
                    </p>
                </div>
                <button type ="submit" className ="btn-submit">Reload</button>
            </form>
        );
    }
}

export default Result;