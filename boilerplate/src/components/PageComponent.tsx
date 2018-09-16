import * as React from 'react';

export namespace Page {
    export interface Props {
        className?: string;
    }
}
export class PageComponent extends React.Component<Page.Props> {

    render() {
        const className = (this.props.className) ? this.props.className : '';

        return (
            <div>
                Hello Typescript React!
            </div>
        );
    }
}
