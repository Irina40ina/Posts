<template>
    <div 
    class="postDialog-container"
    v-if="$props.isShow"
    >
        <div class="postDialog">
            <!-- LOADING -->
            <div class="loading-container"
            v-if="$props.isShowLoading"
            ><p>Загрузка...</p></div>

            <div class="postDialog-header">
                <h2 class="header-title">Post {{$props.postData.id}}</h2>
            </div>
            <div class="postDialog-body">

                <!-- ID -->
                <div class="body-item">
                    <p class="item-key">ID: </p>
                    <p class="item-value">{{$props.postData.id}}</p>
                </div>

                <!-- USER ID -->
                <div class="body-item">
                    <p class="item-key">User ID:</p>
                    <p class="item-value">{{$props.postData.userId}}</p>
                </div>

                <!-- TITLE -->
                <div class="body-item">
                    <p class="item-key">Title:</p>
                    <p class="item-value">{{$props.postData.title}}</p>
                </div>

                <!-- BODY -->
                <div class="body-item">
                    <p class="item-key">Body:</p>
                    <p class="item-value">{{$props.postData.body}}</p>
                </div>

            </div>
            <div class="postDialog-actions">
                <btnComp @click="$emit('close')">Закрыть</btnComp>
            </div>
        </div>
    </div>
</template>

<script>
import btnComp from '@/components/btnComp.vue';
export default {
    components: {
        btnComp,
    },
    emits: ['close'],
    props: {
        isShow: {
            type: Boolean,
            default: false,
            required: true,
        },
        postData: {
            type: Object,
            required: true,
        },
        isShowLoading: {
            type: Boolean,
            default: false,
            required: false,
        }
    }
}
</script>

<style scoped>
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
    height: 50vh;
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
    justify-content: flex-end;
    padding: 0 1rem;
}
</style>