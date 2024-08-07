
var Box = document.querySelectorAll(".container div");
var count = 0;
var boxData = [["","",""], ["","",""], ["","",""]];
var Xwin = 0;
var Owin = 0;
var found = false;

for(var  i=0; i<Box.length; i++){
    Box[i].addEventListener("click", (e)=>{
        if(!found) {
            var box = e.target;
            var row = box.getAttribute("id")[0];
            var col = box.getAttribute("id")[1];
            if(count%2==0){
                if(boxData[row][col]==""){
                    box.innerHTML = "X";
                    boxData[row][col] = "X";
                    count++;
                }
                else{
                    alert("Already occupied! try other spaces");
                }
    
            }else{
                if(boxData[row][col]==""){
                    box.innerHTML = "O";
                    boxData[row][col] = "O";
                    count++;
                }else{
                    alert("Already occupied! try other spaces");
                }
            }
            checkWinner();
            if(count==9){
                setTimeout(removeData(),2000);
            } 
        }
    })
}

function removeData(){
    count=0;
    found = false;
    boxData = [["","",""], ["","",""], ["","",""]];
    for(var  i=0; i<Box.length; i++){
        Box[i].innerHTML = null;
    }
    document.getElementsByTagName("output")[0].innerHTML = null
    document.getElementsByTagName("output")[0].style.display = "none";
}

function checkWinner(){
    var winnerFound = false;
    var winner;
    if(boxData[0][0]==boxData[0][1] && boxData[0][1]==boxData[0][2] && boxData[0][0]!=""){
        winner = boxData[0][0];
        winnerFound = true;
    }
    else if(boxData[1][0]==boxData[1][1] && boxData[1][1]==boxData[1][2] && boxData[1][0]!=""){
        winner = boxData[1][0];
        winnerFound = true;
    }
    else if(boxData[2][0]==boxData[2][1] && boxData[2][1]==boxData[2][2] && boxData[2][0]!=""){
        winner = boxData[2][0];
        winnerFound = true;
    }
    else if(boxData[0][0]==boxData[1][0] && boxData[1][0]==boxData[2][0] && boxData[0][0]!=""){
        winner = boxData[0][0];
        winnerFound = true;
    }
    else if(boxData[0][1]==boxData[1][1] && boxData[1][1]==boxData[2][1] && boxData[0][1]!=""){
        winner = boxData[0][1];
        winnerFound = true;
    }
    else if(boxData[0][2]==boxData[1][2] && boxData[1][2]==boxData[2][2] && boxData[0][2]!=""){
        winner = boxData[0][2];
        winnerFound = true;
    }
    else if(boxData[0][0]==boxData[1][1] && boxData[1][1]==boxData[2][2] && boxData[0][0]!=""){
        winner = boxData[0][0];
        winnerFound = true;
    }
    else if(boxData[0][2]==boxData[1][1] && boxData[1][1]==boxData[2][0] && boxData[0][2]!=""){
        winner = boxData[0][2];
        winnerFound = true;
    }
    if(winnerFound && !found){
        if(winner=="X"){Xwin += 1;}
        else{ Owin += 1;}
        document.querySelector("#Xwin").innerHTML = Xwin;
        document.querySelector("#Owin").innerHTML = Owin;
        document.getElementsByTagName("output")[0].innerHTML = `${winner} WON THE GAME ! &#128514;`
        document.getElementsByTagName("output")[0].style.display = "flex";
        found = true;
        setTimeout(removeData, 2500);
    }
    
}

function reset(){
    Xwin=0;
    Owin=0;
    count=0;
    boxData = [["","",""], ["","",""], ["","",""]];
    for(var  i=0; i<Box.length; i++){
        Box[i].innerHTML = null;
    }
    document.getElementsByTagName("output")[0].innerHTML = null
    document.getElementsByTagName("output")[0].style.display = "none";
    document.getElementsByTagName("output")[0].style.scale = "0";
    document.querySelector("#Xwin").innerHTML = Xwin;
    document.querySelector("#Owin").innerHTML = Owin;
}