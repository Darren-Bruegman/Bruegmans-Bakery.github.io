function about_us() {
document.write("Oops! you haven't said anything about yourself or the business.")
}
function price_sheet() {
document.write("Opps! we don't have a price sheet.")
}
function contact_info() {
document.write("Phone #: (417) 770-7354" + "<br/>" + "Email Address: bruegmansbakery@gmail.com")
}
function debugMode() {
var a = prompt("enter your name")
var b = prompt("enter your password")
var c = prompt("enter your password again")
if (a == "Marlo") {
if (b && c == "cell7353") {
document.write('welcome Marlo')
}
}
else if (a == "Darren") {
if (b && c == "cell7353") {
document.write('welcome Darren'+"<br/>"+"ADD:"+"<br/>"+"<ul>"+"<li>facebook iframe</li>"+"<br/>"+"<li>messager link in contact info</li>"+"<br/>"+"<li>right-click menu with image, facebook and contact info tabs</li>")
}
}
}