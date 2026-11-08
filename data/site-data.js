/* =========================================================
   SITE DATA — THIS IS THE ONLY FILE MOST OFFICERS NEED TO EDIT
   ---------------------------------------------------------
   - Change text between the quotes " ".
   - Keep the commas at the end of each line.
   - To add a person or event, copy one { ... } block, paste it
     below the last one, and change the details.
   - Save the file and refresh the browser to see changes.
   ========================================================= */

window.SITE = {
  /* ---------- Chapter basics ---------- */
  chapterName: "Alpha Kappa Psi · Tau Chi Chapter",
  school: "DePaul University",
  email: "",                                       // chapter email ("" hides it)

  // Tau Chi's Linktree (winter rush interest form, GroupMe, socials).
  // Every "Explore Recruitment" / "View Recruitment Information" button uses this.
  // While it's "", those buttons go to this site's Recruitment page instead.
  linktree: "",
  // DePaul's student-organization page for Tau Chi ("" hides the footer link).
  depaulOrgs: "",
  instagram: "https://www.instagram.com/akpsi.depaul/",         // full Instagram link
  linkedin: "https://www.linkedin.com/in/akpsidepaul/",   // full LinkedIn link ("" hides it)

  /* ---------- Recruitment ---------- */
  // Paste the Google Form EMBED link here (Google Form → Send → < > → copy the
  // link inside src="..."). Leave as "" to show a "coming soon" box instead.
  interestFormUrl: "",

  // Shown above the schedule. Update every semester.
  rushSemester: "Winter Quarter 2027",

  // Leave this list empty [] until dates are set; the site will show
  // "Dates coming soon" automatically.
  rushEvents: [
    // { name: "Info Night", date: "Mon, Jan 12", time: "7:00 PM", location: "DePaul Center, Room 8005", note: "Business casual" },
  ],

  /* ---------- Executive board ----------
     Put each headshot in images/headshots/ and type the exact file name
     in "photo". If a photo is missing, the site shows initials instead. */
  // major / year / linkedin are optional — leave "" to hide them.
  execBoard: [
    { name: "Jenny Patel",          role: "President",                    major: "", year: "", photo: "jenny-patel.jpg",          linkedin: "https://www.linkedin.com/in/itsjennypatel/" },
    { name: "Defne Celme",          role: "VP of Membership",             major: "", year: "", photo: "defne-celme.jpg",          linkedin: "https://www.linkedin.com/in/defnecelme/" },
    { name: "Divin Puthenpurakal",  role: "VP of Finance",                major: "", year: "", photo: "divin-puthenpurakal.jpg",  linkedin: "https://www.linkedin.com/in/dputhenpurakal/" },
    { name: "Leo Martinez",         role: "VP of Corporate Relations",    major: "", year: "", photo: "leo-martinez.jpg",         linkedin: "https://www.linkedin.com/in/martleonardo/" },
    { name: "Prachi Joshi",         role: "VP of Marketing",              major: "", year: "", photo: "prachi-joshi.jpg",         linkedin: "https://www.linkedin.com/in/prachijoshi1/" },
    { name: "Arafa Shareef",        role: "VP of Alumni Relations",       major: "", year: "", photo: "arafa-shareef.jpg",        linkedin: "https://www.linkedin.com/in/arafashareef/" },
    { name: "Tibin Thomas",         role: "VP of Brotherhood",            major: "", year: "", photo: "tibin-thomas.jpg",         linkedin: "https://www.linkedin.com/in/tibin-thomas11/" },
    { name: "Megan Hulak",          role: "Secretary",                    major: "", year: "", photo: "megan-hulak.jpg",          linkedin: "https://www.linkedin.com/in/meganhulak/" },
    { name: "Maya Widyna",          role: "Master of Rituals",            major: "", year: "", photo: "maya-widyna.jpg",          linkedin: "https://www.linkedin.com/in/mayawidyna/" },
    { name: "Lucy Cohen",           role: "Pledge Instructor",            major: "", year: "", photo: "lucy-cohen.jpg",           linkedin: "https://www.linkedin.com/in/lucycohen7/" },
    { name: "Zuzanna Lasota",       role: "VP of Professionalism",        major: "", year: "", photo: "zuzanna-lasota.jpg",       linkedin: "https://www.linkedin.com/in/zuzanna-lasota1/" },
  ],

  /* ---------- All brothers (shown below the e-board, grouped by pledge class) ----------
     Don't list e-board members here — they're already shown above.
     Leave linkedin as "" if someone doesn't have one.
     To add a new pledge class, also add its name to pledgeClassOrder below. */
  pledgeClassOrder: ["Alpha Upsilon", "Alpha Phi", "Alpha Chi", "Alpha Psi", "Alpha Omega", "Beta Alpha", "Transfer"],  // "Transfer" = brothers who transferred in
  brothers: [
    { name: "Demi Adebayo", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/demikadebayo" },
    { name: "Mohammad Alhaddad", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/mohammad-alhaddadd/" },
    { name: "Mary Badal", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/mary-badal-973645381/" },
    { name: "Kevin Benny", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/kevinbenny1/" },
    { name: "McKenna Berglind", pledgeClass: "Alpha Upsilon", linkedin: "https://www.linkedin.com/in/mckennaberglind/" },
    { name: "Tanish Bolleddula", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/tanish-bolleddula/" },
    { name: "Ben Bradley", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/bensbradley/" },
    { name: "Leslie Carranza", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/leslie-carranza/" },
    { name: "Max Carter", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/maximiliancarter/" },
    { name: "Maximo Castillo", pledgeClass: "Alpha Phi", linkedin: "https://www.linkedin.com/in/maximofcastillo/" },
    { name: "Saloni Dave", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/salonisdave/" },
    { name: "Gilberto Hernandez", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/gilbertohernandezjr01/" },
    { name: "Daniel Joseph", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/danieljoseph5/" },
    { name: "Jeremy Kannala", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/jeremykannala/" },
    { name: "Diyani KC", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/diyanikc" },
    { name: "Alexander Krecun", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/alexanderkrecun/" },
    { name: "Nishen Liyanage", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/nishen-liyanage/" },
    { name: "Ian Malin", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/ian-malin/" },
    { name: "Abdallah Metwally", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/abdallah-metwally-/" },
    { name: "Jotham Mondithoka", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/jotham-mondithoka/" },
    { name: "Yusra Mulla", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/yusramulla" },
    { name: "Kyle Nagy", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/kylenagy07/" },
    { name: "Visha Patel", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/vishapatel1/" },
    { name: "Yuvika Patel", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/yuvika-patel-7030b630b/" },
    { name: "Rahil Sangani", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/rahilsangani" },
    { name: "Thanya Subhasri Ganesh Kumar", pledgeClass: "Transfer", linkedin: "https://www.linkedin.com/in/thanyasgk/" },
    { name: "Zeenia Taraporevala", pledgeClass: "Alpha Upsilon", linkedin: "https://www.linkedin.com/in/zeenia-taraporevala-/" },
    { name: "Aanya Thakkar", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/aanyathakkar/" },
    { name: "Kaylin Victor", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/kaylinvictor" },
    { name: "Kasak Shah", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/kasakshah/" },
    { name: "Iliana DelValle", pledgeClass: "Alpha Phi", linkedin: "https://www.linkedin.com/in/ilianadelvalle/" },
    { name: "Alexander Hawkins", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/alexanderhawkins38/" },
    { name: "Joel Philip", pledgeClass: "Alpha Phi", linkedin: "https://www.linkedin.com/in/joelphilip7501/" },
    { name: "Alice Pilsbury", pledgeClass: "Alpha Upsilon", linkedin: "https://www.linkedin.com/in/alice-pilsbury/" },
    { name: "Jonathan Thomas", pledgeClass: "Alpha Phi", linkedin: "https://www.linkedin.com/in/jonathan-k-thomas/" },
    { name: "Joseph Macaluso", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/joseph-macaluso/" },
    { name: "Nikki Thakkar", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/nikkithakkar/" },
    { name: "Mo Uzzaman", pledgeClass: "Alpha Omega", linkedin: "https://www.linkedin.com/in/mohammed-uzzaman/" },
    { name: "Sam Zimmerman", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/samuelzimmerman/" },
    { name: "Finn Dennis", pledgeClass: "Beta Alpha", linkedin: "https://www.linkedin.com/in/finnegandennis/" },
    { name: "Krishan Desai", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/krishan-desai1/" },
    { name: "Luke Merkle", pledgeClass: "Alpha Upsilon", linkedin: "https://www.linkedin.com/in/luke-merkle" },
    { name: "Nazifa Mirza", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/nazifa-mirza/" },
    { name: "Noor Mirza", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/noor-mirza-489ba4279/" },
    { name: "Awais Muhammad", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/awaismuhammad/" },
    { name: "Vedika Patel", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/vedikapatel/" },
    { name: "Daniel Philopos", pledgeClass: "Alpha Chi", linkedin: "https://www.linkedin.com/in/daniel-philopos/" },
    { name: "Krish Shah", pledgeClass: "Alpha Psi", linkedin: "https://www.linkedin.com/in/krishpshah/" },
  ],

  /* ---------- Brotherhood photo strip (Brotherhood page) ----------
     Photos live in images/gallery/. They scroll in this order. */
  gallery: [
    { photo: "brotherhood-02.jpg", alt: "Six brothers in suits at a chapter event" },
    { photo: "brotherhood-08.jpg", alt: "Brothers in costume at a chapter social" },
    { photo: "brotherhood-06.jpg", alt: "Three brothers in marathon volunteer gear" },
    { photo: "brotherhood-10.jpg", alt: "Brothers in AKΨ shirts at Vincentian Service Day" },
    { photo: "brotherhood-04.jpg", alt: "Five brothers at the McNair Scholars board" },
    { photo: "brotherhood-09.jpg", alt: "Five new members in business attire" },
    { photo: "brotherhood-07.jpg", alt: "Two brothers holding pie plates at a fundraiser" },
    { photo: "brotherhood-11.jpg", alt: "Three brothers in AKΨ crewnecks against a brick wall" },
    { photo: "brotherhood-05.jpg", alt: "The chapter volunteering at the Bank of America Chicago Marathon" },
    { photo: "brotherhood-03.jpg", alt: "Brothers networking before a professional event" },
    { photo: "brotherhood-12.jpg", alt: "Three brothers in AKΨ crewnecks on the steps" },
    { photo: "brotherhood-01.jpg", alt: "Members and alumni talking at the Tau Chi alumni mixer" },
  ],

  /* ---------- Where our brothers have worked (home page) ----------
     Company names only — never tie a company to a specific brother here.
     "featured: true" puts a company in the top row in larger type. */
  showPlacements: true,    // set to true to show this section on the home page
  placements: [
    // Shown as logos on the home page. Add a company: put its logo (transparent PNG or SVG)
    // in images/logos/, then add a line here with the file name. Entries without a logo are hidden.
    { name: "AbbVie", logo: "abbvie.svg", featured: true },
    { name: "KPMG", logo: "kpmg.svg", featured: true },
    { name: "RSM", logo: "rsm.png", featured: true },
    { name: "Aon", logo: "aon.svg", featured: true },
    { name: "Merck", logo: "merck.svg", featured: true },
    { name: "ENGIE", logo: "engie.svg", featured: true },
    { name: "Harris | Oakmark", logo: "harris-oakmark.svg", featured: true },
    { name: "Citi", logo: "citi.svg", featured: true },
    { name: "BMO", logo: "bmo.svg", featured: true },
    { name: "Grainger", logo: "grainger.png", featured: true },
    { name: "Mohawk Global", logo: "mohawk-global.svg" },
    { name: "First Eagle Bank", logo: "first-eagle-bank.svg" },
    { name: "AHIMA", logo: "ahima.png" },
    { name: "Lockstep", logo: "lockstep.png" },
    { name: "Westmere Financial", logo: "westmere-financial.png" },
    { name: "Blaige & Company", logo: "blaige.png" },
    { name: "Archer", logo: "archer.png" },
    { name: "Parkway Communities", logo: "parkway-communities.png" },
    { name: "HelloCollege", logo: "hellocollege.webp" },
    { name: "Caliwater", logo: "caliwater.png" },
    { name: "Project Destined", logo: "project-destined.png" }
  ],

  /* ---------- Events (Events page) ----------
     Put each event's photos in images/events/ and list the file names.
     Newest event first. The first photo is the large one. */
  events: [
    { title: "2026 Bank of America Chicago Marathon", date: "October 2026", description: "Brothers were out before sunrise volunteering at the Bank of America Chicago Marathon, cheering on runners from around the world.",
      photos: ["chicago-marathon-1.jpg"] },
    { title: "Alumni Mixer", date: "", description: "Brothers and chapter alumni came together for an evening of networking, catching up and career advice.",
      photos: ["alumni-mixer-1.jpg"] },
    { title: "Chicago Fire FC Office Visit", date: "", description: "Brothers visited the Chicago Fire FC front office to see the business side of professional sports up close.",
      photos: ["chicago-fire-1.jpg"] },
    { title: "Vincentian Service Day", date: "", description: "Brothers joined DePaul's Vincentian Service Day, getting their hands dirty helping restore a neighborhood community garden.",
      photos: ["vincentian-service-day-1.jpg"] },
    // { title: "Fall Retreat", date: "October 2026", description: "One or two sentences about the event.",
    //   photos: ["fall-retreat-1.jpg", "fall-retreat-2.jpg"] },
  ],
};
