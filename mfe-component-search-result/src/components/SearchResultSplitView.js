import IconSettings from '@salesforce/design-system-react/components/icon-settings';

export const SearResultSplitView = () => {
    return (
        <IconSettings iconPath="/assets/icons">
            <div style={{ height: '90vh' }}>
                <SplitView
                    events={{
                        onClose: () => {
                            this.setState({ isOpen: false });
                        },
                        onOpen: () => {
                            this.setState({ isOpen: true });
                        },
                    }}
                    id="base-example"
                    isOpen={this.state.isOpen}
                    master={this.masterView()}
                    detail={this.detailView()}
                />
            </div>
        </IconSettings>
    );
}