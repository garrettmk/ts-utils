
# ts-utils

A library of simple, general-purpose types and utility functions for TypeScript.
I found myself using these in multiple places, so I decided to just put them in their
own library. Most of them are very simple, and are intended to improve code readability
or to simplify common tasks - similiar to `lodash` or `radash`.




## Installation

Install ts-utils with npm

```bash
  npm install @garrettmk/ts-utils
```
    
## Usage/Examples

```javascript
import { listOf } from '@garrettmk/ts-utils'

const numbers = listOf(3, (index) =>) index); // [0, 1, 2]
```


## Acknowledgements

 - [readme.so](https://readme.so)


## Support

For support, please see the [issues page](https://github.com/garrettmk/ts-utils/issues).

