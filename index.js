let display = document.getElementById("display");
let arraylastEntry= new Array();
let backstring = new String();

function updatecharToDisplay(charin) {
    
    display.value += charin;
    arraylastEntry.push(charin);
    console.log(arraylastEntry);

}

function Calculate() {

    try{
        display.value = eval(display.value);
        }
    
    catch(error)
    {
        display.value="Error";
    }
}


function clearDisplay() {
    display.value=""
    arraylastEntry=[];
}

function DeletelastentryonDisplay() {

   if(!(arraylastEntry.length === 0))
    {
        console.log(arraylastEntry);
        arraylastEntry.pop();
        console.log(arraylastEntry);
        display.value =arraylastEntry
        backstring=display.value;
        console.log(backstring);
        display.value = backstring.replaceAll(",","");
        console.log(display.value);
   }


}