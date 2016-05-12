new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: []
  },
  methods: {
    send: function() {
      var nickName = this.newTodo.trim()
      var postData = {
        Fields: 'Id,NickName',
        NickName: nickName
      }
      this.todos = []
      var that = this
      function show(data) {
        data.Result.map(function (x) {
          that.todos.push({id: 'http://m.aiyaopai.com/#/grapherDetail/'+x.Id, name: x.NickName})
        })
      }
      $.post('http://api.aiyaopai.com/?api=Photographer.Search', postData, function(response){
        if (response) {
          show(response)
        }
      })
    }
  }
})
