<template>
    <div class="main">
        <!-- <component  v-if="intro" :blok="intro" :is="intro.component"></component> -->
        <div class="content"    >
            <div class="header">
                <h1>{{title}}</h1>
            </div>
            <div class="description">
                <p>{{description}}</p>
            </div>
            <div class="photo">
                <img src="~/static/img/aleksandrikook-puhas.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
props: {
    title: {
        type: String,
      required: true
      },
      description: {
        type: String,
      required: true
      }
}
}
</script>
<style scoped>
    .main{
        margin-top: 60px;
    }
    .content{
        display: flex;
        flex-direction: column;
        max-width: 900px;
    }
    .header{
        font-size: 84px;
        max-width: 938px;
        letter-spacing: 4px;
        font-weight: 800;
    }
    .description{
        font-size: 36px;
        margin-top: 40px;
        font-style:italic;
        letter-spacing: 1px;
    }
    img{
        width: 479px;
        height: 310px;
    }
</style>
