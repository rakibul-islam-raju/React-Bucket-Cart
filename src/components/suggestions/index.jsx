import React from 'react'

function Suggestions() {
    return (
        <div>
            <div class="suggestions bg-secondary d-flex justify-content-between p-2 text-white rounded">
                <div className="leftArrow"><i className="fa fa-angle-left"></i></div>
                <span>One</span>
                <span>Two</span>
                <div className="rightArrow"><i className="fa fa-angle-right"></i></div>
            </div>
        </div>
    )
}

export default Suggestions
