import React from 'react'

export default function ExtraNav() {
    return (
        <div className="extra-nav">
            <form>

                <input type="text" placeholder="Search Quora" />
            </form>
            <div className="account">
                <a href="#">A</a>
                <a href="#" className="add">Add Question</a>
            </div>
        </div>
    )
}
