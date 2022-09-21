<template>
    <div>
        <nav class="navbar">
            <img class="logo" src="@/assets/images/login/fb.png" />
            <form class="login_form">
                <div class="email">
                    <div class="font">Email or Phone</div>
                    <input type="text" name="" />
                </div>
                <div class="password">
                    <div class="font">Password</div>
                    <input type="password" name="" />
                </div>
                <button class="login_btn">Login</button>
            </form>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.navbar {
    height: 80px;
    width: 100%;
    background: linear-gradient(#48649f, #3b5998, #3b5998);
    border-bottom: 1px solid #253a69;
}

.logo {
    position: absolute;
    height: 63px;
    width: 190px;
    left: 13%;
    padding-top: 15px;
}

.login_form {
    display: flex;
    position: absolute;
    font-family: verdana;
    left: 58%;
    top: 15px;
}

.login_form .email,
.login_form .password {
    padding-left: 10px;
}

.login_form .email .font,
.login_form .password .font {
    font-size: 13px;
    padding-bottom: 4px;
    color: white;
}

.login_form .email input,
.login_form .password input {
    height: 23px;
    width: 150px;
    padding-left: 5px;
    border: 1px solid black;
    outline: none;
}

.login_form button {
    height: 30px;
    width: 67px;
    font-weight: 600;
    margin-left: 14px;
    margin-top: 20px;
    border-radius: 4px;
    outline: none;
    color: white;
    cursor: pointer;
    background: #2d5bba;
    border: 1px solid #224285;
}

.login_form button:hover {
    background: #3b5998;
}
</style>