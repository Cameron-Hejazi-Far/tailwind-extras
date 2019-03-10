module.exports = (tailwind) => {

    tailwind.addComponents({
        '.checkbox': {

            '& input[type=checkbox]': {
                '@apply absolute appearance-none outline-none select-none inline-block opacity-0 align-baseline m-0 no-underline': '',

                '& + label': {
                    '@apply relative block cursor-pointer align-middle text-grey-darkest pl-8': '',

                    '&::before, &:before': {
                        '@apply absolute pin-l pin-t rounded border border-grey w-6 h-6 pointer-events-none': '',
                        'content': '""',
                    },
                },

                '&:focus + label::before, &:focus + label:before': {
                    '@apply outline-none shadow-outline': '',
                },

                '&:hover + label:not(:disabled)::before, &:hover + label:not(:disabled):before': {
                    '@apply border-grey-dark': '',
                },

                '&:disabled + label, &.disabled + label': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },

                '&:checked + label': {

                    '&::after, &:after': {
                        '@apply absolute inline-block border-r-2 border-b-2 border-blue pointer-events-none': '',
                        'content': '""',
                        'transform': 'rotate(45deg)',
                        'width': '0.375rem',
                        'height': '0.6rem',
                        'top': '0.405rem',
                        'left': '0.6rem',
                    },
                },
            },
        },
    });

};
