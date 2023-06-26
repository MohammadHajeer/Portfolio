createLoader();

window.onload = () => {
  document.body.classList.remove("backdrop");
  if (localStorage.language) {
    createWebsite(localStorage.language);
  } else {
    createWebsite("English");
  }
};

function createLoader() {
  let loader = document.createElement("div");
  loader.id = "loader";
  for (let i = 0; i < 9; i++) {
    let span = document.createElement("span");
    loader.appendChild(span);
  }

  let i = 0;
  setInterval(() => {
    if (loader.children.item(i).classList.contains("load")) {
      loader.children.item(i).classList.remove("load");
    } else {
      loader.children.item(i).classList.add("load");
    }
    i++;
    if (i == 9) {
      i = 0;
    }
  }, 150);
  document.body.prepend(loader);
}

function createScrollButton() {
  let button = document.createElement("button");
  button.id = "scrollButton";
  let buttonIcon = document.createElement("i");
  buttonIcon.className = "fa-solid fa-caret-up";
  button.appendChild(buttonIcon);
  document.body.appendChild(button);

  button.onclick = () => {
    window.scrollTo(top);
  };
}

function createHeader(language) {
  let header = document.createElement("header");
  let container = document.createElement("div");
  container.className = "container";

  let logo = document.createElement("div");
  logo.className = "logo";
  let logoH2 = document.createElement("h2");
  logoH2.appendChild(
    document.createTextNode(language == "English" ? "Hajeer" : "حجير")
  );
  logo.appendChild(logoH2);
  container.appendChild(logo);

  let nav = document.createElement("nav");
  let navUl = document.createElement("ul");
  let liActive = createNavListItem(
    "Home",
    language == "English" ? "Home" : "الصفحة الرئيسية"
  );
  liActive.className = "active";
  let shape = document.createElement("span");
  shape.className = "active-shape";
  liActive.appendChild(shape);
  navUl.appendChild(liActive);
  navUl.appendChild(
    createNavListItem("About", language == "English" ? "About" : "وصف عني")
  );
  navUl.appendChild(
    createNavListItem("Skills", language == "English" ? "Skills" : "المهارات")
  );
  navUl.appendChild(
    createNavListItem(
      "Projects",
      language == "English" ? "Projects" : "المشاريع"
    )
  );

  let liButton = document.createElement("li");
  let langButton = document.createElement("button");
  langButton.className = "lang-button";
  let buttonSpan = document.createElement("span");
  buttonSpan.appendChild(
    document.createTextNode(language == "English" ? "Languages" : "اللغات")
  );
  let buttonSpanIcon = document.createElement("i");
  buttonSpanIcon.className = "fa-solid fa-angle-down";
  buttonSpan.appendChild(buttonSpanIcon);
  langButton.appendChild(buttonSpan);
  let ulButton = document.createElement("ul");
  let liEng = document.createElement("li");
  liEng.setAttribute("data-lang", "English");
  liEng.addEventListener("click", chooseLanguage);
  liEng.appendChild(
    document.createTextNode(language == "English" ? "English" : "الانجليزية")
  );
  language == "English" ? (liEng.className = "active-lang") : "";
  let liArabic = document.createElement("li");
  liArabic.setAttribute("data-lang", "Arabic");
  liArabic.addEventListener("click", chooseLanguage);
  liArabic.appendChild(
    document.createTextNode(language == "English" ? "Arabic" : "العربية")
  );
  language == "English" ? "" : (liArabic.className = "active-lang");
  ulButton.appendChild(liEng);
  ulButton.appendChild(liArabic);
  langButton.appendChild(ulButton);
  langButton.addEventListener("click", switchLanguage);
  liButton.appendChild(langButton);
  navUl.appendChild(liButton);

  let liCloseButton = document.createElement("li");
  liCloseButton.className = "close-menu";
  let liCloseButtonIcon = document.createElement("i");
  liCloseButtonIcon.className = "fa fa-close";
  liCloseButton.appendChild(liCloseButtonIcon);
  liCloseButton.addEventListener("click", closeMenu);
  navUl.prepend(liCloseButton);
  nav.appendChild(navUl);

  let themeSwitcher = document.createElement("li");
  themeSwitcher.id = "themeSwitcher";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "check";
  if (localStorage.theme == "Dark") checkbox.checked = true;
  checkbox.addEventListener("click", switchTheme);
  themeSwitcher.appendChild(checkbox);
  let label = document.createElement("label");
  label.setAttribute("for", "check");
  let switcher = document.createElement("div");
  switcher.id = "switcher";
  label.appendChild(switcher);
  themeSwitcher.appendChild(label);
  navUl.appendChild(themeSwitcher);
  nav.appendChild(navUl);

  let menuSpan = document.createElement("span");
  menuSpan.className = "menu";
  let menuSpanIcon = document.createElement("i");
  menuSpanIcon.className = "fa-solid fa-bars";
  menuSpan.appendChild(menuSpanIcon);
  menuSpan.addEventListener("click", openMenu);
  nav.appendChild(menuSpan);
  container.appendChild(nav);
  header.appendChild(container);
  document.body.appendChild(header);

  function createNavListItem(id, text) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `#${id}`;
    a.appendChild(document.createTextNode(text));
    li.appendChild(a);
    return li;
  }

  function openMenu() {
    navUl.classList.add("toggle-list");
  }

  function closeMenu() {
    navUl.classList.remove("toggle-list");
  }

  function switchLanguage() {
    ulButton.classList.toggle("open-lang-menu");
    buttonSpanIcon.classList.toggle("show-list");
  }

  function switchTheme(e) {
    if (localStorage.theme == "Dark") {
      localStorage.theme = "Light";
      document.body.classList.remove("dark-mode");
      document.querySelector(".wave").src = "images/light-mode-wave.svg";
    } else {
      localStorage.theme = "Dark";
      document.body.classList.add("dark-mode");
      document.querySelector(".wave").src = "images/dark-mode-wave.svg";
    }
    document
      .querySelectorAll("#Skills .container div div img")
      .forEach((img) => {
        let imgSrc = `${img.src.match(/-\w+/gi).join("")}.svg`;
        img.src = `images/${localStorage.theme + imgSrc}`;
      });
  }

  function chooseLanguage(e) {
    window.localStorage.language = e.currentTarget.getAttribute("data-lang");
    createWebsite(e.currentTarget.getAttribute("data-lang"));
  }
}

