import {SplitView, IconSettings} from '@salesforce/design-system-react';
import { MasterView } from './MasterView';
import { DetailView } from './DetailView';
import { useSelector, useDispatch } from 'react-redux'
import { openView, closeView } from '../slices/searchResultSlice'

export const SearResultSplitView = () => {

    const splitViewIsOpen = useSelector((state) => {
        return state.searchResultSlice.value.splitViewIsOpen;
    })
    const dispatch = useDispatch()

    return (
        <IconSettings iconPath="icons">
            <div style={{ height: '90vh' }}>
                <SplitView
                    events={{
                        onClose: () => {
                            dispatch(closeView())
                        },
                        onOpen: () => {
                            dispatch(openView())
                        },
                    }}
                    id="base-example"
                    isOpen={splitViewIsOpen}
                    master={ <MasterView /> }
                    detail={ <DetailView /> }
                />
            </div>
        </IconSettings>
    );
}