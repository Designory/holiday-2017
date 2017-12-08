<template>
    <div class="navigation">
        <div class="navigation__elm navigation__elm--logo">
            <a target="_blank" href="https://designory.com">
               logo
            </a>
        </div>
        <div class="navigation__elm navigation__elm--next" @click="$store.dispatch('nextView')">
            next
        </div>
        <div class="navigation__elm navigation__elm--prev" @click="$store.dispatch('prevView')">
            prev
        </div>
    </div>
</template>