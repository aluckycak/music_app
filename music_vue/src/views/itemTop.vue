<template>
    <div class="itemMusicTop">
        <img :src="playlist.coverImgUrl" alt="" class="topimg">
        <div class="itemLeft" @click="$router.go(-1)">返回</div>
        <img :src="playlist.coverImgUrl" alt="" class="cenimg">
    </div>
</template>

<script>
export default {
    setup(props) {
        console.log(props);
    },
    props: ['playlist']
}
</script>

<style>
.topimg {
    height: 300px;
    width: 100%;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
}

.itemLeft {
    display: flex;
    color: rgb(96, 182, 182);
    font-size: 28px;
}

.cenimg {
    width: 40%;
    height: 150px;
    border-radius: 10px;
    padding-top: 20px;

}

.itemMusicTop {
    width: 100%;
    height: 300px;
}
</style>