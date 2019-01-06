<template>
    <div class="main">
        <div class="content">
            <div class="header">
                <h1>Ассортимент</h1>
            </div>
            <div class="assortment">
                
                    <div class="element">
                        <div class="photo">
                            <img src="~assets/img/poloska1.png" alt="">
                        </div>
                        <div class="description">
                            “Каравай” <br>Классика, но с необычной 
                            прослойкой <br>7/10
                        </div>
                    </div>
                    
                    <div class="element">
                        <div class="photo">
                            <img src="~static/img/poloska2.png">
                        </div>
                        <div class="description">
                            “Каравай” <br>Классика, но с необычной 
                            прослойкой <br>7/10
                        </div>
                    </div>
                    
                    <div class="element">
                        <div class="photo">
                            <img src="@/components/TheRange/poloska3.png">
                        </div>
                        <div class="description">
                            “Каравай” <br>Классика, но с необычной 
                            прослойкой <br>7/10
                        </div>
                    </div>
                     <div class="element">
                        <div class="photo">
                            <img src="@/static/img/poloska4.png">
                        </div>
                        <div class="description">
                            “Каравай” <br>Классика, но с необычной 
                            прослойкой <br>7/10
                        </div>
                    </div>
                     <div class="element">
                        <div class="photo">
                            <img src="@/static/img/poloska7.png">
                        </div>
                        <div class="description">
                            “Каравай” <br>Классика, но с необычной 
                            прослойкой <br>7/10
                        </div>
                    </div>
                     <div class="element">
                        <div class="photo">
                            <img src="@/static/img/poloska6.png">
                        </div>
                        <div class="description">
                            “Каравай” <br>Классика, но с необычной 
                            прослойкой <br>7/10
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .main{
        margin-top: 60px;
        margin-left: -12%;
        background-color: rgb(235, 106, 163, 0.2);
    }
    .content{
        max-width: 900px;
        /* margin-top: 80px; */
        padding-top: 60px;
        padding-bottom: 60px;
        margin-left:12%;
    }
    .header{
        font-size: 64px;
        font-weight: bold;
        letter-spacing: 3px;
        text-align:left;
    }
    .assortment{
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
    }
    .element{
        flex-basis: 300px;
        margin-top: 30px;
    }
    .description{
        margin-top: 30px;
    }
    img{
        width: 200px;
        height: 200px;
    }
</style>

