import React from 'react'
import QuestionFeed from './QuestionFeed'
import QuestionNav from './QuestionNav'
import Topics from './Topics'
import './MainContainer.css'

export default function MainContainer() {
    
    return (
        <main>
            <QuestionNav />
            <QuestionFeed />
            <Topics />
        </main>
    )
}
