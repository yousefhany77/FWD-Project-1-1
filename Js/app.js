let number = 5;
// Add section to the webapp dynamicly section = 5
function addSection(text, title, imgTitle) {
  let section = document.createElement("section");
  section.classList.add("section");

  let feature = document.createElement("div");
  feature.classList.add("feature");

  let h1 = document.createElement("h1");
  h1.textContent = `${title}`;
  feature.id = h1.textContent;
  section.id = h1.textContent;

  let p = document.createElement("p");
  p.textContent = text;
  feature.appendChild(h1);
  feature.appendChild(p);

  let pImg = document.createElement("div");
  pImg.style.backgroundImage = `url('./Assets/${imgTitle}.jpg')`;
  let img = document.createElement("img");
  //   img.src = "./Assets/workout.jpg";
  pImg.classList.add("responsive");
  pImg.appendChild(img);
  section.appendChild(feature);
  section.appendChild(pImg);

  let container = document.querySelector(".container");
  container.prepend(section);
}

// update the nav bar section with the title of feature according to the number of features in section
function createNavBarSections(sectionClassName, navBarUl) {
  const fragment = document.createDocumentFragment();
  let sections = document.getElementsByClassName(sectionClassName);
  let navBar = document.querySelector(navBarUl);
  for (let i = 0; i < sections.length; i++) {
    let li = document.createElement("li");
    li.textContent = sections[i].firstElementChild.textContent;
    li.setAttribute("datalink", li.textContent);
    li.style.cssText = "text-decoration:none;  color: inherit;  ";
    li.addEventListener("click", (e) => {
      e.preventDefault();
      let el = document.getElementById(e.target.getAttribute("datalink"));
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    fragment.appendChild(li);
  }
  navBar.appendChild(fragment);
}
// Add activeClass to the section and nav
function addActiveClass(
  sectionClassName,
  navBarListItems,
  activeClass = "activeNav"
) {
  const feature = document.querySelectorAll(sectionClassName);
  let navBar = document.querySelectorAll(navBarListItems);
  let current = "";
  window.addEventListener("scroll", () => {
    feature.forEach((section) => {
      let sectionTop = section.offsetTop;
      let sectionHight = section.clientHeight;
      if (scrollY > sectionTop - sectionHight) {
        current = section.getAttribute("id");
      }
    });
    navBar.forEach((li) => {
      if (li.getAttribute("datalink") === current) {
        li.classList.add("activeNav");
      } else {
        li.classList.remove("activeNav");
      }
    });
    let sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      if (section.getAttribute("id") === current) {
        section.classList.add("activeSection");
      } else {
        section.classList.remove("activeSection");
      }
    });
  });
}
function run() {
  defaultText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed
    modi aliquam quo cumque quaerat in officiis est aliquid aspernatur
    voluptates, ratione qui veritatis corrupti quia consequuntur dolore
    dolores reprehenderit!`;
  defaultTitle = [
    "Track Your calories",
    "Track Your Progress",
    "Stretching workouts",
    "Daily Workout Suggestions",
    "Daily Food Suggestions Matches Your Goal ",
  ];

  const imgTitle = ["healthyFood", "quotes", "workout", "stat", "app"];
  for (let i = 0; i < 5; i++) {
    addSection(defaultText, defaultTitle[i], imgTitle[i]);
  }
}

run();

let mobileNavIcon = document.querySelector("#mobileNav");
createNavBarSections("feature", "#mobileNav #mobileNavListItem");

mobileNavIcon.addEventListener("click", () => {
  let listItems = document.getElementById("mobileNavListItem");
  listItems.classList.toggle("mobile");
  addActiveClass(".feature", "nav #mobileNavListItem li");
});
createNavBarSections("feature", "#disktopNavBar #disktopnavlist");
addActiveClass(".feature", "#disktopNavBar #disktopnavlist li");
// Global function for Desktop & Mobile
function scrollToTop(btn) {
  scrollToTopbtn = document.querySelector(btn);
  if (window.scrollY > 300) {
    scrollToTopbtn.style.cssText = "visibility: visible !important;";
  } else {
    scrollToTopbtn.style.cssText = "visibility: hidden !important;";
  }
  scrollToTopbtn.addEventListener("click", () =>
    scroll({ top: 0, behavior: "smooth" })
  );
}
document.addEventListener("scroll", () => {
  scrollToTop("#scrollToTop");
});

//Just Download any App to make the download button functional not just dummy button xD
document.querySelector("button").addEventListener("click", () => {
  window.open("https://play.google.com/store/search?q=fitness%20apps");
});
