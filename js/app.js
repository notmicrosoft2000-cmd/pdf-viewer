(function () {
  "use strict";

  var ERAS = [
    {
      num: "၁",
      my: "ဂျင်းဦးခေတ်",
      en: "Early Ginger",
      motto: "ဟင်းမရှိ မဖြစ်နိုင်",
      body:
        "ဂျင်းသည် ဟင်းခတ်အမွှေးအကြိုင်တစ်မျိုးအဖြစ်မှ နိုင်ငံရေး၊ စီးပွားရေးနှင့် အစိုးရအုပ်ချုပ်ရေးအထိ လွှမ်းမိုးသော အင်အားကြီးအရာအဖြစ် ပြောင်းလဲလာသည်။ "ဂျင်းမရှိလျှင် ဟင်းမဖြစ်နိုင်" ဆိုသော အယူအဆ ပေါ်ပေါက်ခဲ့ပြီး ဂျင်းအင်ပါယာသည် ဂျင်းစိုက်ခင်းများ၊ ဈေးကွက်များနှင့် ဟင်းချက်ခန်းများကို ထိန်းချုပ်ခဲ့သည်။ ဂျင်းဥပဒေအရ ဟင်းတစ်ခွက်ချက်ရာတွင် ဂျင်းအနည်းဆုံး နှစ်ကြိမ်ထည့်ရမည်။"
    },
    {
      num: "၂",
      my: "ဂျင်းဦးလတ်ခေတ်",
      en: "Early Middle Ginger",
      motto: "ဂျင်းလျှော့ပါ",
      body:
        "နိုင်ငံရေးပဋိပက္ခများ၊ တော်လှန်ရေးများ၊ အာဏာသိမ်းမှုများဖြင့် အရှုပ်ထွေးဆုံးခေတ်ဖြစ်သည်။ ဂျင်းမင်းကြီး ကောင်းခန့်ကျော် အုပ်ချုပ်ခဲ့ပြီး ပြည်သူများက "ဟင်းထဲတွင် ဂျင်းနည်းနည်းလျှော့ထည့်ပါ" ဟု တောင်းဆိုခဲ့ကြသည်။ ကုဗတုံးလှည့်ပြည်ထောင်စုကြီး ပေါ်ပေါက်၍ နောက်ဆုံးတွင် ပျက်သုဉ်းခဲ့သည်။ ဂျင်းအင်ပါယာလည်း ကျဆင်းခဲ့သည်။"
    },
    {
      num: "၃",
      my: "ဂျင်းဦးနှောင်းခေတ်",
      en: "Early Late Ginger",
      motto: "ဘာလုပ်လုပ် ဂျင်းပါရမည်",
      body:
        "ဂျင်းသုံးစွဲမှု အမြင့်ဆုံးထိရောက်သည့်ခေတ်ဖြစ်သည်။ ဂျင်းရေချိုးရေးဥပဒေ၊ "တစ်အိမ်တစ်ဂျင်း" အမိန့်၊ ဂျင်းအဝတ်အစားများနှင့် အမျိုးသားဂျင်းအသုံးပြုမှု မဟာစီမံကိန်း ပေါ်ပေါက်ခဲ့သည်။ ဂျင်းသည် ဘဝပုံစံတစ်ခုလုံး ဖြစ်လာပြီး "ဘာလုပ်လုပ် ဂျင်းပါရမည်" ဆိုသည့် သမိုင်းတွင် အကျော်ကြားဆုံး မှတ်ချက်ဖြစ်ခဲ့သည်။"
    },
    {
      num: "၄",
      my: "ဂျင်းနှောင်းဦးခေတ်",
      en: "Late Ginger",
      motto: "ဂျင်းသာသနာ",
      body:
        "ဂျင်း၏အာဏာ အမြင့်ဆုံးသို့ ရောက်ရှိခဲ့သည့် ခေတ်ဖြစ်သည်။ ဂျင်းသာသနာတော်ကို နိုင်ငံတော်ဘာသာအဖြစ် သတ်မှတ်ခဲ့ပြီး ဂျင်းဘုရားရှင်ကြီးက ကမ္ဘာကို ဂျင်းတစ်တုံးထဲမှ ဖန်ဆင်းခဲ့သည်ဟု ယုံကြည်ကြသည်။ ဂျင်းပြက္ခဒိန်၊ ဂျင်းနေ့များ၊ မဟာဂျင်းတပ်မတော် တို့ပေါ်ပေါက်ခဲ့သည်။ "ဂျင်းမပါသောအရာသည် မပြည့်စုံ။""
    },
    {
      num: "၅",
      my: "ဒေးပစ်ခေတ်",
      en: "David Age",
      motto: "ပျောက်ကွယ်ခြင်း",
      body:
        "နောက်ဆုံးခေတ်ဖြစ်သည်။ ဂျင်းအင်ပါယာ ပြိုကွဲကာ နယ်စားပြည်များဖြစ်လာသည်။ နယ်စားစစ်ပွဲများ၊ ဂျင်းတော်လှန်ရေး ("ဂျင်းလျှော့ပါ") ဖြင့် ပျက်စီးသွားခဲ့သည်။ ခရစ်နှစ် ၁၀၄၄ တွင် "ဂျင်းလူမျိုးတို့၏ နောက်ဆုံးနေ့" ဖြစ်ခဲ့သည်။ ကျန်ရစ်သည့် အမွေအနှစ်မှာ "ဟင်းတိုင်းတွင် ဂျင်းထည့်ချင်သည့် အလွန်အကျွံဆန္ဒ" ဖြစ်သည်။"
    }
  ];

  var QUESTIONS = [
    {
      q: "ဂျင်းလူမျိုးတို့သည် မြန်မာပြည်၏ မည်သည့်အပိုင်းမှ စတင်ဝင်ရောက်လာခဲ့သနည်း။",
      opts: ["အရှေ့ပိုင်း", "အမြောက်ပိုင်း", "အနောက်ပိုင်း", "တောင်ပိုင်း"],
      ans: 1
    },
    {
      q: "ဂျင်းသမိုင်းကို ခေတ်မည်မျှ ပိုင်းခြားနိုင်သနည်း။",
      opts: ["၃ ခေတ်", "၄ ခေတ်", "၅ ခေတ်", "၆ ခေတ်"],
      ans: 2
    },
    {
      q: "ဂျင်းဦးခေတ်တွင် ပေါ်ပေါက်ခဲ့သော အယူအဆမှာ —",
      opts: [
        ""ဂျင်းမရှိလျှင် ဟင်းမဖြစ်နိုင်"",
        ""ဂျင်းနည်းနည်းပဲထားပါ"",
        ""ဂျင်းလျှော့ပါ"",
        ""ဂျင်းကောင်းပါစေ""
      ],
      ans: 0
    },
    {
      q: "ဂျင်းဥပဒေအရ ဟင်းတစ်ခွက်ချက်ရာတွင် ဂျင်းကို အနည်းဆုံး မည်မျှထည့်ရမည်နည်း။",
      opts: ["တစ်ကြိမ်", "နှစ်ကြိမ်", "သုံးကြိမ်", "တစ်အိုးလုံး"],
      ans: 1
    },
    {
      q: "ဂျင်းဦးလတ်ခေတ်၏ အထင်ရှားဆုံး အုပ်ချုပ်သူမှာ —",
      opts: ["ကုဗမင်းကြီး", "ဒေးပစ်", "ဂျင်းမင်းကြီး ကောင်းခန့်ကျော်", "ဂျင်းဝန်ကြီးချုပ်"],
      ans: 2
    },
    {
      q: "ကုဗတုံးလှည့်ပြည်ထောင်စုကြီး၏ ဘုရင်မှာ —",
      opts: ["ကုဗမင်းကြီး", "ဂျင်းမင်းကြီး", "ဒေးပစ်မင်း", "နနွင်းဘုရင်"],
      ans: 0
    },
    {
      q: ""တစ်အိမ်တစ်ဂျင်း" အမိန့်ကို မည်သည့်ခေတ်တွင် ထုတ်ပြန်ခဲ့သနည်း။",
      opts: ["ဂျင်းဦးခေတ်", "ဂျင်းဦးလတ်ခေတ်", "ဂျင်းဦးနှောင်းခေတ်", "ဒေးပစ်ခေတ်"],
      ans: 2
    },
    {
      q: "ဂျင်းသာသနာတော်ကို နိုင်ငံတော်ဘာသာအဖြစ် မည်သည့်ခေတ်တွင် သတ်မှတ်ခဲ့သနည်း။",
      opts: ["ဂျင်းနှောင်းဦးခေတ်", "ဂျင်းဦးခေတ်", "ဒေးပစ်ခေတ်", "ဂျင်းဦးနှောင်းခေတ်"],
      ans: 0
    },
    {
      q: ""ဂျင်းမပါသောအရာသည် မပြည့်စုံ" ဟု အမိန့်ထုတ်ပြန်ခဲ့သူမှာ —",
      opts: ["ဒေးပစ်", "ကောင်းခန့်ကျော်မင်း", "ကုဗမင်းကြီး", "ဂျင်းဝန်ကြီးချုပ်"],
      ans: 1
    },
    {
      q: "ဂျင်းလူမျိုးတို့၏ နောက်ဆုံးနေ့ကို မည်သည့်နှစ်အဖြစ် သမိုင်းပညာရှင်များက သတ်မှတ်ခဲ့သနည်း။",
      opts: ["ဘီစီ ၇၄၂", "ခရစ်နှစ် ၈၄၉", "ခရစ်နှစ် ၁၀၄၄", "ခရစ်နှစ် ၉၇၁"],
      ans: 2
    },
    {
      q: "ဂျင်းတော်လှန်ရေး၏ အဓိကဆောင်ပုဒ်မှာ —",
      opts: [""ဂျင်းလျှော့ပါ"", ""ဂျင်းကောင်းပါစေ"", ""ဂျင်းမရှိလျှင် ဟင်းမဖြစ်နိုင်"", ""ဂျင်းနည်းနည်းပဲထားပါ""],
      ans: 0
    },
    {
      q: "ယနေ့တိုင် ကျန်ရှိနေသော ဂျင်းလူမျိုးတို့၏ အကြီးမားဆုံး အမွေအနှစ်မှာ —",
      opts: [
        "ဂျင်းဘုရားကျောင်းများ",
        "ဟင်းတိုင်းတွင် ဂျင်းထည့်ချင်သည့် ဆန္ဒ",
        "ဂျင်းပြက္ခဒိန်",
        "ဂျင်းသွားတိုက်ဆေး"
      ],
      ans: 1
    }
  ];

  var LETTERS = ["က", "ခ", "ဂ", "ဃ"];

  var bookBtn   = document.getElementById("openBook");
  var hall      = document.getElementById("hall");
  var closeHall = document.getElementById("closeHall");
  var bookFrame = document.getElementById("bookFrame");
  var soundBtn  = document.getElementById("soundToggle");
  var eraList   = document.getElementById("eraList");
  var quizEl    = document.getElementById("quiz");
  var tabs      = document.querySelectorAll(".tab");
  var panes     = document.querySelectorAll(".pane");

  var audio = null;
  var soundOn = true;

  /* ─── AUDIO ─── */

  function ctx() {
    if (!audio) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audio = new AC();
    }
    if (audio && audio.state === "suspended") audio.resume();
    return audio;
  }

  function beep() {
    if (!soundOn) return;
    var c = ctx(); if (!c) return;
    var t = c.currentTime;
    var w = ["sine", "triangle", "square", "sawtooth"][(Math.random() * 4) | 0];
    var f = 220 + Math.random() * 780;
    var d = 0.05 + Math.random() * 0.14;
    var o = c.createOscillator();
    var g = c.createGain();
    o.type = w;
    o.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.12 + Math.random() * 0.18, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g).connect(c.destination);
    o.start(t);
    o.stop(t + d + 0.02);
    if (Math.random() < 0.35) setTimeout(beep, 30 + Math.random() * 90);
  }

  function gong() {
    if (!soundOn) return;
    var c = ctx(); if (!c) return;
    var t = c.currentTime;
    [110, 220, 330].forEach(function (f, i) {
      var o = c.createOscillator();
      var g = c.createGain();
      o.type = "sine";
      o.frequency.value = f;
      var vol = 0.15 / (i + 1);
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6 + Math.random() * 0.4);
      o.connect(g).connect(c.destination);
      o.start(t + i * 0.04);
      o.stop(t + 2.4);
    });
  }

  function burst() {
    var n = 2 + (Math.random() * 3) | 0;
    for (var i = 0; i < n; i++) setTimeout(beep, i * (50 + Math.random() * 100));
  }

  function toggleSound() {
    soundOn = !soundOn;
    soundBtn.classList.toggle("off", !soundOn);
    soundBtn.querySelector(".mute-label").textContent =
      soundOn ? "ခေါင်းလောင်း မြည်နေသည်" : "ခေါင်းလောင်း တိတ်နေသည်";
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    if (soundOn) burst();
  }

  soundBtn.addEventListener("click", toggleSound);

  /* ─── TABS ─── */

  function activateTab(name) {
    beep();
    tabs.forEach(function (t) { t.classList.toggle("is-on", t.dataset.tab === name); });
    panes.forEach(function (p) { p.classList.toggle("is-on", p.dataset.pane === name); });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { activateTab(t.dataset.tab); });
  });

  /* ─── READING HALL ─── */

  bookBtn.addEventListener("click", function () {
    gong();
    bookFrame.src = "pdfs/GINGER.pdf";
    hall.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
  });

  closeHall.addEventListener("click", function () {
    beep();
    hall.setAttribute("hidden", "");
    bookFrame.removeAttribute("src");
    document.body.style.overflow = "";
  });

  /* ─── SUMMARY ─── */

  function renderEras() {
    ERAS.forEach(function (e) {
      var el = document.createElement("div");
      el.className = "tablet";
      el.innerHTML =
        '<div class="tablet-head">' +
          '<span class="tablet-num">' + e.num + '</span>' +
          '<div class="tablet-titles">' +
            '<div class="tablet-my">' + e.my + '</div>' +
            '<div class="tablet-en">' + e.en + '</div>' +
          '</div>' +
          '<span class="tablet-motto">' + e.motto + '</span>' +
        '</div>' +
        '<div class="tablet-body"><p>' + e.body + '</p></div>';
      el.addEventListener("click", function () { beep(); });
      eraList.appendChild(el);
    });
  }

  renderEras();

  /* ─── QUIZ ─── */

  var qIdx = 0;
  var score = 0;
  var answered = false;

  function scoreMessage(pct) {
    if (pct >= 90) return "ဂျင်းမင်းကြီး ဖြစ်သည်။";
    if (pct >= 70) return "ဂျင်းသစ္စာရှင် ဖြစ်သည်။";
    if (pct >= 50) return "ဂျင်းမုန့်ဖိတ် စားချင်သည်ဟု ထင်ပါသည်။";
    return "ဂျင်းကို ထပ်ဖတ်ပါ။";
  }

  function renderQuiz() {
    qIdx = 0;
    score = 0;
    answered = false;
    showQuestion();
  }

  function showQuestion() {
    if (qIdx >= QUESTIONS.length) { showScore(); return; }
    var q = QUESTIONS[qIdx];
    answered = false;

    var card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML =
      '<div class="quiz-meta">' +
        '<span>မေးခွန်း ' + (qIdx + 1) + ' / ' + QUESTIONS.length + '</span>' +
        '<span>ရမှတ် ' + score + '</span>' +
      '</div>' +
      '<div class="quiz-q">' + q.q + '</div>' +
      '<div class="quiz-opts" id="quizOpts"></div>';

    quizEl.innerHTML = "";
    quizEl.appendChild(card);

    var optsWrap = card.querySelector("#quizOpts");
    q.opts.forEach(function (opt, i) {
      var btn = document.createElement("button");
      btn.className = "quiz-opt";
      btn.type = "button";
      btn.innerHTML =
        '<span class="opt-letter">' + LETTERS[i] + '</span> ' + opt;
      btn.addEventListener("click", function () { pickAnswer(btn, i); });
      optsWrap.appendChild(btn);
    });
  }

  function pickAnswer(btn, chosen) {
    if (answered) return;
    answered = true;
    var q = QUESTIONS[qIdx];
    var opts = btn.parentElement.querySelectorAll(".quiz-opt");
    var correct = chosen === q.ans;

    opts.forEach(function (o, i) {
      o.disabled = true;
      if (i === q.ans) o.classList.add("right");
      if (i === chosen && !correct) o.classList.add("wrong");
    });

    if (correct) { score++; beep(); } else { beep(); setTimeout(beep, 120); }

    var card = btn.closest(".quiz-card");
    var fb = document.createElement("div");
    fb.className = "quiz-feedback";
    fb.textContent = correct ? "○ ကောင်းပါသည်။" : "✕ မှန်ခြင်းမရှိပါ။";
    card.appendChild(fb);

    setTimeout(function () { qIdx++; showQuestion(); }, correct ? 600 : 900);
  }

  function showScore() {
    var pct = Math.round((score / QUESTIONS.length) * 100);
    gong();
    setTimeout(gong, 350);

    var card = document.createElement("div");
    card.className = "quiz-score";
    card.innerHTML =
      '<div class="big">' + score + '/' + QUESTIONS.length + '</div>' +
      '<div class="verdict">' + scoreMessage(pct) + '</div>' +
      '<div class="sub">ရာခိုင်နှုန်း ' + pct + '%</div>' +
      '<button class="restart-btn" type="button">◆ ထပ်ကြိုးစားမည်</button>';
    card.querySelector(".restart-btn").addEventListener("click", function () { renderQuiz(); beep(); });
    quizEl.innerHTML = "";
    quizEl.appendChild(card);
  }

  renderQuiz();

  /* ─── INIT ─── */

  document.addEventListener("click", function () { ctx(); });

})();