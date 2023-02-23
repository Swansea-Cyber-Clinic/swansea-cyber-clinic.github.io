<template>
  <div class="info-box">
    <h3>
      {{ organisation.name }}
    </h3>
    <p>
      {{ organisation.description }}
    </p>
    <ul class="comma-list" v-if="organisation.address_1">
      <li>{{ organisation.address_1 }}</li>
      <li v-if="organisation.address_2"> {{ organisation.address_2 }}</li>
      <li v-if="organisation.city"> {{ organisation.city }}</li>
      <li v-if="organisation.postcode"> {{ organisation.postcode }}</li>
    </ul>
    <p v-if="organisation.web" v-bind:href="organisation.web">
      <a v-bind:href="organisation.web">
      Website</a>
    </p>
    <div v-if="organisation.email_office || organisation.email_help">
      <p class="same-line" v-if="organisation.email_office">
      <a v-bind:href="`mailto:${organisation.email_office}`" class="is-small">
      Email (office)</a> 
      </p>
      <p class="same-line" v-if="organisation.email_help && organisation.email_office"> / </p>
      <p class="same-line" v-if="organisation.email_help">
      <a v-bind:href="`mailto:${organisation.email_help}`" class="is-small">
      Email (helpline)</a>
    </p>
    </div>
    <div v-if="organisation.tel_office || organisation.tel_help">
      <p class="same-line" v-if="organisation.tel_office">
      {{ organisation.tel_office }} (office)
      </p>
      <p class="same-line" v-if="organisation.tel_help && organisation.tel_office"> / </p>
      <p class="same-line" v-if="organisation.tel_help">
      {{ organisation.tel_help }} (helpline)
    </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OrganisationBox',
    props: {
      organisation: Object
    }
  }
</script>