<template>
    <itemTop :playlist="state.playlist" />
    <itemBottom :itemList="state.itemList" />
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import { getMustItemList, getItemList } from '@/request/api/item'
import itemTop from "../components/itemTop.vue"
import itemBottom from "../components/itemBottom.vue"
export default {
    setup() {
        const state = reactive({
            playlist: [],
            itemList: []
        });
        onMounted(async () => {
            let id = useRoute().query.id
            console.log(id);
            let res = await getMustItemList(id);
            console.log(res);
            state.playlist = res.data.playlist;//获取歌单
            let result = await getItemList(id);
            console.log(result);
            state.itemList = result.data.playlist.tracks//获取歌单内歌曲
        });
        return { state }
    },
    components: {
        itemTop,
        itemBottom
    }
}
</script>

<style>
</style>