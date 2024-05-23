<template>
    <Transition name="animation">
    <div 
    class="postDialog-container"
    >
        <div class="postDialog">
            <!-- LOADING -->
            <div class="loading-container"
            v-show="isShowLoading"
            ><p>Загрузка...</p></div>

            <div class="postDialog-header">
                <h2 class="header-title">Post {{ $route.params.id }}</h2>
            </div>
            <div class="postDialog-body">

                <!-- ID -->
                <div class="body-item">
                    <p class="item-key">ID: </p>
                    <p class="item-value">{{ id }}</p>
                </div>

                <!-- USER ID -->
                <div class="body-item">
                    <p class="item-key">User ID:</p>
                    <p class="item-value">{{ userId }}</p>
                </div>

                <!-- TITLE -->
                <div class="body-item">
                    <p class="item-key">Title:</p>
                    <p class="item-value">{{ title }}</p>
                </div>

                <!-- BODY -->
                <div class="body-item">
                    <p class="item-key">Body:</p>
                    <p class="item-value">{{ body }}</p>
                </div>

            </div>

            <div class="postDialog-actions">
                <btnComp @click="routerBack">Назад</btnComp>
            </div>
        </div>
    </div>
    </Transition>
</template>

<script>
import { getPostById } from '@/api'
export default {
    data() {
        return {
            isShowLoading: false,
            id: null,
            userId: null,
            title: null,
            body: null,
        }
    },
    methods: {
        routerBack() {
            this.$router.push({ name: 'main' });
        }
    },
    async created() {
        try {
            this.isShowLoading = true;
            const response = await getPostById(this.$route.params.id); 
            this.id = response.id;
            this.userId = response.userId;
            this.title = response.title;
            this.body = response.body;
        } catch (err) {
            console.error(`PostView created => ${err}`)
        } finally {
            this.isShowLoading = false;
        }
    },
}

</script>

<style scoped>
.animation-enter-active,
.animation-leave-active {
  transition: opacity 0.5s ease;
}

.animation-enter-from,
.animation-leave-to {
  opacity: 0;
}
.postDialog-container {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
}
.loading-container {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.455);
}

.postDialog {
    position: relative;
    width: 500px;
    height: 70vh;
    background-color: white;
    box-shadow: var(--shadow);
    border-radius: 5px;
    overflow: hidden;
}

.postDialog-header {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}
 
.header-title {
    color: teal;
}

.postDialog-body {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
}

.body-item {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 0.5rem;
    border: var(--border);
    padding: 0.4rem;
}
.item-key {
    border-bottom: var(--border);
}
/* .item-value {
    
} */
.postDialog-actions {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem;
}
</style>