/////// Recebendo o botão////////

////// Recebendo e preenchendo os quadrados



var btstart = document.getElementById("btstart");
 

var quad1 = document.getElementById("q1")

var quad2 = document.getElementById("q2")

var quad3 = document.getElementById("q3")

var quad4 = document.getElementById("q4")

var quad5 = document.getElementById("q5")

var quad6 = document.getElementById("q6")

var quad7 = document.getElementById("q7")

var quad8 = document.getElementById("q8")

var quad9 = document.getElementById("q9")

//////////////////////////////////////////////////


//////// Função de numerar as jogadas


function start() {

clean()


     limit=10
    for (let i = 1; i < limit  ; i++) {


        if (i % 2 != 0 ) {

            vrfcrclq(1)

           
            




        }else{

        }
        
        
    }
}
let cont = 0; 
function nclq () {
    cont++; 
    return cont;
}
function vrfcrclq(letter) {

    let nmbrcliq=nclq()
   prntrjgdr(letter)
    if (nmbrcliq >= 4) {
        vrfcrwin(letter)
    }
    mrcrdr(letter);

}
function prntrjgdr(player){
if (player === 1) 
{
    jgdr2.style=  'color: gray;';
let jgdr1=document.getElementById("jgdr1")
jgdr1.style=  'color: white;font-size: 3.9vw;';



}
else if(player === 2){
    jgdr1.style=  'color: gray;';
    let jgdr2=document.getElementById("jgdr2")
    jgdr2.style=  'color: white;font-size: 3.9vw;';
   

}

}
function mrcrdr(letter) {
    quad1.onclick = function () {
        if (quad1.innerText === "") {
            if (letter === 1) {
                marcar(1);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(1);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad2.onclick = function () {
        if (quad2.innerText === "") {
            if (letter === 1) {
                marcar(2);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(2);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad3.onclick = function () {
        if (quad3.innerText === "") {
            if (letter === 1) {
                marcar(3);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(3);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad4.onclick = function () {
        if (quad4.innerText === "") {
            if (letter === 1) {
                marcar(4);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(4);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad5.onclick = function () {
        if (quad5.innerText === "") {
            if (letter === 1) {
                marcar(5);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(5);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad6.onclick = function () {
        if (quad6.innerText === "") {
            if (letter === 1) {
                marcar(6);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(6);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad7.onclick = function () {
        if (quad7.innerText === "") {
            if (letter === 1) {
                marcar(7);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(7);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad8.onclick = function () {
        if (quad8.innerText === "") {
            if (letter === 1) {
                marcar(8);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(8);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
    quad9.onclick = function () {
        if (quad9.innerText === "") {
            if (letter === 1) {
                marcar(9);
                vrfcrclq(2); // Update event listeners
            } else if (letter === 2) {
                marcarO(9);
                vrfcrclq(1); // Update event listeners
            }
        }
    };
}
function marcarO(numb) {

    let nmr = numb

    if (nmr === 1) {

        quad1.innerText = "O"
    } else if (nmr === 2) {

        quad2.innerText = "O"
    }
    else if (nmr === 3) {
        quad3.innerText = "O"

    }
    else if (nmr === 4) {
        quad4.innerText = "O"

    }
    else if (nmr === 5) {
        quad5.innerText = "O"

    }
    else if (nmr === 6) {
        quad6.innerText = "O"

    }
    else if (nmr === 7) {
        quad7.innerText = "O"

    }
    else if (nmr === 8) {
        quad8.innerText = "O"

    } else if (nmr === 9) {
        quad9.innerText = "O"
    }



    vrfcrclq(2);
}
function marcar(numb) {

    let nmr = numb

    if (nmr === 1) {

        quad1.innerText = "X"
    } else if (nmr === 2) {

        quad2.innerText = "X"
    }
    else if (nmr === 3) {
        quad3.innerText = "X"

    }
    else if (nmr === 4) {
        quad4.innerText = "X"

    }
    else if (nmr === 5) {
        quad5.innerText = "X"

    }
    else if (nmr === 6) {
        quad6.innerText = "X"

    }
    else if (nmr === 7) {
        quad7.innerText = "X"

    }
    else if (nmr === 8) {
        quad8.innerText = "X"

    } else if (nmr === 9) {
        quad9.innerText = "X"
    }
    vrfcrclq(1);
}
function vrfcrwin(letter) {

    function trsnfrm1inX(letter) {
        if (letter === 1) {
            return "X";
        } else if (letter === 2) {
            return "O";
        } else {
            console.log("Invalid player!");
            return null;
        }
    }
   
   

    let lett = trsnfrm1inX(letter);
    
    vrfcrvlh()
   
    if (
        (quad1.innerText === quad2.innerText && quad2.innerText === quad3.innerText) &&
        (quad1.innerText === lett)
    ) {
       
        
        dclrarvcdr(lett);
    } else if (
        (quad4.innerText === quad5.innerText && quad5.innerText === quad6.innerText) &&
        (quad4.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    } else if (
        (quad7.innerText === quad8.innerText && quad8.innerText === quad9.innerText) &&
        (quad7.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    } else if (
        (quad1.innerText === quad5.innerText && quad5.innerText === quad9.innerText) &&
        (quad1.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    } else if (
        (quad3.innerText === quad5.innerText && quad5.innerText === quad7.innerText) &&
        (quad3.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    } else if (
        (quad1.innerText === quad4.innerText && quad4.innerText === quad7.innerText) &&
        (quad1.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    } else if (
        (quad2.innerText === quad5.innerText && quad5.innerText === quad8.innerText) &&
        (quad2.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    } else if (
        (quad3.innerText === quad6.innerText && quad6.innerText === quad9.innerText) &&
        (quad3.innerText === lett)
    ) {
        
        dclrarvcdr(lett);
    }
}
function vrfcrvlh() {
    if (
        (quad1.innerText === "X" || quad1.innerText === "O") &&
       ( quad2.innerText === "X" || quad2.innerText === "O") &&
        (quad3.innerText === "X" || quad3.innerText === "O") &&
        (quad4.innerText === "X" || quad4.innerText === "O") &&
        (quad5.innerText === "X" || quad5.innerText === "O" )&&
        (quad6.innerText === "X" || quad6.innerText === "O") &&
       ( quad7.innerText === "X" || quad7.innerText === "O") &&
        (quad8.innerText === "X" || quad8.innerText === "O") &&
        (quad9.innerText === "X" || quad9.innerText === "O")
    ) {
     
        stop(3)
        clean()
        rncr(3)
    }

}
function dclrarvcdr(XorO) {

 
    
    if (XorO === "X") {
        
        console.log("Vai ser ruim O");
        stop(1)
    } else if (XorO === "O") {
        
        console.log("Tinha que ser o x ");
        stop(2)
    } else {
        console.log("Error in the dclrarvcdr function");
    }
}
function stop(nmbr){
let cont=0
cont ++
clean()
rncr(nmbr)

return cont

}
function clean(){

quad1.innerText=null
quad2.innerText=null
quad3.innerText=null
quad4.innerText=null
quad5.innerText=null
quad6.innerText=null
quad7.innerText=null
quad8.innerText=null
quad9.innerText=null
}
function rncr(nmbr){
    let main = document.getElementById("min");
    let offCanvas = document.getElementById("off");
    let btMarcar = document.getElementById("Jgd");
 
        main.style=  ' display:none';
        offCanvas.style=  'display:flex'; 

    if (nmbr===1) {
        btMarcar.innerText= "Jogador X Ganhou, Parabéns" 
    }else if (nmbr ===2) 
    {
        btMarcar.innerText= "Jogador O Ganhou, Parabéns"
    }else if (nmbr===3){
        btMarcar.innerText= "Deu velha"
    }



}
function clnbt(){
    let main = document.getElementById("min");
    let offCanvas = document.getElementById("off");
   
 
        main.style=  ' display:flex';
        offCanvas.style=  'display:none'; 

    
}
//////////////////////////////////////////////////////////


