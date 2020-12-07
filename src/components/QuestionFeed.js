import React from 'react'
import Questions from './Questions'
import './Questions.css'

export default function QuestionFeed() {
    return (
        <section className="feed shadow">
            <h1>
                <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="star" class="icon_svg-stroke icon_svg-fill" stroke="#cc0000" stroke-width="1.5" fill="#fff" fill-rule="evenodd" stroke-linejoin="round"><polygon id="Star" points="12 16.6175467 7.05572809 19.2169043 8 13.7113766 4 9.81234022 9.52786405 9.00909456 12 4 14.472136 9.00909456 20 9.81234022 16 13.7113766 16.9442719 19.2169043"></polygon></g></svg>
                <span>Questions For You</span>
            </h1>
            <Questions />
        </section>
    )
}
