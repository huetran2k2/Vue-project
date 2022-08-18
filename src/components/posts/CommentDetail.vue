<template>
    <div class="comment-session">
        <div class="post-comment">
            <div class="list">
                <div class="user">
                    <div class="user-image">
                        <img src="@/assets/images/profile-pic.png" alt="">
                    </div>
                    <div class="user-meta">
                        <div class="name">Ramki</div>
                        <div class="day">10 days ago</div>
                    </div>
                </div>
                <div class="comment-post">{{comment.content }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommentDetail",
    data() {
        return {
        }

    },
    props: {
        comment: {
            type: Object,
            required: true
        }
    },

    computed: {
        id() {
            return this.$route.query.id || null
        }
    },

    mounted() {
        console.log('id', this.id)
    },
}
</script>

<style lang="scss" scoped>
</style>