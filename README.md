# react-size-me

> React component to determine parent container size

[![NPM registry](https://img.shields.io/npm/v/@avinlab/react-size-me.svg?style=for-the-badge)](https://yarnpkg.com/en/package/@avinlab/react-size-me) [![NPM license](https://img.shields.io/badge/license-mit-red.svg?style=for-the-badge)](LICENSE)

## Demo

Here is an [examples page](https://avin.github.io/react-size-me)

## Install

```bash
# Yarn
yarn add @avinlab/react-size-me

# NPM
npm install --save @avinlab/react-size-me
```

## Usage

```js
import React from 'react';
import SizeMe from '@avinlab/react-size-me';

<div className="container">
    <SizeMe>
        {({ width, height }) => (
            <div className="inner" style={{ width, height }}/>                
        )}
    </SizeMe>
</div>

```

## License

MIT © [avin](https://github.com/avin)
