<template>
<main>
<div v-editable="blok" class="ingredients">
    <div class="main">
        <div class="content">
            <div class="header">
                <h1>
                    <!-- Классический рецепт -->
                    {{  blok.title  }}
                </h1>
            </div>
            <div class="first-paragraph">
                <div class="text">
                    <p class="topic">
                        <!-- ИНГРЕДИЕНТЫ: -->
                        {{  blok.header  }}
                        </p>
                    {{  blok.ingredients  }}
                    <!-- <ul>
                        <li>300 г муки</li>
                        <li>120 г сахара</li>
                        <li>1 ст. л. ванильного сахара</li>
                        <li>1 яйцо</li>
                        <li>180 г масла</li>
                        <li>1 ч. л. разрыхлителя</li>
                        <li>щепотка соли</li>
                        <li>180 г джема</li>
                        <li>200 г сахарной пудры</li>
                        <li>сок 1 лимона</li>
                        <li>2 ст. л. какао-порошка</li> 
                     </ul> -->
                 </div>
                 <div class="photo">
                     <img 
                     :src="  blok.photo  ">
                 </div>
            </div>
            <div class="second-paragraph">
                {{  blok.steps  }}
                    <!-- <p class="step">Шаг 1</p>
                    Размягчите масло и взбейте его миксером с яйцом, 
                    обычным и ванильным сахаром добела.
                    <p class="step">Шаг 2</p>
                    Добавьте муку, просеянную с разрыхлителем и солью. 
                    Пальцами смешайте муку с масляной смесью так, чтобы 
                    получилась крошка. Соберите крошку в шар, заверните 
                    в пленку и положите в холодильник на 30 мин.
                    <p class="step">Шаг 3</p>
                    Затем раскатайте между двумя листами бумаги для выпечки 
                    в пласт по размеру противня, аккуратно по линейке обрежьте 
                    края. Перенесите тесто на противень, снимите верхний лист бумаги.
                    <p class="step">Шаг 4</p>
                    Выпекайте в разогретой до 190 °С духовке 12–15 мин. Разрежьте 
                    выпеченную лепешку на две равные части. Отложите 2 ст. л. джема, 
                    оставшийся джем равномерно выложите на одну часть лепешки. 
                    Сверху уложите вторую часть и слегка прижмите. 
                    Поверхность смажьте отложенным джемом. Важно делать все это, 
                    пока лепешки теплые.
                    <p class="step">Шаг 5</p>
                    Смешайт е сахарную пудру с таким количеством лимонного сока, 
                    чтобы получилась текучая масса. Отложите пару ложек и смешайте с какао.
                    <p class="step">Шаг 6</p>
                    Полейте промазанные джемом лепешки получившейся глазурью и 
                    нарежьте полосками. Поверх глазури из кулинарного шприца
                    или бумажного «корнетика» выдавите полоски темной глазури 
                    с какао. Дайте глазури застыть полностью. -->
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
    .content{
        max-width: 900px;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .header{
        font-size: 64px;
        font-weight: bold;
        letter-spacing: 3px;
    }
    .first-paragraph{
        margin-top: 40px;
        display: flex;
    }
    .text{
        max-width: 516px;
        font-size: 18px;
        
    }
    .topic{
        font-weight: bold;
        margin-bottom: 25px;
        font-size: 36px;
    }
    .second-paragraph{
        margin-top: 25px;
        font-size: 18px;
        font-style:italic;
        /* max-width: 677px; */
    }
    .step{
        font-weight: bold;
        font-size: 18px;
        margin-bottom: 3px;
        margin-top: 3px;
    }
    img{
        width: 362px;
        height: 204px;
        margin-left: 72px;
    }
    ul{
        margin-left: 10px;
        columns: 2;
        list-style-type: circle;
    }
    li{
        margin-left: 10px;
    }
</style>
