module.exports = (tailwind) => {

    // tailwind.addComponents({
    // TODO: implement
    // });

};

/*
.button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-radius: .25rem;
  border-width: 1px;
  border-color: #b8c2cc;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  color: #3d4852;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  line-height: 1.25;
}

.button:active {
  outline: 0;
}

.button:focus:not(:active) {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);
}

.button:disabled,
.button.disabled {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

.button:hover:not(:disabled) {
  border-color: #8795a1;
}

.button:active:not(:disabled) {
  background-color: #f1f5f8;
}

.button .icon {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-right: .5rem;
  margin-left: -0.25rem;
  pointer-events: none;
}

.button.button-primary {
  background-color: #4dc0b5;
  color: #fff;
  border-color: transparent;
}

.button.button-primary:hover {
  background-color: #38a89d;
  border-color: transparent;
}

.button.button-primary:active {
  background-color: #20504f;
  border-color: transparent;
}

.button.button-link {
  background-color: #3490dc;
  color: #fff;
  border-color: transparent;
}

.button.button-link:hover {
  background-color: #2779bd;
  border-color: transparent;
}

.button.button-link:active {
  background-color: #1c3d5a;
  border-color: transparent;
}

.button.button-info {
  background-color: #9561e2;
  color: #fff;
  border-color: transparent;
}

.button.button-info:hover {
  background-color: #794acf;
  border-color: transparent;
}

.button.button-info:active {
  background-color: #382b5f;
  border-color: transparent;
}

.button.button-success {
  background-color: #38c172;
  color: #fff;
  border-color: transparent;
}

.button.button-success:hover {
  background-color: #1f9d55;
  border-color: transparent;
}

.button.button-success:active {
  background-color: #1a4731;
  border-color: transparent;
}

.button.button-warning {
  background-color: #ffed4a;
  color: #453411;
  border-color: transparent;
}

.button.button-warning:hover {
  background-color: #f2d024;
  border-color: transparent;
}

.button.button-warning:active {
  background-color: #684f1d;
  border-color: transparent;
}

.button.button-warning.loading::after,
.button.button-warning.loading:after {
  color: #453411;
  border-right-color: transparent;
  border-top-color: transparent;
}

.button.button-danger {
  background-color: #e3342f;
  color: #fff;
  border-color: transparent;
}

.button.button-danger:hover {
  background-color: #cc1f1a;
  border-color: transparent;
}

.button.button-danger:active {
  background-color: #621b18;
  border-color: transparent;
}

.button.button-primary.loading::after,
.button.button-primary.loading:after,
.button.button-link.loading::after,
.button.button-link.loading:after,
.button.button-info.loading::after,
.button.button-info.loading:after,
.button.button-success.loading::after,
.button.button-success.loading:after,
.button.button-danger.loading::after,
.button.button-danger.loading:after {
  border-color: #fff;
  border-right-color: transparent;
  border-top-color: transparent;
}

.button.loading {
  color: transparent;
  pointer-events: none;
}

.button.loading::after,
.button.loading:after {
  border-width: 2px;
  border-color: #3d4852;
  border-radius: 9999px;
  display: block;
  height: 1rem;
  width: 1rem;
  position: absolute;
  pointer-events: none;
  -webkit-animation: spinAround .5s infinite linear;
          animation: spinAround .5s infinite linear;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  left: calc(50% - (1em / 2));
  top: calc(50% - (1em / 2));
}











.button {
  @apply appearance-none bg-white rounded border border-grey px-4 py-2 text-grey-darkest no-underline font-bold text-center inline-flex items-center justify-center relative leading-tight;
  &:active {
    @apply outline-none;
  }
  &:focus:not(:active) {
    @apply outline-none shadow-outline;
  }
  &:disabled, &.disabled {
    @apply opacity-50 cursor-not-allowed pointer-events-none;
  }
  &:hover:not(:disabled) {
    @apply border-grey-dark;
  }
  &:active:not(:disabled) {
    @apply bg-grey-lighter;
  }
  & .icon {
    @apply block w-4 h-4 mr-2 -ml-1 pointer-events-none;
  }

  &.button-primary {
    @apply bg-teal text-white border-transparent;
    &:hover {
      @apply bg-teal-dark border-transparent;
    }
    &:active {
      @apply bg-teal-darker border-transparent;
    }
  }

  &.button-link {
    @apply bg-blue text-white border-transparent;
    &:hover {
      @apply bg-blue-dark border-transparent;
    }
    &:active {
      @apply bg-blue-darker border-transparent;
    }
  }

  &.button-info {
    @apply bg-purple text-white border-transparent;
    &:hover {
      @apply bg-purple-dark border-transparent;
    }
    &:active {
      @apply bg-purple-darker border-transparent;
    }
  }

  &.button-success {
    @apply bg-green text-white border-transparent;
    &:hover {
      @apply bg-green-dark border-transparent;
    }
    &:active {
      @apply bg-green-darker border-transparent;
    }
  }

  &.button-warning {
    @apply bg-yellow text-yellow-darkest border-transparent;
    &:hover {
      @apply bg-yellow-dark border-transparent;
    }
    &:active {
      @apply bg-yellow-darker border-transparent;
    }
    &.loading::after, &.loading:after {
      @apply text-yellow-darkest;
      border-right-color: transparent;
      border-top-color: transparent;
    }
  }

  &.button-danger {
    @apply bg-red text-white border-transparent;
    &:hover {
      @apply bg-red-dark border-transparent;
    }
    &:active {
      @apply bg-red-darker border-transparent;
    }
  }

  &.button-primary, &.button-link, &.button-info, &.button-success, &.button-danger {
    &.loading::after, &.loading:after {
      @apply border-white;
      border-right-color: transparent;
      border-top-color: transparent;
    }
  }

  &.loading {
    @apply text-transparent pointer-events-none;

    &::after, &:after {
      @apply border-2 border-grey-darkest rounded-full block h-4 w-4 absolute pointer-events-none;

      -webkit-animation: spinAround .5s infinite linear;
      animation: spinAround .5s infinite linear;
      border-right-color: transparent;
      border-top-color: transparent;
      content: "";
      left: calc(50% - (1em / 2));
      top: calc(50% - (1em / 2));
    }
  }
}

 */