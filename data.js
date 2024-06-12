const links = [
  {
    url: "https://www.facebook.com/smile.itzsunnah.1?mibextid=ZbWKwL",
    fontAwesomeIcon: "fa-brands fa-facebook-f",
  },
  {
    url: "https://www.linkedin.com/in/muhammad-hajeer-98b48b266",
    fontAwesomeIcon: "fa-brands fa-linkedin-in",
  },
  {
    url: "https://twitter.com/MuhammadHajeer?t=SXloirLuOBtw_b-lEDDhqg&s=09",
    fontAwesomeIcon: "fa-brands fa-x-twitter",
  },
  {
    url: "https://github.com/mohammadhajeer",
    fontAwesomeIcon: "fa-brands fa-github",
  },
];

const skills = [
  { iconName: "./images/html-icon.svg", title: "Html", percentage: 70 },
  { iconName: "./images/css-icon.svg", title: "CSS", percentage: 70 },
  { iconName: "./images/js-icon.svg", title: "Javascript", percentage: 80 },
  { iconName: "./images/git-icon.svg", title: "Git", percentage: 40 },
  { iconName: "./images/github-icon.svg", title: "Github", percentage: 50 },
  { iconName: "./images/reactjs-icon.svg", title: "React", percentage: 65 },
  { iconName: "./images/tailwindcss-icon.svg", title: "Tailwind-css", percentage: 50 },
  { iconName: "./images/typescript-icon.svg", title: "Typescript", percentage: 40 },
  { iconName: "./images/php-icon.svg", title: "PHP", percentage: 60 },
];

const personalDataENG = {
  name: "Mohammad Hajeer",
  intro:
    "I'm an intermediate in the frontend track from Palestine, and I'm very passionate and dedicated to my work.",
  roles: ["Web Developer", "Freelancer", "Student"],
  links,
  heroProfileImage: "images/portfolio-image-1-en.webp",
  aboutProfileImage: "images/portfolio-image-2.webp",
  aboutDescription:
    "Hello, I'm Mohammad, an intermediate frontend developer hoping to become a full-stack developer in the future, In-Shaa-Allah (If God wills).",
  features: features("English"),
  skills
};

const personalDataAR = {
  name: "محمد حجير",
  intro:
    "انا جيد في مسار واجهة المستخدم ولله الحمد من فلسطين, وانا شغوف و ملتزم في عملي",
  roles: ["مطور مواقع", "عمل حر", "طالب"],
  links,
  heroProfileImage: "images/portfolio-image-1-ar.webp",
  aboutProfileImage: "images/portfolio-image-2.webp",
  aboutDescription:
    "مرحبا, انا محمد مبرمج جيد في واجهة المستخدم متاملا ان اصبح مبرمج كامل (واجهة وخلفية) في المستقبل ان شاء الله تعالى",
  features: features("Arabic"),
  skills
};

function features(language) {
  return [
    {
      fontAwesomeIcon: "fa fa-folder-open",
      title: language == "English" ? "Completed" : "مكتمل",
      amount: language == "English" ? "20+ Projects" : "20+ مشاريع",
    },
    {
      fontAwesomeIcon: "fa-solid fa-diagram-project",
      title: language == "English" ? "Support" : "دعم",
      amount: "12/7",
    },
  ];
}

export default function data(language) {
  return language == "English" ? personalDataENG : personalDataAR;
}
