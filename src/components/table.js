module.exports = (tailwind) => {

    let tableStyles = tailwind.generateTableStyles();

    tailwind.addComponents({
        '.table': {
            '@apply border-collapse appearance-none w-full text-sm': '',
            'background-color': tableStyles.bg,
            'color': tableStyles.text,

            'border-spacing': '0',

            '& thead, & tbody, & tfoot': {
                '@apply bg-transparent': '',
            },

            // TH Cells
            '& th': {
                '@apply font-bold': '',
            },

            // All Header Cells
            '& thead th, & thead td': {
                '@apply align-middle text-left px-3 py-2 border-0 border-b': '',
                'border-color': tableStyles.border,
            },

            // All Body Cells
            '& tbody th, & tbody td': {
                '@apply align-middle text-left px-3 py-2 border-0 border-t': '',
                'border-color': tableStyles.border,
            },
            '& tbody tr:first-child td, & tbody tr:first-child th': {
                '@apply border-t-0': '',
                'border-color': tableStyles.border,
            },

            // All Footer Cells
            '& tfoot th, & tfoot td': {
                '@apply align-middle text-left px-3 py-2 border-0 border-t': '',
                'border-color': tableStyles.border,
            },

            // Narrow Table
            '&.narrow th, &.narrow td': {
                '@apply px-2 py-1': '',
            },

            // Bordered Table
            '&.bordered': {
                '@apply border': '',
                'border-color': tableStyles.border,
                '& th, & td': {
                    'border-color': tableStyles.border,
                },
            },

            // Striped Table
            '&.striped tbody tr:nth-child(even) td': {
                'background-color': tableStyles.stripedBg,
                'color': tableStyles.stripedText,
            },

            // Hoverable Table
            '&.hoverable tbody tr:hover td': {
                'background-color': tableStyles.bgHover,
                'color': tableStyles.textHover,
            },
            '&.hoverable.striped tbody tr:nth-child(even):hover td': {
                'background-color': tableStyles.stripedBgHover,
                'color': tableStyles.stripedTextHover,
            },
        },
    });

};