function createHomeSection(language) {
  let home = document.createElement("div");
  home.className = "home";
  home.id = "Home";

  let container = document.createElement("div");
  container.className = "container";

  let socialLinks = document.createElement("div");
  socialLinks.className = "social-links";
  createLink(
    "https://www.facebook.com/smile.itzsunnah.1?mibextid=ZbWKwL",
    "fa-brands fa-facebook-f"
  );
  createLink(
    "https://www.linkedin.com/in/muhammad-hajeer-98b48b266",
    "fa-brands fa-linkedin-in"
  );
  createLink(
    "https://twitter.com/MuhammadHajeer?t=SXloirLuOBtw_b-lEDDhqg&s=09",
    "fa-brands fa-twitter"
  );
  createLink("https://github.com/mohammadhajeer", "fa-brands fa-github");
  container.appendChild(socialLinks);

  let profilePicture = document.createElement("div");
  profilePicture.className = "profile-pic";
  let profileImageFrame = document.createElement("img");
  profileImageFrame.src = "images/image-background.svg";
  profileImageFrame.alt = "Profile Image Frame";
  profilePicture.appendChild(profileImageFrame);
  let profileImage = document.createElement("img");
  profileImage.className = "my-self";
  profileImage.src =
    language == "English"
      ? "images/portfolio-image-1-en.png"
      : "images/portfolio-image-1-ar.png";
  profileImage.alt = "Profile Image";
  profilePicture.appendChild(profileImage);
  container.appendChild(profilePicture);

  let details = document.createElement("div");
  details.className = "details";
  let h1 = document.createElement("h1");
  h1.appendChild(
    document.createTextNode(
      language == "English" ? "Mohammad Hajeer" : "محمد حجير"
    )
  );
  details.appendChild(h1);
  let pStatus = document.createElement("p");
  let pSpan1 = document.createElement("span");
  pSpan1.appendChild(document.createTextNode("- - - - - - >"));
  let pSpan2 = document.createElement("span");
  pSpan2.className = "auto-type";
  let pSpan3 = document.createElement("span");
  pSpan3.className = "cursor";
  pSpan3.appendChild(document.createTextNode("|"));
  pStatus.appendChild(pSpan1);
  pStatus.appendChild(pSpan2);
  pStatus.appendChild(pSpan3);
  details.appendChild(pStatus);
  let pDescription = document.createElement("p");
  pDescription.appendChild(
    document.createTextNode(
      language == "English"
        ? "I'm an intermediate in the frontend track from Palestine, and I'm very passionate and dedicated to my work."
        : "انا جيد في مسار واجهة المستخدم ولله الحمد من فلسطين, وانا شغوف و ملتزم في عملي"
    )
  );
  details.appendChild(pDescription);
  let downloadCVButton = document.createElement("button");
  downloadCVButton.addEventListener("click", downloadCV);
  downloadCVButton.className = "download btn";
  downloadCVButton.appendChild(
    document.createTextNode(
      language == "English" ? "Download My CV" : "قم بتنزيل سيرتي الذاتية"
    )
  );
  let downloadCVButtonIcon = document.createElement("i");
  downloadCVButtonIcon.className = "fa-solid fa-download";
  downloadCVButton.appendChild(downloadCVButtonIcon);
  details.appendChild(downloadCVButton);
  let scrollDownLink = document.createElement("a");
  scrollDownLink.className = "scroll btn";
  scrollDownLink.href = "#About";
  let scrollDownLinkIcon1 = document.createElement("i");
  scrollDownLinkIcon1.className = "fa-solid fa-computer-mouse";
  let scrollDownLinkIcon2 = document.createElement("i");
  scrollDownLinkIcon2.className = "fa-solid fa-arrow-down-short-wide";
  scrollDownLink.appendChild(scrollDownLinkIcon1);
  scrollDownLink.appendChild(
    document.createTextNode(
      language == "English" ? "Scroll Down" : "حرك الفأرة للأسفل"
    )
  );
  scrollDownLink.appendChild(scrollDownLinkIcon2);
  details.appendChild(scrollDownLink);
  container.appendChild(details);
  home.appendChild(container);
  document.body.appendChild(home);

  function downloadCV() {
    let filePath = `./cvs/My-CV-${localStorage.language}.pdf`;
    console.log(filePath);
    let link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", "CV.pdf");
    link.click();
  }

  function createLink(url, iconClassName) {
    let a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    let icon = document.createElement("i");
    icon.className = iconClassName;
    a.appendChild(icon);
    socialLinks.appendChild(a);
  }

  forwardType();

  let words =
    language == "English"
      ? ["Frontend Developer", "Freelancer", "Student"]
      : ["مبرمج واجهة المستخدم", "عمل حر", "طالب"];
  let chosenWord = 0;
  function forwardType() {
    let i = 0;
    let handler = setInterval(() => {
      pSpan2.innerHTML += words[chosenWord][i];
      i++;
      if (i == words[chosenWord].length) {
        setTimeout(() => {
          backwardType();
        }, 1000);
        clearInterval(handler);
      }
    }, 100);
  }

  function backwardType() {
    let i = words[chosenWord].length;
    let handler = setInterval(() => {
      pSpan2.innerHTML = words[chosenWord].slice(0, i);
      i--;
      if (i < 0) {
        if (chosenWord == words.length - 1) {
          chosenWord = 0;
        } else {
          chosenWord++;
        }

        forwardType();
        clearInterval(handler);
      }
    }, 50);
  }
}

