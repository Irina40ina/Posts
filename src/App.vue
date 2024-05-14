<template>
    <div class="app">
        <div class="main-container">
            <!-- ФОРМА СОЗДАНИЯ ПОСТА -->
            <creationFormComp 
            :isShow="isShowCreationForm" 
            @close="isShowCreationForm = false"
            @create-post="createPost"
            ></creationFormComp>

            <!-- ДИАЛОГОВОЕ ОКНО ПРОСМОТРА ПОСТА -->
            <postDialogComp
            :isShow="isShowPostDialog"
            :post-data="postDataForView"
            @close="isShowPostDialog = false"
            :is-show-loading="isShowLoading"
            ></postDialogComp>

            <deleteDialogComp
            :isShow="isShowDeleteDialog"
            :post-data="postDataForDelete"
            @close="isShowDeleteDialog = false"
            @delete-post="deletePostFunction"
            >
            </deleteDialogComp>
            
            <!-- HEADER -->
            <section class="main-header">
                <div class="input-block">
                    <input 
                    class="search-input" 
                    type="text" 
                    placeholder="Поиск Title..."
                    v-model="searchField"
                    @input="handlerSearchInput"
                    @focus="uploadPosts"
                    >
                    <input 
                    class="search-input" 
                    type="text" 
                    placeholder="Поиск ID..."
                    v-model="searchId"
                    @input="handlerSearchInput"
                    @focus="uploadPosts"
                    >

                    <!-- Поиск кнопка -->
                    <btnComp >
                        <SvgIcon 
                        class="icon" 
                        @click="searchPost"
                        type="mdi" 
                        :path="path"
                        ></SvgIcon>
                    </btnComp>
                </div>
                
                <div class="action-block">
                    <btnComp @click="isShowCreationForm = true">Создать</btnComp>
                </div>
            </section>

            <!-- BODY -->
            <section class="main-body">
                <postListComp 
                :posts="filteredById"
                @open-dialog="openPostDialog"
                @open-delete-dialog="openDeleteDialog"
                @page-next="loadingPageNext"
                :search-field="searchField"
                >
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
import creationFormComp from './components/creationFormComp.vue';
import postDialogComp from '@/components/postDialogComp.vue';
import {getPosts, getPostById} from '@/api/index.js';
import deleteDialogComp from '@/components/deleteDialogComp.vue';

export default {
    components: {
        SvgIcon,
        btnComp,
        postListComp,
        creationFormComp,
        postDialogComp,
        deleteDialogComp,
    },
    data() {
        return {
            path: mdiMagnify,
            isShowCreationForm: false,
            isShowPostDialog: false,
            isShowDeleteDialog: false,
            posts: [],
            arrPosts: [],
            postDataForView: null,
            postDataForDelete: {},
            isShowLoading: false,
            indexDeletedPost: '',
            searchField: '',
            searchId: '',
            page: 1,
            searchPosts: [],
        }
    },
    methods: {
        createPost(data) {
            this.posts.push({
                userId: 1,
                id: Date.now(),
                title: data.title,
                body: data.body,
            });
            this.isShowCreationForm = false
        },
        async openPostDialog(data) {
            try {
                this.isShowLoading = true;
                this.isShowPostDialog = true;
                this.postDataForView = await getPostById(data.id);
            } catch (err) {
                console.log(`App.vue: openPostDialog => ${err}`)
            } finally {
                this.isShowLoading = false;
            }
        },
        openDeleteDialog(data) {
            try {
                this.isShowDeleteDialog = true;
                this.postDataForDelete = data;
            } catch (err) {
                console.err(`App.vue: openDeleteDialog => ${err}`)
            }
        },
        deletePostFunction() {
            try {
                this.posts = this.posts.filter((element) => element.id !== this.postDataForDelete.id);
                this.isShowDeleteDialog = false;
            } catch (err) {
                console.err(`App.vue: deletePostFunction => ${err}`);
            }
        },
        async handlerSearchInput() {
            try {
                if(this.searchField === '') {
                    this.posts = await getPosts(10);
                }
            } catch (err) {
                console.err(`App.vue: handlerSearchInput => ${err}`);
            }
        },
        async loadingPageNext() {
            try {
                this.page += 1;
                let posts = await getPosts(10, this.page);
                this.posts = [...this.posts, ...posts];
            } catch (err) {
                console.error(`App.vue: loadingPageNext => ${err}`)
            }
        },
        async uploadPosts() {
            this.searchPosts = await getPosts(100, 1);
        }
    },
    computed: {
        searchPost() {
            return this.posts.filter((element) => {
                element
                if (element.title.toLowerCase().includes(this.searchField.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            });
        },
        filteredById() {
            return this.searchPost.filter((element) => {
                let currentId = element.id + ''
                if (currentId.includes(this.searchId)) {
                    return true;
                } else {
                    return false;
                }
            });
        }
    },
    async mounted() {
        try {
            this.posts = await getPosts(10, this.page);
        } catch (err) {
            console.error(`App.vue: mounted => ${err}`)
        }
    },
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
