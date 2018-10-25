//@flow

import React from 'react';

import { storiesOf } from '@storybook/react';
import SizeMe from '../src';

storiesOf('SizeMe', module).add('resize', () => (
    <div className="container">
        <SizeMe>
            {({ width, height }) => (
                <div className="inner" style={{ width, height }}>
                    <p>Try to change window size!</p>
                    <div>
                        Width: <strong>{width}</strong>
                    </div>
                    <div>
                        Height: <strong>{height}</strong>
                    </div>
                </div>
            )}
        </SizeMe>
    </div>
));
