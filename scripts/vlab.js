//Objekte
var currentObj = null;
var clock = null;

//Variablen
var animate;
var selectedAlgo = "";
var abtn;
var sistebtn;
var next;
var algoText = "";
var swaps = 0;
var canvas = null;
var codeText;

//Arrays
var numberArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var randomizedArray = Array(0);
var toSortArray = Array(0);
var dayArray = new Array(7);
dayArray[0] = "Sonntag";
dayArray[1] = "Montag";
dayArray[2] = "Dienstag";
dayArray[3] = "Mittwoch";
dayArray[4] = "Donnerstag";
dayArray[5] = "Freitag";
dayArray[6] = "Samstag";


//Button-Funktionen
function close() {
    randomizedArray = new Array(0);
}

function openHelp() {
    window.open("../docs/help.html", "Hilfe", "width=700,height=400");
}

function reloadVlab() {
    location.reload();
}

function clearBtn() {
    $.jStorage.flush();
    init();
}

function selectAlgo(n) {
    var s = parseInt(n);
    abtn = Sorter.prototype.selectElem("animateBtn");
    sistebtn = Sorter.prototype.selectElem("singleStepBtn");
    next = Sorter.prototype.selectElem("nextBtn");
    codeText = Sorter.prototype.selectElem("innerIf");
    algoText = Sorter.prototype.selectElem("algo");
      
    abtn.style.visibility="visible"; 
    sistebtn.style.visibility="visible";
    algoText.innerHTML="";
    
    switch(s) {
        case 0: selectedAlgo = "BubbleSort"; algoText.innerHTML=selectedAlgo; break;  
        case 1: selectedAlgo = "SelectionSort"; algoText.innerHTML=selectedAlgo; break;   
        case 2: selectedAlgo = "InsertionSort"; algoText.innerHTML=selectedAlgo; break;
        case 3: selectedAlgo = "MergeSort"; algoText.innerHTML=selectedAlgo; break;  
        case 4: selectedAlgo = "QuickSort"; algoText.innerHTML=selectedAlgo; break;
    }
    
    
}

function fullAnimation() {
    sistebtn.style.visibility="hidden";
    next.style.visibility="hidden";
    sortAnim();
    Sorter.prototype.selectElem("sorting").style.visibility = "visible";
}

function singleStep() {
    abtn.style.visibility="visible";
    next.style.visibility="visible";
}

function selectNext() {
    next.style.visibility="visible";
    switch(selectedAlgo) {
        case "BubbleSort": Sorter.prototype.bubbleSortSingleStep(); break;
        case "SelectionSort": Sorter.prototype.selectionSortSingleStep(); break;
        case "InsertionSort": Sorter.prototype.insertionSortSingleStep(); break;
        case "MergeSort": Sorter.prototype.mergeSortSingleStep(); break;
        case "QuickSort": Sorter.prototype.quickSortSingleStep(); break;
    }
}

function randomizeButton(){
    randomizedArray = shuffle(numberArray);
    $.jStorage.set("savedArray", randomizedArray);
    printArray(randomizedArray);  
}

function invertButton() {
    randomizedArray = Array(10,9,8,7,6,5,4,3,2,1);
    $.jStorage.set("savedArray", randomizedArray);
    printArray(randomizedArray);
}

function sortAnim(time) {
  if(randomizedArray.length == 0) {
    console.log("Empty Array!");   
  }
  else {
      
      switch(selectedAlgo) {
        case "BubbleSort":  Sorter.prototype.bubbleSortSingleStep(); animate = setTimeout(sortAnim, 750); break;
        case "SelectionSort":  Sorter.prototype.selectionSortSingleStep(); animate = setTimeout(sortAnim, 2000); break;
        case "InsertionSort":  Sorter.prototype.insertionSortSingleStep(); animate = setTimeout(sortAnim, 750); break;
        case "MergeSort":  Sorter.prototype.mergeSortSingleStep(); animate = setTimeout(sortAnim, 1000); break;
        case "QuickSort":  Sorter.prototype.quickSortSingleStep(); animate = setTimeout(sortAnim, 2000); break;       
    }
     
      
      
      if(Sorter.prototype.numOfUnsElems == 0) {
          switch(selectedAlgo) {
            case "BubbleSort":  Sorter.prototype.bubbleSortArray(randomizedArray); break;
            case "SelectionSort":  Sorter.prototype.selectionSortArray(randomizedArray); break;
            case "InsertionSort":  Sorter.prototype.insertionSortArray(randomizedArray); break;
            case "MergeSort":  Sorter.prototype.selectionSortArray(randomizedArray); break;
            case "QuickSort":  Sorter.prototype.selectionSortArray(randomizedArray); break;
          }
          printArray(randomizedArray);
          if(isSorted(randomizedArray)) {
            console.log("Fertig!");
            clearTimeout(animate);
            Sorter.prototype.selectElem("finished").style.visibility = "visible";
            Sorter.prototype.selectElem("sorting").style.visibility = "hidden";
          }
      }
  }  
}

