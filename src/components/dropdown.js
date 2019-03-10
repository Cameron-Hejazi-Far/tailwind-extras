module.exports = (tailwind) => {

    // tailwind.addComponents({
    // TODO: implement
    // });

};

/*
.dropdown {
  display: inline-flex;
  position: relative;
}

.dropdown .button:not(.loading)::after,
.dropdown .button:not(.loading):after {
  display: block;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-color: #3490dc;
  border-radius: .125rem;
  width: .5rem;
  height: .5rem;
  margin-left: .5rem;
  margin-top: -0.25rem;
  margin-right: -0.25rem;
  pointer-events: none;
  content: " ";
  top: 50%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: center;
           transform-origin: center;
}

.dropdown .button.button-primary:not(.loading)::after,
.dropdown .button.button-primary:not(.loading):after,
.dropdown .button.button-link:not(.loading)::after,
.dropdown .button.button-link:not(.loading):after,
.dropdown .button.button-info:not(.loading)::after,
.dropdown .button.button-info:not(.loading):after,
.dropdown .button.button-success:not(.loading)::after,
.dropdown .button.button-success:not(.loading):after,
.dropdown .button.button-danger:not(.loading)::after,
.dropdown .button.button-danger:not(.loading):after {
  border-color: #fff;
}

.dropdown .button.button-warning:not(.loading)::after,
.dropdown .button.button-warning:not(.loading):after {
  border-color: #453411;
}

.dropdown .dropdown-menu {
  display: none;
  position: absolute;
  left: 0;
  margin-top: .25rem;
  z-index: 20;
  padding-top: .5rem;
  padding-bottom: .5rem;
  background-color: #fff;
  border-width: 1px;
  border-color: #b8c2cc;
  border-radius: .25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  min-width: 12rem;
  top: 100%;
}

.dropdown.opened .dropdown-menu {
  display: block;
}

.dropdown.dropup .dropdown-menu {
  margin-bottom: .25rem;
  bottom: 100%;
  top: auto;
  margin-top: initial;
}

.dropdown.right-aligned .dropdown-menu {
  right: 0;
  left: auto;
}

.dropdown .dropdown-menu .dropdown-divider {
  background-color: #b8c2cc;
  border-width: 0;
  display: block;
  margin-top: .5rem;
  margin-bottom: .5rem;
  height: 1px;
}

.dropdown .dropdown-menu .dropdown-item {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  display: block;
  position: relative;
  color: #3d4852;
  padding-left: .5rem;
  padding-right: .5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;
  text-decoration: none;
  text-align: left;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.25;
}

.dropdown .dropdown-menu .dropdown-item:active {
  outline: 0;
}

.dropdown .dropdown-menu .dropdown-item:focus:not(:active) {
  outline: 0;
  box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);
}

.dropdown .dropdown-menu .dropdown-item:disabled,
.dropdown .dropdown-menu .dropdown-item.disabled {
  opacity: .5;
  cursor: not-allowed;
  pointer-events: none;
}

.dropdown .dropdown-menu .dropdown-item:hover:not(:disabled) {
  background-color: #f1f5f8;
}

.dropdown .dropdown-menu .dropdown-item:active:not(:disabled) {
  background-color: #dae1e7;
}











.dropdown {
  @apply inline-flex relative;
  & .button:not(.loading)::after, & .button:not(.loading):after {
    @apply block border-l-2 border-b-2 border-blue rounded-sm w-2 h-2 ml-2 -mt-1 -mr-1 pointer-events-none;
    content: " ";
    top: 50%;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
  }

  & .button.button-primary:not(.loading)::after, & .button.button-primary:not(.loading):after,
  & .button.button-link:not(.loading)::after, & .button.button-link:not(.loading):after,
  & .button.button-info:not(.loading)::after, & .button.button-info:not(.loading):after,
  & .button.button-success:not(.loading)::after, & .button.button-success:not(.loading):after,
  & .button.button-danger:not(.loading)::after, & .button.button-danger:not(.loading):after {
    @apply border-white;
  }

  & .button.button-warning:not(.loading)::after, & .button.button-warning:not(.loading):after {
    @apply border-yellow-darkest;
  }

  & .dropdown-menu {
    @apply hidden absolute pin-l mt-1 z-20 pt-2 pb-2 bg-white border border-grey rounded shadow;
    min-width: 12rem;
    top: 100%;
  }
  &.opened .dropdown-menu {
    @apply block;
  }
  &.dropup .dropdown-menu {
    @apply mb-1;
    bottom: 100%;
    top: auto;
    margin-top: initial;
  }
  &.right-aligned .dropdown-menu {
    @apply pin-r;
    left: auto;
  }

  & .dropdown-menu .dropdown-divider {
    @apply bg-grey border-0 block my-2;
    height: 1px;
  }

  & .dropdown-menu .dropdown-item {
    @apply appearance-none block relative text-grey-darkest px-2 py-4 cursor-pointer no-underline text-left w-full truncate leading-tight;
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
      @apply bg-grey-lighter;
    }
    &:active:not(:disabled) {
      @apply bg-grey-light;
    }
  }
}

 */