import Navbar from '../../components/nav'
import Create from '../../components/create'
import Table from '../../components/table'


function BucketDetailPage() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* main content */}
            <main>
                <div className="container">
                    {/* Add new bucket */}
                    <Create extra placeholder="Add New Item" />

                    {/* Bucket list */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Table />
                            <Table />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BucketDetailPage
