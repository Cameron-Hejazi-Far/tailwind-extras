module.exports = (tailwind) => {

    let inputStyles = tailwind.generateInputStyles();

    tailwind.addComponents({
        '.input': {
            '@apply appearance-none rounded border px-3 py-2 shadow leading-tight no-underline': '',
            'background-color': inputStyles.bg,
            'border-color': inputStyles.border,
            'color': inputStyles.text,

            '&:focus': {
                '@apply outline-none shadow-outline': '',
                'background-color': inputStyles.bgFocus,
                'border-color': inputStyles.borderFocus,
                'color': inputStyles.textFocus,
            },

            '&:hover:not(:disabled)': {
                'background-color': inputStyles.bgHover,
                'border-color': inputStyles.borderHover,
                'color': inputStyles.textHover,
            },

            '&:disabled, &.disabled': {
                '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
            },
        },

        '.input-wrapper': {
            '@apply relative': '',

            '& .icon': {
                '@apply absolute block w-5 h-5 pin-l pin-t ml-3 opacity-50 pointer-events-none': '',
                'margin-top': '0.7rem',
                'color': inputStyles.text,
            },

            '& .icon + .input': {
                '@apply pl-8': '',
            },

            '&.loading .input': {
                '@apply pr-8': '',
            },

            '&.loading::after': {
                '@apply cursor-auto border-2 opacity-50 rounded-full block h-4 w-4 absolute pin-t pin-r mr-3 z-10 pointer-events-none': '',
                'animation': 'spinAround .5s infinite linear',
                'border-left-color': inputStyles.text,
                'border-bottom-color': inputStyles.text,
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
                'content': '""',
                'margin-top': '0.6rem',
            },
        },
    });

};
