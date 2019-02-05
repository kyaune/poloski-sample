<template>
    <div class="main">
        <!-- <component  v-if="intro" :blok="intro" :is="intro.component"></component> -->
        <div class="content"    >
            <div class="header">
                <!-- <h1>{{intros.title}}</h1> -->
            </div>
            <div class="description">
                <!-- <p>{{intros.text}}</p> -->
            </div>
            <div class="photo">
                <img src="~/static/img/aleksandrikook-puhas.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    asyncData (context) {
        return context.app.$storyapi
        .get("cdn/stories",{ 
            version: "draft",
            starts_with: "main/"
        })
        .then(res =>{
            console.log(res);
            return res;
            // return {
            //   intros:
            // res.data.stories.map(hd => {
            //   return {
            //     id: hd.slug,
            //     title: hd.content.title,
            //     text: hd.content.description,
            //   }
            // }),
            // };
        })
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
