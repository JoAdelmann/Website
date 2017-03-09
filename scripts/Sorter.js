Sorter.prototype.i = 0;
Sorter.prototype.j = 1;
Sorter.prototype.numOfUnsElems = 10;

//InsertionSortExclusive
Sorter.prototype.k = 1;
Sorter.prototype.tempElemK = null;
Sorter.prototype.tempTextElemK = null;
Sorter.prototype.tempValueK = 0;

Sorter.prototype.elemJMO = null;
Sorter.prototype.textElemJMO = null;
Sorter.prototype.valueJMO = 0;

//MergeSortExclusive
Sorter.prototype.l = 2;
Sorter.prototype.n = 0;
Sorter.prototype.m = 1;
Sorter.prototype.unsElems = 4;
Sorter.prototype.x = 0;
Sorter.prototype.minIndex = 0;

//QuickSortExclusive
Sorter.prototype.lessThenPivot = new Array(0);
Sorter.prototype.greaterThenPivot = new Array(0);
Sorter.prototype.less = new Array(0);
Sorter.prototype.greater = new Array(0);
Sorter.prototype.pivotIndex = 0;
Sorter.prototype.currentPivotVal = 5;
Sorter.prototype.secondCurrentPivotVal = 0;
Sorter.prototype.fromQSort = false;

function Sorter() {}

Sorter.prototype.bubbleSortArray = function (array) {
    var temp;
    for (var i=1; i<array.length; i++) {
        for(var j=0; j<array.length-i; j++) {
            if(array[j]>array[j+1]) {
                swap(j, j+1, array);
            }	
        }
    }    
}


Sorter.prototype.insertionSortArray = function(array) {
    var temp;
    for (var i = 1; i < array.length; i++) {
        temp = array[i];
        var j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
}

Sorter.prototype.selectionSortArray = function(array) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

Sorter.prototype.swap = function(i, j, array) {
    var i = parseInt(i);
    var j = parseInt(j);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
} 

Sorter.prototype.findMinIndex = function(from, array) {
    var res = parseInt(from);
    for(var i=0; i<array.length; i++) {
        if(array[i] < res) {
            res = i;
        }
    }
    return res;
}

Sorter.prototype.bubbleSortSingleStep = function() {
    this.selectElem("bubbleSort").style.visibility = "visible";
    this.selectElem("outerIf").style.backgroundColor= "red";

    if(this.i < this.numOfUnsElems) {
        this.selectElem("outerFor").style.backgroundColor= "green";
        this.selectElem("innerFor").style.backgroundColor= "#1a1a1a";
        this.selectElem("innerIf").style.backgroundColor= "#1a1a1a";

        var elemI = this.selectBox(this.i);
        var textElemI = this.selectBarText(this.i);
        var valueI = parseInt(textElemI.innerHTML);

        elemI.style.backgroundColor = "green";

        if(this.i > 0) {
            this.selectBox(this.i-1).style.backgroundColor = "cadetblue";
        }

        if(this.j < this.numOfUnsElems) {
            this.selectElem("outerFor").style.backgroundColor= "#1a1a1a";
            this.selectElem("innerFor").style.backgroundColor= "green";
            this.selectElem("innerIf").style.backgroundColor= "#1a1a1a";
            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);

            elemJ.style.backgroundColor = "red";

            if(valueI >= valueJ) {
              this.selectElem("innerFor").style.backgroundColor= "#1a1a1a";
              this.selectElem("innerIf").style.backgroundColor= "green";
              this.selectElem("outerIf").style.backgroundColor= "#1a1a1a";
              this.swapElems(this.i,this.j, elemI, textElemI, elemJ, textElemJ);
            }
            this.j++;
        }
        else {
            this.numOfUnsElems--;
            this.j=1;
        }
        this.i++;
    }

    else {
        this.i=0;
    }   
}

