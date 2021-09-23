import * as React from 'react'
import PropTypes from 'prop-types'
import {View, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const hitSlop = {top: 8, bottom: 8, left: 8, right: 8}

/*
static propTypes = {
onValueChange: PropTypes.func,
icon: PropTypes.string,
size: PropTypes.number,
backgroundColor: PropTypes.string,
iconColor: PropTypes.string,
borderColor: PropTypes.string,
checked: PropTypes.bool,
style: PropTypes.object,
}
*/

let defaultProps = {
	icon: 'ios-checkmark',
	size: 24,
	backgroundColor: '#007AFF',
	iconColor: 'white',
	borderColor: 'grey',
	checked: false,
	onValueChange: () => {},
}

export default function RoundCheckbox(props) {
	props = Object.assign({}, defaultProps, props)
	const {size, backgroundColor, borderColor, icon, iconColor, style} = props
	const iconSize = size
	const bothStyles = {
		width: size,
		height: size,
		borderRadius: 4,
		borderColor: '#bbb',
	}

	const checkedStyles = {
		backgroundColor,
		borderColor: backgroundColor,
		borderWidth: 0,
		opacity: props.checked ? 1 : 0,
		position: 'absolute',
		top: 0,
		left: 0,
	}

	function _onPress() {
		props.onValueChange(!props.checked)
	}

	return (
		<TouchableWithoutFeedback hitSlop={hitSlop} onPress={_onPress} style={style}>
			<View style={styles.parentWrapper} shouldRasterizeIOS={true}>
				<View
					style={[
						{
							borderColor,
							backgroundColor: 'transparent',
							opacity: props.checked ? 0 : 1,
						},
						bothStyles,
						styles.commonWrapperStyles,
					]}
				/>
				<View style={[styles.commonWrapperStyles, bothStyles, checkedStyles]}>
					<Icon
						name={icon}
						color={iconColor}
						style={{
							height: iconSize,
							fontSize: iconSize,
							backgroundColor: 'transparent',
						}}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

const styles = {
	parentWrapper: {
		position: 'relative',
	},
	commonWrapperStyles: {
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
}
