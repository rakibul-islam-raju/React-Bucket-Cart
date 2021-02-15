import Suggestions from '../suggestions'

import React from 'react'

function Create({extra, placeholder}) {
    return (
        <div>
            <div className="row justify-content-center mb-5">
                <div className="col-md-8">
                    <div class="input-group mb-3">
                        <div class="input-group-text"><i className="fa fa-plus"></i></div>
                        <input type="text" class="form-control" placeholder={placeholder} />
                    </div>
                    
                    { extra && <Suggestions /> }

                </div>
            </div>
        </div>
    )
}

export default Create
