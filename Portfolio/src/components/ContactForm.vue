<script setup>
import emailjs from 'emailjs-com';
import { ref } from 'vue';

const form = ref(null);
const inputFieldReset = ref(null);
const formSent = ref(null)
const showForm = ref(true);
const scrollPosition = ref(0);

const mailData = {
    SERVICE_ID: 'service_8g4fnzo',
    TEMPLATE_ID: 'template_9vbjw1a',
    PUBLIC_KEY: '-bWoGd2tE8SGlNllE',
}

function scrollToHeight(height) {
    setTimeout(() => {
        const scrollingElement = document.scrollingElement || document.body;
        scrollingElement.scrollTop = height;
    }, 100);
}

const sendEmail = () => {
    emailjs.sendForm(mailData.SERVICE_ID, mailData.TEMPLATE_ID, form.value, mailData.PUBLIC_KEY)
        .then(() => {
            alert('Message sent!');
            inputFieldReset.value = " ";
            scrollPosition.value = 0;
            scrollToHeight(scrollPosition.value);
            const formContainer = document.querySelector('.form-container');
            if (formContainer) {
                formContainer.classList.add('formFadeOut');
            }
        })
        .catch((error) => {
            alert('Message not sent', error);
        });
};

const handleForm = () => {
    formSent.value = !formSent.value;
    showForm.value = !showForm.value;
}
</script>

<template>
    <div class="form-container">
        <form class="form" ref="form" @submit.prevent="sendEmail">
            <div class="form-inputs">
                <div class="form-left">
                    <div class="input-container ic2">
                        <input id="from_name" class="input" type="text" name="user_name" placeholder=" "
                            :value="inputFieldReset" required />
                        <div class="cut cut-short"></div>
                        <label for="from_name" class="placeholder">Name</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="email" class="input" type="text" name="user_email" placeholder=" "
                            :value="inputFieldReset" required />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">E-Mail</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="subject" class="input" type="text" name="subject" placeholder=" "
                            :value="inputFieldReset" required />
                        <div class="cut cut-mid"></div>
                        <label for="subject" class="placeholder">Subject</label>
                    </div>
                </div>
                <div class="form-right">
                    <div class="input-container ic2">
                        <textarea id="message" class="input" type="text" name="message" placeholder=" "
                            :value="inputFieldReset" required />
                        <div class="cut"></div>
                        <label for="message" class="placeholder message">Message</label>
                    </div>
                </div>
            </div>
            <div class="form-submit">
                <input class="submit" type="submit" name="send" value="Send" />
            </div>
        </form>
    </div>
</template> 