Sorter.prototype.selectionSortSingleStep = function() {
    if(!this.fromQSort) {
        this.selectElem("selectionSort").style.visibility = "visible";
        if(this.i < 10) {
            this.minIndex = this.findMinIndex(this.i);
            this.selectElem("findMinIndex").style.backgroundColor = "red";
            this.selectElem("swapElems").style.backgroundColor = "#1a1a1a";
            if(this.i > 0) {
                var beforeMinIndex = this.findMinIndex(this.i-1);
                var elem = this.selectBox(beforeMinIndex);
                elem.style.backgroundColor = "green";
            }

            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);

            var elemJ = this.selectBox(this.minIndex);
            var textElemJ = this.selectBarText(this.minIndex);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "red";

            if(this.minIndex == 9) {
                elemJ.style.backgroundColor = "green";
            }

            this.swapElemsNTimes(this.i, this.minIndex, this.minIndex-this.i);
            this.swapIndex(elemI, textElemI, elemJ, textElemJ);
            this.selectElem("swapElems").style.backgroundColor = "green";
        }
        this.i++;
        this.numOfUnsElems--;
    }
    else {
        if(this.i < 10) {
            this.minIndex = this.findMinIndex(this.i);
            if(this.i > 0) {
                var beforeMinIndex = this.findMinIndex(this.i-1);
                var elem = this.selectBox(beforeMinIndex);
                elem.style.backgroundColor = "green";
            }

            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);

            var elemJ = this.selectBox(this.minIndex);
            var textElemJ = this.selectBarText(this.minIndex);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "red";

            if(this.minIndex == 9) {
                elemJ.style.backgroundColor = "green";
            }

            this.swapElemsNTimes(this.i, this.minIndex, this.minIndex-this.i);
            this.swapIndex(elemI, textElemI, elemJ, textElemJ);
        }
        this.i++;
        this.numOfUnsElems--;        
    }
}

Sorter.prototype.insertionSortSingleStep = function() {
    this.selectElem("insertionSort").style.visibility = "visible";
    this.selectElem("forLoop").style.backgroundColor = "#1a1a1a";
    this.selectElem("temp").style.backgroundColor = "#1a1a1a";
    this.selectElem("tempEqArrayI").style.backgroundColor = "#1a1a1a";
    this.selectElem("varJEqI").style.backgroundColor = "#1a1a1a";
    this.selectElem("while").style.backgroundColor = "#1a1a1a";
    this.selectElem("arrayJEqArrayJMO").style.backgroundColor = "#1a1a1a";
    this.selectElem("jMM").style.backgroundColor = "#1a1a1a";
    this.selectElem("arrayJEqTemp").style.backgroundColor = "#1a1a1a";

    this.selectElem("forLoop").style.backgroundColor = "green";
    if(this.k < this.numOfUnsElems) {
        this.tempElemK = this.selectBox(this.k);
        this.tempTextElemK = this.selectBarText(this.k);
        this.tempValueK = parseInt(this.tempTextElemK.innerHTML);

        this.j = this.k;

        this.elemJMO = this.selectBox(this.j-1);
        this.textElemJMO = this.selectBarText(this.j-1);
        this.valueJMO = parseInt(this.textElemJMO.innerHTML);
        this.elemJMO.style.backgroundColor = "green";

        this.selectElem("forLoop").style.backgroundColor = "green";
        this.selectElem("temp").style.backgroundColor = "green";
        this.selectElem("tempEqArrayI").style.backgroundColor = "green";
        this.selectElem("varJEqI").style.backgroundColor = "green";
        this.selectElem("while").style.backgroundColor = "#1a1a1a";
        this.selectElem("arrayJEqArrayJMO").style.backgroundColor = "#1a1a1a";
        this.selectElem("jMM").style.backgroundColor = "#1a1a1a";
        this.selectElem("arrayJEqTemp").style.backgroundColor = "green";

        if(this.j > 0 && this.valueJMO > this.tempValueK) {
            this.swapElems(this.j-1, this.j, this.selectBox(this.j),  this.selectBarText(this.j), this.elemJMO, this.textElemJMO);

            this.j--;

            this.selectElem("forLoop").style.backgroundColor = "#1a1a1a";
            this.selectElem("temp").style.backgroundColor = "#1a1a1a";
            this.selectElem("tempEqArrayI").style.backgroundColor = "#1a1a1a";
            this.selectElem("varJEqI").style.backgroundColor = "#1a1a1a";
            this.selectElem("while").style.backgroundColor = "green";
            this.selectElem("arrayJEqArrayJMO").style.backgroundColor = "green";
            this.selectElem("jMM").style.backgroundColor = "green";
            this.selectElem("arrayJEqTemp").style.backgroundColor = "#1a1a1a";  
        }
        this.k++;
    }
    else {
        this.k=1;
        this.numOfUnsElems--;
    }
}

