<template>
    <div class="app">
        <div class="main-container">

            <!-- HEADER -->
            <section class="main-header">
                <div class="input-block">
                    <input class="search-input" type="text" placeholder="Поиск...">
                    <btnComp>
                        <SvgIcon class="icon" type="mdi" :path="path"></SvgIcon>
                    </btnComp>
                </div>
                <div class="action-block">
                    <btnComp>Создать</btnComp>
                </div>
            </section>

            <!-- BODY -->
            <section class="main-body">
                <postListComp>
                    <postComp>
                        <postContent>
                            <postTitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                                voluptatibus sed nam adipisci, consequuntur explicabo aperiam atque? Cum delectus
                                blanditiis optio, ipsum, ullam vitae dolor ex nobis assumenda fugit maiores?</postTitle>
                            <postBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                                ducimus ex placeat. Totam voluptatibus aspernatur illo cumque, consequatur similique
                                nihil dolorem praesentium fugit dolorum. Pariatur molestias quidem nemo aliquid? In
                                eaque, hic nihil nemo ex iure quia saepe. Sed harum sit dolore et, fuga blanditiis totam
                                sequi porro fugiat temporibus quia cum, facilis veritatis dignissimos alias architecto
                                laboriosam molestias? Ad quae ab est quia inventore architecto unde quod ullam omnis
                                quam? Sed odio quos eius facere quod exercitationem, qui aut ducimus, saepe repellendus
                                aliquid numquam earum, nesciunt hic perferendis! Fugiat vitae nostrum totam ad quo rem
                                temporibus voluptate, ex at.</postBody>
                        </postContent>
                        <div class="post-action">
                            <btnComp>Открыть</btnComp>
                            <btnComp style="margin-top: 10px">Удалить</btnComp>
                        </div>
                    </postComp>
                </postListComp>
            </section>

        </div>
    </div>
</template>


<script>
import btnComp from '@/components/btnComp.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify } from '@mdi/js';
import postListComp from '@/components/postListComp.vue';
import postComp from '@/components/postComp.vue'
import postContent from '@/components/postContent.vue'
import postTitle from '@/components/postTitle.vue'
import postBody from '@/components/postBody.vue'

export default {
    components: {
        SvgIcon,
        btnComp,
        postListComp,
        postComp,
        postContent,
        postTitle,
        postBody,
    },
    data() {
        return {
            path: mdiMagnify,
        }
    }
}
</script>

,
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --border: 1px solid rgba(0, 128, 128, 0.522);
    --shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
    --primary: teal;
}

.app {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon {
    color: teal;
}

.main-container {
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    border: var(--border);
    border-radius: 4px;
}

.main-header {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    border-bottom: var(--border);
}

.main-body {
    width: 100%;
    height: 90%;
}

.post-action {
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.input-block {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
}

.search-input {
    width: 50%;
    outline: rgba(0, 0, 0, 0);
    border-radius: 0;
    border: none;
    border-bottom: 2px solid rgba(128, 128, 128, 0.329);
    margin-right: 0.4rem;
    padding: 0.4rem 1rem;
}

.search-input::placeholder {
    color: rgba(128, 128, 128, 0.65);
}


.action-block {
    width: 20%;
    height: 100%;
    border-left: var(--border);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 1.2rem;
}
</style>
