import Navbar from '../../components/nav'
import Create from '../../components/create'
import Table from '../../components/table'


function BucketPage(){
    return (
        <div className="">
            {/* Navbar */}
            <Navbar />

            {/* main content */}
            <main>
                <div className="container">
                    {/* Add new bucket */}
                    <Create placeholder="Create New Bucket" />

                    {/* Bucket list */}
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Table />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BucketPage