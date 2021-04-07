const App = {
  data() {
    return {
      counter: 0,
      title: 'Счетчик'
    }
  }
}

app = Vue.createApp(App).mount('#app')
