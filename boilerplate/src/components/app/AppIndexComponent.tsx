import React from 'react';
import { Route } from 'react-router';
import { PageComponent } from '../PageComponent';

export namespace AppIndex {
    export interface Props {
        className?: string;
    }
}

export class AppIndexComponent extends React.Component<AppIndex.Props> {

    render() {
        const className = (this.props.className) ? this.props.className : '';

        return (
            <div>
                <PageComponent/>
            </div>
        );
    }
}
