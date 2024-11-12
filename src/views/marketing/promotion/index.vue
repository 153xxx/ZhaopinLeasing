<template>
    <div class="onebox">
        <div class="blue">
            <div class="twobox">
                <div class="three">
                        官网/微博
                </div>
            </div>
        </div>

        <div class="bluetwo">
            <div class="four">
                <div class="one1">
                    账号管理
                </div>
                <div class="one1">
                    发房配置
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>

.onebox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly
}

.blue {
    width: 25%;
    height: 100%px;
}

.bluetwo {
    width: 65%;
    height: 100%px;
}

.three {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    text-align: center;
    line-height: 50px;
}

.four {
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 0.5px solid black;
}
.one1 {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
}
.one1:hover {
    border-bottom: 1px solid blue;
}
</style>