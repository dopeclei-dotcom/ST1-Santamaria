const E = "Ethel Programming Computer Programming Services";

const D = [
  {
    t: "Basics of Cyber Security",
    m: "UniAthena × Cambridge International Qualifications · Aug 20, 2026",
    g: "cyber",
    s: "certs/cybersecurity-basics.jpg",
    alt: "Certificate of completion, Basics of Cyber Security",
    learned: "I learned the basic concepts of cybersecurity, including common cyber threats, online safety, data protection, and ways to protect information from unauthorized access."
  },

  {
    t: "Basics of Advanced Information Systems",
    m: "UniAthena × Cambridge International Qualifications · Oct 2, 2026",
    g: "cyber",
    s: "certs/Mae_certificate.jpg",
    alt: "Certificate of completion, Basics of Advanced Information Systems",
    learned: "I learned about the fundamentals of information systems and how technology, data, people, and processes work together to support organizations and their daily operations."
  },

  {
    t: "AI Tools for Digital Marketing and Media Literature",
    m: E + " · Aug 22, 2026 · 2 hr webinar",
    g: "ai",
    s: "certs/ai-digital-marketing.jpg",
    learned: "I learned how AI tools can be used to support digital marketing and media-related tasks. I also learned how AI can help create content, improve productivity, and support creative work."
  },

  {
    t: "Cybersecurity in iOS and Android Applications Development",
    m: E + " · Aug 23, 2026 · 1 hr 30 min webinar",
    g: "cyber dev",
    s: "certs/cybersecurity-ios-android.jpg",
    learned: "I learned about the importance of cybersecurity when developing mobile applications for iOS and Android. I learned that secure development practices can help protect user information and applications from security threats."
  },

  {
    t: "Deploy Your Website: Hosting, Domain and Cloud Deployment",
    m: E + " · Aug 21, 2026 · 1 hr webinar",
    g: "dev",
    s: "certs/hosting-cloud-deployment.jpg",
    learned: "I learned the basic process of deploying a website, including hosting, domains, and cloud deployment. I also gained a better understanding of how a website becomes accessible online."
  },

  {
    t: "IoT: Building Smarter Tools Connected System with AI Tools",
    m: E + " · Aug 21, 2026 · 1 hr webinar",
    g: "ai",
    s: "certs/iot-smarter-tools.jpg",
    learned: "I learned how Internet of Things (IoT) devices can connect and exchange information, and how AI tools can be integrated to create smarter and more useful connected systems."
  },

  {
    t: "Build, Commit, Deploy: Mastering Mobile Development with GitHub",
    m: E + " · Aug 20, 2026 · 1 hr webinar",
    g: "dev",
    s: "certs/mobile-dev-github.jpg",
    learned: "I learned how GitHub can be used in mobile development to manage source code, track changes, commit updates, and collaborate while developing an application."
  },

  {
    t: "Smart Tech Revolution: IoT, AI and Multimedia",
    m: E + " · Aug 22, 2026 · 1 hr webinar",
    g: "ai",
    s: "certs/smart-tech-revolution.jpg",
    learned: "I learned how IoT, AI, and multimedia technologies can work together to create smarter and more interactive digital solutions. The webinar also helped me understand how these technologies can be applied in different projects."
  },

  // PROOF OF PARTICIPATION
  {
    t: "Deploy Your Website: proof 1 of 3",
    m: "Google Meet screenshot · Aug 21, 2026",
    g: "dev proof",
    s: "proof of participation/DEPLOY1.png",
    p: 1
  },

  {
    t: "Deploy Your Website: proof 2 of 3",
    m: "Google Meet screenshot · Aug 21, 2026",
    g: "dev proof",
    s: "proof of participation/DEPLOY2.png",
    p: 1
  },

  {
    t: "Deploy Your Website: proof 3 of 3",
    m: "Google Meet screenshot · Aug 21, 2026",
    g: "dev proof",
    s: "proof of participation/DEPLOY3.png",
    p: 1
  },

  {
    t: "IoT Smarter Tools: proof 1 of 3",
    m: "Google Meet screenshot · Aug 21, 2026",
    g: "ai proof",
    s: "proof of participation/IoT.png",
    p: 1
  },

  {
    t: "IoT Smarter Tools: proof 2 of 3",
    m: "Google Meet screenshot · Aug 21, 2026",
    g: "ai proof",
    s: "proof of participation/IoT1.png",
    p: 1
  },

  {
    t: "IoT Smarter Tools: proof 3 of 3",
    m: "Google Meet screenshot · Aug 21, 2026",
    g: "ai proof",
    s: "proof of participation/IOT2.png",
    p: 1
  },

  {
    t: "Secure by Design: proof 1 of 2",
    m: "Google Meet screenshot · Aug 19, 2026",
    g: "cyber proof",
    s: "proof of participation/cybersecurity.jpeg",
    p: 1
  },

  {
    t: "Secure by Design: proof 2 of 2",
    m: "Google Meet screenshot · Aug 19, 2026",
    g: "cyber proof",
    s: "proof of participation/cyberseurity2.jpeg",
    p: 1
  }
];

const grid = document.getElementById("grid");
const lb = document.getElementById("lb");
const lbi = document.getElementById("lbi");
const lbt = document.getElementById("lbt");
const lbm = document.getElementById("lbm");
const lbx = document.getElementById("lbx");

D.forEach(d => {
  const b = document.createElement("button");

  b.className = "card";
  b.dataset.g = d.g;

  b.innerHTML =
    (d.p ? '<span class="tag">Proof</span>' : '') +
    '<img loading="lazy" alt="' + (d.alt || d.t) + '" src="' + encodeURI(d.s) + '">' +
    '<span class="info">' +
      '<h3>' + d.t + '</h3>' +
      '<span class="meta">' + d.m + '</span>' +
      '<span class="go" aria-hidden="true">↗</span>' +
    '</span>';

  b.onclick = () => {
    lbi.src = encodeURI(d.s);
    lbi.alt = d.t;
    lbt.textContent = d.t;

    if (d.learned) {
      lbm.innerHTML =
        '<span class="certificate-meta">' + d.m + '</span>' +
        '<span class="learn-label">WHAT I LEARNED</span>' +
        '<span class="learn-text">' + d.learned + '</span>';
    } else {
      lbm.innerHTML =
        '<span class="certificate-meta">' + d.m + '</span>';
    }

    lb.showModal();
  };

  grid.appendChild(b);
});

document.querySelectorAll(".chip").forEach(c => c.onclick = () => {
  document.querySelectorAll(".chip").forEach(x =>
    x.setAttribute("aria-pressed", x === c)
  );

  const f = c.dataset.f;

  grid.querySelectorAll(".card").forEach(k => {
    k.style.display =
      (f === "all" || k.dataset.g.split(" ").includes(f))
        ? ""
        : "none";
  });
});

lbx.onclick = () => lb.close();

lb.addEventListener("click", e => {
  if (e.target === lb) lb.close();
});