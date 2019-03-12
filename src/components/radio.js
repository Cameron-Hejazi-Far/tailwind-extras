module.exports = (tailwind) => {

    let radioStyles = tailwind.generateRadioStyles();

    tailwind.addComponents({
        '.radio': {

            '& input[type=radio]': {
                '@apply absolute appearance-none outline-none select-none inline-block opacity-0 align-baseline m-0 no-underline': '',

                '& + label': {
                    '@apply relative block cursor-pointer align-middle text-grey-darkest pl-8': '',

                    '&::before': {
                        '@apply absolute pin-l pin-t rounded-full border w-6 h-6 pointer-events-none': '',
                        'background-color': radioStyles.bg,
                        'border-color': radioStyles.border,
                        'content': '""',
                    },
                },

                '&:focus + label::before': {
                    '@apply outline-none shadow-outline': '',
                },

                '&:hover + label:not(:disabled)::before': {
                    'background-color': radioStyles.bgHover,
                    'border-color': radioStyles.borderHover,
                },

                '&:disabled + label, &.disabled + label': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },

                '&:checked + label': {

                    '&::after': {
                        '@apply absolute inline-block rounded-full pin-l pin-t pointer-events-none': '',
                        'background-color': radioStyles.indicator,
                        'content': '""',
                        'transform': 'scale(.5)',
                        'width': '1.5rem',
                        'height': '1.5rem',
                    },
                },


                '&:checked:hover + label:not(:disabled)::after': {
                    'background-color': radioStyles.indicatorHover,
                },
            },
        },
    });

};
