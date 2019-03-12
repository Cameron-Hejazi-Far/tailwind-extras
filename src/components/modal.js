module.exports = (tailwind) => {

    let modalStyles = tailwind.generateModalStyles();

    tailwind.addComponents({
        '.modal': {
            '@apply fixed overflow-hidden flex justify-center items-center pin-t pin-r pin-b pin-l z-40 invisible opacity-0 pointer-events-none': '',
            'transition': 'visibility 0s linear 300ms, opacity 300ms linear',

            '& .modal-overlay': {
                '@apply absolute block pin-t pin-r pin-b pin-l z-10': '',
            },

            '& .modal-content': {
                '@apply my-0 mx-auto relative flex flex-col overflow-hidden w-full h-full z-20 opacity-0': '',
                'background-color': modalStyles.bg,
                'color': modalStyles.text,
                '-ms-overflow-y': 'visible',
                'transform': 'scale(1.25)',
                'transition': 'transform 300ms linear, opacity 300ms linear',
            },

            '.modal-header': {
                '@apply relative flex items-center flex-no-shrink justify-start border rounded-t p-5': '',
                'background-color': modalStyles.headerBg,
                'border-color': modalStyles.sectionDividers,
                'border-left-color': 'transparent',
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',

                '& .modal-close': {
                    '@apply relative align-top appearance-none border-0 rounded-full cursor-pointer pointer-events-auto inline-block flex-no-grow flex-no-shrink w-6 h-6 outline-none': '',
                    'background-color': modalStyles.closeBg,
                    'font-size': '0',
                    'height': '20px',
                    'width': '20px',
                    'max-height': '20px',
                    'max-width': '20px',
                    'min-height': '20px',
                    'min-width': '20px',

                    '&:hover, &:focus': {
                        'background-color': modalStyles.closeBgHover,
                    },

                    '&:active': {
                        'background-color': modalStyles.closeBgActive,
                    },

                    '&::before': {
                        '@apply absolute block': '',
                        'background-color': modalStyles.closeX,
                        'content': '""',
                        'left': '50%',
                        'top': '50%',
                        'width': '50%',
                        'height': '2px',
                        'transform': 'translateX(-50%) translateY(-50%) rotate(45deg)',
                        'transform-origin': 'center center',
                    },

                    '&::after': {
                        '@apply absolute block': '',
                        'background-color': modalStyles.closeX,
                        'content': '""',
                        'left': '50%',
                        'top': '50%',
                        'width': '2px',
                        'height': '50%',
                        'transform': 'translateX(-50%) translateY(-50%) rotate(45deg)',
                        'transform-origin': 'center center',
                    },

                    '&:hover::after, &:focus::after': {
                        'background-color': modalStyles.closeXHover,
                    },

                    '&:active::after': {
                        'background-color': modalStyles.closeXActive,
                    },
                },
            },

            '.modal-footer': {
                '@apply relative flex items-center flex-no-shrink justify-start border rounded-b p-5': '',
                'background-color': modalStyles.footerBg,
                'border-color': modalStyles.sectionDividers,
                'border-left-color': 'transparent',
                'border-right-color': 'transparent',
                'border-bottom-color': 'transparent',
            },

            '.modal-title': {
                '@apply flex-grow flex-no-shrink text-lg leading-tight': '',
                'color': modalStyles.titleText,
            },

            '.modal-footer .button:not(:last-child)': {
                '@apply mr-2': '',
            },

            '.modal-body': {
                '@apply flex-grow flex-shrink overflow-auto p-5 border-0 border-l border-r': '',
                'background-color': modalStyles.bg,
                'border-color': modalStyles.sectionDividers,
                'color': modalStyles.text,
                '-webkit-overflow-scrolling': 'touch',
                'border-left-color': 'transparent',
                'border-right-color': 'transparent',
            },

            '&.show': {
                '@apply visible opacity-100 pointer-events-auto': '',
                'transition-delay': '0s',

                '& .modal-content': {
                    '@apply opacity-100': '',
                    'transform': 'scale(1)',
                },
            },
        },

        '@media screen and (min-width: 769px), print': {
            '.modal': {
                '&:not(.full-screen) .modal-overlay': {
                    'background-color': 'rgba(0, 0, 0, .75)',
                },
                '&:not(.full-screen) .modal-content': {
                    '@apply rounded': '',
                    'max-height': 'calc(100vh - 20px)',
                    'width': '640px',
                    'height': 'auto',
                },
                '&:not(.full-screen) .modal-header': {
                    'border-left-color': modalStyles.border,
                    'border-right-color': modalStyles.border,
                    'border-top-color': modalStyles.border,
                },
                '&:not(.full-screen) .modal-body': {
                    'border-left-color': modalStyles.border,
                    'border-right-color': modalStyles.border,
                },
                '&:not(.full-screen) .modal-footer': {
                    'border-left-color': modalStyles.border,
                    'border-right-color': modalStyles.border,
                    'border-bottom-color': modalStyles.border,
                },
            },
        },

        '@media screen and (min-width: 1024px), print': {
            '.modal': {
                '&.wider:not(.full-screen) .modal-content': {
                    'width': '890px',
                },
            },
        },

        '@media screen and (min-width: 1216px), print': {
            '.modal': {
                '&.wider:not(.full-screen) .modal-content': {
                    'width': '1024px',
                },
            },
        },

        '@media screen and (min-width: 1408px), print': {
            '.modal': {
                '&.wider:not(.full-screen) .modal-content': {
                    'width': '1280px',
                },
            },
        },

        '@media screen and (min-width: 1680px), print': {
            '.modal': {
                '&.wider:not(.full-screen) .modal-content': {
                    'width': '1552px',
                },
            },
        },

        '@media screen and (min-width: 1920px), print': {
            '.modal': {
                '&.wider:not(.full-screen) .modal-content': {
                    'width': '1552px',
                },
            },
        },

        '@media screen and (min-width: 2560px), print': {
            '.modal': {
                '&.wider:not(.full-screen) .modal-content': {
                    'width': '1552px',
                },
            },
        },
    });

};
