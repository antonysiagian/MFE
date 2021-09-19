import { Input } from '@salesforce/design-system-react';

export const AdvanceSearch = ({ index }) => {
    return (
        <div>
            <div className="accordionPanel">
                <h1 className="slds-text-title_caps slds-p-vertical_medium">
                    Customer Details
                </h1>
                <div className="column-30">
                    <Input id="base-id" label="First Name:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Middle Name:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Last Name:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Gender:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Date of Birth" />
                </div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
                
                <div className="column-30">
                    <Input id="base-id" label="Company Name:" />
                </div>
                <div className="column-30">&nbsp;</div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
            </div>
            <div className="accordionPanel">
                <h1 className="slds-text-title_caps slds-p-vertical_medium">
                    Address Details
                </h1>
                <div className="column-30">
                    <Input id="base-id" label="Address Type:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Postal Type:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Postal No:" />
                </div>

                <div className="column-30">
                    <Input id="base-id" label="Street No:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Street Name:" />
                </div>
                <div className="column-15">
                    <Input id="base-id" label="Street Type"/>
                </div>
                <div className="column-15">
                    <Input id="base-id" label="State"  />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Postcode:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Suburb:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Unit/Apartment:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Lot/Level:" />
                </div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
            </div>

            <div className="accordionPanel">
                <h1 className="slds-text-title_caps slds-p-vertical_medium">
                    International Address Details
                </h1>
                <div className="column-30">
                    <Input id="base-id" label="Address Line 1:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Address Line 2:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="City/ Suburb/ Town: " />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="State/ Prov/ Region:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Zip/ Postal Code:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Country: " />
                </div>
            </div>
        </div>
    )
}