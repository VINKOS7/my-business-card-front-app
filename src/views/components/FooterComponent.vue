<template>
    <div class="footer">
        <div>@ 2021-{{ new Date(Date.now()).getFullYear() }} : Науман Константин</div>
        <div class="social-links">
            <div href="#" class="social-link">
                <img src="../../assets/icons/telegram-logo.png">
                <div>telegram</div>
            </div>  
            <div href="#" class="social-link">
                <img src="../../assets/icons/WhatsApp-logo.png">
                <div>whatsapp</div>
            </div>  
        </div>
        
    </div>
</template>

<script setup lang="ts">      
    
</script>

<style lang="scss">
    .footer {
        background: linear-gradient(-2deg,rgb(66, 83, 180), rgb(37, 21, 82)) border-box;
        height: 5vh;
        width: 100vw;
        border-top: solid 1px rgb(255, 255, 255);
        display: inline-flex;
    }

    .social-link {
        $size: 20px;  

        margin-top: 10px;
        display: inline-flex;

        & > img {
            max-width: $size;
            max-height: $size;
            margin-top: 3px;
            margin-inline: 8px;
        }
    }

    .social-links {
        display: inline-flex;
        margin-left: auto; 
        margin-right: 10px;
    }
</style>