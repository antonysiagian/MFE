import { Input } from '@salesforce/design-system-react';

export const SimpleSearch = ({index}) => {
    return (
        <div className="accordionPanel">
              <Input id="base-id" label="Search Query" placeholder="First Name, last name, or policy number" />
        </div>
    )
}