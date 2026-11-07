/* Beta Gamma congratulations pop-up with confetti. Shows once per visit.
   To turn it off later, delete the <script src="js/congrats.js"> line in index.html. */
(function () {
  try { if (sessionStorage.getItem("congratsBG")) return; } catch (e) {}

  const wrap = document.createElement("div");
  wrap.className = "congrats";
  wrap.hidden = true;
  wrap.setAttribute("role", "dialog");
  wrap.setAttribute("aria-modal", "true");
  wrap.setAttribute("aria-labelledby", "congrats-title");
  wrap.innerHTML =
    '<canvas class="congrats-confetti" aria-hidden="true"></canvas>' +
    '<div class="congrats-card">' +
      '<button class="congrats-close" type="button" aria-label="Close">&times;</button>' +
      '<img src="images/chapter/life-new-members-2.jpg" alt="The Beta Gamma pledge class with the Tau Chi chapter">' +
      '<div class="congrats-body">' +
        '<p class="congrats-kicker">Welcome to the brotherhood</p>' +
        '<h2 id="congrats-title">Congratulations, Beta Gamma!</h2>' +
        '<p>Congratulations to the Beta Gamma pledge class on completing the pledge process. The Tau Chi chapter is proud to call you brothers.</p>' +
        '<button class="btn btn-gold congrats-ok" type="button">Celebrate with us</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(wrap);

  const canvas = wrap.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const colors = ["#c9a227", "#e6c65a", "#f3e7bf", "#0b2545", "#ffffff", "#1d4e89"];
  let pieces = [], raf = null, lastFocus = null;

  function size() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function burst(n) {
    for (let i = 0; i < n; i++) {
      const fromLeft = i % 2 === 0;
      pieces.push({
        x: fromLeft ? -10 : innerWidth + 10, y: innerHeight * (0.55 + Math.random() * 0.3),
        vx: (fromLeft ? 1 : -1) * (4 + Math.random() * 9), vy: -(9 + Math.random() * 11),
        w: 6 + Math.random() * 6, h: 9 + Math.random() * 8, r: Math.random() * Math.PI,
        vr: (Math.random() - .5) * .3, c: colors[(Math.random() * colors.length) | 0], life: 0
      });
    }
    for (let i = 0; i < n / 2; i++) {   // gentle shower from the top
      pieces.push({ x: Math.random() * innerWidth, y: -20 - Math.random() * innerHeight * .5,
        vx: (Math.random() - .5) * 2, vy: 1 + Math.random() * 2, w: 6 + Math.random() * 5, h: 8 + Math.random() * 7,
        r: Math.random() * Math.PI, vr: (Math.random() - .5) * .25, c: colors[(Math.random() * colors.length) | 0], life: 0 });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pieces = pieces.filter(p => p.y < innerHeight + 40 && p.life < 600);
    for (const p of pieces) {
      p.life++; p.vy += 0.25; p.vx *= 0.985; p.vy = Math.min(p.vy, 5.5);
      p.x += p.vx + Math.sin(p.life / 12) * 0.6; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.scale(1, Math.cos(p.life / 8));   // flutter
      ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    }
    raf = pieces.length ? requestAnimationFrame(tick) : null;
  }

  function open() {
    lastFocus = document.activeElement;
    wrap.hidden = false; size();
    requestAnimationFrame(() => wrap.classList.add("show"));
    wrap.querySelector(".congrats-ok").focus({ preventScroll: true });
    if (!reduce) { burst(140); setTimeout(() => burst(90), 900); }
    try { sessionStorage.setItem("congratsBG", "1"); } catch (e) {}
  }
  function close() {
    wrap.classList.remove("show");
    setTimeout(() => { wrap.hidden = true; pieces = []; if (raf) cancelAnimationFrame(raf); raf = null; }, 350);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  wrap.querySelector(".congrats-close").addEventListener("click", close);
  wrap.querySelector(".congrats-ok").addEventListener("click", () => { if (!reduce) burst(120); setTimeout(close, 900); });
  wrap.addEventListener("click", e => { if (e.target === wrap) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !wrap.hidden) close(); });
  addEventListener("resize", () => { if (!wrap.hidden) size(); });

  // Wait for the ΑΚΨ intro to finish before showing
  const introSeen = document.documentElement.classList.contains("intro-seen");
  setTimeout(open, introSeen ? 700 : 2100);
})();