function createAboutSection(language) {
  let about = document.createElement("div");
  about.className = "about";
  about.id = "About";

  let waveImage = document.createElement("img");
  waveImage.className = "wave";
  if (localStorage.theme == "Dark") {
    waveImage.src = "images/dark-mode-wave.svg";
  } else {
    waveImage.src = "images/light-mode-wave.svg";
  }
  waveImage.alt = "Wave Image";
  about.appendChild(waveImage);

  let h2 = document.createElement("h2");
  h2.className = "special-header";
  h2.appendChild(
    document.createTextNode(language == "English" ? "About Me" : "وصف عني")
  );
  about.appendChild(h2);

  let container = document.createElement("div");
  container.className = "container";

  let portfolioImage = document.createElement("div");
  portfolioImage.className = "portfolio-image";
  let profileImage = document.createElement("img");
  profileImage.src = "images/portfolio-image-2.png";
  profileImage.alt = "Profile Image";
  portfolioImage.appendChild(profileImage);
  for (let i = 1; i <= 4; i++) {
    let span = document.createElement("span");
    span.className = `desgin d${i}`;
    portfolioImage.appendChild(span);
  }
  container.appendChild(portfolioImage);

  let details = document.createElement("div");
  details.className = "details";
  let detailsH2 = document.createElement("h2");
  detailsH2.appendChild(
    document.createTextNode(language == "English" ? "Introduction" : "مقدمة")
  );
  details.appendChild(detailsH2);
  let detailsP = document.createElement("p");
  detailsP.appendChild(
    document.createTextNode(
      language == "English"
        ? "Hello, I'm Mohammad an intermediate frontend developer hoping to become a full-stack in the future In-Shaa-Allah ( If God Wills )"
        : "مرحبا, انا محمد مبرمج جيد في واجهة المستخدم متاملا ان اصبح مبرمج كامل (واجهة وخلفية) في المستقبل ان شاء الله تعالى"
    )
  );
  details.appendChild(detailsP);
  let features = document.createElement("div");
  features.className = "features";
  createFeature(
    "fa fa-folder-open",
    language == "English" ? "Completed" : "مكتمل",
    language == "English" ? "16+ Projects" : "16+ مشاريع"
  );
  createFeature(
    "fa-solid fa-diagram-project",
    language == "English" ? "ٍSupport" : "دعم",
    "12/7"
  );
  details.appendChild(features);
  container.appendChild(details);
  about.appendChild(container);
  document.body.appendChild(about);

  function createFeature(iconClassName, name, description) {
    let feature = document.createElement("div");
    feature.className = "feature";
    let icon = document.createElement("i");
    icon.className = iconClassName;
    feature.appendChild(icon);
    let title = document.createElement("h4");
    title.appendChild(document.createTextNode(name));
    feature.appendChild(title);
    let detail = document.createElement("span");
    detail.appendChild(document.createTextNode(description));
    feature.appendChild(detail);
    features.appendChild(feature);
  }
}

