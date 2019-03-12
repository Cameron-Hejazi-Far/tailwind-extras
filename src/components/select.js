module.exports = (tailwind) => {

    let selectStyles = tailwind.generateSelectStyles();

    tailwind.addComponents({
        '.select': {
            '@apply inline-block relative': '',

            '& select': {
                '@apply block appearance-none w-full border px-4 py-2 pr-8 rounded shadow truncate leading-tight no-underline': '',
                'background-color': selectStyles.bg,
                'border-color': selectStyles.border,
                'color': selectStyles.text,

                '&:focus': {
                    '@apply outline-none shadow-outline': '',
                },

                '&:hover:not(:disabled)': {
                    'background-color': selectStyles.bgHover,
                    'border-color': selectStyles.borderHover,
                    'color': selectStyles.textHover,
                },

                '&:disabled, &.disabled': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },
            },

            '&::after': {
                '@apply absolute block border-l-2 border-b-2 rounded-sm w-2 h-2 pin-r mr-3 z-10 pointer-events-none': '',
                'border-color': selectStyles.indicator,
                'content': '" "',
                'top': '50%',
                'margin-top': '-0.35rem',
                'transform': 'rotate(-45deg)',
                'transform-origin': 'center',
            },

            '&:hover:not(:disabled):not(.disabled)': {
                'border-color': selectStyles.indicatorHover,
            },
        },
    });

};
