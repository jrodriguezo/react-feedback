import PropTypes from 'prop-types'

function Form({children, reverse}) {
    return (
        <div className={`form ${reverse && 'reverse'}`}>
                {children}
        </div>
    )
}

Form.defaultProps = {
    reverse: false
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}



export default Form
