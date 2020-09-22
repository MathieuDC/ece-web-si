const url = require('url');
const querry = require('query-string');

const serverHandle = function (req, res){
  const route = url.parse(req.url)
  const path = route.pathname
  const params = querry.parse(route.query)

  if (path === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("'/hello' takes a 'name' query parameter")
  }
  else if (path === '/hello' && 'name' in params) {
    res.writeHead(200, {'Content-Type': 'text/plain'})

    if(params.name === 'Mathieu'){
      res.write('Hi, I\'m Mathieu and I am 22')
    }else {
      res.write('Hello ' + params['name'])
    }
  }else{
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.write('Error 404 : Not found')
  }

  res.end();
}

module.exports = {
  serverHandle: serverHandle
}
