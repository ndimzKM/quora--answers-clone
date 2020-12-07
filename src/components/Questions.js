import React from 'react'
import gottenQuestions from './data'
import Question from './Question'
export default function Questions() {
    const [questions, setQuestions] = React.useState(gottenQuestions)
    function removeQuestion(id){
        let newQuestions = [...questions]
        newQuestions = newQuestions.filter(question => id !== question.id)
        console.log(newQuestions)
        setQuestions(newQuestions)
    }
    return (
        <div className="questions">
            {
                questions.map(question => {
                    return <Question question={question} key={question.id} removeQuestion={removeQuestion} />
                })
            }
        </div>
    )
}
