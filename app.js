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
    addNewNote() {
      if (this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(idx) {
      this.notes.splice(idx, 1)
    },
    toUpperCase(item){
      return item.toUpperCase()
    }
  },
  computed: {
    doubleCountComputed(){
      return this.notes.length * 2
    }
  },
  watch:{
    inputValue(value){
      if (value.length > 50){
        this.inputValue = ''
      }
    }
  }
}

app = Vue.createApp(App).mount('#app')
