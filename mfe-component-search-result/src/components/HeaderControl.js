import React from 'react';
import {PageHeaderControl, Dropdown, Button} from '@salesforce/design-system-react';

export const HeaderControl = () => (
	<React.Fragment>
		{/* <PageHeaderControl>
			<Dropdown
				id="header-right-refresh"
				assistiveText={{ icon: 'Checkmark with right icon' }}
				buttonVariant="icon"
				checkmark
				iconCategory="utility"
				iconName="side_list"
				iconSize="large"
				iconVariant="more"
				align="right"
				onSelect={(value) => {
					console.log('selected: ', value);
				}}
				options={[
					{ label: 'Display As', type: 'header' },
					{
						label: 'Table View',
						value: 'A0',
						rightIcon: {
							category: 'utility',
							name: 'table',
						},
					},
					{
						label: 'List View',
						value: 'B0',
						rightIcon: {
							category: 'utility',
							name: 'side_list',
						},
					},
				]}
				value="B0"
			/>
		</PageHeaderControl> */}
		<PageHeaderControl>
			<Button
				assistiveText={{ icon: 'Refresh' }}
				iconCategory="utility"
				iconName="refresh"
				iconVariant="border"
				variant="icon"
			/>
		</PageHeaderControl>
	</React.Fragment>
);