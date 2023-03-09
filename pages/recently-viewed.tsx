import dynamic from 'next/dynamic'
import Loader from '../components/Loaders/Loader'
const DynamicComponent = dynamic(() => import('../components/recently-viewed'), {
    loading: () => <Loader />,
    ssr: false
})
const RecentlyViwedPage = () => <DynamicComponent />
export default RecentlyViwedPage
