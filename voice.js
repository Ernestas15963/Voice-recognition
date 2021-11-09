const btn = document.querySelector('.talk');
const content = document.querySelector('.content');



const greetings = [
    'Thanks I am good',
    'doing good boy',
    'leave me alone'
]

const weather = [
    'Weather is fine',
    'You need a tan boy'
]

const hiBoss = [
    'Hi boss how are you',
    'hi Ernest'
]

const angry = [
    'Leave me alone'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//when the voice gets activated this will start run.
recognition.onstart = function () {
    console.log('voice is activated, you can speak');
}




// This event will hold the string what we are talking about. This part will exit when we will stop talking.
recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};





// add listener to the button
btn.addEventListener('click', () => {
    recognition.start();
});



// This part will read the text.
function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'i do not understand you, please repeat';

    // This part is responsible for listening and answering, if I ask how are you? It will answer random value from greetings array.
    if(message.includes('are you okay')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('why so angry')) {
        const angryOne = angry[Math.floor(Math.random() * angry.length)];
        speech.text = angryOne;
    }

    if(message.includes('how is the weather')) {
        const finalWeather = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalWeather;
    }

    if(message.includes('hi')) {
        const finalHi = hiBoss[Math.floor(Math.random() * hiBoss.length)];
        speech.text = finalHi;
    }

    speech.volume = 2;
    speech.rate = 0.9;
    speech.pitch =1;


    window.speechSynthesis.speak(speech);
}