import SplitViewHeader from '@salesforce/design-system-react/components/split-view/header';
import SplitViewListbox from '@salesforce/design-system-react/components/split-view/listbox';

export const MasterView = () => {
    
    return [
        <SplitViewHeader
            key="1"
            onRenderActions={headerActions}
            onRenderControls={headerControls}
            icon={
                <Icon
                    assistiveText={{ label: 'User' }}
                    category="standard"
                    name="lead"
                />
            }
            info="42 items • Updated just now"
            title={headerTitle}
            truncate
            variant="object-home"
        />,
        <SplitViewListbox
            key="2"
            labels={{
                header: 'Lead Score',
            }}
            sortDirection={this.state.sortDirection}
            options={this.state.options}
            events={{
                onSort: this.sortList,
                onSelect: (event, { selectedItems, item }) => {
                    this.setState({
                        unread: this.state.unread.filter((i) => i !== item),
                        selected: selectedItems,
                    });
                },
            }}
            selection={this.state.selected}
            unread={this.state.unread}
        />,
    ];
    
}