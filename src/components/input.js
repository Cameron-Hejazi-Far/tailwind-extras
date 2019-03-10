module.exports = (tailwind) => {

    tailwind.addComponents({
        '.input': {
            '@apply appearance-none bg-white rounded border border-grey px-3 py-2 shadow text-grey-darkest leading-tight no-underline': '',

            '&:focus': {
                '@apply outline-none shadow-outline': '',
            },

            '&:hover:not(:disabled)': {
                '@apply border-grey-dark': '',
            },

            '&:disabled, &.disabled': {
                '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
            },
        },

        '.input-wrapper': {
            '@apply relative': '',

            '& .icon': {
                '@apply absolute block w-5 h-5 pin-l pin-t ml-3 text-grey-darkest opacity-50 pointer-events-none': '',
                'margin-top': '0.7rem',
            },

            '& .icon + .input': {
                '@apply pl-8': '',
            },

            '&.loading .input': {
                '@apply pr-8': '',
            },

            '&.loading::after, &.loading:after': {
                '@apply cursor-auto border-2 border-grey-darkest opacity-50 rounded-full block h-4 w-4 absolute pin-t pin-r mr-3 z-10 pointer-events-none': '',
                'animation': 'spinAround .5s infinite linear',
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
                'content': '""',
                'margin-top': '0.6rem',
            },
        },
    });

};
