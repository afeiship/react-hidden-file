import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import ReactAppendToDocument from 'react-append-to-document';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-hidden-file';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: noop
  };
  /*===properties end===*/

  static create(inProps) {
    return ReactAppendToDocument.append(this, inProps, {
      className: `${CLASS_NAME}__container`
    });
  }

  _onChange = (inEvent) => {
    const value = inEvent.target.files;
    const { onChange } = this.props;
    onChange({ target: { value } });
  };

  render() {
    const { className, onChange, ...props } = this.props;
    return (
      <input
        type="file"
        hidden
        onChange={this._onChange}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
