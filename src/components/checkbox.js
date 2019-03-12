module.exports = (tailwind) => {

    let checkboxStyles = tailwind.generateCheckboxStyles();

    tailwind.addComponents({
        '.checkbox': {

            '& input[type=checkbox]': {
                '@apply absolute appearance-none outline-none select-none inline-block opacity-0 align-baseline m-0 no-underline': '',

                '& + label': {
                    '@apply relative block cursor-pointer align-middle pl-8': '',

                    '&::before': {
                        '@apply absolute pin-l pin-t rounded border w-6 h-6 pointer-events-none': '',
                        'background-color': checkboxStyles.bg,
                        'border-color': checkboxStyles.border,
                        'content': '""',
                    },
                },

                '&:focus + label::before': {
                    '@apply outline-none shadow-outline': '',
                },

                '&:hover + label:not(:disabled)::before': {
                    'background-color': checkboxStyles.bgHover,
                    'border-color': checkboxStyles.borderHover,
                },

                '&:disabled + label, &.disabled + label': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },

                '&:checked + label': {

                    '&::after': {
                        '@apply absolute inline-block border-r-2 border-b-2 pointer-events-none': '',
                        'border-color': checkboxStyles.indicator,
                        'content': '""',
                        'transform': 'rotate(45deg)',
                        'width': '0.375rem',
                        'height': '0.6rem',
                        'top': '0.405rem',
                        'left': '0.6rem',
                    },
                },

                '&:checked:hover + label:not(:disabled)::after': {
                    'border-color': checkboxStyles.indicatorHover,
                },
            },
        },
    });

};
