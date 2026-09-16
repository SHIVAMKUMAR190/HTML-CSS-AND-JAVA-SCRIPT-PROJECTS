let jokes = [
  "टीचर: कल मैं सूरज पर लैक्चर देने जा रही हूं <br>तुम लोग क्लास मिस मत करना। <br><br>पप्पू: लेकिन मैं नहीं आ पाऊंगा मैडम.<br>टीचर: क्यूं?<br>पप्पू: वो क्या है कि मेरी मम्मी मुझे इतनी दूर नहीं जाने देंगी! 🤣",

  "बीमार पप्पू को देखने उसकी टीचर उसके घर आईं। टीचर ने देखा कि पप्पू बिस्तर पर सिर के बल खड़ा हुआ है।<br><br>टीचर: मैंने सुना था कि तुम बीमार हो पर तुम तो शीर्षासन कर रहे हो!<br>पप्पू: मैम बीमार ही हूं। अभी सिरदर्द की गोली खाई है, कहीं गलती से पेट में न चली जाए, इसलिए सिर के बल खड़ा हूं! 🤣",

  "टीचर गुस्से में: पप्पू यहां मैं पढ़ा रही हूं और तुम बातें कर रहे हो?<br><br>पप्पू: यहां हम बातें कर रहे हैं और आप बीच में हमें पढ़ाने में लगी हैं! 🤣",

  "छात्र पेपर दे रहा था, सवाल था: अंग्रेजी में अनुवाद करें – 'संतोष आम खाता है !'<br><br>छात्र ने अनुवाद किया:<br><strong>Satisfaction is a general account!!</strong> 🤣",

  "टीचर: अपने पापा का नाम अंग्रेजी में बोलो?<br>स्टूडेंट: ब्यूटिफुल रेड अंडरवियर!<br><br>टीचर: क्या बकवास है हिंदी में बताओ?<br>स्टूडेंट: सुंदर लाल चड्ढा… 🤣",

  "टीचर: बताओ तुम्हारा होमवर्क कहां है…<br><br>पप्पू: मैडम फेसबुक पर चेक करिए, मैंने स्क्रीनशॉट अपलोड कर दिए हैं और आपको टैग भी कर दिया है! 🤣",

  "मास्टर जी: गजल और भाषण में क्या अंतर है?<br><br>छात्र: पराई औरत का हर शब्द गजल है,<br>और अपनी पत्नी का हर शब्द भाषण!! 🤣",

  "मास्टर जी: सबसे ज्यादा नशा किसमें होता है?<br>छात्र: किताब में!<br><br>मास्टर जी: कैसे?<br>छात्र: क्योंकि किताब खोलते ही नींद आ जाती है! 🤣",

  "टीचर: गोलू तुम कई दिनों से स्कूल नहीं आ रहे थे, कहां थे?<br>गोलू: बर्ड फ्लू हो गया था।<br><br>टीचर: पर वो तो परिंदों को होता है…<br>गोलू: आपने मुझे इंसान समझा ही कब, रोज तो मुर्गा बनाते हो! 🤣"
];

let jokeBox = document.querySelector("#jokeBox");
let nextBtn = document.querySelector("#nextBtn");
let copyBtn = document.querySelector("#copyBtn");

let lastIndex = -1;

function getRandomIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * jokes.length);
  } while (index === lastIndex && jokes.length > 1);
  lastIndex = index;
  return index;
}

function updateJoke() {
  jokeBox.classList.add("fade-out");

  setTimeout(() => {
    jokeBox.innerHTML = jokes[getRandomIndex()];
    jokeBox.classList.remove("fade-out");
  }, 200);
}

nextBtn.addEventListener("click", updateJoke);

copyBtn.addEventListener("click", () => {
  let plainText = jokeBox.innerText;
  navigator.clipboard.writeText(plainText).then(() => {
    let originalText = copyBtn.innerText;
    copyBtn.innerText = "✓ Copied!";
    setTimeout(() => {
      copyBtn.innerText = originalText;
    }, 1500);
  });
});

updateJoke();