Sorter.prototype.mergeSortSingleStep = function() {
    this.selectElem("mergeSort").style.visibility = "visible";
    if(this.l == 2) {
        this.selectElem("sortTwo").style.backgroundColor = "#1a1a1a";
        if(this.i < 9) {
            this.selectElem("sortTwo").style.backgroundColor = "green";
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "yellow";

            this.j= this.i + 1;

            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "yellow";

            if(valueI > valueJ) {
                this.swapElems(this.i, this.j, elemI, textElemI, elemJ, textElemJ);
            }
            this.i+=2;
        }
        else {
            this.selectElem("mergeTwo").style.backgroundColor = "green";
            this.l+=2;
            this.i = 0;
        }
    }
    else if(this.l == 4) {
        this.selectElem("mergeTwo").style.backgroundColor = "#1a1a1a";
        this.selectElem("sortFour").style.backgroundColor = "#1a1a1a";
        if(this.i < 8) {
            this.selectElem("sortFour").style.backgroundColor = "green";
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "orange"; 

            this.j = this.i + 2;

            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "orange";

            if(valueI > valueJ) {
                this.swapElemsNTimes(this.i,this.j, this.j-this.i);

                this.swapIndex(elemI, textElemI, elemJ, textElemJ);

            }

            if(this.i == 2) {
                this.selectElem("mergeFour").style.backgroundColor = "green";
                this.selectElem("sortFour").style.backgroundColor = "#1a1a1a";
                this.clearInOrder(0, 3);
                this.i = 4;
            }
            else if(this.i == 5) {
                this.selectElem("mergeFour").style.backgroundColor = "green";
                this.selectElem("sortFour").style.backgroundColor = "#1a1a1a";
                this.clearInOrder(4, 7);
                this.l+=2;
                this.i = 0;
            }
            else {
                this.i++;
            }
        }
    }
    else if(this.l == 6) {
        this.selectElem("mergeFour").style.backgroundColor = "#1a1a1a";
        if(this.i<4) {
            this.selectElem("sortEight").style.backgroundColor = "green";
            var elemI = this.selectBox(this.i);
            var textElemI = this.selectBarText(this.i);
            var valueI = parseInt(textElemI.innerHTML);
            elemI.style.backgroundColor = "green"; 

            this.j = this.i + 4;

            var elemJ = this.selectBox(this.j);
            var textElemJ = this.selectBarText(this.j);
            var valueJ = parseInt(textElemJ.innerHTML);
            elemJ.style.backgroundColor = "green";

            if(valueI > valueJ) {
                this.swapElemsNTimes(this.i,this.j, this.j-this.i);

                this.swapIndex(elemI, textElemI, elemJ, textElemJ);

            }
            this.i++;
        }
        else {
            this.selectElem("sortEight").style.backgroundColor = "#1a1a1a";
            this.selectElem("mergeEight").style.backgroundColor = "green";
            this.clearInOrder(0, 7);
            this.i = 0;
            this.l+=2;
        }
    }
    else {
       if(this.i<2) {
           this.selectElem("mergeEight").style.backgroundColor = "#1a1a1a";
           this.selectElem("sortRest").style.backgroundColor = "green";
           var elemI = this.selectBox(this.i);
           var textElemI = this.selectBarText(this.i);
           var valueI = parseInt(textElemI.innerHTML);
           elemI.style.backgroundColor = "green"; 

           this.j = this.i + 8;

           var elemJ = this.selectBox(this.j);
           var textElemJ = this.selectBarText(this.j);
           var valueJ = parseInt(textElemJ.innerHTML);
           elemJ.style.backgroundColor = "green"; 

           if(valueI > valueJ) {
               this.swapElemsNTimes(this.i,this.j, this.j-this.i);

                this.swapIndex(elemI, textElemI, elemJ, textElemJ);
           }
           this.i++;
       }
        else {
            this.selectElem("sortRest").style.backgroundColor = "#1a1a1a";
            this.selectElem("mergeRest").style.backgroundColor = "green";
            this.clearInOrder(0,9);
            this.numOfUnsElems = 0;
        }
    }
}

