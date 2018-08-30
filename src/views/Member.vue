<template>
<div class="member">
    <NewContact />
</div>
</template>

<script>
import NewContact from "@/components/NewContact.vue";
import Test from "@/components/Test.vue";

export default {
  name: "member",
  components: {
    NewContact,
    Test
  }
};
</script>

