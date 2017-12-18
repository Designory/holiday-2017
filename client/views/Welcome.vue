<template>
<div>
    <!-- iPhone 6 (375px) and higher text -->
    <div class="welcome">
        <p class="txt txt--thin txt--center-lg">
          Why only celebrate <br>
          A couple times a year?<br>
          We at Designory believe<br>
          In continuously spreading cheer!
        </p>
        <p class="txt txt--strong txt--center-lg">
          So push those doubts away, <br>
          For we’ve dug deep, and found <br>
          A gloriously real holiday <br>
          For each day, year round!
          <span class="navigation__btn navigation__btn--next navigation__btn--desktop" @click="$store.dispatch('nextView')"></span>
        </p>
    </div>

    <!-- Below 375px => aka iPhone 5 only -->
    <div class="welcome welcome--ip5">

      <p class="txt txt--thin txt--center-lg">
        Why only celebrate 
        a couple times a year?
        We at Designory believe
        In continuously spreading cheer!
      </p>
      <p class="txt txt--strong txt--center-lg">
        Push those doubts away, 
        we’ve dug deep, and found 
        a gloriously real holiday 
        for each day, year round!
      </p>
  </div>
  
</div>
</template>
