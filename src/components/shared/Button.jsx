import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	children: 'Send',
	version: 'secondary',
	type: 'button',
	isDisabled: false,
};

Button.propTypes = {
	children: PropTypes.node,
	version: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
};

export default Button;
