<template>
    <div class="main">
        <div v-editable="blok" class="intro">
            <div class="content">
                <div class="header">
                    <h1> 
                        {{ blok.title }}
                    </h1>
                </div>
                <div class="description">
                    <p>
                        {{ blok.description }}
                    </p>
                </div>
                <div class="story">
                    <img 
                    :src="blok.photo"
                    >
                    <p class="text"> 
                        {{ blok.text }}
                        
                    </p>
                </div>
                <div class="fact">
                    <p>
                        {{ blok.fact }}
                        
                    </p>
                </div>
            </div>  
        </div>  
    </div>    
</template>
<script>
export default {
    props:  ['blok']
}
</script>


<style scoped>
    .main{
        margin-left: -12%;
        animation: pulse 5s 1 forwards;
        
    }
    .content{
        max-width: 900px;
        padding-top: 60px;
        padding-bottom: 60px;
        margin-left:12%;
        display: flex;
        flex-direction: column;
        font-style: normal;
    }
    @keyframes pulse{
        0% {
            background-color: #FFFFFF;
        }
        100% {
            background-color: rgb(235, 106, 163, 0.4);
        }
    }
    
    .header{
        font-size: 64px;
        max-width: 938px;
        max-width: 703px;
        font-weight: bold;
        letter-spacing: 3px;
    }
    .description{
        font-size: 36px;
        margin-top: 30px;
    }
    .story{
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        font-size: 36px;
        font-weight: 100;
    }
    .text{
        max-width: 680px;
        margin-left: 40px;
        margin-top: 30px;
    }
    .fact{
        max-width: 230px;
        margin-top: 30px;
        text-align: center;
        font-size: 18px;
    }
    img{
                
    }
</style>
