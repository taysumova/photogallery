<template>
  <div class="pagination">
    <div class="pagination--wrapper">
      <span v-for="(item, index) in paginationNumbers"
            :key="index"
            class="pagination__item"
            :class="currentNum === item ? 'pagination__item--active' : ''"
            @click="changePage(item)">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data() {
    return {
      currentNum: 1,
    };
  },
  props: [
    'pagesQty',
  ],
  computed: {
    paginationNumbers() {
      if (this.currentNum === 1 || this.currentNum === 2) {
        return [1, 2, 3, 4, this.pagesQty];
      } if (this.currentNum === this.pagesQty - 1 || this.currentNum === +this.pagesQty) {
        return [1, this.pagesQty - 3, this.pagesQty - 2, +this.pagesQty - 1, this.pagesQty];
      }
      return [1, this.currentNum - 1, this.currentNum, +this.currentNum + 1, this.pagesQty];
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page);
      this.currentNum = page;
    },
  },
};
</script>

<style lang="scss">
  .pagination {
    background: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    &--wrapper {
      align-items: center;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      justify-content: center;
      max-width: 160px;
      height: 100%;
    }
    &__item {
      &:hover,
      &:active {
        cursor: pointer;
      }
      &--active {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 2px;
      }
      &:first-of-type {
        &:after {
          font-weight: 400;
          font-size: 14px;
          content: '...';
          margin-left: 5px;
        }
      }
      &:last-of-type {
        &:before {
          font-weight: 400;
          font-size: 14px;
          content: '...';
          margin-right: 5px;
        }
      }
      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
</style>
