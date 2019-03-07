<template>
<div v-editable="blok" class="down">
    <div class="main">
        <div class="content">
            <div class="copyrigth">
                <p>
                    {{  blok.title  }}
                    </p>
            </div>
            <div class="info">
                <p>
                    {{  blok.description  }}
                    </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ['blok']
}
</script>

<style scoped>
    .main{
        min-height: 150px;
        background-color: #E969A8;
        text-align: center;
    }
    .copyrigth{
        padding-top: 20px;
        font-size: 64px;
    }
    .info{
        margin-top: 20px;
        font-style: italic;
        font-size: 18px;
    }
</style>
