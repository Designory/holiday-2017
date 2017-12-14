<template>
  <div class="welcome">
    <p class="txt txt--thin-lg txt--center-lg">
       While we do want to wish you a very happy holiday season, we here at Designory want the world to know that every day is a good day to celebrate. 
    </p>
    <p class="txt txt--strong txt--center-lg">
       Enter a day — any day. And we’ll show you your reason to celebrate.
       <span class="navigation__btn navigation__btn--next navigation__btn--desktop" @click="$store.dispatch('nextView')"></span>
    </p>
  </div>
</template>
