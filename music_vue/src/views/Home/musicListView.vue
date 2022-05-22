<template>

    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in state.images" :key="image">
            <img :src="image.pic" />
        </van-swipe-item>
    </van-swipe>

</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue';
export default {
    setup() {
        const state = reactive({
            images: [
                'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
        });
        onMounted(() => {
            axios.get('http://localhost:3000/banner?type=2').then((res) => {
                console.log(res);
                state.images = res.data.banners
            })
        })
        return { state };
    },
};

</script>

<style scoped lang="less">
.vant-swipe {
    width: 100%;
    padding: 3rem;

    .vant-swipe-item {
        padding: 0 0.2rem;

        img {
            width: 100%;
            height: 100%;
            border-radius: 0.2rem;
        }
    }
}
</style>