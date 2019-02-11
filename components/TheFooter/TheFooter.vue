<template>
    <div class="main">
        <div class="content">
            <div class="copyrigth">
                <p>
                    {{title}}
                    <!-- Санкт-Петербургъ, 2018 -->
                    </p>
            </div>
            <div class="info">
                <p>
                    {{description}}
                    <!-- Учебный макет сайта специально для Mayac Coding School -->
                    </p>
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
    },
    }
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
