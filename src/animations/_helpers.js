module.exports = {
    animation(name, from, to) {
        return {
            [`@-webkit-keyframes ${name}`]: {
                'from': from,
                'to': to,
            },
            [`@keyframes ${name}`]: {
                'from': from,
                'to': to,
            },
        };
    },
    transform(transform) {
        return {
            '-webkit-transform': transform,
            'transform': transform,
        };
    },
};
