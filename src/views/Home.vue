<template>
  <div class="gallery">
    <div v-for="(item, index) in gallery"
         :key="index"
         class="gallery__item">
      <div class="gallery__user user">
        <img :src="item.user.profile_image.small"
             alt="Avatar" class="user__avatar">
        <router-link class="user__info"
                     target="_blank"
                     to="profile">
          <span class="user__name">
            {{ item.user.name }}
          </span>
          <span class="user__nickname">
            &commat;{{ item.user.username }}
          </span>
        </router-link>
      </div>
      <img :src="item.urls.regular"
           alt="Photo"
           class="gallery__photo">
      <span class="gallery__views">
        {{ item.likes }}
      </span>
    </div>
    <pagination :pages-qty="56"
                @change-page="getGallery"/>
    <div v-if="error"
         class="error-block">
      {{ error }}
    </div>
  </div>
</template>

<script>
import GalleryService from '@/services/GalleryService';

export default {
  name: 'home',
  data() {
    return {
      gallery: [],
      error: '',
    };
  },
  components: {
  },
  mounted() {
    this.getGallery();
  },
  methods: {
    async getGallery(page = 1) {
      try {
        const res = await GalleryService.getGallery(page);
        this.gallery = res.data;
      } catch (e) {
        this.error = 'Произошла ошибка при получении информации';
      }
    },
  },
};
</script>

<style lang="scss">
  .gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 660px;
    }
    &__user {
      font-size: 12px;
      line-height: 14px;
      display: flex;
      flex-direction: row;
    }
    &__item {
      overflow: hidden;
      margin: 0 auto 26px;
      width: 320px;
      @media screen and (min-width: 480px) {
        margin: 0 auto 16px;
        width: 440px;
      }
      @media screen and (min-width: 768px) {
        margin: unset;
        margin-bottom: 18px;
        width: 320px;
      }
    }
    &__photo {
      margin: 10px 0 5px;
      object-fit: cover;
      width: 100%;
      height: 230px;
      @media screen and (min-width: 480px) and (max-width: 767px) {
        height: 300px;
      }
    }
    .user {
      &__info {
        text-decoration: none;
      }
      &__avatar {
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
        width: 30px;
        height: 30px;
        @media screen and (min-width: 480px) and (max-width: 767px) {
          margin-left: 0;
        }
      }
      &__name {
        color: #333;
        display: block;
        font-weight: 700;
        margin-left: 3px;
      }
      &__nickname {
        display: block;
        color: #8d8d8d;
        font-size: 12px;
        line-height: 14px;
      }
    }
    &__views {
      color: #8d8d8d;
      display: block;
      font-size: 12px;
      line-height: 14px;
      position: relative;
      text-align: right;
      padding-right: 33px;
      &:after {
        background: url("../assets/eye.svg");
        content: '';
        position: absolute;
        width: 18px;
        height: 11.47px;
        top: 1px;
        right: 11px;
      }
    }
  }
</style>
