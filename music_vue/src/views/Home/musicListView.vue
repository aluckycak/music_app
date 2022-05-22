<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>新歌榜</h3>
                <a href="">更多</a>
            </div>
            <div class="list">
                <div class="item">
                    <div class="img-warpper">
                        <img class="rpic"
                            src="http://p4.music.126.net/i928-hIdPinzbW1p00sThQ==/109951167429598505.jpg?param=50y50&amp;quality=100">
                    </div>
                    <div class="main">我以为你不会出现</div>
                    <div class="gary">告五人</div>
                </div>
                <div class="item">
                    <div class="img-warpper">
                        <img class="rpic"
                            src="http://p4.music.126.net/i928-hIdPinzbW1p00sThQ==/109951167429598505.jpg?param=50y50&amp;quality=100">
                    </div>
                    <div class="main">我以为你不会出现</div>
                    <div class="gary">告五人</div>
                </div>
                <div class="item">
                    <div class="img-warpper">
                        <img class="rpic"
                            src="http://p4.music.126.net/i928-hIdPinzbW1p00sThQ==/109951167429598505.jpg?param=50y50&amp;quality=100">
                    </div>
                    <div class="main">我以为你不会出现</div>
                    <div class="gary">告五人</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
    height: 45px;
}

.block-padding {
    padding: 10px;
    background-color: #fff;
}

.title {
    display: flex;
    padding-top: 10px;
    padding-left: 15px;
}

a {
    padding-left: 250px;
    text-decoration: none;
    color: rgb(176, 173, 173);
}

.list {
    display: flex;
}

.rpic {
    width: 100px;
}

.main {
    font-size: 10px;
}

.gary {
    padding-left: 28px;
}

.item {
    padding: 7px;
}
</style>