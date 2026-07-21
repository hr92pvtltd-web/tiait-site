/* ============================================================
   TIAIT — shared header / footer / interactivity
   Tarar Institute of AI & Technology
   ============================================================ */
(function () {
  "use strict";

  // Favicon (circuit-T mark)
  (function () {
    var link = document.querySelector("link[rel='icon']") || document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = "logo-icon.png";
    document.head.appendChild(link);
  })();

  var NAV = [
    { label: "About", href: "about.html", cols: [
      { title: "The Institute", items: [
        ["Overview", "about.html#overview"],
        ["Our Vision", "about.html#vision"],
        ["Our Mission", "about.html#mission"],
        ["Core Values", "about.html#values"],
      ]},
      { title: "Governance", items: [
        ["Leadership Team", "about.html#leadership"],
        ["Advisory Board", "about.html#advisory"],
        ["Partner Organizations", "about.html#partners"],
        ["Contact Us", "contact.html"],
      ]},
    ]},
    { label: "Academics", href: "academics.html", cols: [
      { title: "Faculty of Computing &amp; AI", items: [
        ["BS Computer Science", "bs-computer-science.html"],
        ["BS Software Engineering", "bs-software-engineering.html"],
        ["BS Information Technology", "bs-information-technology.html"],
      ]},
      { title: "Other Faculties", items: [
        ["BS Accounting &amp; Finance", "bs-accounting-finance.html"],
        ["LLB (Law)", "llb.html"],
        ["School of Fine Arts", "fine-arts.html"],
        ["All Programs", "academics.html"],
      ]},
    ]},
    { label: "Skills", href: "skills.html", cols: [
      { title: "Skills Development Centre", items: [
        ["Overview", "skills.html#overview"],
        ["Punjab Skills Development Fund", "skills.html#psdf", "PSDF"],
        ["NAVTTC Programs", "skills.html#navttc"],
      ]},
    ]},
    { label: "Research", href: "research.html", cols: [
      { title: "Research &amp; Innovation", items: [
        ["Research Areas", "research.html#areas"],
        ["Innovation Labs", "research.html#labs"],
        ["International Collaborations", "research.html#international"],
      ]},
    ]},
    { label: "Admissions", href: "admissions.html", cols: [
      { title: "Join TIAIT", items: [
        ["Why Choose TIAIT", "admissions.html#why"],
        ["Programs Offered", "academics.html"],
        ["How to Apply", "admissions.html#apply"],
        ["Scholarships", "admissions.html#scholarships"],
      ]},
    ]},
    { label: "Campus Life", href: "campus-life.html", cols: [
      { title: "Life at TIAIT", items: [
        ["Student Societies", "campus-life.html#societies"],
        ["Activities &amp; Events", "campus-life.html#activities"],
        ["Facilities &amp; Services", "campus-life.html#facilities"],
      ]},
    ]},
    { label: "People", href: "people.html", cols: [
      { title: "Our People", items: [
        ["Faculty Profiles", "people.html#faculty"],
        ["Leadership Team", "about.html#leadership"],
        ["Advisory Board", "about.html#advisory"],
      ]},
    ]},
    { label: "Media", href: "media.html", cols: [
      { title: "Newsroom", items: [
        ["Latest News", "media.html#news"],
        ["Press Releases", "media.html#news"],
        ["Events &amp; Conferences", "media.html#events"],
        ["Gallery", "media.html#gallery"],
      ]},
    ]},
  ];

  var page = (document.body.getAttribute("data-page") || "").toLowerCase();

  function megaHTML(item) {
    if (!item.cols) return "";
    var h = '<div class="mega">';
    item.cols.forEach(function (col) {
      h += '<div class="mega-title">' + col.title + '</div>';
      col.items.forEach(function (it) {
        var tag = it[2] ? ' <span class="tag">' + it[2] + '</span>' : '';
        h += '<a href="' + it[1] + '">' + it[0] + tag + '</a>';
      });
    });
    h += '</div>';
    return h;
  }

  var navItems = NAV.map(function (item) {
    var active = (item.href === page) ? " active" : "";
    return '<div class="nav-item">' +
             '<a class="nav-link' + active + '" href="' + item.href + '">' + item.label +
               (item.cols ? '<i class="chev"></i>' : '') + '</a>' +
             megaHTML(item) +
           '</div>';
  }).join("");

  var header =
  '<div class="utility"><div class="container">' +
    '<div class="utility-links">' +
      '<a href="admissions.html">Prospective Students</a>' +
      '<a href="campus-life.html">Current Students</a>' +
      '<a href="people.html#faculty">Faculty &amp; Staff</a>' +
      '<a href="software-house.html">Software House</a>' +
      '<a href="about.html#partners">Partners</a>' +
    '</div>' +
    '<div class="utility-actions">' +
      '<button class="icon-btn" data-search>&#128269; <span class="util-hide">Search</span></button>' +
      '<a href="admissions.html#apply" class="util-hide">Apply</a>' +
      '<a href="contact.html" class="util-hide">Contact</a>' +
      '<div class="lang-switch"><button class="active">EN</button><button>&#1575;&#1585;&#1583;&#1608;</button></div>' +
    '</div>' +
  '</div></div>' +
  '<nav class="nav"><div class="container">' +
    '<a class="brand" href="index.html">' +
      '<img class="brand-icon" src="logo-icon.png" alt="TUAIT">' +
      '<span class="brand-text"><span class="brand-name">TUAIT</span><span class="brand-sub">Tarar Institute of AI Technology</span></span>' +
    '</a>' +
    '<div class="nav-menu">' + navItems + '</div>' +
    '<div class="nav-cta">' +
      '<a href="admissions.html#apply" class="btn btn-primary btn-sm">Apply</a>' +
      '<button class="hamburger" data-drawer aria-label="Menu"><span></span><span></span><span></span></button>' +
    '</div>' +
  '</div></nav>';

  var drawerLinks = NAV.map(function (item) {
    var sub = item.cols ? item.cols.map(function (c) {
      return c.items.map(function (it) { return '<a href="' + it[1] + '">' + it[0] + '</a>'; }).join("");
    }).join("") : "";
    return '<h4>' + item.label + '</h4><a href="' + item.href + '" style="color:#8c1010;font-weight:600">' + item.label + ' home</a>' + sub;
  }).join("");

  var drawer =
    '<div class="drawer-backdrop" data-drawer-close></div>' +
    '<div class="drawer" id="drawer">' +
      '<button class="close" data-drawer-close>&times;</button><div style="clear:both"></div>' +
      drawerLinks +
      '<h4>Contact</h4><a href="contact.html">Contact Us</a>' +
    '</div>';

  var search =
    '<div class="search-overlay" id="search">' +
      '<div class="search-box">' +
        '<input type="text" placeholder="Search programs, courses, services..." aria-label="Search">' +
        '<div class="search-hint">Try <span>BS Computer Science</span><span>NAVTTC</span><span>Software House</span> &mdash; press <span>Esc</span> to close</div>' +
      '</div>' +
    '</div>';

  var footer =
  '<footer class="footer"><div class="container">' +
    '<div class="footer-grid">' +
      '<div class="footer-brand">' +
        '<a class="brand" href="index.html"><img class="brand-icon brand-icon-footer" src="logo-icon.png" alt="TUAIT"><span class="brand-text"><span class="brand-name">TUAIT</span><span class="brand-sub">Tarar Institute of AI Technology</span></span></a>' +
        '<div class="footer-tag">Artificial Intelligence. Innovation. Leadership.</div>' +
        '<p>Preparing future leaders through world class education, technology, research, innovation and industry collaboration.</p>' +
        '<div class="socials">' +
          '<a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Facebook">f</a>' +
          '<a href="#" aria-label="X">&#120143;</a><a href="#" aria-label="YouTube">&#9654;</a>' +
        '</div>' +
      '</div>' +
      '<div><h5>Programs</h5>' +
        '<a href="bs-computer-science.html">BS Computer Science</a><a href="bs-software-engineering.html">BS Software Engineering</a>' +
        '<a href="bs-information-technology.html">BS Information Technology</a><a href="bs-accounting-finance.html">BS Accounting &amp; Finance</a>' +
        '<a href="llb.html">LLB</a><a href="fine-arts.html">Fine Arts</a></div>' +
      '<div><h5>Institute</h5>' +
        '<a href="about.html#vision">Vision &amp; Mission</a><a href="about.html#leadership">Leadership</a>' +
        '<a href="about.html#advisory">Advisory Board</a><a href="research.html">Research</a>' +
        '<a href="about.html#partners">Partners</a></div>' +
      '<div><h5>Services</h5>' +
        '<a href="software-house.html">Software House</a><a href="consultancy.html">Consultancy</a>' +
        '<a href="skills.html#psdf">PSDF Programs</a><a href="skills.html#navttc">NAVTTC Programs</a>' +
        '<a href="research.html#international">Collaborations</a></div>' +
      '<div><h5>Contact</h5>' +
        '<a href="contact.html">31 CCA, Sector C,<br>DHA Phase 6, Lahore</a>' +
        '<a href="mailto:admissions@tiait.edu.pk">admissions@tiait.edu.pk</a>' +
        '<a href="contact.html">+92 XXX XXXXXXX</a>' +
        '<a href="https://www.tiait.edu.pk">www.tiait.edu.pk</a></div>' +
    '</div>' +
    '<div class="footer-bottom">' +
      '<div>&copy; 2026 Tarar Institute of AI &amp; Technology (TIAIT). All rights reserved.</div>' +
      '<div class="links"><a href="admissions.html">Admissions</a><a href="media.html">Media</a><a href="contact.html">Contact</a></div>' +
    '</div>' +
  '</div></footer>';

  var mount = document.getElementById("site-header");
  if (mount) mount.innerHTML = header + drawer + search;
  var fmount = document.getElementById("site-footer");
  if (fmount) fmount.innerHTML = footer;

  // Hide nav on scroll down, reveal on scroll up
  var navEl = document.querySelector(".nav");
  if (navEl) {
    var lastY = window.pageYOffset || 0;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.pageYOffset || 0;
        if (y > lastY && y > 180) { navEl.classList.add("nav-hidden"); }
        else { navEl.classList.remove("nav-hidden"); }
        lastY = y;
        ticking = false;
      });
    }, { passive: true });
  }

  function on(sel, ev, fn) { document.querySelectorAll(sel).forEach(function (el) { el.addEventListener(ev, fn); }); }

  var drawerEl = document.getElementById("drawer");
  var backdrop = document.querySelector(".drawer-backdrop");
  function toggleDrawer(open) {
    if (!drawerEl) return;
    drawerEl.classList.toggle("open", open);
    backdrop.classList.toggle("open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  on("[data-drawer]", "click", function () { toggleDrawer(true); });
  on("[data-drawer-close]", "click", function () { toggleDrawer(false); });

  var searchEl = document.getElementById("search");
  function toggleSearch(open) {
    if (!searchEl) return;
    searchEl.classList.toggle("open", open);
    if (open) { var i = searchEl.querySelector("input"); if (i) setTimeout(function () { i.focus(); }, 60); }
  }
  on("[data-search]", "click", function () { toggleSearch(true); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { toggleSearch(false); toggleDrawer(false); }
    if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); toggleSearch(true); }
  });
  if (searchEl) searchEl.addEventListener("click", function (e) { if (e.target === searchEl) toggleSearch(false); });

  on(".lang-switch button", "click", function () {
    document.querySelectorAll(".lang-switch button").forEach(function (b) { b.classList.remove("active"); });
    this.classList.add("active");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    var dec = (target % 1 !== 0) ? 1 : 0;
    var dur = 1400, t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = (target * eased).toFixed(dec);
      el.textContent = (dec ? val : Math.round(val).toLocaleString()) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(function (el) { cio.observe(el); });

  on(".acc-q", "click", function () { this.parentElement.classList.toggle("open"); });

  on(".tab", "click", function () {
    var group = this.closest("[data-tabs]");
    if (!group) return;
    var idx = Array.prototype.indexOf.call(this.parentElement.children, this);
    group.querySelectorAll(".tab").forEach(function (t, i) { t.classList.toggle("active", i === idx); });
    group.querySelectorAll(".tab-panel").forEach(function (p, i) { p.classList.toggle("active", i === idx); });
  });
})();
