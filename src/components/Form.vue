<template>
    <div class="this_form">
        <form @submit.prevent="saveContact">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="First Name" v-model="firstname" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Context</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="lastname" required>
        </div>
      </div>
      <div class="field">
        <label class="label">URL</label>
        <div class="control">
          <input class="input" type="url" placeholder="Email Address" v-model="emailaddress" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Date</label>
        <div class="control">
          <input class="input" type="text" placeholder="Phone Number" v-model="phonenumber" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>
    </form>
    </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      title: null,
      context: null,
      url: null,
      date: null,
      timestamp: null,
      selector: 1
    };
  },
  methods: {
    saveContact() {
      db
        .collection("contacts")
        .add({
          firstname: this.firstname,
          lastname: this.lastname,
          emailaddress: this.emailaddress,
          phonenumber: this.phonenumber,
          slug: this.generateUUID()
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    generateUUID() {
      let d = new Date().getTime();
      let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          let r = ((d + Math.random() * 16) % 16) | 0;
          d = Math.floor(d / 16);
          return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    }
  }
};
</script>

<style scoped>
section {
  height: 100vh;
}
h1 {
  font-size: 30px;
  margin: 30px 0;
}
.input {
  height: 40px;
}
</style>
