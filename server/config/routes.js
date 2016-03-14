var wolvesController = require('../controllers/wolves.js')

module.exports = function Routes(app,Wolves){
  app.get('/', function(req,res){
    wolvesController.show_all(req,res)
  })
  
  app.get('/wolves/new', function(req,res){
    wolvesController.new_wolf(req,res)
  })

  app.get('/wolves/:id', function(req,res){
    wolvesController.show_one(req,res)
  })

  app.post('/wolves', function(req,res){
    wolvesController.post_new_wolf(req,res)
  })

  app.get('/wolves/:id/edit', function (req,res){
    wolvesController.edit_wolf(req,res)
  })

  app.post('/wolves/:id', function(req,res){
    wolvesController.post_edit(req,res)
  })

  app.get('/wolves/:id/destroy', function(req,res){
    wolvesController.delete_wolf(req,res)
  })
}
