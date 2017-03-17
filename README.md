
# lazy v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```js
const lazy = require('lazy');

// The 3rd argument is only called once (then disposed of).
lazy(obj, key, function() {
  return value;
});
```
