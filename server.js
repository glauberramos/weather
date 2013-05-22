var http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs")
port = process.argv[2] || 3000;
 
http.createServer(function(request, response) {
	 
	var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);
  
	path.exists(filename, function(exists) {
		if(!exists) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.write("404 Not Found\n");
			response.end();
			return;
		}
 
		if (fs.statSync(filename).isDirectory()) filename += '/index.html';
 
		fs.readFile(filename, "binary", function(err, file) {
			if(err) {        
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.write(err + "\n");
				response.end();
				return;
			}
 
			response.writeHead(200);
			response.write(file, "binary");
			response.end();
		});
	});
}).listen(parseInt(port, 10));

var os = require('os')

var interfaces = os.networkInterfaces();
var addresses = [];
for (k in interfaces) {
	for (k2 in interfaces[k]) {
		var address = interfaces[k][k2];
        if (address.family == 'IPv4' && !address.internal) {
			addresses.push(address.address)
        }
    }
}
 
console.log("Static file server running at\n  => http://" + addresses[0] + ":" + port + "/\nCTRL + C to shutdown");
