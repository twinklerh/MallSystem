<template>
    <el-menu router class="el-menu">
        <div class="top-title">
            <span>后台管理系统</span>
        </div>
        <template v-for="(item,index) in menu" :key="index">
            <el-sub-menu v-if="item.child!=null">
                <template #title>
                    <component :is="item.icon" />
                    <span class="pure-text">{{ item.title }}</span>
                </template>
            </el-sub-menu>
            <el-menu-item v-else :index="item.url">
                <component :is="item.icon" />
                <span class="pure-text">{{ item.title }}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
import { toRaw } from 'vue';

const props = defineProps(['menu'])
const menu = toRaw(props.menu)

</script>

<style lang="scss" scoped>
.top-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid #610101;
}
.top-title :hover {
    cursor: pointer;
}
.pure-text {
    margin-left: 10px;
}
</style>