Sorter.prototype.quickSortSingleStep = function() {
    this.selectElem("quickSort").style.visibility = "visible";
    var elemPivot = this.selectBox(this.findIndexOf(this.currentPivotVal));
    var textElemPivot = this.selectBarText(this.findIndexOf(this.currentPivotVal));

    elemPivot.style.backgroundColor = "yellow";
    this.selectElem("selectPivot").style.backgroundColor = "yellow";

    if(this.currentPivotVal == 5) {
        this.fillLessAndGreater(this.currentPivotVal);

        for(var k=0; k<4; k++) {
            var elemK = this.selectBox(k);
            var textElemK = this.selectBarText(k);
            var valueK = parseInt(textElemK.innerHTML);

            var elemL = this.selectBox(this.lessThenPivot[k]);
            var textElemL = this.selectBarText(this.lessThenPivot[k]);
            var valueL = parseInt(textElemL.innerHTML);

            if(this.lessThenPivot[k] > k) {
                this.selectElem("lessThenPivot").style.backgroundColor = "orange";
                this.selectElem("greaterThenPivot").style.backgroundColor = "red";
                this.swapElemsNTimes(k, this.lessThenPivot[k], this.lessThenPivot[k]-k);
                this.swapIndex(elemK, textElemK, elemL, textElemL);
            }
            else {
                this.swapElemsNTimes(this.lessThenPivot[k], k, k-this.lessThenPivot[k]);
                this.swapIndex(elemK, textElemK, elemL, textElemL);
            } 
        }

        if(parseInt(elemPivot.id.substring(3)) > 4) {
            this.swapElemsNTimes(4, parseInt(elemPivot.id.substring(3)), parseInt(elemPivot.id.substring(3))-4);
            this.swapIndex(elemPivot, textElemPivot, this.selectBox(4), this.selectBarText(4));
        }
        else {
            this.swapElemsNTimes(parseInt(elemPivot.id.substring(3)), 4, 4-parseInt(elemPivot.id.substring(3)));
            this.swapIndex(elemPivot, textElemPivot, this.selectBox(4), this.selectBarText(4));
        }

        this.currentPivotVal = 3;
        this.lessThenPivot = new Array(0);
        this.greaterThenPivot = new Array(0);
    }
    else if(this.currentPivotVal == 3) {
        this.selectElem("sortLeft").style.backgroundColor = "green";
        this.fillLessAndGreater(3);

        for(var k=0; k<2; k++) {
            var elemK = this.selectBox(k);
            var textElemK = this.selectBarText(k);
            var valueK = parseInt(textElemK.innerHTML);

            var elemL = this.selectBox(this.lessThenPivot[k]);
            var textElemL = this.selectBarText(this.lessThenPivot[k]);
            var valueL = parseInt(textElemL.innerHTML);

            if(this.lessThenPivot[k] > k) {
                this.swapElemsNTimes(k, this.lessThenPivot[k], this.lessThenPivot[k]-k);
                this.swapIndex(elemK, textElemK, elemL, textElemL);
            }
            else {
                this.swapElemsNTimes(this.lessThenPivot[k], k, k-this.lessThenPivot[k]);
                this.swapIndex(elemK, textElemK, elemL, textElemL);
            } 
        }

        if(parseInt(elemPivot.id.substring(3)) > 2) {
            this.swapElemsNTimes(2, parseInt(elemPivot.id.substring(3)), parseInt(elemPivot.id.substring(3))-2);
            this.swapIndex(this.selectBox(2), this.selectBarText(2), elemPivot, textElemPivot);
        }
        else {
            this.swapElemsNTimes(parseInt(elemPivot.id.substring(3)), 2, 2-parseInt(elemPivot.id.substring(3)));
            this.swapIndex(this.selectBox(2), this.selectBarText(2), elemPivot, textElemPivot);
        }

        this.currentPivotVal = 8;
        this.lessThenPivot = new Array(0);
        this.greaterThenPivot = new Array(0);
    }
    else if(this.currentPivotVal == 8) {
        this.selectElem("sortRight").style.backgroundColor = "green";
        this.selectElem("sortLeft").style.backgroundColor = "#1a1a1a";
        this.fillLessAndGreater(this.currentPivotVal);

        for(var k=0; k<this.lessThenPivot.length; k++) {
            var elemK = this.selectBox(k);
            var textElemK = this.selectBarText(k);
            var valueK = parseInt(textElemK.innerHTML);

            var elemL = this.selectBox(this.lessThenPivot[k]);
            var textElemL = this.selectBarText(this.lessThenPivot[k]);
            var valueL = parseInt(textElemL.innerHTML);

            if(this.lessThenPivot[k] > k) {
                this.swapElemsNTimes(k, this.lessThenPivot[k], this.lessThenPivot[k]-k);
                this.swapIndex(elemK, textElemK, elemL, textElemL);
            }
            else {
                this.swapElemsNTimes(this.lessThenPivot[k], k, k-this.lessThenPivot[k]);
                this.swapIndex(elemK, textElemK, elemL, textElemL);
            } 
        }

        if(parseInt(elemPivot.id.substring(3)) < 7) {
            this.swapElemsNTimes(7, parseInt(elemPivot.id.substring(3)), parseInt(elemPivot.id.substring(3))-7);
            this.swapIndex(this.selectBox(7), this.selectBarText(7), elemPivot, textElemPivot);
        }
        else {
            this.swapElemsNTimes(parseInt(elemPivot.id.substring(3)), 7, 7-parseInt(elemPivot.id.substring(3)));
            this.swapIndex(this.selectBox(7), this.selectBarText(7), elemPivot, textElemPivot);
        }
        this.currentPivotVal = 10;
        this.lessThenPivot = new Array(0);
        this.greaterThenPivot = new Array(0);
        this.fromQSort = true;
    }
    else {
        this.selectionSortSingleStep();
    }
}

