<template>
    <div class="main">
        <section class="content" id="intro">
            <div class="header">
                <!-- <h1>{{title}}</h1> -->
            </div>
            <div class="description">
                <!-- <p>{{description}}</p> -->
            </div>
            <div class="photo">
                <!-- <img
                :src="photo"
                > -->
            </div>
            <button
            ></button>
        </section>
    </div>
</template>

<script>
export default {
//     data () {
//         return { story: { content : {} } }
//     },
//   asyncData(context) {
//     return context.app.$storyapi
//       .get("cdn/stories", {
//         version: "draft",
//         starts_with: "main/"
//       })
//       .then(res => {
//         console.log(res);
//         return {
//           blok: res.data.story.content,
//           title: res.data.stories.content.title,
//           description: res.data.stories.content.description,
//           photo: res.data.stories.content.photo
//         };
//       });
//   },
//   methods: {
//       printf() {
//           console.log(this.res.data);
//       }
//   }
//   mounted() {
//     this.$storyblok.init();
//     this.$storyblok.on("change", () => {
//       location.reload(true);
//     });
//   }
}
// export default {
// props: {
//     title: {
//         type: String,
//       required: true
//       },
//       description: {
//         type: String,
//       required: true
//       },
//       photo: {
//         type: String,
//       required: true
//       }
// }
// }
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
