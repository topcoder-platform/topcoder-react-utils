/**
 * The Button component provide a standard button / button-like link:
 * - When disabled, it renders as <div>;
 * - When no "to" prop is passed in, it renders as <button>;
 * - Otherwise, it renders as <Link>.
 */

import PT from 'prop-types';
import React from 'react';

import Link from './Link';

export default function Button({
  active,
  children,
  disabled,
  enforceA,
  onClick,
  onMouseDown,
  openNewTab,
  replace,
  size,
  theme,
  to,
}) {
  let className = theme.button;
  if (theme[size]) className += ` ${theme[size]}`;
  if (active && theme.active) className += ` ${theme.active}`;
  if (disabled) {
    if (theme.disabled) className += ` ${theme.disabled}`;
    return <div className={className}>{children}</div>;
  } else if (to) {
    if (theme.link) className += ` ${theme.link}`;
    return (
      <Link
        className={className}
        enforceA={enforceA}
        onClick={onClick}
        onMouseDown={onMouseDown}
        openNewTab={openNewTab}
        replace={replace}
        to={to}
      >{children}</Link>
    );
  }
  if (theme.regular) className += ` ${theme.regular}`;
  return (
    <button
      className={className}
      onClick={onClick}
      onMouseDown={onMouseDown}
    >{children}</button>
  );
}

Button.defaultProps = {
  active: false,
  children: null,
  disabled: false,
  enforceA: false,
  onClick: null,
  onMouseDown: null,
  openNewTab: false,
  replace: false,
  size: null,
  to: null,
};

Button.propTypes = {
  active: PT.bool,
  children: PT.node,
  disabled: PT.bool,
  enforceA: PT.bool,
  onClick: PT.func,
  onMouseDown: PT.func,
  openNewTab: PT.bool,
  replace: PT.bool,
  size: PT.string,
  theme: PT.shape({
    button: PT.string.isRequired,
    disabled: PT.string,
    link: PT.string,
    regular: PT.string,
  }).isRequired,
  to: PT.oneOfType([PT.object, PT.string]),
};
