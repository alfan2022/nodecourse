const http = require ('http')


const server = http.createServer((req,res)=> {
  if(req.url=='/home')
   {
    res.statusCode = 200
    res.write('Welcome from home')
   }
  else if(req.url=='/about')
   {
    res.statusCode = 200
    res.write('Welcome from about')
   }
  else if(req.url=='/contact')
  {
    res.statusCode = 200
    res.write('Welcome from contact')
  }
 else
 {
  res.statusCode = 404
res.write('Not found') 
 }
  res.end()
})


server.listen(3300,() =>{
    console.log('Server is running in port 3300')
})