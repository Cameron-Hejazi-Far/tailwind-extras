module.exports = (tailwind) => {

    let buttonStyles = tailwind.generateButtonStyles();
    let dropdownStyles = tailwind.generateDropdownStyles();
    let defaultButton = buttonStyles.default;

    if (typeof(defaultButton) !== 'object') {
        throw 'If overriding button styles, you must provide styles for a "default" button.';
    }

    tailwind.addComponents({
        '.dropdown': {
            '@apply inline-flex relative': '',

            '& .button:not(.loading)::after': {
                '@apply block border-l-2 border-b-2 rounded-sm w-2 h-2 ml-3 -mt-1 -mr-1 pointer-events-none': '',
                'content': '" "',
                'top': '50%',
                'transform': 'rotate(-45deg)',
                'transform-origin': 'center',
                'border-color': defaultButton.text,
            },

            '& .button:hover:not(.loading)::after': {
                'border-color': defaultButton.textHover,
            },

            '& .dropdown-menu': {
                '@apply hidden absolute pin-l mt-1 z-20 pt-2 pb-2 border rounded shadow': '',
                'min-width': '12rem',
                'top': '100%',
                'background-color': dropdownStyles.bg,
                'border-color': dropdownStyles.border,
            },

            '&.opened .dropdown-menu': {
                '@apply block': ''
            },

            '&.dropup .dropdown-menu': {
                '@apply mb-1': '',
                'bottom': '100%',
                'top': 'auto',
                'margin-top': 'initial',
            },

            '&.right-aligned .dropdown-menu': {
                '@apply pin-r': '',
                'left': 'auto',
            },

            '& .dropdown-menu .dropdown-divider': {
                '@apply border-0 block my-2': '',
                'height': '1px',
                'background-color': dropdownStyles.border,
            },

            '& .dropdown-menu .dropdown-item': {
                '@apply appearance-none block relative px-2 py-4 cursor-pointer no-underline text-left w-full truncate leading-tight': '',
                'background-color': dropdownStyles.items.bg,
                'color': dropdownStyles.items.text,

                '&:active': {
                    '@apply outline-none': '',
                },

                '&:focus:not(:active)': {
                    '@apply outline-none shadow-outline': '',
                },

                '&:disabled, &.disabled': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },

                '&:hover:not(:disabled)': {
                    'background-color': dropdownStyles.items.bgHover,
                    'color': dropdownStyles.items.textHover,
                },

                '&:active:not(:disabled)': {
                    'background-color': dropdownStyles.items.bgActive,
                    'color': dropdownStyles.items.textActive,
                },
            },
        },
    });

    delete buttonStyles.default; // don't need to re-output the default button theme
    let buttons = {};
    for (let color in buttonStyles) {
        buttons['.dropdown .button.button-' + color + ':not(.loading)::after'] = {
            'border-color': buttonStyles[color].text,
        };
    }
    tailwind.addComponents(buttons);

};
