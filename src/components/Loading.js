import CircularProgress from '@mui/material/CircularProgress'
import '../sass/Loading.scss'

export default function Loading({isLoading}) {
    return (
        <div className="loading">
            <div className='loading-body'>
                <span>Loading</span>
                <CircularProgress />
            </div>
        </div>
    )
}