<template>
    <div class="main">
        <div class="content">
            <div class="header">
                <h1>Ассортимент</h1>
            </div>
            <div class="assortment">
            <div class="wrapper" v-for="element in poloski"
            :key="element.name"
            >
            <div class="element">
                        <div class="photo">
                            <img 
                            :src="element.image" alt="element.name">
                        </div>
                        <div class="description">
                            {{element.name}} <br>{{element.description}} 
                            <br>{{element.score}}/10
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
   
}
    // data() {
    //     return {
    //         poloski: [
    //              { 
    //                 name: 'Каравай с брусникой',
    //                 image: require('~/assets/img/poloska1.png'),
    //                 description: 'Классика, но с необычной прослойкой',
    //                 score: 6
    //              },
    //              { 
    //                 name: 'Каравай сo сгущенкой',
    //                 image: require('~/static/img/poloska2.png'),
    //                 description: 'Не самая вкусная, слишком обычная',
    //                 score: 5
    //              },
    //              { 
    //                 name: 'Каравай с яблоком',
    //                 image: require('~/components/TheRange/poloska3.png'),
    //                 description: 'Самая классическая, хоть и тесто так себе',
    //                 score: 6
    //              },
    //              { 
    //                 name: 'Азбука вкуса',
    //                 image: require('@/static/img/poloska4.png'),
    //                 description: 'Невероятно вкусно, однозначно советую',
    //                 score: 9
    //              },
    //              { 
    //                 name: 'Смольненский вариант',
    //                 image: require('@/static/img/poloska7.png'),
    //                 description: 'Дешево. Быстро. Не очень.',
    //                 score: 5
    //              },
    //              { 
    //                 name: 'Метрополь',
    //                 image: require('@/static/img/poloska6.png'),
    //                 description: 'Мой фаворит',
    //                 score: 9
    //              },

    //         ]
    //         }  
    // } 

</script>


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

