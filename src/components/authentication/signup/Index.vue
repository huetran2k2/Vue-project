<template>
    <!DOCTYPE html>
    <html>

    <head>
        <title>Facebook - login or signup</title>
        <link rel="stylesheet" type="text/css" href="style.css" />
    </head>

    <body>
        <Header></Header>
        <section>
            <LogoBody></LogoBody>
            <FormSignUp></FormSignUp>
        </section>
    </body>

    </html>
</template>

<script>
import Header from './Header.vue';
import LogoBody from './LogoBody.vue';
import FormSignUp from './FormSignUp.vue';
export default { components: { Header, LogoBody, FormSignUp } };
</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
}


section {
    height: 614px;
    width: 100%;
    top: 80px;
    background: linear-gradient(#fdfdfe, #eff1f6, #e3e6f0, #e1e5f0, #d6dbea);
    font-family: verdana;
}



</style>
