/**
 * The GenericLink wraps around React Router's Link or NavLink component, to
 * automatically replace them by regular <a> elements when:
 * - The target reference points to another domain;
 * - User opts to open the reference in a new tab;
 * - User explicitely opts to use <a>.
 */

/* global document, window */

import PT from 'prop-types';
import React from 'react';
import Url from 'url-parse';

export default function GenericLink(props) {
  const {
    activeClassName,
    activeStyle,
    children,
    className,
    enforceA,
    exact,
    isActive,
    location,
    onClick,
    onMouseDown,
    openNewTab,
    replace,
    routerLinkType,
    strict,
    to,
  } = props;
  /* Renders the link as <a> element if either opted explicitely, or the link
   * should open a new tab, or it is an anchor reference. */
  if (enforceA || openNewTab || to.startsWith('#')) {
    return (
      <a
        className={className}
        href={to}
        onClick={onClick}
        onMouseDown={onMouseDown}
        rel={openNewTab ? 'noopener noreferrer' : ''}
        target={openNewTab ? '_blank' : ''}
      >{children}</a>
    );
  }

  /* Otherwise we render the link as React Router's Link or NavLink element. */
  return React.createElement(
    routerLinkType, {
      activeClassName,
      activeStyle,
      className,
      exact,
      isActive,
      location,
      onClick: (e) => {
        /* If a custom onClick(..) handler was provided we execute it. */
        if (onClick) onClick(e);

        /* If the URL leads to a different domain we make transition using JS,
         * preventing event processing by React Router. */
        const url = new Url(to);
        if (url.origin !== document.location.origin) {
          document.location = to;
          e.preventDefault();

        /* Scroll to the top-left corner of the page, just in case the link
         * references the same page we are already in. */
        } else window.scroll(0, 0);
      },
      onMouseDown,
      replace,
      strict,
      to,
    },
  );
}

GenericLink.defaultProps = {
  activeClassName: null,
  activeStyle: null,
  children: null,
  className: null,
  enforceA: false,
  exact: false,
  isActive: null,
  location: null,
  onClick: null,
  onMouseDown: null,
  openNewTab: false,
  replace: false,
  strict: false,
  to: '',
};

GenericLink.propTypes = {
  activeClassName: PT.string,
  activeStyle: PT.string,
  children: PT.node,
  className: PT.string,
  enforceA: PT.bool,
  exact: PT.bool,
  isActive: PT.func,
  location: PT.shape(),
  onClick: PT.func,
  onMouseDown: PT.func,
  openNewTab: PT.bool,
  replace: PT.bool,
  routerLinkType: PT.element.isRequired,
  strict: PT.bool,
  to: PT.oneOfType([PT.object, PT.string]),
};
