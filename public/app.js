new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: []
  },
  methods: {
    send: function() {
      let postData = {
        Fields: 'Id,NickName',
        NickName: this.newTodo.trim()
      }
      this.todos = []
      const show = data => (
        data.Result.map(x => (
          this.todos.push({id: 'http://m.aiyaopai.com/#/grapherDetail/'+x.Id, name: x.NickName})
        ))
      )
      $.post('http://api.aiyaopai.com/?api=Photographer.Search', postData, function(response){
        if (response) {
          show(response)
        }
      })
    }
  }
})
