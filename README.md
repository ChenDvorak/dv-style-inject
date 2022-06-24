# dv-style-inject

append style target to head

# Installation

```
npm i dv-style-inject
```

# Usage

```js
import { styleInject } from "dv-style-inject";

const css = `
.css {
    color: white;
}
`;

styleInject({
  css: css,
});
```

# Options

```js
{
  /**
   * content of style to append to head
   */
  css: string;
  /**
   * skip or cover if style with unique is exist
   */
  repeat?: "skip" | "cover";
  /**
   * set the style unique string, if pass this argument, the old style target which has same unique will delete
   */
  unique?: string;
}
```

# License

Licensed under the MIT license
