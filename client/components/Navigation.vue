<template>
    <div class="navigation">
        <div class="navigation__logo">
            <a class="navigation__link" target="_blank" href="https://designory.com">
               logo
            </a>
        </div>
        <div class="navigation__btn navigation__btn--next" @click="$store.dispatch('nextView')"></div>
        <div class="navigation__btn navigation__btn--prev" @click="$store.dispatch('prevView')"></div>
    </div>
</template>