function createSkillsSection(language) {
  let skills = document.createElement("div");
  skills.className = "skills";
  skills.id = "Skills";

  let h2 = document.createElement("h2");
  h2.className = "special-header";
  h2.appendChild(
    document.createTextNode(language == "English" ? "Skills" : "المهارات")
  );
  skills.appendChild(h2);

  let container = document.createElement("div");
  container.className = "container";

  let tools = document.createElement("div");
  tools.className = "tools";
  let toolsH2 = document.createElement("h2");
  toolsH2.appendChild(
    document.createTextNode(language == "English" ? "Tools" : "الادوات")
  );
  tools.appendChild(toolsH2);
  let toolsSkillsContainer = document.createElement("div");
  toolsSkillsContainer.className = "skills-container";
  toolsSkillsContainer.appendChild(
    createSkill(`images/${localStorage.theme}-Theme-GIT.svg`, "Git")
  );
  toolsSkillsContainer.appendChild(
    createSkill(`images/${localStorage.theme}-Theme-GitHub.svg`, "Github")
  );
  tools.appendChild(toolsSkillsContainer);
  container.appendChild(tools);

  let languages = document.createElement("div");
  languages.className = "languages";
  let languagesH2 = document.createElement("h2");
  languagesH2.appendChild(
    document.createTextNode(language == "English" ? "Languages" : "اللغات")
  );
  languages.appendChild(languagesH2);
  let languagesSkillsContainer = document.createElement("div");
  languagesSkillsContainer.className = "skills-container";
  languagesSkillsContainer.appendChild(
    createSkill(`images/${localStorage.theme}-Theme-HTML.svg`, "HTML")
  );
  languagesSkillsContainer.appendChild(
    createSkill(`images/${localStorage.theme}-Theme-CSS.svg`, "CSS")
  );
  languagesSkillsContainer.appendChild(
    createSkill(`images/${localStorage.theme}-Theme-JS.svg`, "JavaScript")
  );
  languages.appendChild(languagesSkillsContainer);
  container.appendChild(languages);

  skills.appendChild(container);
  document.body.appendChild(skills);

  function createSkill(imgSrc, title) {
    let skill = document.createElement("div");
    skill.className = "skill";
    let img = document.createElement("img");
    img.src = imgSrc;
    img.alt = title + " svg from SVG Repo";
    skill.appendChild(img);
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(title));
    skill.appendChild(p);
    return skill;
  }
}

