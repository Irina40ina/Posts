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
                    <selectSortedComp
                    :options="selectedOptions"
                    v-model="selectedSorted"
                    ></selectSortedComp>
                </div>
                
                <div class="action-block">
                    <btnComp @click="isShowCreationForm = true">Создать</btnComp>
                </div>
            </section>

            <!-- BODY -->
            <section class="main-body">
                <postListComp 
                :posts="sortedPosts"
                @open-dialog="openPostDialog"
                @open-delete-dialog="openDeleteDialog"
                @page-next="loadingPageNext"
                :is-show-loading="isShowUploadPosts"
                :search-field="searchField"
                >
                </postListComp>
            </section>

        </div>
        <paginationBlock 
        @select-page="loadingPageNext"
        @page-back="pageBack"
        @page-forward="pageForward"
        :page-number="page"
        :page-count="totalCountPage"
        :current-page="currentPage"
        >
            <router-link class="about-link" :to="{ name: 'about' }">О нашей компании</router-link>
        </paginationBlock>

    </div>
</template>


<script>
import { mdiMagnify } from '@mdi/js';
import postListComp from '@/components/postListComp.vue';
import creationFormComp from '@/components/creationFormComp.vue';
import postDialogComp from '@/components/postDialogComp.vue';
import {getPosts, getPostById} from '@/api/index.js';
import deleteDialogComp from '@/components/deleteDialogComp.vue';
import selectSortedComp from '@/components/selectSortedComp.vue';

export default {
    components: {
        postListComp,
        creationFormComp,
        postDialogComp,
        deleteDialogComp,
        selectSortedComp,
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
            isShowUploadPosts: false,
            indexDeletedPost: '',
            searchField: '',
            searchId: '',
            page: 1,
            limit: 10,
            totalCountPage: 0,
            currentPage: 1,
            searchPosts: [],
            selectedOptions: [
                {value: 'title', title: 'Сортировка по названию'}, 
                {value: 'body', title: 'Сортировка по описанию'},
            ],
            selectedSorted: '',
        }
    },
    methods: {
        createPost(data) {
            this.posts.unshift({
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
                    this.posts = await getPosts(this.limit);
                }
            } catch (err) {
                console.err(`App.vue: handlerSearchInput => ${err}`);
            }
        },

        // ДЛЯ БЕСКОНЕЧНОЙ ЛЕНТЫ
        // async loadingPageNext() {
        //     try {
        //         this.isShowUploadPosts = true;
        //         this.page += 1;
        //         let posts = await getPosts(this.limit, this.page);
        //         this.posts = [...this.posts, ...posts];
        //     } catch (err) {
        //         console.error(`App.vue: loadingPageNext => ${err}`)
        //     } finally {
        //         this.isShowUploadPosts = false;
        //     }
        // },

        // ДЛЯ ПОСТРАНИЧНОГО ВЫВОДА ПОСТОВ
        async loadingPageNext(value) {
            try {
                this.isShowUploadPosts = true;
                this.page = value;
                this.currentPage = value;
                const response = await getPosts(this.limit, this.page);
                this.posts = response.data;
            } catch (err) {
                console.error(`App.vue: loadingPageNext => ${err}`)
            } finally {
                this.isShowUploadPosts = false;
            }
        },
        async pageBack() {
            try {
                this.page = this.page -= 1;
                this.currentPage = this.currentPage -=1;
                const response = await getPosts(this.limit, this.page);
                this.posts = response.data;
            } catch (err) {
                console.error(`App.vue: pageBack => ${err}`)
            } finally {
                this.isShowUploadPosts = false;
            }
        },
        async pageForward() {
            try {
                this.page = this.page += 1;
                this.currentPage = this.currentPage +=1;
                const response = await getPosts(this.limit, this.page);
                this.posts = response.data;
            } catch (err) {
                console.error(`App.vue: pageBack => ${err}`)
            } finally {
                this.isShowUploadPosts = false;
            }
        },
        async uploadPosts() {
            try {
                this.isShowUploadPosts = true;
                this.searchPosts = await getPosts(100, 1);
            } catch (err) {
                console.error(`App.vue: uploadPosts => ${err}`)
            } finally {
                this.isShowUploadPosts = false;
            }
        }
    },
    computed: {
        searchPost() {
            let result;
            try {
                result = this.posts.filter((element) => {
                    element
                    if (element.title.toLowerCase().includes(this.searchField.toLowerCase())) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (err) {
                console.error(`App.vue: computed[searchPost]  => ${err}`)
            }
            return result;

        },
        filteredById() {
            let result;
            try {
                result = this.searchPost.filter((element) => {
                    let currentId = element.id + ''
                    if (currentId.includes(this.searchId)) {
                        return true;
                    } else {
                        return false;
                    }
                });
            } catch (err) {
                console.error(`App.vue: computed[filteredById]  => ${err}`)
            }
            return result;

        },
        sortedPosts() {
            let result;
            try {
                result = [...this.filteredById].sort((post1, post2) => {
                    return post1[this.selectedSorted]?.localeCompare(post2[this.selectedSorted]);
                });
            } catch (err) {
                console.error(`App.vue: computed[sortedPosts]  => ${err}`)
            }
            return result;

        },
    }, 
    async mounted() {
        try {
            this.isShowUploadPosts = true;
            let response = await getPosts(this.limit, this.page);
            this.posts = response.data;
            let totalCount = response.xTotalCount;
            this.totalCountPage = Math.ceil(totalCount / this.limit);
        } catch (err) {
            console.error(`App.vue: mounted => ${err}`)
        } finally {
            this.isShowUploadPosts = false;
        }
    },
}
</script>

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
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
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
    overflow: hidden;
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
    overflow: hidden;
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

.about-link {
    position: absolute;
    right: 30%;
    font-size: 19px;
    color:  teal;
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
