import React from 'react';
import ItemsTableCell from '../../../admin/client/components/ItemsTableCell';
import ItemsTableValue from '../../../admin/client/components/ItemsTableValue';

var SelectColumn = React.createClass({
	displayName: 'SelectColumn',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
	},
	renderValue () {
		let value = this.props.data.fields[this.props.col.path];
		let option = this.props.col.field.ops.filter(i => i.value === value)[0];

		return option ? option.label : null;
	},
	render () {
		let path  = this.props.col.path;
		let value = this.props.data.fields[this.props.col.path];
		let style = (path == 'status' && value == 'unsafe') || (path == 'replaceStatus' && value == 'manual') ? {color : 'red'} : {};
		return (
			<ItemsTableCell style={style}>
				<ItemsTableValue field={this.props.col.type}>
					{this.renderValue()}
				</ItemsTableValue>
			</ItemsTableCell>
		);
	},
});

module.exports = SelectColumn;
