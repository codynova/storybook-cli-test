# storybook-cli-test

Minimum viable reproduction of an issue I'm facing when attempting to run Storybook via CLI



### The Error

```bash
WARNING in ../stories/Test.stories.jsx 6:4
Module parse failed: Unexpected token (6:4)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|
| export const test1 = () => (
>     <button>
|         Click Me
|     </button>
```



### The Demo Architecture

The source code and node_modules for the Storybook CLI are located in the `cli/` directory.

Stories will be located in some other directory, outside of the Storybook CLI project. For this demonstration, they're located in the `stories/` directory.



### Steps to Reproduce

1. Clone the repo
```bash
git clone https://github.com/codynova/storybook-cli-test
```

2. Navigate into the `cli/` directory and install dependencies
```bash
cd storybook-cli-test/cli && yarn
```

3. Navigate back to the root of the repo and run the CLI
```bash
cd .. && node cli
```



### The Intention

The CLI could be installed globally, and then run from within a project. For example:

```bash
npm i -g storybook-cli-test
cd my-project
storybook-cli-test
```
