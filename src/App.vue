<template>
  <div>
  
    <h1>Nombre de vues youtube</h1>
    <div v-if="visible.length === 10">Vous avez atteint {{ visibleK.substring(0,1) }} millard de vues.</div>
    <input 
     type="text"
     :disabled="visibleK.includes('Md')" 
    v-model="visible"
    @change="getNumberVueAsYoutube"
    >
    <button @click="visible = ''">Reset</button>
  <p>
    {{ visible ? visibleK:null }}
  </p>
  </div>
</template>

<script>


  export default {
    data(){
      return{
        visibleK:"",
        visible:"",
      }
    },
    methods: {
      login() {
        this.$auth0.loginWithRedirect();
      },
      logout() {
        this.$auth0.logout({ logoutParams: { returnTo: window.location.origin } });
      },
      getMillion(million){
        let lettreString = '';
        if(million.toString().length >= 7){
          lettreString  = `${million.toString().substring(0,1)} M`
        }
        if(million.toString().length >= 8){
          lettreString  = `${million.toString().substring(0,2)} M`
        }
        if(million.toString().length >= 9){
          lettreString  = `${million.toString().substring(0,3)} M`
        }
        return lettreString;
      },
      getMille(lettre){
        let lettreString = '';
        if(lettre.toString().length >= 4){
          lettreString = `${lettre.toString().substring(0,1)}K`
        } 
        if(lettre.toString().length >= 5){
          lettreString  = `${lettre.toString().substring(0,2)}K`
        }
        if(lettre.toString().length >= 6){
          lettreString  = `${lettre.toString().substring(0,3)}K`
        }
        return lettreString;
      },
      getMillard(millard){
        let lettreString = '';
        if(millard.toString().length >= 10){
          lettreString  = `${millard.toString().substring(0,1)}Md`
        }
        return lettreString;
      },
      getKilo(lettre){
        let lettreString = ''
        if(lettre.toString().length >= 4){
          lettreString  = this.getMille(lettre)
        }
        if(lettre.toString().length >= 7){
          lettreString  = this.getMillion(lettre)
        }
        if(lettre.toString().length >= 10){
          lettreString  = this.getMillard(lettre)
        }
        this.visibleK = 3 >= lettre.toString().length ? lettre:lettreString;
      },
    },
    watch:{
      visible(){
        const value=this.visible;
        this.getKilo(value)
        console.log("this.visibleK",this.visibleK)
      }
    }
  };
</script>