// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-information",
    title: "Information",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-medium",
          title: "Medium",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/medium/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Research primarily consists of AI for Materials Synthesis Science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching assistant experience and course materials",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-materials-science-the-inspiring-intersection-with-generative-ai",
      
        title: 'Materials Science: The Inspiring Intersection with Generative AI <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://pub.aimind.so/materials-science-the-inspiring-intersection-with-generative-ai-8bd40a1c5b03?source=rss-f64fe619ecf4------2", "_blank");
        
      },
    },{id: "post-physicochemical-principles-in-material-synthesis-from-language-modeling-perspective",
      
        title: 'Physicochemical Principles in Material Synthesis: From Language Modeling Perspective <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://pub.aimind.so/physicochemical-principles-in-material-synthesis-from-language-modeling-perspective-ff12c28ac1fc?source=rss-f64fe619ecf4------2", "_blank");
        
      },
    },{id: "post-person-and-mural",
      
        title: 'Person and Mural <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@yingmingpu/person-and-mural-9e00839adf71?source=rss-f64fe619ecf4------2", "_blank");
        
      },
    },{id: "post-ai-for-material-synthesis-science-a-brief-introduction",
      
        title: 'AI for Material Synthesis Science: A Brief Introduction <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://pub.aimind.so/ai-for-material-synthesis-science-a-brief-introduction-0b278f487a86?source=rss-f64fe619ecf4------2", "_blank");
        
      },
    },{id: "post-can-language-models-understand-the-world-a-misleading-question",
      
        title: 'Can Language Models “Understand” the World? A Misleading Question <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@yingmingpu/can-language-models-understand-the-world-a-misleading-question-8cb1e9e0615e?source=rss-f64fe619ecf4------2", "_blank");
        
      },
    },{id: "post-are-physicochemical-mechanisms-important-to-agent-for-science",
      
        title: 'Are Physicochemical Mechanisms Important to Agent for Science? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://pub.aimind.so/are-physicochemical-mechanisms-important-to-agent-for-science-98f9812bc04d?source=rss-f64fe619ecf4------2", "_blank");
        
      },
    },{id: "news-one-paper-was-accepted-to-advanced-materials-if-32-086",
          title: 'One paper was accepted to Advanced Materials (IF=32.086).',
          description: "",
          section: "News",},{id: "news-our-recent-work-has-been-accepted-to-the-neurips-ai4mat-workshop",
          title: 'Our recent work has been accepted to the NeurIPS AI4Mat workshop!',
          description: "",
          section: "News",},{id: "news-we-are-currently-offering-one-position-for-visiting-student-with-a-background-in-nlp",
          title: '🔥 We are currently offering one position for visiting student with a background...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%69%61%73.%79%6D@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Dandelionym", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@yingmingpu", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/CassielYM", "_blank");
        },
      },];
