import {Button, Dropdown, DropdownTrigger } from '@salesforce/design-system-react';

export const HeaderTitle = (
	<div className="slds-media__body">
		<h1 className="slds-text-heading_small slds-text-color_default slds-p-right_x-small">
			Search Result
			{/* <Dropdown
				id="header-title-leads"
				options={[
					{ label: 'Menu Item One', value: 'A0' },
					{ label: 'Menu Item Two', value: 'B0' },
					{ label: 'Menu Item Three', value: 'C0' },
					{ type: 'divider' },
					{ label: 'Menu Item Four', value: 'D0' },
				]}
			> */}
				{/* <DropdownTrigger>
					<Button
						className="slds-button_reset slds-type-focus"
						iconCategory="utility"
						iconName="down"
						iconPosition="right"
						label="Search By"
						responsive
						variant="base"
					/>
				</DropdownTrigger> */}
			{/* </Dropdown> */}
		</h1>
	</div>
);