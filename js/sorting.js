var rectArray = [];
var rectArray1 = [];
var swapper = [];
var bars = 50;
var speed = 20;
var isSorted = false;

class pair {//Used to store elemenst in swapper array

    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
}

function swap() {//updates height of the rectangle one by one after a certain time interval
    let count = 1;
    for (let i = 0; i < swapper.length; i++) {
    
        (function (i) {
            setTimeout(function () {
                var first = swapper[i].i;
                var second = swapper[i].j;

                count++;

                let temp = rectArray[first].h;
                rectArray[first].h = rectArray[second].h;
                rectArray[second].h = temp;

            }, speed * i);
        })(i);
    }

    let id = setInterval(() => {
        if (count >= swapper.length)
            swapreturn(id);
    }, 500);
}



function bubble() {//bubble sort

    for (let i = 0; i < bars - 1; i++) {
        for (let j = 0; j < bars - i - 1; j++) {
            if (rectArray1[j] > rectArray1[j + 1]) {
                swapper.push(new pair(j, j + 1));
                let tempo = rectArray1[j];
                rectArray1[j] = rectArray1[j + 1];
                rectArray1[j + 1] = tempo;
            }
        }

    }
}

function insertionSort() {
    for (let i = 1; i < bars; i++) {
        let key = rectArray1[i];
        j = i - 1;

        while (j >= 0 && rectArray1[j] > key) {
            swapper.push(new pair(j + 1, j));
            rectArray1[j + 1] = rectArray1[j];
            j = j - 1;
        }
        rectArray1[j + 1] = key;
    }
}

function selectionSort() 
{ 
    for (let i = 0; i < bars-1; i++) 
    { 
        let min_idx = i; 
        for (j = i+1; j < bars; j++) {
            swapper.push(new pair(j,j));// for slowing down speed
            if (rectArray1[j] < rectArray1[min_idx]) {
                min_idx = j;
            }
        }
        let temp=rectArray1[min_idx];
        rectArray1[min_idx]=rectArray1[i];
        rectArray1[i]=temp;
        swapper.push(new pair(min_idx,i)); 
    } 
}

function quicksortcaller(){
    quicksort(0,rectArray1.length-1);
}

function quicksort(l,h){
    if(h<=l)
        return;
    else{
        let p=partition(l,h);
        quicksort(l,p-1);
        quicksort(p+1,h);
    }
}

function partition(l,h){
    let pivot=rectArray1[h];

    let i=l-1;

    for(let j=l;j<h;j++){
        if(rectArray1[j]<pivot){
            i++;
            swapper.push(new pair(i,j));
            let temp=rectArray1[i];
            rectArray1[i]=rectArray1[j];
            rectArray1[j]=temp;
        }
        else{
            swapper.push(new pair(j,j));
        }
    }
    i++;
    swapper.push(new pair(i,h));
    let temp=rectArray1[i];
    rectArray1[i]=rectArray1[h];
    rectArray1[h]=temp;
    return i;
}


function mergesortcaller(){
    mergesort(0,rectArray1.length-1);
}

function mergesort(l,h){
    if(h<=l){
        return;
    }
    else{
        let mid=Math.floor((l+h)/2);

        mergesort(l,mid);
        mergesort(mid+1,h);
        merge(l,mid,mid+1,h);
    }
}

function merge(l,midl,mid,h){
    for(let i=l;i<=midl;i++){
        if(rectArray1[i]>rectArray1[mid]){

            swapper.push(new pair(i,mid));
            let temp=rectArray1[i];
            rectArray1[i]=rectArray1[mid];
            rectArray1[mid]=temp;

            let j=mid;

            while(j+1<=h && rectArray1[j]>rectArray1[j+1]){

                swapper.push(new pair(j,j+1));
                let temp=rectArray1[j];
                rectArray1[j]=rectArray1[j+1];
                rectArray1[j+1]=temp;

                j++;
            }
        }
    }
}



