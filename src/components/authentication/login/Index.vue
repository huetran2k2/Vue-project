<template>
    <div class="box">
        <Logo></Logo>
        <div class="form-box">
            <FormInput></FormInput>
            <ButtonSignUp></ButtonSignUp>
        </div>
    </div>
</template>

<script>
import Logo from './logo.vue';
import FormInput from './FormInput.vue';
import ButtonSignUp from './ButtonSignUp.vue';


export default {
    components: { Logo, FormInput, ButtonSignUp }
}
</script>

<style lang="css" scoped>
body {
    padding: 0;
    margin: 0;
    background: #f0f2f5;
    font-family: Arial, sans-serif;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}
.form-box {
    width: 350px;
    padding: 15px;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    margin-left: 60px;
    box-shadow: 0px 2px 10px 1px rgba(71, 71, 71, 0.52);
}




</style>