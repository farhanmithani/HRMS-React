import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { PropTypes} from 'prop-types'
const Buttons =(props) =>{
    
    return(
        <>
            <Button variant={props.type} color={props.colors}>
                {
                props.plus?(<AddIcon/>):null
                }            
                {props.lable}
            </Button>
        </>
    )   
}
Buttons.propTypes= {
    lable:PropTypes.string,
    colors:PropTypes.string,
    type:PropTypes.string,
    plus:PropTypes.bool,
}
export default Buttons