/* global document, window */

import GenericLink from 'components/GenericLink';
import PT from 'prop-types';
import React from 'react';
import { findInDomByClass, renderDom, simulate, snapshot } from 'utils/jest';

function Link(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
    >{JSON.stringify(props)}</button>
  );
}

Link.defaultProps = {
  className: null,
};

Link.propTypes = {
  className: PT.string,
  onClick: PT.func.isRequired,
};

describe('Matches snapshots', () => {
  test('in a minimalistic example', () => {
    snapshot((
      <GenericLink
        routerLinkType={Link}
        to="SOME/TEST/URL"
      >LINK</GenericLink>
    ));
  });
  test('when rendered as <a> element', () => {
    snapshot((
      <GenericLink
        enforceA
        routerLinkType={Link}
        to="SOME/TEST/URL"
      >LINK</GenericLink>
    ));
    snapshot((
      <GenericLink
        openNewTab
        routerLinkType={Link}
        to="SOME/TEST/URL"
      >LINK</GenericLink>
    ));
  });
});

test('onClick(..) works when rendered as custom <Link>', () => {
  window.scroll = jest.fn();
  const clickHandler = jest.fn();
  let doc = renderDom((
    <GenericLink
      className="LINK"
      onClick={clickHandler}
      routerLinkType={Link}
      to="SOME/TEST/URL"
    >LINK</GenericLink>
  ));
  let link = findInDomByClass(doc, 'LINK');
  simulate.click(link);
  expect(clickHandler).toHaveBeenCalled();

  const domain = 'https://some.domain.com';
  document.location.assign = jest.fn();
  doc = renderDom((
    <GenericLink
      className="LINK"
      routerLinkType={Link}
      to={domain}
    >LINK</GenericLink>
  ));
  link = findInDomByClass(doc, 'LINK');
  simulate.click(link);

  expect(document.location.assign).toHaveBeenCalledWith(domain);
  expect(window.scroll).toHaveBeenCalledTimes(1);
});
