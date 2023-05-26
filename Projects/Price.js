function autoPrice() {
    let kms=document.getElementById('textBox1').value;
    if(kms>0)
    {
        var res=kms*30;
        alert(`${"AUTO FARE--> "}`+res+`${" RUPEES"}`);
    }
    else{
        alert("Enter only Numbers!!")
    }
}

function busPrice() {
    let kms=document.getElementById('textBox2').value;
    if(kms>0)
    {
        var res=kms*5;
        alert(`${"BUS FARE--> "}`+res+`${" RUPEES"}`);
    }
    else{
        alert(`${"Enter Numbers Only!!"}`)
    }
}

function bikePrice() {
    let kms=document.getElementById('textBox3').value;
    if(kms>0)
    {
        var res=kms*20;
        alert(`${"BIKE FARE--> "}`+res+`${" RUPEES"}`);
    }
    else{
        alert("Enter only Numbers!!")
    }
}