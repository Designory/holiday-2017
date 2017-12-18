<template>
    <div class="navigation">
        <div class="navigation__logo">
            <a class="navigation__link" target="_blank" href="https://www.designory.com">
               <img class="navigation__img" src="/static/logo.png" alt="logo">
            </a>
        </div>
        <div class="navigation__btn navigation__btn--next navigation__btn--mobile" 
             @click="$store.dispatch('nextView')"></div>
    </div>
</template>