<template>
  <div class="waterfall-container">
    <div class="w-full flex flex-row">
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 1">
            <card
              :imgsrc="
                Math.random() > 0.5
                  ? 'https://images.gagahi.com/Z-03550c90d1d74a8e92be62a425cbdc27?imageView2/2/w/262/h/262'
                  : ''
              "
            ></card>
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 2">
            <card
              :imgsrc="
                Math.random() > 0.5
                  ? 'https://sources.gagahi.com/ac4b849baad14bcdbd6fe80940f09a10?imageView2/2/w/262/h/262'
                  : ''
              "
            ></card>
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="width: calc(100% / 3)">
        <div v-for="i in 10" :key="i">
          <div v-if="i % 3 === 0">
            <card
              :imgsrc="
                Math.random() > 0.5
                  ? 'https://sources.lovehottie.com/Z-7941c6ea659d4e04b1f4e7e816eea308?imageView2/2/w/262/h/262'
                  : ''
              "
            ></card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@components/home/zone/Card.vue";

export default {
  components: {
    card,
  },
};
</script>