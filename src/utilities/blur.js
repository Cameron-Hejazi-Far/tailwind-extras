function blurStyles(size) {
    return {
        '-webkit-filter': `blur(${size}px)`,
        '-moz-filter': `blur(${size}px)`,
        '-ms-filter': `blur(${size}px)`,
        '-o-filter': `blur(${size}px)`,
        'filter': `blur(${size}px)`,
    };
}

module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    addUtilities({
        '.blur-sm': blurStyles(1),
        '.blur': blurStyles(3),
        '.blur-lg': blurStyles(5),
        '.blur-xl': blurStyles(8),
    });

};