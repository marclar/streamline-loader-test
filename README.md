
### Webpack loader for streamline.js

*Not currently working*

To reproduce:

  1. clone the repo
  1. `npm install`
  1. `node launch`
  1. (you'll see `console.log` statements showing that that compilation happens correctly)
  1. THEN update the `streamline-loader` to version `0.1.6`
  1. `node launch` again
  1. see the error

The breaking change is in [this commit](https://github.com/marclar/streamline-loader/commit/81340873b40cc196a97c9b5d82e3dc0791e490f5):

  - prior to the change, the callback is invoked immediately with an empty string
  - after the change, I wait for the compiled code and then call the callback
