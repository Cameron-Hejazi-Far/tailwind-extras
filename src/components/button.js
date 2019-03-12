module.exports = (tailwind) => {

    let buttonStyles = tailwind.generateButtonStyles();
    let defaultButton = buttonStyles.default;

    if (typeof(defaultButton) !== 'object') {
        throw 'If overriding button styles, you must provide styles for a "default" button.';
    }

    tailwind.addComponents({
        '.button': {
            '@apply appearance-none rounded border px-4 py-2 no-underline font-bold text-center inline-flex items-center justify-center relative leading-tight': '',
            'background-color': defaultButton.bg,
            'border-color': defaultButton.border,
            'color': defaultButton.text,

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
                'background-color': defaultButton.bgHover,
                'border-color': defaultButton.borderHover,
                'color': defaultButton.textHover,
            },

            '&:active:not(:disabled)': {
                'background-color': defaultButton.bgActive,
                'border-color': defaultButton.borderActive,
                'color': defaultButton.textActive,
            },

            '& .icon': {
                '@apply block w-4 h-4 mr-2 -ml-1 pointer-events-none': '',
            },
        },
    });

    delete buttonStyles.default; // don't need to re-output the default button theme
    let buttons = {};
    for (let color in buttonStyles) {
        buttons['.button.button-' + color] = {
            'background-color': buttonStyles[color].bg,
            'border-color': buttonStyles[color].border,
            'color': buttonStyles[color].text,
            '&:hover': {
                'background-color': buttonStyles[color].bgHover,
                'border-color': buttonStyles[color].borderHover,
                'color': buttonStyles[color].textHover,
            },
            '&:active': {
                'background-color': buttonStyles[color].bgActive,
                'border-color': buttonStyles[color].borderActive,
                'color': buttonStyles[color].textActive,
            },
            '&.loading::after': {
                'border-color': buttonStyles[color].text,
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
            },
        };
    }

    buttons['.button.loading'] = {
        '@apply text-transparent pointer-events-none': '',

        '&::after': {
            '@apply border-2 rounded-full block h-4 w-4 absolute pointer-events-none': '',
            'border-left-color': defaultButton.text,
            'border-bottom-color': defaultButton.text,
            'border-right-color': 'transparent',
            'border-top-color': 'transparent',
            'animation': 'spinAround .5s infinite linear',
            'content': '""',
            'left': 'calc(50% - (1em / 2))',
            'top': 'calc(50% - (1em / 2))',
        },
    };
    tailwind.addComponents(buttons);

};
