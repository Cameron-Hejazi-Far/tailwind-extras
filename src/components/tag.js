module.exports = (tailwind) => {

    let tagsStyles = tailwind.generateTagStyles();
    let defaultTag = tagsStyles.default;

    if (typeof(defaultTag) !== 'object') {
        throw 'If overriding button styles, you must provide styles for a "default" button.';
    }

    tailwind.addComponents({
        '.tag': {
            '@apply inline-flex items-center justify-center rounded-full px-3 py-1 text-center relative leading-tight text-sm no-underline': '',
            'background-color': defaultTag.bg,
            'border-color': defaultTag.border,
            'color': defaultTag.text,

            '& .icon': {
                '@apply block w-4 h-4 mr-2 pointer-events-none': '',
            },
        },
    });

    delete tagsStyles.default; // don't need to re-output the default button theme
    let tags = {};
    for (let color in tagsStyles) {
        tags['.tag.tag-' + color] = {
            'background-color': tagsStyles[color].bg,
            'border-color': tagsStyles[color].border,
            'color': tagsStyles[color].text,
        };
    }
    tailwind.addComponents(tags);

};
