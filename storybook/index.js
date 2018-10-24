import React from 'react';

import { storiesOf } from '@storybook/react';
import SizeMe from '../src';

storiesOf('SizeMe', module).add('to Storybook', () => (
    <div style={{ height: 350, width: 200 }} className="container">
        <SizeMe>
            {({ width, height }) => (
                <div className="inner" style={{ width, height }}>
                    <div>Width: {width}</div>
                    <div>Height: {height}</div>
                </div>
            )}
        </SizeMe>
    </div>
));
