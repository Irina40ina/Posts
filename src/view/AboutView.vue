<template>
    <div class="about-view">
        <h1 class="about-view__title" @click="$router.push({ name: 'text' })">О нашей компании</h1>
        <h3 class="about-view__descr">
            "Мы - команда профессионалов, страстно увлеченных своей работой. Наша цель - создавать качественные и
            инновационные решения для наших клиентов. Мы стремимся к постоянному развитию и совершенствованию, чтобы
            обеспечить нашим клиентам лучший опыт работы с нами. Мы гордимся своей командой и уверены, что совместными
            усилиями мы сможем достичь любых целей. Добро пожаловать в наш мир творчества и инноваций!"
        </h3>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about-view {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about-view__title {
    width: max-content;
    color: teal;
    margin: -50px 0 50px 0;
}

.about-view__descr {
    width: 60%;
    text-align: center;
}
</style>