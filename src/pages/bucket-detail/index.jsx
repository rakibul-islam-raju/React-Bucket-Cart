function BucketDetailPage() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
                <div className="container">
                    <a className="navbar-brand" href="/#"><i className="fas fa-shopping-cart"></i> Bucket</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#"><i className="fa fa-ellipsis-v"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* main content */}
            <main>
                <div className="container">
                    {/* Add new bucket */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8">
                            <div class="input-group">
                                <div class="input-group-text"><i className="fa fa-plus"></i></div>
                                <input type="text" class="form-control" placeholder="Create New Bucket" />
                            </div>
                        </div>
                    </div>

                    {/* Bucket list */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
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
                                <thead className="bg-success text-white">
                                    <tr>
                                        <th>Bucket</th>
                                        <th>Created</th>
                                        <th>Cost</th>
                                        <th><i className="fa fa-angle-down"></i></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="text-success">Lorem, ipsum</td>
                                        <td className="text-success">Jan 2, 2020</td>
                                        <td className="text-success">5000</td>
                                        <td>
                                            <a href="/#" className="text-success mr-2"><i className="fa fa-edit"></i></a>
                                            <a href="/#" className="text-success mr-2"><i className="fa fa-trash-alt"></i></a>
                                            <a href="/#" className="text-success mr-2"><i className="fas fa-print"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BucketDetailPage
