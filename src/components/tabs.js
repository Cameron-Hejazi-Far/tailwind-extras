module.exports = (tailwind) => {

    let tabsStyles = tailwind.generateTabsStyles();

    tailwind.addComponents({
        '.tabs': {
            '@apply w-full flex justify-center items-center border-b': '',
            'border-color': tabsStyles.border,

            '& .tab': {
                '@apply flex items-center justify-center px-4 py-2 leading-normal text-center cursor-pointer no-underline': '',
                'background-color': tabsStyles.bg,
                'color': tabsStyles.text,
                'margin-bottom': '-1px',

                '&:hover:not(:disabled), &:focus:not(:disabled)': {
                    'background-color': tabsStyles.bgHover,
                    'color': tabsStyles.textHover,
                },

                '&:active, &:focus': {
                    '@apply outline-none': '',
                },

                '&:disabled, &.disabled': {
                    '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
                },

                '&:active': {
                    'background-color': tabsStyles.bgActive,
                    'color': tabsStyles.textActive,
                },
            },

            '& .tab.selected': {
                '@apply rounded-t border-t border-l border-r': '',
                'background-color': tabsStyles.bgSelected,
                'border-color': tabsStyles.border,
                'color': tabsStyles.textSelected,

                '&:hover:not(:disabled), &:focus:not(:disabled)': {
                    'background-color': tabsStyles.bgSelected,
                    'color': tabsStyles.textSelected,
                    'text-decoration': 'underline',
                    'text-decoration-style': 'dotted',
                },

            },

            '& .tab .icon': {
                '@apply block w-4 h-4 mr-2 -ml-1 pointer-events-none': '',
            },
        },
    });

};
