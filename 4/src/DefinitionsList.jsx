import React from 'react';

// BEGIN (write your solution here)
export default class DefinitionsList extends React.Component {
    render() {
        const { data } = this.props;

        if (data.length === 0) {
            return null;
        }

        return (
            <dl>
            {data.map((item) => (
                <>
                    <dt>{item.dt}</dt>
                    <dd>{item.dd}</dd>
                </>
            ))}
            </dl>
        );
    }
}
// END
