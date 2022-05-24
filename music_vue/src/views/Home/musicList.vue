<template>
    <musicListView />
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe :loop="false" :width="150" class="my-swipe" :show-indicators="false">
                <van-swipe-item v-for="item in musiclist" :key="item">
                    <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
                        <img :src="item.picUrl" alt="">
                        <span style="position: absolute; top: 0; right: 0;" class="count">
                            {{ item.playCount }}
                        </span>
                        {{ item.name }}
                    </router-link>
                </van-swipe-item>
            </van-swipe>

        </div>
    </div>
</template>

<script>
import musicListView from './musicListView.vue'
import { getMusicList } from '@/request/api/home'
export default {
    data() {
        return {
            musiclist: [],
        };
    },
    methods: {
        async getGdan() {
            let res = await getMusicList();
            console.log(res);
            this.musiclist = res.data.result
        },
    },
    mounted() {
        this.getGdan()
    },
    components: {
        musicListView
    }
}
</script>

<style lang="less" scoped>
.musicList {
    width: 100%;
    height: 250px;
    padding-top: 10px;

    .musicTop {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .title {
            font-size: 20px;
            font-weight: 900;
        }

        .more {
            border: 1px solid #ccc;
            text-align: center;
            line-height: 30px;
            padding: 0 10px;
            border-radius: 20px;
        }
    }

    .musicContent {
        width: 100%;
        height: 300px;

        .my-swipe {
            height: 100%;

            img {
                width: 100%;
                height: 150px;
                border-radius: 8px;
            }

            .count {
                color: rgb(207, 47, 47);
            }

        }
    }
}
</style>