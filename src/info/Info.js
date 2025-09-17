import self from "../img/self.png";

export let colors = ["rgb(8,135,247)", "rgb(2,1,50)"];

export const mainSkills = [
  {
    name: "React",
    img: "/assets/react.svg",
    docsUrl: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    name: "Node",
    img: "/assets/node.svg",
    docsUrl: "https://nodejs.org/en/docs/guides",
  },
  {
    name: "Python",
    img: "/assets/python-original.svg",
    docsUrl: "https://docs.python.org/3/library/index.html",
  },
  {
    name: "TensorFlow",
    img: "/assets/tensorflow.png",
    docsUrl: "https://www.tensorflow.org/api_docs",
  },
  {
    name: "Django",
    img: "/assets/django.png",
    docsUrl: "https://docs.djangoproject.com/en/5.1/",
  },
  {
    name: "Selenium",
    img: "/assets/selenium.png",
    docsUrl: "https://www.selenium.dev/documentation/",
  },
];

export const learning = [
  {
    name: "Pytorch",
    docsUrl: "https://pytorch.org/docs/stable/index.html",
    img: "/assets/pytorch.svg",
  },
];

export const tools = [
  {
    name: "React",
    url: "https://techstack-generator.vercel.app/react-icon.svg",
  },
  {
    name: "Python",
    url: "https://techstack-generator.vercel.app/python-icon.svg",
  },
  {
    name: "JavaScript",
    url: "https://techstack-generator.vercel.app/js-icon.svg",
  },
  {
    name: "Django",
    url: "https://techstack-generator.vercel.app/django-icon.svg",
  },
  {
    name: "PyTorch",
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/PyTorch-Dark.svg",
  },
  { name: "TensorFlow", url: "./assets/tensorflow.png" },
  { name: "Node.js", url: "https://skillicons.dev/icons?i=nodejs" },
  {
    name: "TypeScript",
    url: "https://techstack-generator.vercel.app/ts-icon.svg",
  },
  {
    name: "Azure",
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Azure-Light.svg",
  },
  {
    name: "Webpack",
    url: "https://techstack-generator.vercel.app/webpack-icon.svg",
  },
  {
    name: "Git",
    url: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
  },
  {
    name: "GCP",
    url: "https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/GCP-Dark.svg",
  },
  { name: "Sass", url: "https://skillicons.dev/icons?i=sass" },
  { name: "Langchain", url: "./assets/langchain.svg" },
  { name: "PostgreSQL", url: "https://skillicons.dev/icons?i=postgres" },
  { name: "MongoDB", url: "https://skillicons.dev/icons?i=mongodb" },
  // { name: "MySQL", url: "https://techstack-generator.vercel.app/mysql-icon.svg" },
  // { name: "Java", url: "./assets/java-original.svg" },
  { name: "Clickhouse", url: "./assets/clickhouse.png" },
  { name: "AWS", url: "https://techstack-generator.vercel.app/aws-icon.svg" },
];

