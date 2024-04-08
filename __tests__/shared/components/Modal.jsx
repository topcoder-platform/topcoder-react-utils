import Modal, { BaseModal } from 'components/Modal';
import React from 'react';
import ReactDom from 'react-dom';
import {
  findInDomByClass,
  renderDom,
  simulate,
  snapshot,
} from 'utils/jest';

beforeAll(() => {
  /* Modal uses ReactJS portals to ensure proper rendering. react-test-renderer,
   * used by utils/jest under the hood, does not support it properly, thus this
   * simple mock for the createPortal(..) function. */
  ReactDom.createPortal = jest.fn(element => (
    <div className="MOCK_PORTAL">
      {element}
    </div>
  ));
});

test('Snapshot match', () => {
  snapshot(<Modal>CONTENT</Modal>);
});

test('onCancel', () => {
  const onCancel = jest.fn();
  const dom = renderDom((
    <BaseModal
      onCancel={onCancel}
      theme={{ overlay: 'overlay' }}
    />
  ));
  const overlay = findInDomByClass(dom, 'overlay');
  simulate.click(overlay);
  expect(onCancel).toHaveBeenCalled();
});

test('onWheel', () => {
  const dom = renderDom((
    <BaseModal
      theme={{ container: 'container' }}
    />
  ));
  const container = findInDomByClass(dom, 'container');
  const stopPropagation = jest.fn();
  simulate.wheel(container, { stopPropagation });
  expect(stopPropagation).toHaveBeenCalled();
});
