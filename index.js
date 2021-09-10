const http = require('http');

const port = 3000

const server = http.createServer((request, response) => {
	if(request.url == '/login'){
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.end('Welcome To LogIn Page')
		}
		

	
	 if(request.url == '/register'){
		response.writeHead(404, {'Content-Type': 'text/plain'})
		}
		response.end('Im sorry the page you are looking for cannot be found')

	});
server.listen(port);
console.log(`Server now accessible at localhost: ${port}`);