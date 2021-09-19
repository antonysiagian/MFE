import { Input } from '@salesforce/design-system-react';

export const ReferenceNumberSearch = ({ index }) => {
    return (
        <div>
            <div className="accordionPanel">
               
                <div className="column-30">
                    <Input id="base-id" label="Claim No:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Orbit Reference No:" />
                </div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
                <div className="column-30">
                    <Input id="base-id" label="Complaint Case Ids:" />
                </div>
                <div className="column-30">&nbsp;</div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
                <div className="column-30">
                    <Input id="base-id" label="ABN: " />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="ACN: " />
                </div>
                <div className="column-30">&nbsp;</div>
            </div>
        </div>
    )
}