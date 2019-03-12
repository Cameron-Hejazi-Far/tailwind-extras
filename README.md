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

4. Add the `lato` font to your Tailwind config file:
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

# Customization

You can customize the `tailwind-extras` styles by passing in optional configuration when you include
the plugin in your library.

## Overriding

You can pass these options at the root to override all options, ie:

```javascript
    // ...
    require('tailwind-extras')({
        // ...
        buttons: {
            default: {
                bg: 'colors.white',
                bgHover: 'colors.white',
                bgActive: 'colors.grey-lighter',
                text: 'colors.grey-darkest',
                textHover: 'colors.grey-darkest',
                textActive: 'colors.grey-darkest',
                border: 'colors.grey',
                borderHover: 'colors.grey-dark',
                borderActive: 'colors.grey-dark',
            },
        },
        // ...
    }),
    // ...
```

The above code will only produce the classes for a `button` class, and will remove all of the other
button classes, such as `button-primary`, `button-success`, `button-danger` etc. becuase you did
not explicitly include them in your configuration.

## Extending

Or if you want to extend the functionality, wrap your styles inside of an `extend` property and
your styles will be appended to the existing classes. For example:

```javascript
    // ...
    require('tailwind-extras')({
        // ...
        extend: {
            buttons: {
                pink: {
                    bg: 'colors.pink',
                    bgHover: 'colors.pink-dark',
                    bgActive: 'colors.pink-darker',
                    text: 'colors.white',
                    textHover: 'colors.white',
                    textActive: 'colors.white',
                    border: 'transparent',
                    borderHover: 'transparent',
                    borderActive: 'transparent',
                },
            },
        },
        // ...
    }),
    // ...
```

The above code will produce classes for all of the built-in classes (`button`, `button-primary`,
`button-success`, `button-danger`, etc.) in addition to the `button-pink` class that has been
extended in the configuration.


## Customizable Classes

| Property Type | Available Options                                  |
| ------------- | -------------------------------------------------- |
| Color         | A color from your config file, ie: `'colors.blue'` |
|               | A CSS color, ie: `'#ffffff'` or `'rgb(0,0,0)'`     |
|               | Transparent, ie: `'transparent'`                   |
| Object        | A javascript object                                |


### Buttons

The key that you specify will determine the name of the button class. For example, the following
code would produce button classes named `button-pink` and `button-cyan`:

```javascript
    buttons: {
        pink: {
            // ...
        },
        cyan: {
            // ...
        },
        // ...
    },
```

NOTE: If you override the button classes (rather than extending them), you must provide the styles
for a `default` button in your configuration.

| Properties     | Type    |
| -------------- | ------- |
| `bg`           | Color   |
| `text`         | Color   |
| `border`       | Color   |
| `bgHover`      | Color   |
| `textHover`    | Color   |
| `borderHover`  | Color   |
| `bgActive`     | Color   |
| `textActive`   | Color   |
| `borderActive` | Color   |

### Checkbox

```javascript
    checkbox: {
        // ...
    },
```

| Properties       | Type    |
| ---------------- | ------- |
| `bg`             | Color   |
| `border`         | Color   |
| `indicator`      | Color   |
| `bgHover`        | Color   |
| `borderHover`    | Color   |
| `indicatorHover` | Color   |

### Dropdown

```javascript
    dropdown: {
        // ...
    },
```

| Properties         | Type    |
| ------------------ | ------- |
| `bg`               | Color   |
| `border`           | Color   |
| `items`            | Object  |
| `items.bg`         | Color   |
| `items.bgHover`    | Color   |
| `items.bgActive`   | Color   |
| `items.text`       | Color   |
| `items.textHover`  | Color   |
| `items.textActive` | Color   |

### Input

```javascript
    input: {
        // ...
    },
```

| Properties     | Type    |
| -------------- | ------- |
| `bg`           | Color   |
| `text`         | Color   |
| `border`       | Color   |
| `bgHover`      | Color   |
| `textHover`    | Color   |
| `borderHover`  | Color   |
| `bgFocus`      | Color   |
| `textFocus`    | Color   |
| `borderFocus`  | Color   |

### List

```javascript
    list: {
        // ...
    },
```

| Properties     | Type    |
| -------------- | ------- |
| `bg`           | Color   |
| `border`       | Color   |
| `bgHover`      | Color   |
| `borderHover`  | Color   |

### Modal

```javascript
    modal: {
        // ...
    },
```

TODO:

### Radio

```javascript
    radio: {
        // ...
    },
```

| Properties       | Type    |
| ---------------- | ------- |
| `bg`             | Color   |
| `border`         | Color   |
| `indicator`      | Color   |
| `bgHover`        | Color   |
| `borderHover`    | Color   |
| `indicatorHover` | Color   |

### Select

```javascript
    select: {
        // ...
    },
```

| Properties       | Type    |
| ---------------- | ------- |
| `bg`             | Color   |
| `border`         | Color   |
| `text`           | Color   |
| `indicator`      | Color   |
| `bgHover`        | Color   |
| `borderHover`    | Color   |
| `textHover`      | Color   |
| `indicatorHover` | Color   |

### Table

```javascript
    table: {
        // ...
    },
```

| Properties         | Type    |
| ------------------ | ------- |
| `border`           | Color   |
| `bg`               | Color   |
| `text`             | Color   |
| `bgHover`          | Color   |
| `textHover`        | Color   |
| `stripedBg`        | Color   |
| `stripedText`      | Color   |
| `stripedBgHover`   | Color   |
| `stripedTextHover` | Color   |

### Tabs

```javascript
    tabs: {
        // ...
    },
```

| Properties     | Type    |
| -------------- | ------- |
| `border`       | Color   |
| `bg`           | Color   |
| `text`         | Color   |
| `bgHover`      | Color   |
| `textHover`    | Color   |
| `bgActive`     | Color   |
| `textActive`   | Color   |
| `bgSelected`   | Color   |
| `textSelected` | Color   |

### Tag

The key that you specify will determine the name of the tag class. For example, the following
code would produce tag classes named `tag-pink` and `tag-cyan`:

```javascript
    tag: {
        pink: {
            // ...
        },
        cyan: {
            // ...
        },
        // ...
    },
```

NOTE: If you override the tag classes (rather than extending them), you must provide the styles
for a `default` tag in your configuration.

| Properties     | Type    |
| -------------- | ------- |
| `bg`           | Color   |
| `text`         | Color   |
| `border`       | Color   |

# Examples

```html
    <div>Buttons</div>
    <button type="button" class="button flex mt-2">Default Button</button>
    <button type="button" class="button button-primary flex mt-2">Primary Button</button>
    <button type="button" class="button button-link flex mt-2" disabled>Disabled</button>
    <button type="button" class="button button-info flex mt-2 loading">Loading</button>
    <a href="#" class="button button-success flex mt-2">Anchor Button</a>
    <button type="button" class="button button-warning flex mt-2">
        <span class="icon">
            <i class="far fa-trash-alt"></i>
        </span>
        <span>Warning Button</span>
    </button>
    <button type="button" class="button button-danger flex loading mt-2">
        <span class="icon">
            <i class="far fa-trash-alt"></i>
        </span>
        <span>Loading With Icon</span>
    </button>
```

![Button Example](data:image/png;base64,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)

TODO: others
