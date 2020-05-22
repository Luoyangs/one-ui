## One Icon
This is independent package which supports sereval svg icons for one-ui, you can install it independently as you like in your project
```bash
# install package
yarn add one-svgs

# or use npm
npm install one-svgs -S
```

```js
# use icon
import xxIcon from 'one-svgs/svg/xx.svg';

<one-icon :svg="xxIcon" />

# import more icons by once
import { xxIcon, yyIcon, zzIcon } from 'one-svgs/svg';

```

### Development
>Notice: Once you add/delete icon from svg folder, please run `node update.js` to update `svg/index.js` and `module.json`.