function createProjectSection(language) {
  let projects = document.createElement("div");
  projects.className = "projects";
  projects.id = "Projects";

  let h2 = document.createElement("h2");
  h2.className = "special-header";
  h2.appendChild(
    document.createTextNode(language == "English" ? "Projects" : "المشاريع")
  );
  projects.appendChild(h2);

  let container = document.createElement("div");
  container.className = "container";

  let projectsContainer = document.createElement("div");
  projectsContainer.className = "projects-container";

  container.appendChild(projectsContainer);

  let showMoreButton = document.createElement("button");
  showMoreButton.className = "show-more btn";
  showMoreButton.setAttribute("data-set", "show");
  showMoreButton.addEventListener("click", showMoreProjects);

  let showMoreButtonText = document.createElement("span");
  showMoreButtonText.appendChild(
    document.createTextNode(
      language == "English" ? "Show More !" : "اظهار المزيد !"
    )
  );
  showMoreButton.appendChild(showMoreButtonText);
  let showMoreButtonIcon = document.createElement("i");
  showMoreButtonIcon.className = "fa-solid fa-angle-down";
  showMoreButton.appendChild(showMoreButtonIcon);
  container.appendChild(showMoreButton);

  projects.appendChild(container);
  document.body.appendChild(projects);

  function showMoreProjects(e) {
    if (e.currentTarget.getAttribute("data-set") == "show") {
      fetchProjects(0, 16, language == "English" ? "English" : "Arabic");
      e.currentTarget.firstElementChild.innerHTML =
        language == "English" ? "Show Less !" : "اظهار القليل !";
      e.currentTarget.setAttribute("data-set", "less");
      e.currentTarget.lastElementChild.className = "fa-solid fa-angle-up";
    } else {
      fetchProjects(0, 6, language == "English" ? "English" : "Arabic");
      e.currentTarget.firstElementChild.innerHTML =
        language == "English" ? "Show More !" : "اظهار المزيد !";
      e.currentTarget.setAttribute("data-set", "show");
      e.currentTarget.lastElementChild.className = "fa-solid fa-angle-down";
    }
  }
}

