import './App.css';
import { BrandBand, Button, Accordion, AccordionPanel, Input } from '@salesforce/design-system-react';
import { SimpleSearch } from './components/SimpleSearch';
import { BasicSearch } from './components/BasicSearch';
import { AdvanceSearch } from './components/AdvanceSearch';
import { ReferenceNumberSearch } from './components/ReferenceNumberSearch';
import { useSelector, useDispatch } from 'react-redux'
import { set } from './slices/searchAccordionSlice'

function App() {

  const expandedValue = useSelector((state) => {
    return state.searchAccordionSlice.value
  })


  const dispatch = useDispatch()

  return (
    <div>
      <BrandBand
        id="brand-band-lightning-blue"
        className="slds-p-around_small"
        theme="lightning-blue"
      >
        <div className="slds-box slds-theme_default">
          <h3 className="slds-text-heading_label slds-truncate">Search Customer App</h3>
        </div>
        <Accordion id="searchCustomerAccordionId">
          <AccordionPanel expanded={expandedValue === 1} id={1} title="Simple Search" onTogglePanel={() => {
            dispatch(set(1))
          }} summary='Simple Search' >
            <SimpleSearch />
          </AccordionPanel >
          
          <AccordionPanel expanded={expandedValue === 2} id={2} key={2} title="Basic Search" onTogglePanel={() => {
            dispatch(set(2))
          }} summary='Basic Search'>
            <BasicSearch />
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
        <div className="slds-align_absolute-right slds-p-top_xx-small"><Button label="Search" /></div>  
      </BrandBand>
      

      
    </div>
  );
}

export default App;
