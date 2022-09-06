<template>
    <div class="signup_body">
        <p class="acc_crt">Create an account</p>
        <div class="signup_form">
            <div>
                <input class="firstname" type="text" name="" placeholder="First name *" v-model="form.firstName" />
                <input class="lastname" type="text" name="" placeholder="Last name *" v-model="form.lastName" />
                <input class="email" type="email" name="" placeholder="Email *" v-model="form.email" />
                <input class="password" type="password" name="" placeholder="Password *" v-model="form.password" />
                <input class="password2" type="password" name="" placeholder="Confirm password *"
                    v-model="form.confirmPassword" />
            </div>
            <div class="dob">
                <p class="birthday">Birthday *</p>
                <Datepicker v-model="form.dob" :format="format" />
                <p class="brth_hint">
                    <a href="#">Why do i need to provide my date of birth?</a>
                </p>
            </div>
            <div class="gender-wrapper">
                <div class="gender-item">
                    <p class="font gender-label">Male</p>
                    <input type="radio" name="gender" value="male" v-model="form.gender"/>
                </div>
                <div class="gender-item">

                    <p class="font gender-label">Female</p>
                    <input type="radio" name="gender" value="female" v-model="form.gender"/>
                </div>
            </div>
            <p class="error-message">{{ errorMessage }}</p>

            <p class="agreement">
                By clicking Sign Up, you agree to our
                <a href="#">Terms, Data Policy and Cookies Policy.</a> You may receive SMS
                Notifications from us and can opt out xany time.
            </p>
            <button class="signup" type="button" @click="sigUp()">Sign Up</button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';

export default {
    data() {
        return {
            name: "SignUp",
            format: 'MM/dd/yyyy',
            form: {
                id: null,
                firstName: "",
                lastName: "",
                avatar: "https://i.pinimg.com/236x/08/44/c5/0844c5eb33e92d674e6ad124bac4903a.jpg",
                email: "",
                password: "",
                confirmPassword: "",
                dob: ref(new Date()),
                gender: "",
                createdAt: "",
                updatedAt: "",
            },
            errorMessage: ""
        };
    },
    components: { Datepicker },
    methods: {
        async sigUp() {
            if (this.checkValidation()) {
                if (this.form.password === this.form.confirmPassword) {
                    let date = new Date();
                    this.form.createdAt = date.toDateString("en-US");
                    this.form.updatedAt = date.toDateString("en-US");
                    const res = await axios.post("http://localhost:3000/signup", this.form);
                    this.errorMessage = ""
                    if (res.data.accessToken) {
                        this.$router.push('/login')
                    }
                }
                else {
                    this.errorMessage = "Confirm password was not match"
                }
            } else {
                this.errorMessage = "Enter required inputs"
            }
        },
        checkValidation() {
            if (
                this.form.firstName &&
                this.form.lastName &&
                this.form.email &&
                this.form.gender &&
                this.form.password
            ) {
                return true
            }
            return false
        }
    },
};
</script>

<style lang="css" scoped>
.signup_body {
    font-family: arial;
    position: absolute;
    left: 57%;
}

.signup_body .acc_crt {
    font-size: 40px;
    margin: 25px 0;
}

.signup_body .free_hint {
    margin: -20px 5px;
    font-size: 18px;
}

.gender-wrapper {
    display: flex;
}

.gender-item {
    margin-right: 15px;
    display: inline-flex;
    align-items: baseline;
}

.signup_body .signup_form .lastname {
    margin-left: 15px;
}

.signup_body .signup_form .email,
.signup_body .signup_form .password,
.signup_body .signup_form .password2 {
    margin-top: 20px;
    width: 410px;
}

.signup_body .signup_form .birthday {
    margin-top: 15px;
    font-size: 20px;
    font-weight: bold;
    color: grey;
}

.signup_body .signup_form .birth_date {
    margin-top: 5px;
}

.signup_body .signup_form .month,
.signup_body .signup_form .day,
.signup_body .signup_form .year {
    height: 28px;
}

.signup_body .signup_form .day,
.signup_body .signup_form .year {
    margin-left: -5px;
}

.signup_body .signup_form .brth_hint {
    font-size: 11px;
    padding-left: 183px;
    margin-top: -23px;
}

.signup_body .signup_form a {
    text-decoration: none;
}

.signup_body .signup_form a:hover {
    text-decoration: underline;
}
.gender-item .gender-label {
    margin-right: 20px;
}

.signup_body .signup_form .agreement {
    margin-top: 15px;
    font-size: 12px;
    width: 350px;
    color: grey;
}

.signup_body .signup_form .signup {
    margin-top: 20px;
    height: 38px;
    width: 170px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid #006117;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    background: linear-gradient(#6fad5a, #66a150, #60974c);
}

.signup_body .signup_form .signup:hover {
    background: linear-gradient(#74b85e, #598b45);
}

.dob {
    width: 410px;
}

.error-message {
    color: red;
}
</style>
