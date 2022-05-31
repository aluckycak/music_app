<template>
    <div class="footerMusic">
        <div class="footLeft">
            <img :src="itemList[Index].al.picUrl" alt="">
            <div>
                <p>{{ itemList[Index].al.name }}</p>
            </div>
        </div>
        <div class="footRight">|></div>
        <audio ref="audio" controls
            :src="`https://music.163.com/song/media/outer/url?id=${itemList[Index].id}.mp3`"></audio>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['itemList', 'Index'])
    }
}
</script>

<style lang="less" scoped>
.footerMusic {
    width: 100%;
    height: 60px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 10px;
    justify-content: space-between;

    .footLeft {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-around;

        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
    }

    .footRight {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>