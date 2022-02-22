import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './sort_arrows.scss'

const Sort_Arrow = () => {
    return(
        <div className='SortArrow'>
            <ArrowRightAltIcon style={{transform:"rotate(-90deg)"}}/>
            <ArrowRightAltIcon style={{transform:"rotate(90deg)"}}/>
        </div>
    )
}
export default Sort_Arrow;