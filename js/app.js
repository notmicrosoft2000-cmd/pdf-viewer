(function () {
  "use strict";

  var DOCS = [
    {
      file: "GINGER.pdf",
      name: "GINGER",
      size: "547 KB"
    },
    {
      file: "Alone we fail together we prevail.pdf",
      name: "Alone we fail together we prevail",
      size: "100 KB"
    }
  ];

  var listEl = document.getElementById("docList");
  var viewer = document.getElementById("viewer");
  var frame = document.getElementById("pdfFrame");
  var viewerTitle = document.getElementById("viewerTitle");
  var closeBtn = document.getElementById("closeViewer");
  var soundToggle = document.getElementById("soundToggle");

  var audio = null;
  var soundOn = true;

  function ensureAudio() {
    if (!audio) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audio = new AC();
    }
    if (audio && audio.state === "suspended") audio.resume();
    return audio;
  }

  function randomBeep() {
    if (!soundOn) return;
    var ctx = ensureAudio();
    if (!ctx) return;

    var now = ctx.currentTime;
    var oscTypes = ["sine", "triangle", "square", "sawtooth"];
    var type = oscTypes[(Math.random() * oscTypes.length) | 0];
    var freq = 220 + Math.random() * 680;
    var dur = 0.06 + Math.random() * 0.12;

    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.12 + Math.random() * 0.18, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now);
    osc.stop(now + dur + 0.02);

    if (Math.random() < 0.4) {
      setTimeout(randomBeep, 40 + Math.random() * 120);
    }
  }

  function randomNoise() {
    if (!soundOn) return;
    var ctx = ensureAudio();
    if (!ctx) return;

    var now = ctx.currentTime;
    var dur = 0.04 + Math.random() * 0.08;
    var bufferSize = Math.max(1, Math.floor(ctx.sampleRate * dur));
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    var src = ctx.createBufferSource();
    var gain = ctx.createGain();
    var filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 400 + Math.random() * 2500;
    filter.Q.value = 1 + Math.random() * 4;

    gain.gain.value = 0.12 + Math.random() * 0.2;
    src.buffer = buffer;
    src.connect(filter).connect(gain).connect(ctx.destination);
    src.start(now);
  }

  function randomSound() {
    ensureAudio();
    if (Math.random() < 0.25) randomNoise();
    else randomBeep();
  }

  function spawnBurst() {
    if (!soundOn) return;
    ensureAudio();
    var n = 2 + (Math.random() * 3) | 0;
    for (var i = 0; i < n; i++) {
      setTimeout(function () {
        if (Math.random() < 0.3) randomNoise();
        else randomBeep();
      }, i * (60 + Math.random() * 90));
    }
  }

  function setSound(on) {
    soundOn = on;
    soundToggle.classList.toggle("off", !on);
    soundToggle.querySelector(".sound-icon").textContent = on ? "🔊" : "🔇";
    soundToggle.querySelector(".sound-label").textContent = on ? "အသံ ဖွင့်" : "အသံ ပိတ်";
    soundToggle.setAttribute("aria-pressed", String(on));
  }

  function renderList() {
    DOCS.forEach(function (doc) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";

      var icon = document.createElement("span");
      icon.className = "doc-icon";
      icon.textContent = "📄";

      var info = document.createElement("span");
      var name = document.createElement("span");
      name.className = "doc-name";
      name.textContent = doc.name;
      var meta = document.createElement("span");
      meta.className = "doc-meta";
      meta.textContent = "PDF စာရွက် · " + doc.size;
      info.appendChild(name);
      info.appendChild(document.createElement("br"));
      info.appendChild(meta);

      var arrow = document.createElement("span");
      arrow.className = "doc-arrow";
      arrow.textContent = "▶";

      btn.appendChild(icon);
      btn.appendChild(info);
      btn.appendChild(arrow);

      btn.addEventListener("click", function () {
        openDoc(doc);
      });

      li.appendChild(btn);
      listEl.appendChild(li);
    });
  }

  function openDoc(doc) {
    spawnBurst();
    viewerTitle.textContent = doc.name;
    frame.src = "pdfs/" + encodeURI(doc.file);
    viewer.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeDoc() {
    randomBeep();
    viewer.classList.add("hidden");
    frame.removeAttribute("src");
    document.body.style.overflow = "";
  }

  soundToggle.addEventListener("click", function () {
    setSound(!soundOn);
    if (soundOn) spawnBurst();
    else randomBeep();
  });

  closeBtn.addEventListener("click", closeDoc);

  document.addEventListener("click", function () {
    ensureAudio();
  });

  renderList();
})();