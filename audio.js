var list = document.getElementById("list")
var text = document.getElementById("text")
var button = document.getElementById("button")
var ss = speechSynthesis
ss.addEventListener("voiceschanged",loadVoiceList)

function loadVoiceList(){
    for (voices of ss.getVoices()){
        // console.log(voices)
        var option = document.createElement("option")
        option.value = voices.name;
        option.innerText = `${voices.name}`
        list.appendChild(option)
    }
}

var button = document.getElementById("button")
button.onclick = function(){
    if (text.value !== "" && !ss.speaking){
        // console.log(text.value)
        var ssu = new SpeechSynthesisUtterance(text.value);
        for (voice of ss.getVoices()){
            if (voice.name == list.value){
                // console.log(list.value)
                ssu.voice = voice
            }
        }
        ss.speak(ssu);
    }
}