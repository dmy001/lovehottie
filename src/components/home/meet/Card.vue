<template>
  <router-link to="otherCentre">
    <div
      class="flex flex-col justify-center items-center card-container text-px14"
    >
      <div class="card-img">
        <img
          class="max-h-full max-w-full inline-block"
          src="https://images.gagahi.com/A-614b46d091d84696bf32bb34ef16e943"
        />
      </div>
      <div class="mt-px15 text-base-color2">Sherry</div>
      <div class="text-base-color4">19,中国</div>
    </div>
  </router-link>
</template>


<style lang="scss" scoped>
.card-container {
  width: 186px;
  height: 252px;
  margin: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
.card-img {
  width: 100%;
  height: 186px;
  text-align: center;
}
</style>