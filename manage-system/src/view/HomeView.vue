<template>
    <div class="container">
        <el-col :span="4">
            <AsideMenu :menu="menu"></AsideMenu>            
        </el-col>
        <el-col :span="20" style="padding: 20px;">
            <router-view />
        </el-col>
    </div>
</template>

<script lang="ts" setup>
import AsideMenu from '@/components/AsideMenu.vue';
import { menu } from '@/utils/menu';
 
</script>

<style lang="scss" scoped>
.container {
    display: flex;  /* 使得router-view在菜单的右边而不是正下方 */
}
</style>