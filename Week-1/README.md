#Exercise1.1:

when we enter URL(Uniform Resource Locator) browser checks cache for DNS(Domain Name System) entry find the correspondind ip address of website.
It looks for following cache - 1.Browser Cache 2.Operating Systems Cache 3.Router Cache 4.ISP cache
If browser not found in cache, then ISP(Internet Service Provider) DNS server initiates a DNS query to find ip address of server that hots the domain name.
Browser initiates a TCP(Transfer Control Protocol) connection with the server using syschronize and acknowledge message.
Browser send an HTTP request to web server. GET or POST request.
Server on the host computer handles that request and sends back a response. It assembles a response in some format like JSON, XML and HTML.
Server sends out an HTTP response along with the status of response.
browser display HTML content.

Main functionality of the Browser-
A web browser takes you anywhere on the internet. It retrieves information other parts of the web and display on desktop, mobile screen. The information is transferred using Hypertext Transfer protocol, which defines how text, image, video are transmitted on the web.

Components of Browser-

1. User Interfase - Everthing we see in web browser like address bar, back and forward button, menu and bookmarking and many other option to interact with browser
2. Browser engine - Browser engine is bridge to connects the UI and rendering engine.
3. Rendring engine - A rendering engine is program that draw text and images on the screen. The engine draws structured text from a documents (HTML) and formats it properly besed on the given style declarations (CSS). examples of engine: Chrome & Opera use blink, Internet Explorer Trident, Safari use webkit, Firefox use Gecko
4. Networking - It retrieves the URLs by using internet protocols like HTTP or FTP. It is responsible for maintaining all aspects of Internet communication and security.
5. JavaScript interpreter - JavaScript Interpreter translates and executes the JavaScript code, Which is included in website. The traslated results are sent to the rendering engine to display result on the screen.
6. UI backend - It is used to draw basic combo boxes and Windows (widgets). It specifies a generic interface, which is not platform-specific.
7. Data persistance - The data storage is persistence layer that is used by the browser to store all sort of information locally, like cookies. It is a database stored on the local drive of our computer where browser is installed.

Rendering Engine:
Once a user request a particular document, the rendering engine start fetching the content of the requested document. This is done via the networking layer.
The basic flow of the rendering engine :-
Parsing HTML to construct the DOM tree -> Render tree construction -> Layout of the render tree -> Painting the render Tree

-> The HTML elements are the converted into DOM nodes to form a DOM tree
-> Simultaneously, the browser also creates a render tree. The render tree ensures that the content is displayed in the desired order.
-> Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire Process of calculatting values for evaluating the desired position is called a layout process.
-> The final step is to print the screen, where the render tree is traversed, and the renderer's paint() method is invoked, which paints each node on the screen using the UI backend layer

Script Processors -
The script processor parses each incoming document’s JSON source fields into a set of maps, lists, and primitives. To access these fields with a Painless script, use the map access operator: ctx['my-field']. You can also use the shorthand ctx.<my-field> syntax.
