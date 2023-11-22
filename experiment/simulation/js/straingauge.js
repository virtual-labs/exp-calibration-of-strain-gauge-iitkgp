
/// This dw_tester.js file is developped by,
///Piyali Chattopadhyay
///Project_scientist- Technical
///Virtual Lab Projects,Mechanical Engineering Department,IIT Kharagpur


$(document).ready(function(){
  $("#instcontrol").click(function(){
    $("#inst").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#myTables").click(function(){
	
	
    $("#obsT").slideToggle("slow");
	
	
  
  });
});

///switch onoff
function on_off(){
	
if((document.getElementById('switch').src.match("images/switchoff.png")) && (($('#Lvalue').val()) == 0)){
	document.getElementById('switch').src = "images/switchon.png";
	document.getElementById('addload').disabled = false;
	document.getElementById('dpm').style.color ="red";
	simulate();
}	
	
else if((document.getElementById('switch').src.match("images/switchon.png")) && (($('#Lvalue').val()) == 0)){
	document.getElementById('switch').src = "images/switchoff.png";
	document.getElementById('addload').disabled = true;
	document.getElementById('dpm').style.color ="gray";
	document.getElementById('dpm').value = 0;
}	
else{
alert('Remove the loads first')	
	
}	
	
}



///Load add
var countTop = 0,count=0;
function AddLoads(){

	count++;
	if(count<=10 && count>=0){
var topPos = math.subtract(82,countTop)+'%';
	
$('<img src="images/load.png">').appendTo("#loadDiv");	

$('#loadDiv').children().css('position','absolute');
$('#loadDiv').children().css('left','0%');
$('#loadDiv').children().css('width','100%');
$("#loadDiv :nth-child("+count+")").css('top',topPos);
$('#Lvalue').val(math.multiply(100,count));

countTop+=19;
	}
 if(count>10){
	 alert('This is the highest load, you can apply');
	 count = 10;
	 
 }

}

function RemoveLoads(){

if(count<=10 && count>=0){
$("#loadDiv :nth-child("+count+")").remove();
count--;
countTop-=19;

}	
if(count<0){
	 alert('No load is applied currently');
	 count = 0;
	 countTop+=19;
 }
$('#Lvalue').val(math.multiply(100,count));

}



///applying linear regression ,extrapolation
var xlow,xhigh,ylow,yhigh,opvolt,strain;
function simulate(){

var S = math.multiply(2,math.add(1,math.random(0,0.05)));///gauge factor
var vs = 5;///supply voltage
	
var loadmass = $('#Lvalue').val();///take the value of mass applied as load

///direct data from given observation table in document
if(loadmass == 0){
	opvolt = 2.150;
}
if(loadmass == 100){
	opvolt = 2.176;
}
if(loadmass == 200){
	opvolt = 2.202;
}
if(loadmass == 300){
	opvolt = 2.229;
}
if(loadmass == 400){
	opvolt = 2.255;
}
if(loadmass == 500){
	opvolt = 2.281;
}


///Mathematical Interpolation for masses between 0 to 500
if((loadmass>0 && loadmass<100) || (loadmass>100 && loadmass<200) || (loadmass>200 && loadmass<300) || (loadmass>300 && loadmass<400) || (loadmass>400 && loadmass<500)){
///applied mass in gm (xlow)
var m_low = [0,100, 200, 300,400, 500].reduce((a, b) => {
    return Math.abs(b - loadmass) < Math.abs(a - loadmass) ? b : a;
});

///applied mass in gm (xhigh)
var m_high = [0,100, 200, 300,400, 500];

 xlow = m_low;///lower nearest
 xhigh = getClosestValue(loadmass,m_high);///higher nearest

///declaring the output voltage
	
if(xlow == 0 || xhigh == 0){
	ylow = 2.150;
	yhigh = 2.150;
}

if(xlow == 100 || xhigh == 100){
	ylow = 2.176;
	yhigh = 2.176;
}

if(xlow == 200 || xhigh == 200){
	ylow = 2.202;
	yhigh = 2.202;
}

if(xlow == 300 || xhigh == 300){
	ylow = 2.229;
	yhigh = 2.229;
}

if(xlow == 400 || xhigh == 400){
	ylow = 2.255;
	yhigh = 2.255;
}

if(xlow == 500 || xhigh == 500){
	ylow = 2.281;
	yhigh = 2.281;
}

opvolt = math.add(ylow, math.multiply(math.subtract(loadmass,xlow),math.divide(math.subtract(yhigh,ylow),math.subtract(xhigh,xlow))));///extrapolation formula


}

else if(loadmass>=500){
	
xlow = 400;
ylow = 2.255;
xhigh = 500;
yhigh = 2.281;
	
opvolt = math.add(ylow, math.multiply(math.subtract(loadmass,xlow),math.divide(math.subtract(yhigh,ylow),math.subtract(xhigh,xlow))));///extrapolation formula


	
}

strain = math.multiply(4,math.divide(opvolt,vs),math.divide(1,S),math.pow(10,0));///not micro strain only strain
$('#dpm').val(strain);
console.log("xlow =" + xlow);	
console.log("ylow =" + ylow);
console.log("xhigh =" + xhigh);
console.log("yhigh =" + yhigh);
}

