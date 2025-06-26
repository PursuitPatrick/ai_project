from http.server import HTTPServer, SimpleHTTPRequestHandler
import os
import cgi

class UploadHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/upload':
            # Parse the form data
            form = cgi.FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={
                    'REQUEST_METHOD': 'POST',
                    'CONTENT_TYPE': self.headers['Content-Type'],
                }
            )

            # Get the file data
            fileitem = form['file']
            
            # Check if a file was uploaded
            if fileitem.filename:
                # Remove unwanted characters from filename
                fn = os.path.basename(fileitem.filename)
                
                # Write the file
                with open(fn, 'wb') as f:
                    f.write(fileitem.file.read())
                
                # Send response
                self.send_response(200)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(b'File uploaded successfully')
            else:
                self.send_response(400)
                self.send_header('Content-type', 'text/plain')
                self.end_headers()
                self.wfile.write(b'No file was uploaded')
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'404 Not Found')

    def do_GET(self):
        # Handle normal GET requests (serving files)
        SimpleHTTPRequestHandler.do_GET(self)

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, UploadHandler)
    print('Server running on port 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server() 