//Array-Funktionen
function shuffle(array) {
    var currentIndex = array.length, temp, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}

function swap(i, j,  array) {
    var x=parseInt(i);
    var y=parseInt(j);
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}
       
//Anzeige
function printArray(array) {
    if(array.length == 0) {
        for(var i=0; i<10; i++) {
            currentObj=Sorter.prototype.selectBox(i);;
            currentObj.style.bottom='0px';
            currentObj.style.left = '' + i*45 + 'px';
            currentObj.style.height =  '0px';
    
            currentText = Sorter.prototype.selectBarText(i);
            currentText.innerHTML = '';
        }
    }
    else {
        for(var i=0; i<array.length; i++) {
            var currentNumber = array[i];
            var cObj = Sorter.prototype.selectBox(i);
            var cObjText = Sorter.prototype.selectBarText(i);
    
            cObj.style.height = '' + currentNumber*(window.innerHeight/10 - 30) + 'px';
            cObj.style.width = '' + (window.innerWidth/10)*0.7-20 + 'px';
            cObj.style.left = '' + i*(window.innerWidth/10)*0.7 + 'px';
            cObj.style.bottom='0px';
            cObj.style.textAnchor='bottom';
            cObjText.innerHTML = '' + currentNumber;
        }
    }
}
          
function init(){
    canvas = Sorter.prototype.selectElem("middleLeft");
    randomizedArray = $.jStorage.get("savedArray");
    subInit();
    Sorter.prototype.selectElem("animateBtn").style.visibility="hidden";
    Sorter.prototype.selectElem("singleStepBtn").style.visibility="hidden";
    Sorter.prototype.selectElem("nextBtn").style.visibility="hidden";
    clock = Sorter.prototype.selectElem("time");
    tick();
}

function subInit() {
    if(randomizedArray != null && randomizedArray.length > 0) {
       printArray(randomizedArray);
    }
    else {
        var currentText = null;
        randomizedArray = new Array(0);
        toSortArray = new Array(0);
        numberArray = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        numOfUnsElems = 10;
        i=0;
        j=1;
        printArray(randomizedArray);
    }
}

//Sonstige Funktionen
function printArrayConsole(array) {
    var res="";
    for(var i=0; i<array.length; i++) {
       res = res + "." + array[i];
    }
    console.log(res);
}

function isSorted(array) {
    var res = true;
    for(var i=0; i<array.length-2; i++) {
        if(parseInt(array[i]) > parseInt(array[i+1])) {
            res = false;
        }
    }
    return res;
}

function tick() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var datString = "";
    var monthString = "";
 /*   var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    */var dayNumber = today.getDay();/*
       
    var hourString = "";
    var minutesString = "";
    var secondsString = "";
    */var dayString = dayArray[dayNumber];/*
    
    if(hour < 10) {
        hourString = "0" + hour;
    } else {
        hourString = hour;
    }
    if(minutes < 10) {
        minutesString = "0" + minutes;
    } else {
        minutesString = minutes;
    }
    if(seconds < 10) {
        secondsString = "0" + seconds;
    } else {
        secondsString = seconds;
    }
    
    var timeString = hourString + ":" + minutesString + ":" + secondsString + " Uhr";*/
    
    if(day < 10) {
        datString = "0" + day;
    }
    
    if(month < 10) {
        monthString = "0" + month
    }
    
    clock.innerHTML =dayString + ", " + datString + "." + monthString + "." + year;

}



window.onload = init;
window.onbeforeunload = close();
