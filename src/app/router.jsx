import { Router, Redirect } from "@reach/router"

// Custom Components
import BucketPage from '../pages/buckets'
import BucketDetailPage from '../pages/bucket-detail'

function AppRouter(){
    return (
        <Router>
            <BucketPage path='/' />
            <Redirect from='buckets' to='/' noThrow />
            <BucketDetailPage path='/buckets/:bucket_id' />
        </Router>
    )
}

export default AppRouter;