//function that uses a while loop to display web languages
function languages() {
var languages = ["HTML", "CSS", "JavaScript"];
var iterator = 0;
var nodeUL = document.createElement("ul");
while (iterator < 3) {
var nodeLI = document.createElement("li");
var text = document.createTextNode(languages[iterator]);
nodeLI.appendChild(text);
nodeUL.appendChild(nodeLI);
document.getElementById("list").appendChild(nodeUL);
iterator++;
 }
}

//change image function
function original(){
 document.getElementById("image").src="img/matrix.jpg";
}
function newImage(){
 document.getElementById("image").src="img/matrix2.jpg"; //https://pixabay.com/en/matrix-code-computer-pc-data-356024/
}

//function that uses a for loop to display my areas of interest
function interests() {
var interests = ["Front-End Web Development", "Software Development", "Web Design", "Open Source"];
var iterator;
var nodeUL = document.createElement("ul");
for (iterator=0; iterator < interests.length; iterator++) {
var nodeLI = document.createElement("li");
var text = document.createTextNode(interests[iterator]);
nodeLI.appendChild(text);
nodeUL.appendChild(nodeLI);
document.getElementById("interest").appendChild(nodeUL);
 }
}

//function that displays the date and time when the page loads
function date(){
var date = new Date();
document.getElementById("time").innerHTML = date;
}

//function that displays server side languages
function serverside() {
 var userinput;
 var output;
 userinput = document.getElementById("in").value;
	if (userinput == "Yes" || userinput == "yes")
	{output = "Check out Languages like PHP, Python, and Ruby if you would like to learn more!";}
	else if (userinput == "No" || userinput =="no")
	{output = "Thank you for reading my blog post on front end web development!" ;}
	else {
		output="Invalid input. Please enter either 'yes' or 'no'"
	}
 document.getElementById("user").innerHTML = output;
 }
 
 //function that displays an alert message
function contact() {
    alert("Once again thank you for visiting my page! Please feel free to contact me with any comments or concerns.");
}

//function that opens a web page in a new tab
function url() {
        window.open('http://musicmorningpeople.com', '_blank');
    }

//function that allows user to rate my blog	
function rating() {
 var userinput;
 var output;
 userinput = document.getElementById("in").value;
	if (userinput > 0 && userinput <= 5)
	{output = "Well, at least your honest! Thanks for visiting my blog anyways!";}
	else if (userinput > 5 && userinput <= 10)
	{output = "Wow! I'll take it! Thanks for visiting my blog" ;}
	else {
		output="Invalid input. Please enter an input between 1-10";
	}
 document.getElementById("user").innerHTML = output;
 }
 
//function that hides a pitcure
function hide() {
	if(document.getElementById("picture").style.visibility !== "visible"){
    document.getElementById("picture").style.visibility = "visible";
	}
}
 
//Comment trail script- By Kurt (kurt.grigg@virgin.net)
//Script featured on Dynamic Drive
//Visit http://www.dynamicdrive.com for this script and more

colours=new Array('#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','ff00ff')
n = 10;
y = 0;
x = 0;
n6=(document.getElementById&&!document.all);
ns=(document.layers);
ie=(document.all);
d=(ns||ie)?'document.':'document.getElementById("';
a=(ns||n6)?'':'all.';
n6r=(n6)?'")':'';
s=(ns)?'':'.style';

if (ns){
for (i = 0; i < n; i++)
document.write('<layer name="dots'+i+'" top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>');
}
if (ie)
document.write('<div id="con" style="position:absolute;top:0px;left:0px"><div style="position:relative">');
if (ie||n6){
for (i = 0; i < n; i++)
document.write('<div id="dots'+i+'" style="position:absolute;top:0px;left:0px;width:'+i/2+'px;height:'+i/2+'px;background:#ff0000;font-size:'+i/2+'"></div>');
}

if (ie)
document.write('</div></div>');
(ns||n6)?window.captureEvents(Event.MOUSEMOVE):0;
function Mouse(evnt){
y = (ns||n6)?evnt.pageY+4 - window.pageYOffset:event.y+4;
x = (ns||n6)?evnt.pageX+1:event.x+1;
}

(ns)?window.onMouseMove=Mouse:document.onmousemove=Mouse;

function animate(){
o=(ns||n6)?window.pageYOffset:0;
if (ie)con.style.top=document.body.scrollTop + 'px';
for (i = 0; i < n; i++){
var temp1 = eval(d+a+"dots"+i+n6r+s);
randcolours = colours[Math.floor(Math.random()*colours.length)];
(ns)?temp1.bgColor = randcolours:temp1.background = randcolours; 

if (i < n-1){
var temp2 = eval(d+a+"dots"+(i+1)+n6r+s);
temp1.top = parseInt(temp2.top) + 'px';
temp1.left = parseInt(temp2.left) + 'px';
} 

else{
temp1.top = y+o + 'px';
temp1.left = x + 'px';
}
}

setTimeout("animate()",10);
}
animate();

/*****************************************
* LCD Clock script- by Javascriptkit.com
* Featured on/available at http://www.dynamicdrive.com/
* This notice must stay intact for use
*****************************************/

var alternate=0

function show(){
var clockobj=document.getElementById? document.getElementById("digitalclock") : document.all.digitalclock
var Digital=new Date()
var hours=Digital.getHours()
var minutes=Digital.getMinutes()
var dn="AM"

if (hours==12) dn="PM" 
if (hours>12){
dn="PM"
hours=hours-12
}
if (hours==0) hours=12
if (hours.toString().length==1)
hours="0"+hours
if (minutes<=9)
minutes="0"+minutes

if (alternate==0)
clockobj.innerHTML=hours+"<font color='lime'> : </font>"+minutes+" "+"<sup>"+dn+"</sup>"
else
clockobj.innerHTML=hours+"<font color='black'> : </font>"+minutes+" "+"<sup>"+dn+"</sup>"
alternate=(alternate==0)? 1 : 0
setTimeout("show()",1000)
}
window.onload=show

//Method to close browser window
function refresh() {
	location.reload();
}