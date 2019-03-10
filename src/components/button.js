module.exports = (tailwind) => {

    tailwind.addComponents({
        '.button': {
            '@apply appearance-none bg-white rounded border border-grey px-4 py-2 text-grey-darkest no-underline font-bold text-center inline-flex items-center justify-center relative leading-tight': '',

            '&:active': {
                '@apply outline-none': '',
            },

            '&:focus:not(:active)': {
                '@apply outline-none shadow-outline': '',
            },

            '&:disabled, &.disabled': {
                '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
            },

            '&:hover:not(:disabled)': {
                '@apply border-grey-dark': '',
            },

            '&:active:not(:disabled)': {
                '@apply bg-grey-lighter': '',
            },

            '& .icon': {
                '@apply block w-4 h-4 mr-2 -ml-1 pointer-events-none': '',
            },
        },
    });

    let defaultColors = {
        primary: {
            bg: tailwind.config('colors.teal', '#4dc0b5'),
            bgHover: tailwind.config('colors.teal-dark', '#38a89d'),
            bgActive: tailwind.config('colors.teal-darker', '#20504f'),
            text: tailwind.config('colors.white', '#ffffff'),
            textHover: tailwind.config('colors.white', '#ffffff'),
            textActive: tailwind.config('colors.white', '#ffffff'),
            border: tailwind.config('colors.transparent', 'transparent'),
            borderHover: tailwind.config('colors.transparent', 'transparent'),
            borderActive: tailwind.config('colors.transparent', 'transparent'),
        },
        link: {
            bg: tailwind.config('colors.blue', '#3490dc'),
            bgHover: tailwind.config('colors.blue-dark', '#2779bd'),
            bgActive: tailwind.config('colors.blue-darker', '#1c3d5a'),
            text: tailwind.config('colors.white', '#ffffff'),
            textHover: tailwind.config('colors.white', '#ffffff'),
            textActive: tailwind.config('colors.white', '#ffffff'),
            border: tailwind.config('colors.transparent', 'transparent'),
            borderHover: tailwind.config('colors.transparent', 'transparent'),
            borderActive: tailwind.config('colors.transparent', 'transparent'),
        },
        info: {
            bg: tailwind.config('colors.purple', '#9561e2'),
            bgHover: tailwind.config('colors.purple-dark', '#794acf'),
            bgActive: tailwind.config('colors.purple-darker', '#382b5f'),
            text: tailwind.config('colors.white', '#ffffff'),
            textHover: tailwind.config('colors.white', '#ffffff'),
            textActive: tailwind.config('colors.white', '#ffffff'),
            border: tailwind.config('colors.transparent', 'transparent'),
            borderHover: tailwind.config('colors.transparent', 'transparent'),
            borderActive: tailwind.config('colors.transparent', 'transparent'),
        },
        success: {
            bg: tailwind.config('colors.green', '#38c172'),
            bgHover: tailwind.config('colors.green-dark', '#1f9d55'),
            bgActive: tailwind.config('colors.green-darker', '#1a4731'),
            text: tailwind.config('colors.white', '#ffffff'),
            textHover: tailwind.config('colors.white', '#ffffff'),
            textActive: tailwind.config('colors.white', '#ffffff'),
            border: tailwind.config('colors.transparent', 'transparent'),
            borderHover: tailwind.config('colors.transparent', 'transparent'),
            borderActive: tailwind.config('colors.transparent', 'transparent'),
        },
        warning: {
            bg: tailwind.config('colors.yellow', '#ffed4a'),
            bgHover: tailwind.config('colors.yellow-dark', '#f2d024'),
            bgActive: tailwind.config('colors.yellow-darker', '#684f1d'),
            text: tailwind.config('colors.yellow-darkest', '#453411'),
            textHover: tailwind.config('colors.yellow-darkest', '#453411'),
            textActive: tailwind.config('colors.yellow-darkest', '#453411'),
            border: tailwind.config('colors.transparent', 'transparent'),
            borderHover: tailwind.config('colors.transparent', 'transparent'),
            borderActive: tailwind.config('colors.transparent', 'transparent'),
        },
        danger: {
            bg: tailwind.config('colors.red', '#e3342f'),
            bgHover: tailwind.config('colors.red-dark', '#cc1f1a'),
            bgActive: tailwind.config('colors.red-darker', '#621b18'),
            text: tailwind.config('colors.white', '#ffffff'),
            textHover: tailwind.config('colors.white', '#ffffff'),
            textActive: tailwind.config('colors.white', '#ffffff'),
            border: tailwind.config('colors.transparent', 'transparent'),
            borderHover: tailwind.config('colors.transparent', 'transparent'),
            borderActive: tailwind.config('colors.transparent', 'transparent'),
        },
    };
    let buttonColors = tailwind.param('buttonColors', null, defaultColors);
    let buttons = {};
    for (let color in buttonColors) {
        for (let colorProp in buttonColors[color]) {
            if (buttonColors[color][colorProp].indexOf('colors.') === 0) {
                buttonColors[color][colorProp] = tailwind.config(buttonColors[color][colorProp], '#ffffff');
            }
        }

        buttons['.button.button-' + color] = {
            'border-color': buttonColors[color].border,
            'background-color': buttonColors[color].bg,
            'color': buttonColors[color].text,
            '&:hover': {
                'border-color': buttonColors[color].borderHover,
                'background-color': buttonColors[color].bgHover,
                'color': buttonColors[color].textHover,
            },
            '&:active': {
                'border-color': buttonColors[color].borderActive,
                'background-color': buttonColors[color].bgActive,
                'color': buttonColors[color].textActive,
            },
            '&.loading::after': {
                'border-color': buttonColors[color].text,
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
            },
        };
    }

    buttons['.button.loading'] = {
        '@apply text-transparent pointer-events-none': '',

        '&::after, &:after': {
            '@apply border-2 border-grey-darkest rounded-full block h-4 w-4 absolute pointer-events-none': '',
            'animation': 'spinAround .5s infinite linear',
            'border-right-color': 'transparent',
            'border-top-color': 'transparent',
            'content': '""',
            'left': 'calc(50% - (1em / 2))',
            'top': 'calc(50% - (1em / 2))',
        },
    };
    tailwind.addComponents(buttons);

};
