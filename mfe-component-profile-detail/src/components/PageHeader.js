import React from 'react'
import { IconSettings, PageHeader as Header, Icon, PageHeaderControl, ButtonStateful, ButtonGroup, Button, Dropdown } from '@salesforce/design-system-react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const actions = () => (
    <React.Fragment>
        {/* <PageHeaderControl>
            <ButtonStateful
                key="PageHeaderFollowButton"
                iconSize="medium"
                stateOne={{ iconName: 'add', label: 'Follow' }}
                stateTwo={{ iconName: 'check', label: 'Following' }}
                stateThree={{ iconName: 'close', label: 'Unfollow' }}
            />
        </PageHeaderControl> */}
        <PageHeaderControl>
            <ButtonGroup variant="list" id="button-group-page-header-actions">
                <Button label="Close" />
                {/* <Button label="Delete" />
                <Button label="Clone" /> */}
                {/* <Dropdown
                    align="right"
                    assistiveText={{ icon: 'More Options' }}
                    iconCategory="utility"
                    iconName="down"
                    iconVariant="border-filled"
                    id="dropdown-record-home-example"
                    options={[
                        { label: 'Menu Item One', value: 'A0' },
                        { label: 'Menu Item Two', value: 'B0' },
                        { label: 'Menu Item Three', value: 'C0' },
                        { type: 'divider' },
                        { label: 'Menu Item Four', value: 'D0' },
                    ]}
                /> */}
            </ButtonGroup>
        </PageHeaderControl>
    </React.Fragment>
);

export const PageHeader = () => {

    let { id } = useParams();

    const customers = useSelector((state) => {
      return state.customerProfileSlice.value;
    })
  
    const customer = customers.find(customer => customer.id === id);

    const details = [
        {
            label: 'id',
            content: customer.id,
            truncate: true,
        },
        {
            label: 'Address',
            content:
                '388 george street Sydney - 2000',
            truncate: true,
        },
        {
            label: 'Title',
            content: customer.bottomLeftText,
            truncate: true,
        },
        { label: 'Brand', content: 'NRMA' }
    ];
    

    return (
        <IconSettings iconPath="/icons">
				<Header
					details={details}
					icon={
						<Icon
							assistiveText={{ label: 'User' }}
							category="standard"
							name="user"
						/>
					}
					label="Customer"
					onRenderActions={actions}
					title={customer.label}
					variant="record-home"
				/>
			</IconSettings>
    );
}