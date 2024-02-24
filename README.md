# React Scroll Animation

This is a library for scroll animation.
It is a common UX pattern on the web. it provides animations that are linked to the scroll position of a scroll container. This means that as you scroll up or down, the linked animation scrubs forward or backward in direct response. Think of interesting effects such as parallax background images or reading indicators which move as you scroll. 

## Features

- 🔥 **Hot by default**
- 🔩 **Easily Customizable**
- ⏳ **Promise API** - _Automatic loader from a promise_
- 🕊 **Lightweight** - _less than 5kb including styles_
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

Import this component to your Root Layout compoenent first. It will take care of rendering all animations emitted.

```tsx

  import {Scroll} from 'next-animation/scroll'

  <body className={firaCode.className}>

        <Scroll>
        
            {children}

        </Scroll>
        
  </body>

```


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
