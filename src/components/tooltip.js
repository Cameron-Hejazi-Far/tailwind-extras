module.exports = (tailwind) => {

    let tooltipStyles = tailwind.generateTooltipStyles();

    tailwind.addComponents({
        '[tooltip]': {
            '@apply relative': '',

            '&::before': {
                '@apply absolute z-20 opacity-0': '',
                'content': '""',
                'top': '-6px',
                'left': '50%',
                'transform': 'translateX(-50%)',
                'border-width': '6px 7px 1px 8px',
                'border-style': 'solid',
                'border-color': tooltipStyles.bg + ' transparent transparent transparent',
                'transition': 'all 100ms ease-in-out',
            },

            '&::after': {
                '@apply absolute text-center text-sm font-normal leading-normal rounded pointer-events-none p-3 z-20 opacity-0': '',
                'content': 'attr(tooltip)',
                'left': '50%',
                'top': '-6px',
                'transform': 'translateX(-50%) translateY(-100%)',
                'background': tooltipStyles.bg,
                'color': tooltipStyles.text,
                'min-width': '80px',
                'transition': 'all 100ms ease-in-out',
            },

            '&[tooltip-position="left"]': {
                '&::before': {
                    'left': '0',
                    'top': '50%',
                    'margin-left': 'calc(50% - 12px)',
                    'transform': 'translatey(-50%) rotate(-90deg)',
                },
                '&::after': {
                    'left': '0',
                    'top': '50%',
                    'margin-left': 'calc(50% - 8px)',
                    'transform': 'translateX(-100%) translateY(-50%)',
                },
            },

            '&[tooltip-position="top"]': {
                '&::before': {
                    'left': '50%',
                    'top': 'calc(50% - 6px)',

                },
                '&::after': {
                    'left': '50%',
                    'top': 'calc(50% - 6px)',
                },
            },

            '&[tooltip-position="bottom"]': {
                '&::before': {
                    'top': '100%',
                    'margin-top': 'calc(-50% + 8px)',
                    'transform': 'translateX(-50%) translatey(-100%) rotate(-180deg)',
                },
                '&::after': {
                    'top': '100%',
                    'margin-top': 'calc(-50% + 8px)',
                    'transform': 'translateX(-50%) translateY(0)',
                },
            },

            '&[tooltip-position="right"]': {
                '&::before': {
                    'left': '100%',
                    'top': '50%',
                    'margin-left': 'calc(-50% - 3px)',
                    'transform': 'translatey(-50%) rotate(90deg)',
                },
                '&::after': {
                    'left': '100%',
                    'top': '50%',
                    'margin-left': 'calc(-50% + 8px)',
                    'transform': 'translateX(0%) translateY(-50%)',
                },
            },

            '&:hover': {
                '&[tooltip-position="left"]': {
                    '&::before': {
                        'left': '0',
                        'top': '50%',
                        'margin-left': '-12px',
                        'transform': 'translatey(-50%) rotate(-90deg)',
                    },
                    '&::after': {
                        'left': '0',
                        'top': '50%',
                        'margin-left': '-8px',
                        'transform': 'translateX(-100%) translateY(-50%)',
                    },
                },

                '&[tooltip-position="top"]': {
                    '&::before': {
                        'left': '50%',
                        'top': '-6px',
                    },
                    '&::after': {
                        'left': '50%',
                        'top': '-6px',
                    },
                },

                '&[tooltip-position="bottom"]': {
                    '&::before': {
                        'top': '100%',
                        'margin-top': '8px',
                        'transform': 'translateX(-50%) translatey(-100%) rotate(-180deg)',
                    },
                    '&::after': {
                        'top': '100%',
                        'margin-top': '8px',
                        'transform': 'translateX(-50%) translateY(0)',
                    },
                },

                '&[tooltip-position="right"]': {
                    '&::before': {
                        'left': '100%',
                        'top': '50%',
                        'margin-left': '-3px',
                        'transform': 'translatey(-50%) rotate(90deg)',
                    },
                    '&::after': {
                        'left': '100%',
                        'top': '50%',
                        'margin-left': '8px',
                        'transform': 'translateX(0) translateY(-50%)',
                    },
                },

                '&::before, &::after': {
                    '@apply opacity-100': '',
                },
            },
        },
    });

};