Sorter.prototype.fillLessAndGreater = function(pivotVal) {
    var pivotValue = parseInt(pivotVal);

    if(this.lessThenPivot.length == 0 && this.greaterThenPivot.length == 0) {
        for(var i=0; i<10; i++) {
            var elemI = this.selectBox(i);
            var textElemI = this.selectBarText(i);
            var valueI = parseInt(textElemI.innerHTML);

            if(valueI > pivotValue) {
                this.greaterThenPivot.push(parseInt(elemI.id.substring(3)));
                elemI.style.backgroundColor = "red";
            }
            else if(valueI < pivotValue) {
                this.lessThenPivot.push(parseInt(elemI.id.substring(3)));
                elemI.style.backgroundColor = "orange";
            }
            else {
                elemI.style.backgroundColor = "yellow";
            }
        }
    } 
}

Sorter.prototype.findIndexOf = function(number) {
var value = parseInt(number);
    for(var i=0; i<10; i++) {
        var elemI = this.selectBox(i);
        var textElemI = this.selectBarText(i);
        var valueI = parseInt(textElemI.innerHTML);

        if(valueI == value) {
            return parseInt(elemI.id.substring(3));
        }
    }
}

Sorter.prototype.selectElem = function(id) {
    return document.getElementById(id);
}

