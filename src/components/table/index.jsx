import React from 'react'

function Table() {
    return (
        <div>
            <table className="table table-hover table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Bucket</th>
                        <th>Created</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem, ipsum</td>
                        <td>Jan 2, 2020</td>
                        <td>5000</td>
                        <td>
                            <a href="/#" className="text-dark mr-2"><i className="fa fa-edit"></i></a>
                            <a href="/#" className="text-dark mr-2"><i className="fa fa-trash-alt"></i></a>
                            <a href="/#" className="text-dark mr-2"><i className="fas fa-print"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
