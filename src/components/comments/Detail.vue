<template>
    <div class="comment-session">
        <div class="post-comment">
            <div class="list">
                <div class="comment-friend">
                        <img v-bind:src="user.avatar" alt="" class="friend-comment-pic">
                    <div class="friend-comment-comment">
                        <a href="#" class="comment-author">{{user.name}} </a>
                        <span class="comment-content">
                        {{comment.content}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "CommentDetail",
    data(){
        return {
            user:[]
        }
    },
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
        created() {
        this.getUser()
    },
    methods:{
        async getUser(){
            try{
                const res = await axios.get(`http://localhost:3000/users/${this.comment.userId}`);
                this.user = res.data;
                console.log('user',res.data);
            }catch(e){
                console.log(e);
            }
        }
    },
}

</script>

<style lang="scss" scoped>
</style>