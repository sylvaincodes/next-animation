# next-animation

This is a library for scroll animation.
It is a common UX pattern on the web. it provides animations that are linked to the scroll position of a scroll container. This means that as you scroll up or down, the linked animation scrubs forward or backward in direct response. Think of interesting effects such as parallax background images or reading indicators which move as you scroll. 

## Features

- 🔥 **Hot by default**
- 🔩 **Easily Customizable**
- ⏳ **Promise API** - _Automatic loader from a promise_
- 🕊 **Lightweight** - _less than 45kb including styles_
- ✅ **Accessible**
- 🤯 **Headless Hooks** 

## Installation

#### With yarn

```sh
yarn add next-animation
```

#### With NPM

```sh
npm install next-animation
```

## Getting Started

Import this component and wrap it to your Root Layout component. It will take care of rendering all animations emitted.

```tsx

  import {Scroll} from 'next-animation'

```

like this : 


```tsx

  "use client"

...

import {Scroll} from 'next-animation'

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;

  return (
    <html>

      <body className={firaCode.className}>

        ...

        <Scroll>
          
        ...

          {children}
      
        ...

        </Scroll>
        
        ...
  
      </body>

    </html>
  );
}
export default RootLayout;

```

Import style to your main style file - be sure the path is correct.
If you are using Next js. import to global.css like this 

```tsx

  @import '@/node_modules/next-animation/dist/style.css';

```

Wrap a component with the attribute data-next-animation.

```tsx

  <div data-next-animation>
    
    ...

  </div>

```

Scroll a component from left

```tsx

  <div data-next-animation="left">
    
    ...

  </div>

```

Scroll a component from right

```tsx

  <div data-next-animation="right">
    
    ...

  </div>

```


## Licence 

next-animation is licensed under the MIT license. https://opensource.org/licenses/MIT


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
