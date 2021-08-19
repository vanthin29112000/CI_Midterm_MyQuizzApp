import React, { Component } from 'react';
import './MidTerm.css'
import Question from './Question/Question';
import Result from './Result/Result';

class MidTerm extends Component {
    constructor(props){
        super(props);
        this.state ={ 
            quizData : [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
                }
            ],
            quizShow : 0,
            correct : 0
        }
    }

    onChangeQuestion = (result) =>{
        if(this.state.quizData[this.state.quizShow].correct === result)
        {
            this.setState ({
                correct : this.state.correct + 1,
                quizShow : this.state.quizShow + 1 
            })
            console.log(this.state.quizShow,true);
        }
        else{
            this.setState ({
                quizShow : this.state.quizShow +1
            })
            console.log(this.state.quizShow,false);
        }
    }
    render() {
        return (
            <div className = "bg-Quiz">
                {
                    this.state.quizShow >= this.state.quizData.length ? <Result correct = {this.state.correct} amountQuestion = {this.state.quizData.length}/> 
                    :<Question item = {this.state.quizData[this.state.quizShow]} onChangeQuestion = {this.onChangeQuestion} key= {this.state.quizShow}/>
                }
            </div>
        );
    }
}

export default MidTerm;