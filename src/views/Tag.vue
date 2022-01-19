<template>
  <div class="tag">
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="layout">
        <div>
            <Posts :posts="filteredPosts"></Posts>
        </div>
        <div>
            <TagCloud :posts="posts"></TagCloud>
        </div>
    </div>
    <div v-else>
        laoding...
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Posts from '../components/Posts'
import { computed } from 'vue';
import getPosts from "../composables/getPosts"
export default {
  components: {
    TagCloud, Posts },
    props:["tag"],//vuejs laravvel
    setup(props){
        let {posts,error,load}=getPosts();
        load();
        let filteredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                // post ထဲကတူတဲ့ကောင်ကိုတခါပဲယူ
                return post.tags.includes(props.tag)
            })
        })
        return{posts,error,filteredPosts}
    }
}
</script>

<style>
.tag{
    max-width: 1200px;
    margin: 0 auto;
}
</style>