function createFooter(language) {
  let footer = document.createElement("footer");
  let links = document.createElement("div");
  links.className = "links";
  createLink(
    "https://www.facebook.com/smile.itzsunnah.1?mibextid=ZbWKwL",
    "fa-brands fa-facebook-f"
  );
  createLink(
    "https://www.linkedin.com/in/muhammad-hajeer-98b48b266",
    "fa-brands fa-linkedin-in"
  );
  createLink(
    "https://twitter.com/MuhammadHajeer?t=SXloirLuOBtw_b-lEDDhqg&s=09",
    "fa-brands fa-twitter"
  );
  createLink("https://github.com/mohammadhajeer", "fa-brands fa-github");
  footer.appendChild(links);

  let p = document.createElement("p");
  p.innerHTML =
    language == "English"
      ? "&copy; copyright by Mohammad Hajeer"
      : "&copy; حقوق التاليف والنشر محمد حجير ";
  footer.appendChild(p);
  document.body.appendChild(footer);

  function createLink(url, iconClassName) {
    let a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    let icon = document.createElement("i");
    icon.className = iconClassName;
    a.appendChild(icon);
    links.appendChild(a);
  }
}

function createWebsite(language) {
  if (localStorage.theme) {
    if (localStorage.theme == "Dark") {
      document.body.classList.add("dark-mode");
    }
  } else {
    localStorage.theme = "Light";
  }
  if (!localStorage.language) {
    localStorage.language = "English";
  }
  document.body.innerHTML = "";
  if (language == "English") {
    document.body.classList.remove("lang");
  } else {
    document.body.classList.add("lang");
  }
  createHeader(language);
  createHomeSection(language);
  createAboutSection(language);
  createSkillsSection(language);
  createProjectSection(language);
  createFooter(language);
  createScrollButton();

  fetchProjects(0, 6, language);

  let links = document.querySelectorAll("nav ul li a");
  let sections = document.querySelectorAll("body > div:not(:first-child)");

  // Make the link active
  function makeTheLinkActive(index) {
    let shape = document.createElement("span");
    shape.className = "active-shape";
    links.forEach((a) => {
      a.parentElement.classList.remove("active");
      if (a.parentElement.childElementCount == 2) {
        a.parentElement.children[1].remove();
      }
    });
    links[index].parentElement.classList.add("active");
    links[index].parentElement.appendChild(shape);
  }

  // Auto active the link while scrolling
  window.addEventListener("scroll", () => {
    for (let i = 0; i < 4; i++) {
      if (scrollY >= sections[i].offsetTop - 300) {
        makeTheLinkActive(i);
      }
    }

    if (window.screen.width < 767) {
      if (scrollY > 400) {
        document.getElementById("scrollButton").style.display = "block";
      } else {
        document.getElementById("scrollButton").style.display = "none";
      }
    }
  });

  links[0].click();
}

async function fetchProjects(start, end, language) {
  let projects = await (await fetch("projects.json")).json();
  createProjects(projects, start, end, language);
}

function createProjects(array, start, end, language) {
  let projectsContainer = document.querySelector(
    ".projects .container .projects-container"
  );
  projectsContainer.innerHTML = "";
  let timeDelay = 100;
  for (let i = start; i < end; i++) {
    let project = document.createElement("div");
    project.style.animationDelay = `${timeDelay}ms`;
    timeDelay += 100;
    project.className = "project";
    let img = document.createElement("img");
    img.src = array[i].src;
    img.alt = "Project Image";
    project.appendChild(img);
    let span = document.createElement("span");
    span.className = "descriptions";
    let projectTitle = document.createElement("h2");
    projectTitle.appendChild(
      document.createTextNode(
        language == "English" ? array[i].Name : array[i].NameAR
      )
    );
    span.appendChild(projectTitle);
    project.appendChild(span);
    project.onclick = () => {
      window.open(array[i].url, "_blank");
    };
    projectsContainer.appendChild(project);
  }
}
