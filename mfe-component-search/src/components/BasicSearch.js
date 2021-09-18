import { Input } from '@salesforce/design-system-react';

export const BasicSearch = ({ index }) => {
    return (
        <div>
            <div className="accordionPanel">
                <div className="column-30">
                    <Input id="base-id" label="Reference No:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Contact No:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Registration No:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Email Address:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Customer ID:" />
                </div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
            </div>
            <br />
            <div className="accordionPanel">
                <div className="column-30">
                    <Input id="base-id" label="First Name:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Last Name:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Date of Birth:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Company Name:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Postcode:" />
                </div>
                <div className="column-30">
                    <Input id="base-id" label="Suburb:" />
                </div>
                <div className="column-30 colum-remove-float">&nbsp;</div>
            </div>
        </div>
    )
}