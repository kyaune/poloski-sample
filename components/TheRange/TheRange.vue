<template>
<main>
<div class="main">
    <div v-editable="blok" class="samples">
        <div class="content">
            <div class="header">
                <h1>{{  blok.title  }}</h1>
            </div>
            <div class="assortment">
            <div class="wrapper" v-for="element in blok.body"
            :key="element.title"
            >
            <div class="element">
                        <div class="photo">
                            <img 
                            :src="element.photo" alt="element.name">
                        </div>
                        <div class="description">
                            {{  element.title  }} <br>{{  element.description }} 
                            <br>{{  element.score  }}/10
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
</div>
</main>
</template>
<script>
export default {
     props:  ['blok']
}
</script>


<style scoped>
    .main{
        margin-top: 60px;
        margin-left: -12%;
        background-color: rgb(235, 106, 163, 0.2);
    }
    .content{
        max-width: 900px;
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
        justify-content: space-evenly;
        flex-wrap: wrap;
        text-align: center;
    }
    .wrapper{
        flex-basis: 250px;
    }
    .element{
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

