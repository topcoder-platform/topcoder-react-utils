/**
 * The GenericLink wraps around React Router's Link or NavLink component, to
 * automatically replace them by regular <a> elements when:
 * - The target reference points to another domain;
 * - User opts to open the reference in a new tab;
 * - User explicitely opts to use <a>.
 */

/* global document, window */

import _ from 'lodash';
import PT from 'prop-types';
import React from 'react';
import Url from 'url-parse';

export default function GenericLink(props) {
  const {
    children,
    className,
    enforceA,
    onClick,
    onMouseDown,
    openNewTab,
    routerLinkType,
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
        rel="noopener noreferrer"
        target={openNewTab ? '_blank' : ''}
      >{children}</a>
    );
  }

  const linkProps = _.omit(props, [
    'children',
    'enforceA',
    'openNewTab',
    'routerLinkType',
  ]);

  /* Otherwise we render the link as React Router's Link or NavLink element. */
  return React.createElement(
    routerLinkType, {
      ...linkProps,
      onClick: (e) => {
        /* If a custom onClick(..) handler was provided we execute it. */
        if (onClick) onClick(e);

        /* If the URL leads to a different domain we make transition using JS,
         * preventing event processing by React Router. */
        const url = new Url(to);
        if (url.origin !== document.location.origin) {
          document.location.assign(to);
          e.preventDefault();

        /* Scroll to the top-left corner of the page, just in case the link
         * references the same page we are already in. */
        } else window.scroll(0, 0);
      },
    }, children,
  );
}

GenericLink.defaultProps = {
  children: null,
  className: null,
  enforceA: false,
  onClick: null,
  onMouseDown: null,
  openNewTab: false,
  replace: false,
  to: '',
};

GenericLink.propTypes = {
  children: PT.node,
  className: PT.string,
  enforceA: PT.bool,
  onClick: PT.func,
  onMouseDown: PT.func,
  openNewTab: PT.bool,
  routerLinkType: PT.func.isRequired,
  to: PT.oneOfType([PT.object, PT.string]),
};
