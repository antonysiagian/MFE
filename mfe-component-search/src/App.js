import './App.css';
import { BrandBand, Button, Accordion, AccordionPanel, Input } from '@salesforce/design-system-react';
import { useSelector, useDispatch } from 'react-redux'
import { set } from './slices/searchAccordionSlice'
import { AdvanceSearch } from './components/AdvanceSearch';
import { ReferenceNumberSearch } from './components/ReferenceNumberSearch';

function App() {

  const expandedValue = useSelector((state) => {
    return state.searchAccordionSlice.value
  })


  const dispatch = useDispatch()

  return (
    <div>
        <Accordion id="searchCustomerAccordionId">
          <AccordionPanel expanded={expandedValue === 1} id={1} title="Simple Search" onTogglePanel={() => {
            dispatch(set(1))
          }} summary='Simple Search' >
            <div className="accordionPanel">
              <Input id="base-id" label="Search Query" placeholder="First Name, last name, or policy number" />
            </div>
          </AccordionPanel >
          
          <AccordionPanel expanded={expandedValue === 2} id={2} key={2} title="Basic Search" onTogglePanel={() => {
            dispatch(set(2))
          }} summary='Basic Search'>
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
          </AccordionPanel>

          <AccordionPanel expanded={expandedValue === 3} id={3} key={3} title="Advance Customer Search" onTogglePanel={() => {
            dispatch(set(3))
          }} summary='Advance Customer Search'>
            <AdvanceSearch />
          </AccordionPanel>

          <AccordionPanel expanded={expandedValue === 4} id={4} key={4} title="Reference Number Search" onTogglePanel={() => {
            dispatch(set(4))
          }} summary='Reference Number Search'>
            <ReferenceNumberSearch />
          </AccordionPanel>
        </Accordion>
      <Button label="Search" />
    </div>
  );
}

export default App;
