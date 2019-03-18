module.exports = (tailwind) => {

    let sliderStyles = tailwind.generateSliderStyles();

    tailwind.addComponents({

        // All Browsers
        '.slider': {
            '@apply appearance-none w-full mx-0 my-2': '',
        },

        '.slider:focus': {
            '@apply outline-none': '',
        },

        '.slider:disabled, .slider.disabled': {
            '@apply opacity-50 cursor-not-allowed pointer-events-none': '',
        },


        // Webkit
        '.slider::-webkit-slider-runnable-track': {
            '@apply w-full h-2 cursor-pointer rounded-full z-0': '',
            'background-color': '1px solid ' + sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-webkit-slider-runnable-track': {
            'background-color': '1px solid ' + sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus::-webkit-slider-runnable-track': {
            'background-color': '1px solid ' + sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-webkit-slider-thumb': {
            '@apply appearance-none w-6 h-6 rounded cursor-pointer -mt-2 z-20': '',
            'background-color': '1px solid ' + sliderStyles.thumbBg,
            'border': '1px solid ' + sliderStyles.thumbBorder,
        },

        '.slider:hover::-webkit-slider-thumb': {
            'background-color': sliderStyles.thumbBgHover,
            'border': '1px solid ' + sliderStyles.thumbBorderHover,
        },

        '.slider:focus::-webkit-slider-thumb': {
            'background-color': sliderStyles.thumbBgFocus,
            'border': '1px solid ' + sliderStyles.thumbBorderFocus,
        },


        // Moz
        '.slider::-moz-range-track': {
            '@apply w-full h-2 cursor-pointer rounded-full z-0': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-moz-range-track': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus::-moz-range-track': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-moz-range-thumb': {
            '@apply w-6 h-6 rounded bg-grey-lightest cursor-pointer z-20': '',
            'background-color': sliderStyles.thumbBg,
            'border': '1px solid ' + sliderStyles.thumbBorder,
        },

        '.slider:hover::-moz-range-thumb': {
            'background-color': sliderStyles.thumbBgHover,
            'border': '1px solid ' + sliderStyles.thumbBorderHover,
        },

        '.slider:focus::-moz-range-thumb': {
            'background-color': sliderStyles.thumbBgFocus,
            'border': '1px solid ' + sliderStyles.thumbBorderFocus,
        },

        // MS
        '.slider::-ms-track z-0': {
            '@apply w-full h-2 cursor-pointer bg-transparent rounded-full border-transparent text-transparent': '',
        },

        '.slider::-ms-fill-lower': {
            '@apply rounded-full z-10': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-ms-fill-lower': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus::-ms-fill-lower': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-ms-fill-upper': {
            '@apply rounded-full z-10': '',
            'background-color': sliderStyles.trackBg,
            'border': '1px solid ' + sliderStyles.trackBorder,
        },

        '.slider:hover::-ms-fill-upper': {
            'background-color': sliderStyles.trackBgHover,
            'border': '1px solid ' + sliderStyles.trackBorderHover,
        },

        '.slider:focus::-ms-fill-upper': {
            'background-color': sliderStyles.trackBgFocus,
            'border': '1px solid ' + sliderStyles.trackBorderFocus,
        },

        '.slider::-ms-thumb': {
            '@apply appearance-none w-6 h-6 rounded cursor-pointer -mt-2 z-20': '',
            'background-color': sliderStyles.thumbBg,
            'border': '1px solid ' + sliderStyles.thumbBorder,
        },

        '.slider:hover::-ms-thumb': {
            'background-color': sliderStyles.thumbBgHover,
            'border': '1px solid ' + sliderStyles.thumbBorderHover,
        },

        '.slider:focus::-ms-thumb': {
            'background-color': sliderStyles.thumbBgFocus,
            'border': '1px solid ' + sliderStyles.thumbBorderFocus,
        },
    });

};
