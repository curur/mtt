const toSelect = document.getElementById("to-select");

const converButton = document.getElementById("button");

converButton.onclick = function() {

    var from = document.getElementsByName("from-lang")[0];
    var to = document.getElementsByName("to-lang")[0];


    var fromLang = from.options[from.selectedIndex].value;
    var toLang = to.options[to.selectedIndex].value;

    var fromStr = document.getElementById("from");
    var toStr = document.getElementById("to");

    if(fromLang == "text" && toLang == "말딸") {

        var i;
        var result = "";
        for(i = 0; i < fromStr.value.length; i++) {
            console.log("for loop" + i)

            var code = fromStr.value.charCodeAt(i).toString(2);
            console.log(fromStr.value[i] + code)

            var ii;
            for(ii = 0; ii < code.length; ii++) {
                console.log("for loop 2" + code.length + "  " + ii)
                if(code[ii] == 1) {
                    result += "딸";
                } else {
                    result += "말";
                }
            }
            result += " ";
        }
        
        toStr.value = result;

    } else if(fromLang == "말딸" && toLang == "text") {

        var binary = fromStr.value.replaceAll("말", "0").replaceAll("딸", "1");

        var result = "";

        var i;
        var array = binary.split(" ")

        for(i = 0; i < array.length; i++) {

            var binaryCode = array[i]
            var decemalCode = parseInt(binaryCode, 2)
            var char = String.fromCharCode(decemalCode)

            result += char
        }

        toStr.value = result;

    }

    

    

    // 말딸, 딸말, 이, text



}
