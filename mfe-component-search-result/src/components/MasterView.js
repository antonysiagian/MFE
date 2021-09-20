import { SplitViewHeader, SplitViewListbox, Icon } from '@salesforce/design-system-react';
import { HeaderAction } from './HeaderAction';
import { HeaderControl } from './HeaderControl';
import { HeaderTitle } from './HeaderTitle';
import { useSelector, useDispatch } from 'react-redux'
import { setUnRead, setSelected } from '../slices/searchResultSlice'

const SORT_OPTIONS = {
	UP: 'up',
	DOWN: 'down',
};

const sortList = (arr, sortDirection) => arr.sort((a, b) =>
    sortDirection === SORT_OPTIONS.DOWN
    ? a.label > b.label
    : b.label > a.label
);

export const MasterView = () => {

    const data = useSelector((state) => {
        return state.searchResultSlice.value;
    })

    const { sortDirection, options, selectedItems, unread } = data;

    const sortedList = sortList([...options], sortDirection);

    const dispatch = useDispatch()


    return [
        <SplitViewHeader
            key="1"
            onRenderActions={HeaderAction}
            onRenderControls={HeaderControl}
            icon={
                <Icon
                    assistiveText={{ label: 'User' }}
                    category="standard"
                    name="lead"
                />
            }
            info="9 Items found"
            title={HeaderTitle}
            truncate
            variant="object-home"
        />,
        <SplitViewListbox
            key="2"
            labels={{
                header: 'Customers',
            }}
            sortDirection={sortDirection}
            options={options}
            events={{
                onSort: () => sortedList,
                onSelect: (event, { selectedItems, item }) => {
                    console.log(`Selected Items ${JSON.stringify(selectedItems)}`)
                    dispatch(setUnRead(unread.filter((i) => i !== item)));
                    dispatch(setSelected(selectedItems));
                },
            }}
            selection={selectedItems}
            unread={unread}
        />
    ];
}