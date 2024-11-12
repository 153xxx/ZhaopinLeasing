<script>
export default {
    data() {
        return {
            items: Array.from({ length: 5 }, (_, index) => ({ index: index + 1 }))
        };
    }
}
</script>

<template>
    <div class="bigbox">
        <div class="blue"></div>
        <div class="blue2">房源推广</div>
    </div>
    <div class="twobox"></div>
    <div class="threebox">
        <ul class="uul">
            <li class="lli">全部</li>
            <li class="lli">未上架</li>
            <li class="lli">上架中</li>
            <li class="lli">上架失败</li>
            <li class="lli">已上架</li>
            <li class="lli">下架失败</li>
            <li class="lli">全部</li>
            <li class="search-item">
                <input type="text" placeholder="请搜索" />
            </li>
        </ul>
    </div>
    <div class="threebox1" v-for="(item, index) in items" :key="index">
        <ul class="uul1">
            <li class="lli1">{{ index + 1 }}</li>
            <li class="wh">未上架</li>
            <li class="wh">上架中</li>
            <li class="wh">上架失败</li>
            <li class="wh1">已上架</li>
            <li class="wh">下架失败</li>
            <li class="wh">全部</li>
            <li class="wh actions">
                <a href="">上架</a>
                <a href="">下架</a>
                <a href="">历史</a>
            </li>
        </ul>
    </div>
    
</template>

<style>
    .bigbox {
        width: 100px;
        height: 20px;
        display: flex;
        margin: 10px 0 0 10px;
    }
    .blue {
        width: 4px;
        height: 20px;
        background-color: blue;
    }
    .blue2 {
        width: 80px;
        height: 20px;
        line-height: 20px;
    }
    .twobox {
        width: 900px;
        height: 50px;
        background-color: rgb(197, 197, 194);
        margin-left: 10px;
    }
    .threebox, .threebox1 {
        width: 900px;
        margin-left: 10px;
    }
    .uul, .uul1 {
        width: 100%;
        height: 50px;
        display: flex;
        list-style: none;
    }
    .lli, .lli1 {
        height: 50px;
        line-height: 50px;
    }
    .lli {
        width: 100px;
    }
    .lli1 {
        width: 50px;
    }
    .search-item {
        width: 200px;
        position: relative;
    }
    .search-item input {
        width: 100%;
        height: 20px;
        margin-top: 15px;
    }
    .wh {
        width: 100px;
        height: 50px;
        line-height: 50px;
    }
    .wh1 {
        width: 150px;
        height: 50px;
        line-height: 50px;
    }
</style>