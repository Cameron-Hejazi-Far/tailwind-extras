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

### Buttons

<table>
    <tr>
        <td>Default</td>
        <td>
            <pre lang="html">
                &lt;button class="button"&gt;Default Button&lt;/button&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>Success</td>
        <td>
            <pre lang="html">
                &lt;button class="button button-success"&gt;Success&lt;/button&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>With Icon</td>
        <td>
            <pre lang="html">
                &lt;button type="button" class="button button-danger"&gt;
                    &lt;span class="icon"&gt;
                        &lt;i class="far fa-trash-alt"&gt;&lt;/i&gt;
                    &lt;/span&gt;
                    &lt;span&gt;Delete&lt;/span&gt;
                &lt;/button&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>Loading</td>
        <td>
            <pre lang="html">
                &lt;button class="button button-warning loading"&gt;Loading&lt;/button&gt;
            </pre>
        </td>
    </tr>
</table>

Available button classes: `button-primary`, `button-link`, `button-info`, `button-success`, `button-warning`, `button-danger`.

TODO: others
