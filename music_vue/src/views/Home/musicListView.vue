<template>
    <div id="swipertop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
                <img :src="image.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>


</template>

<script>
import axios from 'axios'
import { reactive, onMounted } from 'vue';
import { getBanner } from '@/request/api/home';
export default {
    setup() {
        const state = reactive({
            images: [
                'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
                'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
            ]
        });
        onMounted(async () => {
            //   axios.get('http://localhost:3000/banner?type=2').then((res) => {
            //      console.log(res);
            //      state.images = res.data.banners
            //   })
            let res = await getBanner();
            state.images = res.data.banners
            console.log(res);
        })
        return { state };
    },
};

</script>

<style  lang="less">
#swipertop {
    .van-swipe {
        width: 100%;

        .van-swipe-item {
            padding-top: 15px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
    }
}
</style>