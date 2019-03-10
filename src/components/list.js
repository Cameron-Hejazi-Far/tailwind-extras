module.exports = (tailwind) => {

    tailwind.addComponents({
        '.list': {
            'list-style': 'none',
            'padding': '0',
            'display': 'block',

            '& li': {
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'flex-start',
                'position': 'relative',
                'padding': '0.5rem 0.75rem',
                'border-color': '#b8c2cc',
                'border-bottom-width': '1px',
                'border-left-width': '1px',
                'border-right-width': '1px',
                'text-decoration': 'none',

                '&:first-child': {
                    'border-top-width': '1px',
                    'border-top-left-radius': '0.25rem',
                    'border-top-right-radius': '0.25rem',
                },

                '&:last-child': {
                    'border-bottom-right-radius': '0.25rem',
                    'border-bottom-left-radius': '0.25rem',
                },

                '&:disabled, &.disabled': {
                    'opacity': '0.5',
                    'cursor': 'not-allowed',
                    'pointer-events': 'none',
                },

                '& .icon': {
                    'display': 'block',
                    'width': '1rem',
                    'height': '1rem',
                    'margin-right': '0.5rem',
                    'pointer-events': 'none',
                },
            },

            '&.hoverable li:hover': {
                'background-color': '#eff8ff',
            },
        },
    });

};
