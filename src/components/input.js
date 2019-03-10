module.exports = (tailwind) => {

    tailwind.addComponents({
        '.input': {
            'appearance': 'none',
            'background-color': '#ffffff',
            'border-radius': '.25rem',
            'border': '1px solid #b8c2cc',
            'padding': '0.5rem 0.75rem',
            'box-shadow': '0 2px 4px 0 rgba(0, 0, 0, .1)',
            'color': '#3d4852',
            'line-height': '1.25',
            'text-decoration': 'none',

            '&:focus': {
                'outline': '0',
                'box-shadow': '0 0 0 3px rgba(52, 144, 220, .5)',
            },

            '&:hover:not(:disabled)': {
                'border-color': '#8795a1',
            },

            '&:disabled, &.disabled': {
                'opacity': '0.5',
                'cursor': 'not-allowed',
                'pointer-events': 'none',
            },
        },
        '.input-wrapper': {
            'position': 'relative',

            '& .icon': {
                'position': 'absolute',
                'display': 'block',
                'width': '1.25rem',
                'height': '1.25rem',
                'left': '0',
                'top': '0',
                'margin-left': '0.75rem',
                'margin-top': '0.7rem',
                'color': '#3d4852',
                'opacity': '0.5',
                'pointer-events': 'none',

                '& + .input': {
                    'padding-left': '2rem',
                },
            },

            '&.loading .input': {
                'padding-right': '2rem',
            },

            '&.loading::after': {
                'cursor': 'auto',
                'border-width': '2px',
                'border-color': '#3d4852',
                'opacity': '.5',
                'border-radius': '9999px',
                'display': 'block',
                'height': '1rem',
                'width': '1rem',
                'position': 'absolute',
                'top': '0',
                'right': '0',
                'margin-right': '.75rem',
                'z-index': '10',
                'pointer-events': 'none',
                'animation': 'spinAround .5s infinite linear',
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
                'content': '""',
                'margin-top': '.6rem',
            },
        },
    });

};
