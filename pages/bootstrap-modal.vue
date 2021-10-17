<template>
  <div class="wrap-ctn">

    <b-card class="card-pres">
      <h4 style="margin-bottom: 35px; color: #2c3e50">Modal Alert</h4>
      <button class="btn btn-link" @click="openAlert = !openAlert">Ouvrir</button>
    </b-card>
    <b-card class="card-pres">
      <h4 style="margin-bottom: 35px; color: #2c3e50">Modal Confirm</h4>
      <button class="btn btn-link" @click="openConfirm = !openConfirm">Ouvrir</button>
    </b-card>
    <b-card class="card-pres">
      <h4 style="margin-bottom: 35px; color: #2c3e50">Modal Prompt</h4>
      <ul>
        <li v-for="n in data" v-if="n.value">{{n.value}}</li>
      </ul>
      <button class="btn btn-link" @click="openPrompt = !openPrompt">Ouvrir</button>
    </b-card>


    <Modal v-model="openAlert" title="Bienvenue sur Dibodev"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sem neque, vulputate ut arcu nec, tempor dignissim felis. Integer commodo auctor erat,
                 et luctus justo laoreet eget. Mauris imperdiet elit eget ex vulputate, in cursus lectus sollicitudin. Pellenac"
    />
    <Modal v-model="openConfirm" title="Voulez vous confirmer ?" action="confirm" @handleOk="handleConfirmOk"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent sem neque, vulputate ut arcu nec, tempor dignissim felis. Integer commodo auctor erat,
                 et luctus justo laoreet eget. Mauris imperdiet elit eget ex vulputate, in cursus lectus sollicitudin. Pellenac"
    />
    <Modal v-model="openPrompt" :data="data" title="Bienvenue, veuillez indiquer votre nom et prénom" action="prompt" @handleOk="handlePromptOk"/>
  </div>
</template>


<script>
import Modal from "@/components/Modal/Modal";

export default {
  components: {Modal},
  data() {
    return {
      openAlert: false,
      openConfirm: false,
      openPrompt: false,
      data: [
        {
          placeholder: 'firstname',
          value: '',
        },
        {
          placeholder: 'lastname',
          value: '',
        }
      ]
    }
  },
  methods: {
    handleConfirmOk(){
      this.$toasted.global.success({
        message: `
          <div style="display: flex; flex-direction: column">
            <h4 class="toasted-title">Message de validation</h4>
         <p class="toasted-content">Vous avez confirmer le modal !</p>
    </div>`
      });
    },
    handlePromptOk(){
      let message = '';
      this.data.forEach(e => {
        message += e.placeholder + ': ' + e.value + '<br>'
      });
      this.$toasted.global.success({
        message: `
          <div style="display: flex; flex-direction: column">
            <h4 class="toasted-title">Message de confirmation</h4>
         <p class="toasted-content">${message}</p>
    </div>`
      });
      this.data.forEach(e => e.value = '');
    }
  }
}
</script>


<style lang="scss" scoped>
.wrap-ctn {
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card-pres {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
  margin: 20px;

  & .card-body {
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
