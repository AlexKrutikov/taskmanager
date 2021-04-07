const App = {
  data() {
    return {
<<<<<<< HEAD
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    inputChangeHandler() {
      this.inputValue = event.target.value
=======
      title: 'Список заметок'
>>>>>>> f0bd4c95cfab9d782c2bcbbc0795ce6652a744b6
    }
  }
}

app = Vue.createApp(App).mount('#app')
