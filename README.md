# Installation

1. [Install Tailwind](https://tailwindcss.com/docs/installation/#npm) using npm.

2. Install this `tailwind-extras` plugin using npm:
    ```sh
    npm install becks7113/tailwind-extras --save-dev
    ```

3. Add the `tailwind-extras` plugin to your Tailwind config file (usually named `tailwind.js` or `tailwind.config.js`):
    ```javascript
    module.exports = {
      // ...
      plugins: [   
        // ...
        require('tailwind-extras')({
          // see available options for configuration below
        }),
      ],
      // ...
    }
    ```
    [More Info Here](https://tailwindcss.com/docs/plugins) on how to include a Tailwind plugin in your project.

4. Add the `lato` font to your config file:
    ```javascript
    module.exports = {
      // ...
      fonts: {
        // ...
        'lato': [
          "'Lato'",
          'sans-serif',
        ],
      },
      // ...
    }
    ```

5. Re-compile your Tailwind CSS after integrating the `tailwind-extras` package into your project.
