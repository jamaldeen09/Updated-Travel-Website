
import PropTypes from "prop-types"

const ButtonComponent = (props) => {

    const { buttonTxt,styles,custom } = props;
  return (
    <button className={`${styles} ${custom}`}>
        {buttonTxt}
    </button>
  )
}

ButtonComponent.propTypes = {

}
export default ButtonComponent