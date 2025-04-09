 // arrays (used to store multiple values)

 let chocolates=["Dairy Milk","Five Star", "Galaxy", "Toblerone"];
 console.log(chocolates);
 console.log(chocolates[0]);
 console.log(chocolates[1]);
 console.log(chocolates[2]);
 console.log(chocolates[3]);
 console.log(chocolates.length);
 console.log(chocolates [chocolates.length-1]);

 let sample=[1,"Hello",true,null,undefined,{id:1}];
 console.log(sample);

 //Array Constructor

 let newArray = new Array()
 newArray[0]="First"
 newArray[1]="Second"
 newArray[2]="Third"
 newArray[3]="Fourth"
 console.log(newArray);
 console.log(newArray.length);

 //Dense & Sparse array

 let denseArray=[1,2,3,4,5] //Contiguous Memeory
 //            1004,1008,1012,1016,1020
// formula=baseaddress + (index*size)
//            1004 + (0 + 4) = 1008
 console.log(denseArray);
 
 let sparseArray=[1,2,,4,,6] // Hash Table or Hash Map
 console.log(sparseArray);

