let listA = {
value : 2,
    next: {
    value : 3,
        next : {
        value : 7
    }
}
};

let listB = {
    value: 1,
    next: {
        value : 5,
        next: {
            value : 8
        }
    }
};
class Node{
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
}
class LinkedList{
    constructor(){
        this.value = null;
    }
   add(element) 
   { 
    var node = new Node(element); 
    var current; 
    if (this.value == null) 
        this.value = node; 
    else { 
        current = this.value; 
    while (current.next) { 
            current = current.next; 
        } 
    current.next = node; 
    } 
    } 
}

function mergeTwoLinkedLists(listA,listB){
 let valuesList=[];
 let list=listA;
 valuesList=getListValues(listA,valuesList);
  valuesList=getListValues(listB,valuesList);
  valuesList.sort();
  return createList(valuesList);
 }
 function createList(valuesList){
   let list = new LinkedList();
   for(let i=0;i<valuesList.length;i++){
     list.add(valuesList[i]);
   }
  return list;
 }
function getListValues(list,valuesList){
 while(list.next!==null){
   valuesList.push(list.value);
   if(list.next===undefined){
     break;
   }
   list=list.next;
 }
 return valuesList;
}
console.log(JSON.stringify(mergeTwoLinkedLists(listA, listB)));