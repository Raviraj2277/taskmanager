
import PropTypes from 'prop-types'
const Button = ({color,Text , onClick}) => {
    
    return (
        <div>
            <button  style={{backgroundColor:color}} className="btn" onClick={onClick} >{Text}</button>
        </div>
    )
}
Button.defaualtProps={
    color:'steelblue'
}
Button.propTypes={
    onClick:PropTypes.func,
}
export default Button
