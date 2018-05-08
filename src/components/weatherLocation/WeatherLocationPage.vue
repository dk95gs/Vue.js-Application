<template>
  <div class="row container-fluid">
    <div class="page-header">
      <h1>Weather</h1>
      <h3>Search by city: </h3>
      <input v-model="city"  type="text">
      <button class="btn btn-primary" @click="getWeatherData()">Get weather</button>
    </div>
      <div class="row">
        <img :src="iconUrl" alt="">
        <p>{{text}}</p>
      </div>
      <div class="row">
        <div class="column3">
          <h2> {{city2}}</h2>
        </div>
        <div class="column3">
          <h2> {{prov}}</h2>
        </div>
        <div class="column3">
          <h2> {{country}}</h2>
        </div>
      </div>
      <div class="row">
        <div id="map"style="width:100%;height:400px;">

        </div>
      </div>

    <p></p>

  </div>
</template>

<script>
export default {
  data: function(){
    return {
      results:'',
      city:'guelph',
      prov: '',
      country:'',
      city2: '',
      iconUrl:'',
      text:''
    };
  },
  methods: {
    getWeatherData(){
      this.axios.get("https://api.apixu.com/v1/current.json?key=98af7291b63744a3a1830307180805&q="+this.city).then((response) => {
        console.log(response.data);
        this.results = response.data;
        this.prov = this.results.location.region;
        this.city2 = this.results.location.name;
        this.country = this.results.location.country;
        this.iconUrl = this.results.current.condition.icon;
        this.text = this.results.current.condition.text;
        var myLatLng = {lat: this.results.location.lat, lng: this.results.location.lon};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: this.text
        });
      })
    }
  }
}
</script>

<style scoped>
  .column3 {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }
</style>
