/* Builds the parts of the site that come from data/site-data.js.
   You normally don't need to edit this file. */

(function () {
  const S = window.SITE || {};

  /* ---------- Opening animation (home page) ---------- */
  const intro = document.querySelector(".intro");
  if (intro) {
    const done = () => {
      intro.classList.add("intro-done");
      try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
    };
    intro.addEventListener("click", done);                 // click / tap to skip
    intro.addEventListener("animationend", (e) => { if (e.animationName === "introOut") done(); });
  }

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  /* ---------- Highlight the current page in the nav ---------- */
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("active");
    a.addEventListener("click", () => links && links.classList.remove("open")); // close mobile menu
  });

  /* ---------- Footer: contact links + year ---------- */
  document.querySelectorAll("[data-email]").forEach((el) => {
    if (!S.email) return el.remove();
    el.href = "mailto:" + S.email;
    el.textContent = S.email;
  });
  // Recruitment buttons → Linktree (falls back to this site's Recruitment page)
  document.querySelectorAll("[data-linktree]").forEach((el) => {
    if (S.linktree) { el.href = S.linktree; el.target = "_blank"; el.rel = "noopener"; }
    else el.href = "recruitment.html";
  });
  document.querySelectorAll("[data-depaul-orgs]").forEach((el) => (S.depaulOrgs ? (el.href = S.depaulOrgs) : el.remove()));
  // Social links: hidden automatically when left as "" in site-data.js
  document.querySelectorAll("[data-instagram]").forEach((el) => (S.instagram ? (el.href = S.instagram) : el.remove()));
  document.querySelectorAll("[data-linkedin]").forEach((el) => (S.linkedin ? (el.href = S.linkedin) : el.remove()));
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-semester]").forEach((el) => (el.textContent = S.rushSemester || ""));

  /* ---------- Recruitment schedule ---------- */
  const schedule = document.getElementById("rush-schedule");
  if (schedule) {
    const events = S.rushEvents || [];
    if (!events.length) {
      const ig = S.instagram ? `<a href="${encodeURI(S.instagram)}" target="_blank" rel="noopener">Instagram (@akpsi.depaul)</a>` : "Instagram";
      schedule.innerHTML =
        `<div class="notice"><p><strong>${esc(S.rushSemester || "Recruitment")} dates coming soon.</strong> Follow our ${ig} for the latest recruitment info.</p></div>`;
    } else {
      schedule.innerHTML = events
        .map(
          (e) => `
        <article class="event">
          <div class="event-date">${esc(e.date)}<small>${esc(e.time || "")}</small></div>
          <div>
            <h3>${esc(e.name)}</h3>
            <p>${esc(e.location || "")}${e.note ? " · " + esc(e.note) : ""}</p>
          </div>
        </article>`
        )
        .join("");
    }
  }

  /* ---------- Interest form ---------- */
  const form = document.getElementById("interest-form");
  if (form) {
    if (S.interestFormUrl) {
      form.innerHTML = `<div class="form-wrap"><iframe src="${encodeURI(S.interestFormUrl)}" title="Interest form" loading="lazy">Loading…</iframe></div>`;
    } else {
      form.innerHTML = S.linktree
        ? `<div class="notice"><p><strong>The current interest form lives on our Linktree.</strong></p><p style="margin-top:1rem"><a class="btn btn-navy" href="${encodeURI(S.linktree)}" target="_blank" rel="noopener">Open the Tau Chi Linktree</a></p></div>`
        : `<div class="notice"><p><strong>Interest form opening soon.</strong> Follow our <a href="${encodeURI(S.instagram || "#")}" target="_blank" rel="noopener">Instagram (@akpsi.depaul)</a> for the latest info.</p></div>`;
    }
  }

  /* ---------- Exec board ---------- */
  const grid = document.getElementById("exec-grid");
  if (grid) {
    grid.innerHTML = (S.execBoard || [])
      .map((m) => {
        const initials = (m.name || "")
          .split(" ")
          .map((p) => p[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
        const meta = [m.major, m.year].filter(Boolean).join(" · ");
        return `
        <article class="member${m.linkedin ? " has-link" : ""}">
          <div class="member-photo">
            <span class="member-initials">${esc(initials)}</span>
            ${m.photo ? `<img src="images/headshots/${encodeURI(m.photo)}" alt="${esc(m.name)}, ${esc(m.role)}" loading="lazy" onerror="this.remove()">` : ""}
          </div>
          <div class="member-body">
            <div class="member-role">${esc(m.role)}</div>
            <h3>${esc(m.name)}</h3>
            <p class="member-meta">${esc(meta)}</p>
            ${m.linkedin ? `<a class="member-link" href="${encodeURI(m.linkedin)}" target="_blank" rel="noopener" aria-label="${esc(m.name)} on LinkedIn">LinkedIn →</a>` : ""}
          </div>
        </article>`;
      })
      .join("");
  }

  /* ---------- Brothers roster (name + LinkedIn) ---------- */
  const roster = document.getElementById("roster");
  if (roster) {
    const list = (S.brothers || []).slice().sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const section = document.getElementById("roster-section");
    if (!list.length) {
      if (section) section.hidden = true;
    } else {
      const count = document.getElementById("roster-count");
      if (count) count.textContent = list.length + " active brothers, grouped by pledge class";
      const card = (b) =>
        b.linkedin
          ? `<a class="brother" href="${encodeURI(b.linkedin)}" target="_blank" rel="noopener"><span>${esc(b.name)}</span><span class="in" aria-label="LinkedIn">in</span></a>`
          : `<div class="brother"><span>${esc(b.name)}</span></div>`;
      // Group by pledge class, oldest class first; unknown classes go last.
      const order = S.pledgeClassOrder || [];
      const groups = {};
      list.forEach((b) => {
        const k = b.pledgeClass || "Brothers";
        (groups[k] = groups[k] || []).push(b);
      });
      const keys = Object.keys(groups).sort((a, b) => {
        const ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib) || a.localeCompare(b);
      });
      roster.innerHTML = keys
        .map((k) => `
          <div class="pledge-class">
            <h3>${esc(k === "Brothers" ? "Other brothers" : k === "Transfer" ? "Transfer brothers" : k + " Class")}</h3>
            <div class="roster">${groups[k].map(card).join("")}</div>
          </div>`)
        .join("");
    }
  }

  /* ---------- Events gallery ---------- */
  const eventsEl = document.getElementById("events");
  if (eventsEl) {
    const evs = S.events || [];
    if (!evs.length) {
      eventsEl.innerHTML = '<div class="notice"><p><strong>Event photos coming soon.</strong> Follow us on Instagram to see what we\'ve been up to.</p></div>';
    } else {
      eventsEl.innerHTML = evs
        .map((e) => {
          const photos = (e.photos || [])
            .map((p, i) => `<a href="images/events/${encodeURI(p)}" target="_blank" rel="noopener" class="${i === 0 ? "lead" : ""}"><img src="images/events/${encodeURI(p)}" alt="${esc(e.title)} photo ${i + 1}" loading="lazy" onerror="this.parentElement.remove()"></a>`)
            .join("");
          return `
          <article class="event-block">
            <div class="event-head">
              ${e.date ? `<span class="eyebrow">${esc(e.date)}</span>` : ""}
              <h2>${esc(e.title)}</h2>
              ${e.description ? `<p>${esc(e.description)}</p>` : ""}
            </div>
            <div class="gallery${(e.photos || []).length === 1 ? " single" : ""}">${photos}</div>
          </article>`;
        })
        .join("");
    }
  }

  /* ---------- Where our brothers have worked ---------- */
  const pl = document.getElementById("placements");
  if (pl) {
    const all = S.placements || [];
    const section = document.getElementById("placements-section");
    if (!all.length || !S.showPlacements) { if (section) section.hidden = true; }
    else {
      const feat = all.filter((c) => c.featured), rest = all.filter((c) => !c.featured);
      // Each row is a marquee: the list is repeated twice so the loop is seamless.
      const row = (list, cls) => {
        if (!list.length) return "";
        const items = list.map((c) => `<span>${esc(c.name)}</span>`).join("");
        return `<div class="marquee ${cls}"><div class="marquee-track">
                  <div class="marquee-set">${items}</div>
                  <div class="marquee-set" aria-hidden="true">${items}</div>
                </div></div>`;
      };
      pl.innerHTML = row(feat, "featured") + row(rest, "reverse");
    }
  }

  /* ---------- Brotherhood photo strip ---------- */
  const strip = document.getElementById("photo-strip");
  if (strip) {
    const pics = S.gallery || [];
    if (!pics.length) { const sec = document.getElementById("gallery-section"); if (sec) sec.hidden = true; }
    else {
      const set = pics.map((p) => `<figure><img src="images/gallery/${encodeURI(p.photo)}" alt="${esc(p.alt || "")}" loading="lazy"></figure>`).join("");
      strip.innerHTML = `<div class="photo-track"><div class="photo-set">${set}</div><div class="photo-set" aria-hidden="true">${set}</div></div>`;
    }
  }

  /* ---------- Scroll animations ---------- */
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canAnimate = !calm && "IntersectionObserver" in window;

  // Stats: computed from the data so they stay accurate as the lists change
  const statVals = {
    brothers: (S.execBoard || []).length + (S.brothers || []).length,
    classes: new Set((S.brothers || []).map((b) => b.pledgeClass).filter((c) => c && c !== "Transfer")).size,
    companies: (S.placements || []).length,
  };
  const countUp = (el) => {
    const key = el.dataset.count, suffix = el.dataset.suffix || "";
    if (el.dataset.static) { el.textContent = el.dataset.static; return; }
    const end = statVals[key] || 0;
    if (!canAnimate) { el.textContent = end + suffix; return; }
    const t0 = performance.now(), dur = 1400;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased) + (p === 1 ? suffix : "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counters = document.querySelectorAll("[data-count]");
  if (!canAnimate) counters.forEach(countUp);

  if (canAnimate) {
    document.documentElement.classList.add("anim");
    // Tag what should reveal (hero is skipped; it has its own intro)
    const groups = [
      [".section-head", 0], [".split > *", 120], [".pull-quote", 0], [".card", 90], [".value", 80],
      [".life-grid figure", 110], [".faq details", 70], [".event-block", 0], [".pledge-class", 0],
      [".member", 60], [".stat-item", 90], [".schedule, #interest-form", 0], [".cta .container > *", 90],
      ["#placements, #photo-strip, .life-more", 0],
    ];
    groups.forEach(([sel, step]) => {
      const seen = new Map();
      document.querySelectorAll(sel).forEach((el) => {
        if (el.closest(".hero")) return;
        const parent = el.parentElement, i = seen.get(parent) || 0;
        seen.set(parent, i + 1);
        el.classList.add("reveal");
        el.style.transitionDelay = Math.min(i * step, 700) + "ms";
      });
    });
    document.querySelectorAll(".section-head").forEach((h) => {
      if (getComputedStyle(h).textAlign === "center") h.classList.add("centered");
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        e.target.querySelectorAll && e.target.querySelectorAll("[data-count]").forEach(countUp);
        if (e.target.matches("[data-count]")) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    // Exec cards are built from data, so observe them after they exist
    document.querySelectorAll(".member:not(.reveal)").forEach((el, i) => {
      el.classList.add("reveal"); el.style.transitionDelay = Math.min(i * 60, 700) + "ms"; io.observe(el);
    });
  }

  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
})();
