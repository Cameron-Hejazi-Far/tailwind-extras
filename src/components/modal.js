module.exports = ({addUtilities, addComponents, addVariant, e, prefix, config}) => {

    // addComponents({
    // TODO: implement
    // });

};

/*
.modal {
  position: fixed;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 40;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: visibility 0s linear 300ms, opacity 300ms linear;
}

.modal .modal-overlay {
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.modal .modal-content {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 20;
  opacity: 0;
  -ms-overflow-y: visible;
  -webkit-transform: scale(1.25);
          transform: scale(1.25);
  transition: opacity 300ms linear, -webkit-transform 300ms linear;
  transition: transform 300ms linear, opacity 300ms linear;
  transition: transform 300ms linear, opacity 300ms linear, -webkit-transform 300ms linear;
}

.modal .modal-footer,
.modal .modal-header {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 1.25rem;
  background-color: #f1f5f8;
}

.modal .modal-header {
  border-bottom-width: 1px;
  border-color: #b8c2cc;
  border-top-left-radius: .25rem;
  border-top-right-radius: .25rem;
}

.modal .modal-header .modal-close {
  position: relative;
  vertical-align: top;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #b8c2cc;
  border-width: 0;
  border-radius: 9999px;
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  outline: 0;
  font-size: 0;
  height: 20px;
  width: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
}

.modal .modal-header .modal-close:hover,
.modal .modal-header .modal-close:focus {
  background-color: #8795a1;
}

.modal .modal-header .modal-close:active {
  background-color: #606f7b;
}

.modal .modal-header .modal-close::before,
.modal .modal-header .modal-close:before {
  position: absolute;
  display: block;
  background-color: #fff;
  content: "";
  left: 50%;
  top: 50%;
  width: 50%;
  height: 2px;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
  -webkit-transform-origin: center center;
           transform-origin: center center;
}

.modal .modal-header .modal-close::after,
.modal .modal-header .modal-close:after {
  position: absolute;
  display: block;
  background-color: #fff;
  content: "";
  left: 50%;
  top: 50%;
  width: 2px;
  height: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
  -webkit-transform-origin: center center;
           transform-origin: center center;
}

.modal .modal-footer {
  border-top-width: 1px;
  border-color: #b8c2cc;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
}

.modal .modal-title {
  color: #3d4852;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.125rem;
  line-height: 1.25;
}

.modal .modal-footer .button:not(:last-child) {
  margin-right: .5rem;
}

.modal .modal-body {
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 1.25rem;
  background-color: #fff;
  -webkit-overflow-scrolling: touch;
}

.modal.show {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transition-delay: 0s;
}

.modal.show .modal-content {
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}

@media screen and (min-width: 769px), print {
  .modal:not(.full-screen) .modal-overlay {
    background-color: rgba(0, 0, 0, .75);
  }

  .modal:not(.full-screen) .modal-content {
    border-radius: .25rem;
    max-height: calc(100vh - 20px);
    width: 640px;
    height: auto;
  }
}

@media screen and (min-width: 1024px), print {
  .modal.wider:not(.full-screen) .modal-content {
    width: 890px;
  }
}

@media screen and (min-width: 1216px), print {
  .modal.wider:not(.full-screen) .modal-content {
    width: 1024px;
  }
}

@media screen and (min-width: 1408px), print {
  .modal.wider:not(.full-screen) .modal-content {
    width: 1280px;
  }
}











.modal {
  @apply fixed overflow-hidden flex justify-center items-center pin-t pin-r pin-b pin-l z-40 invisible opacity-0 pointer-events-none;
  -webkit-transition: visibility 0s linear 300ms, opacity 300ms linear;
  transition: visibility 0s linear 300ms, opacity 300ms linear;

  & .modal-overlay {
    @apply absolute block pin-t pin-r pin-b pin-l z-10;
  }

  & .modal-content {
    @apply my-0 mx-auto relative flex flex-col overflow-hidden w-full h-full bg-white z-20 opacity-0;
    -ms-overflow-y: visible;
    -webkit-transform: scale(1.25);
    -ms-transform: scale(1.25);
    transform: scale(1.25);
    -webkit-transition: transform 300ms linear, opacity 300ms linear;
    transition: transform 300ms linear, opacity 300ms linear;
  }

  .modal-footer,
  .modal-header {
    @apply relative flex items-center flex-no-shrink justify-start p-5 bg-grey-lighter;
  }
  .modal-header {
    @apply border-b border-grey rounded-t;
    & .modal-close {
      @apply relative align-top appearance-none bg-grey border-0 rounded-full cursor-pointer pointer-events-auto inline-block flex-no-grow flex-no-shrink w-6 h-6 outline-none;
      font-size: 0;
      height: 20px;
      width: 20px;
      max-height: 20px;
      max-width: 20px;
      min-height: 20px;
      min-width: 20px;
      &:hover, &:focus {
        @apply bg-grey-dark;
      }

      &:active {
        @apply bg-grey-darker;
      }

      &::before, &:before {
        @apply absolute block bg-white;
        content: "";
        left: 50%;
        top: 50%;
        width: 50%;
        height: 2px;
        -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        -webkit-transform-origin: center center;
        transform-origin: center center;
      }

      &::after, &:after {
        @apply absolute block bg-white;
        content: "";
        left: 50%;
        top: 50%;
        width: 2px;
        height: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        -webkit-transform-origin: center center;
        transform-origin: center center;
      }
    }
  }
  .modal-footer {
    @apply border-t border-grey rounded-b;
  }
  .modal-title {
    @apply text-grey-darkest flex-grow flex-no-shrink text-lg leading-tight;
  }
  .modal-footer .button:not(:last-child) {
    @apply mr-2;
  }

  .modal-body {
    @apply flex-grow flex-shrink overflow-auto p-5 bg-white;
    -webkit-overflow-scrolling: touch;
  }

  &.show {
    @apply visible opacity-100 pointer-events-auto;
    transition-delay: 0s;

    & .modal-content {
      @apply opacity-100;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}

@media screen and (min-width: 769px),
print {
  .modal {
    &:not(.full-screen) .modal-overlay {
      background-color: rgba(0, 0, 0, .75);
    }
    &:not(.full-screen) .modal-content {
      @apply rounded;
      max-height: calc(100vh - 20px);
      width: 640px;
      height: auto;
    }
  }
}

@media screen and (min-width: 1024px),
print {
  .modal {
    &.wider:not(.full-screen) .modal-content {
      width: 890px;
    }
  }
}

@media screen and (min-width: 1216px),
print {
  .modal {
    &.wider:not(.full-screen) .modal-content {
      width: 1024px;
    }
  }
}

@media screen and (min-width: 1408px),
print {
  .modal {
    &.wider:not(.full-screen) .modal-content {
      width: 1280px;
    }
  }
}

 */