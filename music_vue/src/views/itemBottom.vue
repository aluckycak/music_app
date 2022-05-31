<template>
    <div class="itemlist">
        <!-- 显示歌单内歌曲-->
        <div class="item" v-for="(item, i) in itemList" :key="i">
            <div class="itemleft">
                <span class="leftspan">{{ i + 1 }}</span>
            </div>

            <p>{{ item.name }}</p>&nbsp;&nbsp;&nbsp;
            <span v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</span>
        </div>
    </div>
</template>
<script>
export default {
    setup(props) {
        console.log(props);
    },
    props: ['itemList']
}
</script>


<style>
</style>
<style>
.itemlist {
    background-color: #fff;
    border-radius: 18px;
}

.item {
    display: flex;
    padding-top: 20px;
}

p {
    padding-left: 30px;
}
</style>