export const info = {
  firstName: "Sarfaraj",
  lastName: "Ansari",
  initials: "SA", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack AI Engineer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in Mumbai, India",
    },
    {
      emoji: "💼",
      text: "Full Stack AI Engineer at Settyl",
    },
    // {
    //     emoji: "🌱",
    //     text: "Proficient technologies like React JS, Ionic, Node.js, Python, Flask, FastAPI, Django"
    // },
    // {
    //     emoji: "🔧",
    //     text: "Experienced in DevOps, CI/CD, and Cloud infrastructure with Azure and GCP"
    // },
    {
      emoji: "😉",
      text: "Built some ML/DL projects with Pytorch",
    },
    {
      emoji: "📧",
      text: "sarfarajansaridev@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/sarfarajansari",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://instagram.com/sarfarajansari_",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://x.com/Sarfarajansari_",
      icon: "fa fa-twitter",
      label: "X",
    },
    {
      link: "https://www.linkedin.com/in/sarfaraj-ansari-a0a9441b9/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],

  hobbies: [
    {
      label: "chess",
      emoji: "♟️",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "Edutube",
      live: "/edutube",
      source: "https://github.com/sarfarajansari/edutube",
      image: "/projects/edutube.png",
      readme:
        "https://github.com/sarfarajansari/edutube?tab=readme-ov-file#edutube-",
    },
    {
      title: "Legal Sphere",
      source: "https://github.com/sarfarajansari/legalSphere.Web",
      image: "/projects/legal.png",
      readme:
        "https://github.com/sarfarajansari/legalSphere.Web?tab=readme-ov-file#legalsphere-%EF%B8%8F",
    },
    {
      title: "Garbage Redressal System",
      live: "/garbageRedressal",
      source: "https://github.com/sarfarajansari/garbageRedressal",
      image: "/projects/garbage.png",
      readme:
        "https://github.com/sarfarajansari/garbageRedressal?tab=readme-ov-file#garbage-redressal-system",
    },
    {
      title: "Viman",
      source: "https://github.com/CreativeCoders02/creativecoders02.github.io",
      image: "/projects/viman.png",
      live:"https://creativecoders02.github.io/#/login",
      readme:
        "https://github.com/CreativeCoders02/creativecoders02.github.io?tab=readme-ov-file#viman-cloakroom-management-platform-",
    },
    
    {
      title: "Gauss - Scientific Calculator",
      // live: "https://gauss.sarfaraj.site",
      source: "https://github.com/sarfarajansari/gaussianEliminationANM",
      image: "/projects/gauss.png",
      readme:
        "https://github.com/sarfarajansari/gaussianEliminationANM?tab=readme-ov-file#gauss-elimination---streamlit-app-",
    },
    {
      title: "Human Detection Model Deployment",
      live: "https://open-cv-deployment.onrender.com/",
      source:
        "https://github.com/sarfarajansari/human-detection-model-deployment",
      image: "/projects/humandetection.png",
      readme:
        "https://github.com/sarfarajansari/human-detection-model-deployment?tab=readme-ov-file#human-detection-model-deployment",
    },

    {
      title: "Marvelous Ludo",
      live: "/ludo",
      source: "https://github.com/sarfarajansari/ludo",
      image: "/projects/ludo.png",

      readme:
        "https://github.com/sarfarajansari/ludo?tab=readme-ov-file#marvelous-ludo",
    },
    {
      title: "AI Club Website",
      live: "/aiclub",
      source: "https://github.com/sarfarajansari/aiclub",
      image: "/projects/aiclub.png",

      readme:
        "https://github.com/sarfarajansari/aiclub?tab=readme-ov-file#ai-club-website-",
    },
    {
      title: "Visual Voice",
      live: "/visualvoice",
      source: "https://github.com/sarfarajansari/visualvoice",
      image: "/projects/visualvoice.png",
      reame:
        "https://github.com/sarfarajansari/visualvoice?tab=readme-ov-file#visual-voice-%EF%B8%8F",
    },
   
    {
      title: "The Awesome Store",
      live: "/Ecommerce",
      source: "https://github.com/sarfarajansari/Ecommerce",
      image: "/projects/ecommerce.png",
      readme:
        "https://github.com/sarfarajansari/Ecommerce?tab=readme-ov-file#the-awesome-store-",
    },

    {
      title: "Tic Tac Toe",
      live: "/tictactoe",
      source: "https://github.com/sarfarajansari/tictactoe",
      image: "/projects/tictactoe.png",
      readme:
        "https://github.com/sarfarajansari/tictactoe?tab=readme-ov-file#tictactoe-",
    },
    {
      title: "Drag Drop From Scratch",
      live: "/drag-drop",
      source: "https://github.com/sarfarajansari/drag-drop",
      image: "/projects/dragdrop.png",
      readme:
        "https://github.com/sarfarajansari/drag-drop?tab=readme-ov-file#drag-and-drop-react-app",
    },

   
  
    {
      title: "Streamlit Todo App",
      live: "https://streamlit-todo-app.onrender.com/",
      source: "https://github.com/sarfarajansari/streamlit-todo-app",
      image: "/projects/streamlittodo.png",
      readme:
        "https://github.com/sarfarajansari/streamlit-todo-app?tab=readme-ov-file#streamlit-todo-app",
    },
    {
      title: "Blog App",
      live: "https://blogs-app-0x80.onrender.com/",
      source: "https://github.com/sarfarajansari/Blogs_APP",
      image: "/projects/blog.png",
      readme:
        "https://github.com/sarfarajansari/Blogs_APP?tab=readme-ov-file#blog-app-",
    },
    {
      title: "Todo App",
      live: "/todo",
      source: "https://github.com/sarfarajansari/todo",
      image: "/projects/todo.png",
      readme:
        "https://github.com/sarfarajansari/todo?tab=readme-ov-file#to-do-app-",
    },
  ],
};
