<template>
    <div class="FooterMusic">
        <div class="footerLeft">
            <img :src="playList[playListIndex].al.picUrl" alt="" />
            <div>
                <p>{{ playList[playListIndex].name }}</p>
                <span>横滑切换上下首哦</span>
            </div>
        </div>
        <div class="footerRight">
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofanganniu"></use>
            </svg>
            <svg class="icon liebiao" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-weibiaoti--"></use>
            </svg>
        </div>
        <audio ref="audio"
            :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
    </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
    computed: {
        ...mapState(["playList", "playListIndex", "isbtnShow",]),
    },
    mounted() {
        console.log(this.$refs);

    },
    methods: {
        play: function () {
            // 判断音乐是否播放
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.updateIsbtnShow(false);
            } else {
                this.$refs.audio.pause();
                this.updateIsbtnShow(true);
            }
        },
        ...mapMutations([
            "updateIsbtnShow",
        ]),
    },
    watch: {
        isbtnShow: function () {
            this.isbtnShow = this.isbtnShow
        }
    },
    components: {

    },
};
</script>
<style lang="less" scoped>
.FooterMusic {
    width: 100%;
    height: 1.4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;

    .footerLeft {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
        }
    }

    .footerRight {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icon {
            width: 0.6rem;
            height: 0.6rem;
        }
    }
}
</style>