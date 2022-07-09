<template>
    <div class="view-login">
        <h1>เข้าสู่ห้องพูดคุย</h1>
        <label for="username">ยินดีต้อนรับสู้ห้องพูดคุย</label>
        <br />
        <input  type="text" v-model="userName" placeholder="กรอกชื่อใช้งาน" />
        <br />
        <button @click="updateUsername" class="submit-btn">เริ่มพูดคุย</button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return{
                userName: "",
            };
        },
    
    methods: {
        updateUsername() {
            this.$emit("updateUsername",this.userName);
        }
    }
    }
</script>

<style scoped>

.view-login {
    margin:auto;
    max-width: 500px;
    text-align:center;
    
    
}
h1 {
    font-size:  24px; 
  font-weight:  600; 
  color:  #000; 
  opacity:  .85; 
}
.submit-btn {
			background-color: rgba(0, 111, 208, 0.4);
			color: rgba(256,256,256,0.7);
			border:0;
			border-radius: 15px;
			display: block;
			margin: 15px auto; 
			padding: 15px 45px;
			width: 100%;
			font-size: 13px;
			font-weight: bold;
			cursor: pointer;
			opacity: 1;
			visibility: visible;
}
.submit-btn:hover {
				transition: all .3s ease;
				background-color: rgba(7, 181, 204, 0.8);
			}
input {
    border: 0;
    outline: none;
    box-shadow: none;
    display: block;
    height: 30px;
    line-height: 30px;
    padding: 8px 15px;
    border-bottom: 1px solid #eee;
    width: 100%;
    font-size: 12px;
}
</style>