const changeBt = document.getElementById("changeBt");
const convertBt = document.getElementById("convertBt");

const fromSel = document.getElementsByName("fromSelect")[0];
const toSel = document.getElementsByName("toSelect")[0];

const fromTa = document.getElementsByName("fromText")[0];
const toTa = document.getElementsByName("toText")[0];

convertBt.onclick = function() {

    var fromText = fromTa.value;

    var fromLang = fromSel.options[fromSel.selectedIndex].value;
    var toLang = toSel.options[toSel.selectedIndex].value;

    var binary = "";


    if(fromLang == "else") {
        var i;
        for(i = 0; i < fromText.length; i++) {

            var char = fromText.charCodeAt(i).toString(2); //이진법으로 변환
            binary += char + " ";

        }
    } else if(fromLang == "mtt") {

        binary = fromText.replaceAll("말", "0").replaceAll("딸", "1"); //말딸로 구성된 말을 이진법으로 변환

    } else if(fromLang == "binary") {
        binary = fromText;
    }


    if(binary == "") return;


    var result = "";

    if(toLang == "else") {
        
        var array = binary.split(" ");

        var i;
        for(i = 0; i < array.length; i++) {

            var char = String.fromCharCode(parseInt(array[i], 2));
            result += char;

        }

    } else if(toLang == "binary") {
        result = binary;
    } else if(toLang == "mtt") {
        result = binary.replaceAll("0", "말").replaceAll("1", "딸")
    }

    toTa.value = result;
};

changeBt.onclick = function() {

    var fromIndex = fromSel.selectedIndex;
    var toIndex = toSel.selectedIndex;

    fromSel.options[toIndex].selected = true;
    toSel.options[fromIndex].selected = true;



    // fromSel.val(toValue).prop("selected", true)
    // toSel.val(fromValue).prop("selected", true)







}