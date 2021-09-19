import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
import PageHeaderControl from '@salesforce/design-system-react/components/page-header/control';

export const HeaderAction = () => (
	<PageHeaderControl>
		<Dropdown
			id="header-nav-right-more"
			align="right"
			assistiveText={{ icon: 'More Options' }}
			iconCategory="utility"
			iconName="down"
			iconVariant="border-filled"
			options={[
				{ label: 'Menu Item One', value: 'A0' },
				{ label: 'Menu Item Two', value: 'B0' },
			]}
		/>
	</PageHeaderControl>
);
