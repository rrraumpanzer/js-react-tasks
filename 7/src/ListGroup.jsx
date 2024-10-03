import React from 'react';

// BEGIN (write your solution here)
export default class ListGroup extends React.Component {
    render() {
        const { children } = this.props;
        const editedChildren = React.Children.map(children, child => {
            return (
                <li className="list-group-item">
                    {child}
                </li>
            );
        });
        return (
            <ul className="list-group">
                {editedChildren}
            </ul>
        );
    }
}
// END
