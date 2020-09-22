const http = require('http');
const handles = require('./handles')

const app = http.createServer(handles.serverHandle);

app.listen(3000, () => console.log("Listen on port 3000"));
