<template>
  <section class="container">
    <hr>
    <h2>Wellcome to Moscow !</h2>
    <hr>
    <h4>Current Time is {{$store.state.currentTime}}</h4>


    <button @click="all">All flights</button>
    <button @click="arriv">Arrivals</button>
    <button @click="dep">Departures</button>
    <button @click="dyl">Dylate</button>
    <hr>
    <h6>put the number of flight for searching</h6>
    <input type="text" v-model="number">
    <br> available numbers for searching are 1000, 2000, 3000, 4000

    <hr>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          Time
        </div>
        <div class="col-sm">
          Direction
        </div>
        <div class="col-sm">
          Number
        </div>
        <div class="col-sm">
          Status
        </div>
      </div>
    </div>

    <hr>
    <div class="container"  v-for='item in filtered' :key='item.number'>
      <div class="row">
        <div class="col-sm">
          {{item.time}}
        </div>
        <div class="col-sm">
          {{item.name}}
        </div>
        <div class="col-sm">
          {{item.number}}
        </div>
        <div class="col-sm">
          {{item.status}}
        </div>
      </div>
    </div>

 </section>
</template>

<script>
export default {
  data(){
   return {
     filtered: this.$store.state.flights,
     number: ''
   }
  },
  methods: {
      all(){
        this.filtered = this.$store.state.flights
      },
      arriv(){
        this.filtered = this.filterArrivals
      },
      dep(){
        this.filtered = this.filterDepartures
      },
      dyl(){
        this.filtered = this.filterDylate
      }
  },
  computed: {
    filterArrivals(){
      return this.$store.getters.filterArrivals
    },
    filterDepartures(){
      return this.$store.getters.filterDepartures
    },
    filterDylate(){
      return this.$store.getters.filterDylate
    }
  },
  watch: {
    number: function (valuem) {
      return this.filtered = this.$store.state.flights.filter( function (d) {
        return d.number == valuem
      })
    }
  }
}
</script>

<style>
</style>
