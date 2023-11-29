<script setup>
import emailjs from 'emailjs-com';
import {ref} from 'vue';

const form = ref(null);
const inputFieldReset = ref(null);

const mailData = {
    SERVICE_ID: 'service_8g4fnzo',
    TEMPLATE_ID: 'template_9vbjw1a',
    PUBLIC_KEY: '-bWoGd2tE8SGlNllE',
}
    

const sendMail = () => {
  emailjs.sendForm(mailData.SERVICE_ID, mailData.TEMPLATE_ID , form.value, mailData.PUBLIC_KEY)
    .then(() => {
      alert('Message sent!');
      inputFieldReset.value = " ";
    })
    .catch((error) => {
      alert('Message not sent', error);
    });
};
</script>

<template>
        <div class="form-container">
            <form class="form" ref="form" @submit.prevent="sendMail">
                <div class="form-group">
                    <input name="from_name" placeholder="Name" type="text" :value="inputFieldReset" required>
                </div>
                <div class="form-group">
                    <input name="email" placeholder="E-Mail" type="email" :value="inputFieldReset" required>
                </div>
                <div class="form-group">
                    <input name="subject" placeholder="Subject" type="text" :value="inputFieldReset" required>
                </div>
                <div class="form-group">
                    <textarea class="text-area" name="message" placeholder="Message" type="text" :value="inputFieldReset"
                        required></textarea>
                </div>
                <div class="form-group">
                    <input class="submit" type="submit" name="send" />
                </div>
            </form>
        </div>
</template> 