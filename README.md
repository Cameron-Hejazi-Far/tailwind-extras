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
| Color         | A color from your config file, ie: `colors.blue`   |
|               | A CSS color, ie: `'#ffffff'` or `'rgb(0,0,0)'`     |
|               | Transparent, ie: `'transparent'`                   |
| Object        | A javascript object                                |
| Boolean       | `true` or `false`                                  |


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
| `shadow`       | Boolean |
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

When using `button`, the default button styles will be used. If you want a non-standard button, you
will need to include both the `button` class as well as the custom class that you want. For example, if
you want a green success button, you would use `class="button button-success"`.

Available button classes: `button-primary`, `button-link`, `button-info`, `button-success`, `button-warning`, and `button-danger`.

Applying the `loading` class to your button will hide the text and show a loding spinner in the button.

### Checkbox

```html
<div class="checkbox">
    <input type="checkbox" id="myCheckbox">
    <label for="myCheckbox">Checkbox</label>
</div>
```

### Dropdown

```html
<div class="dropdown" id="myDropdown">
    <button class="button" onclick="document.getElementById('myDropdown').classList.toggle('opened')">
        Dropdown
    </button>
    <div class="dropdown-menu">
        <button type="button" class="dropdown-item">Item 1</button>
        <button type="button" class="dropdown-item">Item 2</button>
        <button type="button" class="dropdown-item">Item 3</button>
        <span class="dropdown-divider"></span>
        <button type="button" class="dropdown-item">Item 4</button>
        <button type="button" class="dropdown-item">Item 5</button>
    </div>
</div>
```

You should toggle the `opened` class on the dropdown element to open/close the dropdown menu.

You may use the button for the dropdown element the same as you would a regular button element.

You can add the `dropup` class to your dropdown element to make the dropdown appear above the button.
You can also add the `right-aligned` class to your dropdown to align the right side of the dropdown with
the right side of the button. Example:

```html
<div class="dropdown opened dropup right-aligned" id="myDropdown">
    <!-- ... -->
</div>
```

### Input

<table>
    <tr>
        <td>Default</td>
        <td>
            <pre lang="html">
&lt;input type="text" class="input" placeholder="Full name"&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>Loading</td>
        <td>
            <pre lang="html">
&lt;div class="input-wrapper loading"&gt;
    &lt;input type="text" class="input" value="Full name"&gt;
&lt;/div&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>With Icon</td>
        <td>
            <pre lang="html">
&lt;div class="input-wrapper"&gt;
    &lt;span class="icon"&gt;
        &lt;i class="fas fa-user"&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;input type="text" class="input" placeholder="Full name"&gt;
&lt;/div&gt;
            </pre>
        </td>
    </tr>
</table>

### List

```html
<ul class="list hoverable">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>
        <span class="icon">
            <i class="fas fa-check"></i>
        </span>
        <span>Item 4</span>
    </li>
    <li>Item 5</li>
</ul>
```

Available classes to add to the list: `hoverable`.

### Modal

```html
<div class="modal show">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title">Modal Header</div>
            <button type="button" class="modal-close"></button>
        </div>
        <div class="modal-body">
            <p>This is the modal body</p>
            <p>This is another paragraph</p>
            <p>This is yet another paragraph</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="button">Hide</button>
        </div>
    </div>
</div>
```

NOTE: You can toggle the `show` class on the `modal` element to show/hide the modal.

Available classes to add to the modal for additional styles: `wider` and `full-screen`.

### Radio

```html
<div class="radio">
    <input type="radio" id="myRadio">
    <label for="myRadio">Radio Button</label>
</div>
```

### Select

```html
<div class="select">
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>
</div>
```

### Table

```html
<table class="table hoverable">
    <thead>
    <tr>
        <th>Header Cell 1</th>
        <th>Header Cell 2</th>
        <th>Header Cell 3</th>
        <th>Header Cell 4</th>
    </tr>
    </thead>
      <tfoot>
      <tr>
          <th>Footer Cell 1</th>
          <td>Footer Cell 2</td>
          <td>Footer Cell 3</td>
          <td>Footer Cell 4</td>
      </tr>
      </tfoot>
  <tbody>
    <tr>
        <td>Row 1 Cell 1</td>
        <td>Row 1 Cell 2</td>
        <td>Row 1 Cell 3</td>
        <td>Row 1 Cell 4</td>
    </tr>
    <tr>
        <td>Row 2 Cell 1</td>
        <td>Row 2 Cell 2</td>
        <td>Row 2 Cell 3</td>
        <td>Row 2 Cell 4</td>
    </tr>
    </tbody>
</table>
```

Available classes to add to a table for additional styles: `narrow`, `bordered`, `striped`, and `hoverable`.

### Tabs

```html
<div class="tabs">
    <button type="button" class="tab">Tab 1</button>
    <button type="button" class="tab selected">Tab 2</button>
    <button type="button" class="tab">Tab 3</button>
    <button type="button" class="tab">Tab 4</button>
    <button type="button" class="tab" disabled>
        <span class="icon">
            <i class="fas fa-envelope"></i>
        </span>
        <span>Tab 5</span>
    </button>
</div>
```

Use the `selected` class on your `tab` element to indicate which tab is currently selected.

### Tag

<table>
    <tr>
        <td>Default</td>
        <td>
            <pre>
&lt;span class="tag tag-primary"&gt;My Tag&lt;/span&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>With Icon</td>
        <td>
            <pre>
&lt;span class="tag tag-success"&gt;
    &lt;span class="icon"&gt;
        &lt;i class="fas fa-check"&gt;&lt;/i&gt;
    &lt;/span&gt;
    &lt;span&gt;Success&lt;/span&gt;
&lt;/span&gt;
            </pre>
        </td>
    </tr>
</table>

When using `tag`, the default tag styles will be used. If you want a non-standard tag, you
will need to include both the `tag` class as well as the custom class that you want. For example, if
you want a green success tag, you would use `class="tag tag-success"`.

Available tag classes: `tag-primary`, `tag-link`, `tag-info`, `tag-success`, `tag-warning`, and `tag-danger`.