///higher nearest	
function getClosestValue(input, array){
  var tempArray = array;
  var index = tempArray.sort().findIndex((item) => {
    return input < item;
  });
  if(index >= 0) {
    return array[index]; 
  } else {
    return null; // no answer
  }
}


///////////////////////////////////Table Creation//////////////////////////////////////////////////////////EDIT it
 
var tabrowindex = 0;
var arr = [];

var table;



//------------------------------------------------- Table Creation -----------------------------------------------//
function CreateTable() {


    arr[0] = tabrowindex+1 ;
    arr[1] = $('#Lvalue').val();
    arr[2] = math.divide(math.floor(math.multiply(opvolt,100)),100);
	arr[3] = math.divide(math.floor(math.multiply(strain,100)),100);
   
	
	table = document.getElementById("obsT");
        
    var row = table.insertRow(++tabrowindex);
   
    if (table.rows.length <= 15) {
        
         // Row increment
        for (var q = 0; q < 4; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

    }

    }

}  

///plot

function plot(){
	
var dataArrayX = [];///x axis values
var dataArrayY = [];///y axis values

document.getElementById('myPlot').style.display = "block";	
document.getElementById('clrbtn').disabled = false;
	
var tableData = document.getElementById('obsT');	
	
for (var tabrowindex1 = 1; tabrowindex1 < tableData.rows.length; tabrowindex1++) {
	var rwe1 = tableData.rows[tabrowindex1].cells;

	dataArrayX.push( parseFloat(rwe1[1].innerHTML));
	dataArrayY.push( parseFloat(rwe1[2].innerHTML));
}

	
///plot using plotly.js	

const data = [{
  x:dataArrayX,
  y:dataArrayY,
  type:"spline",
  //orientation:"v",
  marker: {color:"#2163A5"}
}];

const layout = {
	title:"Output voltage(V) vs. Applied Load(g)",

xaxis: {
	showgrid: true,
    //zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    //zerolinecolor: 'black',
    //zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	
    title: {
      text: 'Applied Load(g)',
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    },
  },
  yaxis: {
	  tickangle: -65,
	  showgrid: true,
    //zeroline: true,
    showline: true,
    //mirror: 'ticks',
    gridcolor: '#bdbdbd',
    gridwidth: 2,
    //zerolinecolor: 'black',
    //zerolinewidth: 3,
    linecolor: '#636363',
    linewidth: 2,
	
    title: {
      text: 'Output Voltage(V)',
	  
      font: {
        family: 'Times New Roman, monospace',
        size: 18,
        color: '#2163A5'
      }
    }
  }



};

Plotly.newPlot("myPlot", data, layout);
	
}



/// clear button function


function Refresh(){
	
	if(document.getElementById('Lvalue').value > 0){
		alert('Remove the loads first');
	}
	else if(document.getElementById('Lvalue').value==0){
	var Dtable= document.getElementById('obsT');
	
	var Trow = Dtable.rows.length;
	for (var i= Trow-1;i>0;i--){

	Dtable.deleteRow(i);
	}
	
	tabrowindex=0;
	$('#myPlot').css('display','none');
	document.getElementById('clrbtn').disabled = true;
 }
}