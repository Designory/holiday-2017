<template>
    <div class="nav">
        <div class="nav__logo">
            <a target="_blank" href="https://designory.com">
               logo
            </a>
        </div>
        <div class="nav__btn nav__btn--next" @click="$store.dispatch('nextView')">
            next
        </div>
        <div class="nav__btn nav__btn--prev" @click="$store.dispatch('prevView')">
            prev
        </div>
    </div>
</template>