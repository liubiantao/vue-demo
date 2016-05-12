new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [],
    showError: false
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
        if (data.Result.length === 0 ){
          that.showError = true
        } else {
          that.showError = false
          data.Result.map(function (x) {
            that.todos.push({id: 'http://m.aiyaopai.com/#/grapherDetail/'+x.Id, name: x.NickName})
          })
        }
      }
      $.post('http://api.aiyaopai.com/?api=Photographer.Search', postData, function(response){
        if (response) {
          show(response)
        }
      })
    }
  }
})
