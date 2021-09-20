import { useSelector } from 'react-redux'
import { Button } from '@salesforce/design-system-react';

export const DetailView = () => {

    const selectedItems = useSelector((state) => {
        return state.searchResultSlice.value.selectedItems;
    })

    return selectedItems.length ? (
        selectedItems.map((item) => (
            <dl
                key={item.id}
                className="slds-box slds-m-left_medium slds-m-bottom_medium slds-list_horizontal slds-wrap"
            >
                <dt
                    className="slds-item_label slds-text-color_weak slds-truncate"
                    title="Name"
                >
                    Name:
                </dt>
                <dd className="slds-item_detail slds-truncate" title={item.label}>
                    {item.label}
                </dd>
                <dt
                    className="slds-item_label slds-text-color_weak slds-truncate"
                    title="Value"
                >
                    Value:
                </dt>
                <dd
                    className="slds-item_detail slds-truncate"
                    title={item.topRightText}
                >
                    {item.topRightText}
                </dd>
                <dt
                    className="slds-item_label slds-text-color_weak slds-truncate"
                    title="Company"
                >
                    Company:
                </dt>
                <dd
                    className="slds-item_detail slds-truncate"
                    title={item.bottomLeftText}
                >
                    {item.bottomLeftText}
                </dd>
                <dt
                    className="slds-item_label slds-text-color_weak slds-truncate"
                    title="Status"
                >
                    Status:
                </dt>
                <dd
                    className="slds-item_detail slds-truncate"
                    title={item.bottomRightText}
                >
                    {item.bottomRightText}
                </dd>
                <div className="slds-p-top_x-small">
                    <Button label="View" />
                </div>
            </dl>
            
        ))
    ) : (
        <div />
    );
}