Sorter.prototype.selectBox = function(number) {
    var n = parseInt(number);
    var res = this.selectElem('box' + '' + n);
    return res;    
}

Sorter.prototype.selectBarText = function(number) {
    var n = parseInt(number);
    var res = this.selectElem('barText' + '' + n);
    return res;    
}

//Animationen
Sorter.prototype.moveNTimesToLeft = function(index, far) {
    var id = parseInt(index);
    var howFar = parseInt(far);
    for(var i=0; i<=howFar; i++) {
        this.moveLeft(id);
    }
}

Sorter.prototype.moveNTimesToRight = function(index, far) {
    var id = parseInt(index);
    var howFar = parseInt(far);
    for(var i=0; i<=howFar; i++) {
        this.moveRight(id);
    }
}

Sorter.prototype.moveLeft = function(number) {
    var id = parseInt(number);
    var cElem = this.selectBox(id);
    cElem.classList.add("move");
    cElem.style.left=parseInt(cElem.style.left) + (-(window.innerWidth/10)*0.7) + 'px';
}

Sorter.prototype.moveRight = function(number) {
    var id = parseInt(number);
    var cElem = this.selectBox(id);
    cElem.classList.add("move");
    cElem.style.left=parseInt(cElem.style.left) +  (window.innerWidth/10)*0.7 + 'px';
}

Sorter.prototype.swapElems = function(i,j, elemI, textElemI, elemJ, textElemJ) {
    var i = parseInt(i);
    var j = parseInt(j);

    this.moveRight(i);
    this.moveLeft(j);

    this.swapIndex(elemI, textElemI, elemJ, textElemJ);

}

Sorter.prototype.swapElemsNTimes = function(i,j,n) {
    var i = parseInt(i);
    var j = parseInt(j);
    var n = parseInt(n);

    for(var x=0; x<n; x++) {
        this.moveRight(i);
        this.moveLeft(j);
    }
}

Sorter.prototype.swapIndex = function(elemI, textElemI, elemJ, textElemJ) {
    var temp = elemI.id;
    var temp2 = textElemI.id;

    elemI.id = elemJ.id;
    textElemI.id = textElemJ.id;

    elemJ.id = temp;
    textElemJ.id = temp2;
}

Sorter.prototype.findMinIndex = function(number) {
    var from = parseInt(number);
    var min = from;
    for(var x=from+1; x<10; x++) {
        var minVal = parseInt(this.selectBarText(min).innerHTML);
        var xVal = parseInt(this.selectBarText(x).innerHTML);

        if(xVal < minVal) {
            min = x;
        }
    }
    return min;
}

Sorter.prototype.clearInOrder = function(from, to) {
    for(var x=parseInt(from); x < parseInt(to); x++) {
        var elemX = this.selectBox(x);
        var textElemX = this.selectBarText(x);
        var valueX = parseInt(textElemX.innerHTML);

        var elemY = this.selectBox(x+1);
        var textElemY = this.selectBarText(x+1);
        var valueY = parseInt(textElemY.innerHTML);

        if(valueX > valueY) {
            this.swapElems(x,x+1,elemX,textElemX,elemY,textElemY); 
        }
    }
}

Sorter.prototype.getIndex = function(id) {
    return parseInt(id.substring(3));
}
