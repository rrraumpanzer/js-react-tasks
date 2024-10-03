import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class Alert extends React.Component {
    render() {
        const { type, text } = this.props;
        
        const AlertClass = cn("alert", `alert-${type}`)
        return (
            <div className={AlertClass} role="alert">
              {text}
            </div>
        );
    }
}
// END
