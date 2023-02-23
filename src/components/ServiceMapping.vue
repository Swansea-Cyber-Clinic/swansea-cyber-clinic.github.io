<template>
  <div>
    <div class="form-controls">
      <span>Category: </span>
      <select id="category-select" v-model="selectedCategory">
        <option disabled value="">Please select one</option>
        <option v-for="item in categories" :key="item.description" :value="item.name">{{item.description}}</option>
      </select>
      <button @click="filterCategory()">Filter</button>
    </div>
  </div>

  <div>
    <div class="form-controls">
      <span>Police Force Area: </span>
      <select id="police_force-select" v-model="selectedPoliceForce">
        <option disabled value="">Please select one</option>
        <option v-for="item in policeForces" :key="item.description" :value="item.name">{{item.description}}</option>
      </select>
      <button @click="filterPoliceForce()">Filter</button>
    </div>
  </div>

  <div>
    <div class="form-controls">
      <span>Country: </span>
      <select id="country-select" v-model="selectedCountry">
        <option disabled value="">Please select one</option>
        <option v-for="item in countries" :key="item" :value="item">{{item}}</option>
      </select>
      <button @click="filterCountry()">Filter</button>
    </div>
  </div>

  <div>
    <button @click="resetSearch()">Reset search</button>
  </div>

  <p>Selected filters: {{ this.currentSearchFilters }}</p>

  <OrganisationBox
    v-for="organisation in result"
    v-bind:key="organisation.org_id"
    v-bind:organisation="organisation" />
</template>

<script>
  import OrganisationBox from './OrganisationBox.vue'
  import ism from '../ism.json'
  import categories from '../category.json'
  import policeForces from '../police_force.json'
  import countries from '../country.json'

  export default {
    name: 'ServiceMapping',
    components: {
      OrganisationBox
    },
    data() {
      return {
        allOrganisations: ism,
        result: ism,
        categories: categories,
        policeForces: policeForces,
        countries: countries,
        selectedCategory: null,
        currentSearchFilters: [],
      }
    },
    mounted() {

    },
    methods: {
      filterCategory() {
        var cat = document.getElementById('category-select').value;
        this.result = this.result.filter(function(item) {
          return item.categories.some(category => category.name == cat)
        })
        this.currentSearchFilters.push(`category: ${cat}`)
      },
      filterPoliceForce() {
        var pf = document.getElementById('police_force-select').value;
        this.result = this.result.filter(function(item) {
          return item.police_forces.some(police_force => police_force.name == pf)
        })
        this.currentSearchFilters.push(`policeForce: ${pf}`)
      },
      filterCountry() {
        var cty = document.getElementById('country-select').value;
        console.log(cty)
        this.result = this.result.filter(function(item) {
          return item.countries.some(country => country.name == cty)
        })
        this.currentSearchFilters.push(`country: ${cty}`)
      },
      resetSearch() {
        this.result = this.allOrganisations;
        this.currentSearchFilters = [];
      }
    }
  }
</script>