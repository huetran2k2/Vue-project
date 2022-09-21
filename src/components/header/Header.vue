<template>
    <nav class="navbar">
        <div class="nav-left"><img class="logo" src="images/logo.png" alt="">
            <ul class="navlogo">
                <li><img src="images/notification.png"></li>
                <li><img src="images/inbox.png"></li>
                <li><img src="images/video.png"></li>
            </ul>
        </div>
        <div class="nav-right">
            <div class="search-box">
                <img src="images/search.png" alt="">
                <input type="text" placeholder="Search">
            </div>
            <div class="dropdown profile-image ">
                <button class="btn pbtn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false"><img src="images/profile-pic.png" alt="" >
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Option from './Option.vue';
export default {
    name: "Header",
    data() {
        return {
        }
    },
    methods: {

    },
    components: { Option }
}
</script>

<style lang="css" scoped>
div#submitForm input {
    background: url("../images/profile-pic.png") no-repeat scroll 0 0 transparent;
    color: #000000;
    cursor: pointer;
    font-weight: bold;
    height: 20px;
    padding-bottom: 2px;
    width: 75px;
}
.dropdown-toggle{
    border: none;
    outline: none;
}
</style>