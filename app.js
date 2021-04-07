const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    inputChangeHandler() {
      this.inputValue = event.target.value
    }
  }
}

app = Vue.createApp(App).mount('#app')
