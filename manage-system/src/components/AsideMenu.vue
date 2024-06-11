<template>
    <el-menu :default-active="route.path" class="el-menu" router>
        <div class="top-title">
            <span>后台管理系统</span>
        </div>
        <el-scrollbar class="el-scrollbar">
            <template v-for="(item, index) in menu" :key="index">
                <el-sub-menu v-if="item.children != null" :index="item.path">
                    <template #title>
                        <component :is="item.icon" />
                        <span class="pure-text">{{ item.title }}</span>
                    </template>
                    <template v-for="(i, index2) in item.children" :key="index2">
                        <el-menu-item :index="i.path">
                            <component :is="i.icon" />
                            <span class="pure-text">{{ i.title }}</span>
                        </el-menu-item>
                    </template>
                </el-sub-menu>
                <el-menu-item v-else :index="item.path">
                    <component :is="item.icon" />
                    <span class="pure-text">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </el-scrollbar>
    </el-menu>
</template>

<script lang="ts" setup>
import { toRaw } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const props = defineProps(["menu"]);
const menu = toRaw(props.menu);
</script>

<style lang="scss" scoped>
$top-title-text-height: 50px;
.top-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $top-title-text-height;
    border-bottom: 1px solid #610101;
}
.el-menu {
    min-height: 100vh;
    background-color: $base-left-menu-background-color;
}
.top-title :hover {
    cursor: pointer;
}
.pure-text {
    margin-left: 10px;
}
.el-scrollbar {
    height: calc(99vh - $top-title-text-height);
    width: 100%;
    color: white;
}
.el-menu-item {
    background-color: $base-left-menu-background-color;
}
.el-sub-menu :hover {
    background-color: $base-left-menu-background-color;
}
</style>
