<template>
    <div class="navtop">
        <ul class="top_nav">
            <li>
                <router-link to="/home" exact-active-class="active">首页</router-link>
            </li>
            <li>
                <router-link to="/topic">榜单</router-link>
            </li>
            <li>
                <router-link to="/mine">我的</router-link>
            </li>
            <li>
                <router-link to="/search">搜索</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.top_nav {
    display: flex;
    background: #fff;

    li {
        flex: 1;
        text-align: center;
        padding-top: 10px;
        list-style-type: none;


        a {
            display: block;
            padding-bottom: 8px;
            text-decoration: none;
            color: #000;
        }

        .active {
            border-bottom: 2px solid #ff0000;

        }
    }
}

.navtop {
    background-color: #f8f8f8;
    padding: 0px;
}
</style>