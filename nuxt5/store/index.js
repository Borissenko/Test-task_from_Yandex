import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      flights:[
        {name: 'Moscow - London',
         number: 1000,
         time: 11.55,
         status: 'Departures'
        },
        {name: ' London - Moscow',
         number: 2000,
         time: 13.45,
         status: 'Arrivals'
        },
        {name: 'Sochi - Moscow',
         number: 3000,
         time: 18.15,
         status: 'Arrivals'
        },
        {name: 'Moscow - Sochi',
         number: 4000,
         time: 10.01,
         status: 'Dylate'
        }
      ],
      currentTime: 10.27
    },
    getters: {
      filterArrivals(st){
        return st.flights.filter(d => d.status == 'Arrivals')
      },
      filterDepartures(st){
        return st.flights.filter(d => d.status == 'Departures')
      },
      filterDylate(st){
        return st.flights.filter(d => d.time < st.currentTime)
      }
    }
  });
};

export default createStore;
