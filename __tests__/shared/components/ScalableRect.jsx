import ScalableRect from 'components/ScalableRect';
import React from 'react';
import { snapshot } from 'utils/jest';

test('Snapshots match', () => {
  snapshot(<ScalableRect>CONTENT</ScalableRect>);
  snapshot((
    <ScalableRect
      className="CLASS_NAME"
    >CONTENT</ScalableRect>
  ));
});
