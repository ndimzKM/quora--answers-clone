import React from 'react'

export default function QuestionNav() {
    return (
        <section className="q-nav">
            <h2>Questions</h2>
            <ul>
                <li>
                    <a href="#" className="active">Questions for you</a>
                </li>
                <li>
                    <a href="#">Answer requests</a>
                </li>
                <li>
                    <a href="#">Answer drafts</a>
                </li>
            </ul>
        </section>
    )
}
