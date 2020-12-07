import React from 'react'
import ActionLinks from './ActionLinks'

export default function Question({question, removeQuestion}) {
    function handleRemoveQuestion(){
        removeQuestion(question.id)
    }
    return (
        <div className="question">
            <span className="top-span">
                Question Added . 
                <a href="#">{question.category}</a>
            </span>
            <h3>
                <a href="#">{question.title}</a>
            </h3>
            <p>
                {question.answers > 0 ? <a href="#">{question.answers} Answers</a> : `No answer yet`}
            </p>
            <div className="actions">
                <ActionLinks />
            </div>
            <button className="removeBtn" onClick={handleRemoveQuestion}>
                <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="small_close" class="icon_svg-stroke" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke="#666666" stroke-width="1.5"><path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path><path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path></g></svg>
            </button>
        </div>
    )
}
