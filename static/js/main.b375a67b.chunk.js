(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,c){},26:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(9),i=c.n(a),r=(c(26),c(5)),o=c(1),d=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("a",{href:"/",className:"logo",children:"ISAAC CHUNG"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(r.Link,{className:"header__link",to:"about",rel:"noreferrer",spy:!0,smooth:!0,offset:-120,duration:500,children:"About"}),Object(o.jsx)(r.Link,{className:"header__link",to:"experience",rel:"noreferrer",spy:!0,smooth:!0,offset:-120,duration:500,children:"Experience"}),Object(o.jsx)(r.Link,{className:"header__link",to:"projects",rel:"noreferrer",spy:!0,smooth:!0,offset:-120,duration:500,children:"Projects"}),Object(o.jsx)(r.Link,{className:"header__link",to:"thoughts",rel:"noreferrer",spy:!0,smooth:!0,offset:-70,duration:500,children:"Thoughts"})]})]})},l=(c(37),function(){return Object(o.jsxs)("div",{className:"title__container","data-aos":"zoom-in","data-aos-offset":"50","data-aos-duration":"400",children:[Object(o.jsxs)("h1",{className:"title",children:["Hey, I'm ",Object(o.jsx)("b",{children:"Isaac Chung"}),". ",Object(o.jsx)("span",{className:"wave",children:"\ud83d\udc4b"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:"title",children:"I'm an aspiring software engineer, passionate about combining tech and communities."}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"mailto:isaackcchung8@gmail.com",className:"intro__link",children:"Let's Chat"})]})}),j=c(3),h=c(20),b=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsx)("p",{children:"BUILT BY ISAAC CHUNG \xa9 2021"}),Object(o.jsx)("a",{href:"https://twitter.com/isaackcchung",rel:"noreferrer",target:"_blank",children:Object(o.jsx)(j.e,{className:"footer-icon"})}),Object(o.jsx)("a",{href:"https://github.com/ichung08",rel:"noreferrer",target:"_blank",children:Object(o.jsx)(j.c,{className:"footer-icon"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/isaac-chung-08/",rel:"noreferrer",target:"_blank",children:Object(o.jsx)(j.d,{className:"footer-icon"})}),Object(o.jsx)("a",{href:"mailto:isaackcchung8@gmail.com",rel:"noreferrer",target:"_blank",children:Object(o.jsx)(h.a,{className:"footer-icon"})})]})},u=function(){return Object(o.jsxs)("div",{id:"about","data-aos":"fade-up",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["I'm a student at the ",Object(o.jsx)("b",{children:"University of British Columbia studying Cognitive Systems + CS"}),". This website is an overview of some of my experiences and thoughts."]}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"I started coding halfway through my first year, and I'm still navigating through the tech industry. My future career is still unclear, but I hope to sample and gain a general understanding of the industry before specializing in the future."}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"When I'm not in front of a computer screen,"})," you'll find me reading, playing basketball, working out at the gym, or spending time with family and friends."]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["Check out my"," ",Object(o.jsx)("a",{href:"static\\Isaac_Chung_Resume.pdf",className:"about__link",rel:"noreferrer",children:"resume"}),", read some of my"," ",Object(o.jsx)("a",{href:"#thoughts",className:"about__link",rel:"noreferrer",children:"thoughts"}),", or follow me on"," ",Object(o.jsx)("a",{href:"https://open.spotify.com/user/sophieknowington?si=1721bf00ead043a8",className:"about__link",rel:"noreferrer",target:"_blank",children:"Spotify"}),"!"]}),Object(o.jsx)("br",{})]})},g=c(4),m=(c(19),function(e){var t=Object(n.useState)(""),c=Object(g.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)("0px"),r=Object(g.a)(i,2),d=r[0],l=r[1],h=Object(n.useState)("accordion__icon"),b=Object(g.a)(h,2),u=b[0],m=b[1],p=Object(n.useRef)(null),O=e.tech.split(" ");return Object(o.jsxs)("div",{className:"accordion__section",children:[Object(o.jsxs)("button",{className:"accordion ".concat(s),onClick:function(){a(""===s?"active":""),l("active"===s?"0px":"".concat(p.current.scrollHeight,"px")),m("active"===s?"accordion__icon":"accordion__icon rotate")},children:[Object(o.jsx)("h3",{className:"accordion__title",children:e.title}),Object(o.jsx)(j.a,{className:"".concat(u)})]}),Object(o.jsxs)("div",{ref:p,style:{maxHeight:"".concat(d)},className:"accordion__content",children:[Object(o.jsx)("div",{className:"accordion__date",children:e.date}),Object(o.jsx)("div",{className:"accordion__text",children:e.desc}),Object(o.jsx)("br",{}),e.tech&&Object(o.jsxs)("div",{className:"accordion__tech__container",children:[" ",O.map((function(e,t){return Object(o.jsx)("span",{className:"accordion__tech",children:e},t)}))]}),Object(o.jsx)("br",{})]})]})}),p=function(){return Object(o.jsxs)("div",{id:"experience","data-aos":"fade-up",children:[Object(o.jsx)("h2",{children:"Experience"}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{title:"Incoming Build Engineer Co-op @ Visier",date:"Starting 09/2021 (8 months)",desc:"Optimizing codebase compiling and testing through the build system. Improving processes around development efficiency and extending current CI/CD pipeline with Jenkins.",tech:"Python Java Groovy Scala Jenkins Docker Gradle"}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{title:"Work Learn IT Support/Web Assistant @ The University of British Columbia",date:"06/2021 - Present",desc:"Redesigned and restructed CPS and Biochemistry department webpages to improve overall appearance and SEO.  Managed website content, design and updates for CPS and Biochemistry department.",tech:"Wordpress"}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{title:"nwHacks Logistics Coordinator @ nwPlus",date:"06/2021 - Present",desc:"Organized volunteer and organizer logistics, opening and closing ceremonies, food and snacks, and judging and registration. Crafted hacker experience with workshops, events and activities for 900+ hackers.",tech:""}),Object(o.jsx)("br",{}),Object(o.jsx)(m,{title:"Undergraduate Computer Science Teaching Assistant @ The University of British Columbia",date:"10/2020 - 04/2021",desc:"Taught an introductory programming course in Python, led labs with 25+ students, graded 600+ lab assignments, and hosted weekly office hours. Curated and edited 10+ tutorial videos as new course development materials for remote learning.",tech:"Python"})]})},O=function(e){var t=Object(n.useState)(""),c=Object(g.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)("0px"),r=Object(g.a)(i,2),d=r[0],l=r[1],h=Object(n.useState)("accordion__icon"),b=Object(g.a)(h,2),u=b[0],m=b[1],p=Object(n.useRef)(null),O=e.tech.split(" ");return Object(o.jsxs)("div",{className:"accordion__section",children:[Object(o.jsxs)("button",{className:"accordion ".concat(s),onClick:function(){a(""===s?"active":""),l("active"===s?"0px":"".concat(p.current.scrollHeight,"px")),m("active"===s?"accordion__icon":"accordion__icon rotate")},children:[Object(o.jsx)("h3",{className:"accordion__title",children:e.title}),Object(o.jsx)(j.a,{className:"".concat(u)})]}),Object(o.jsxs)("div",{ref:p,style:{maxHeight:"".concat(d)},className:"accordion__content",children:[Object(o.jsx)("div",{className:"accordion__date",children:e.event}),Object(o.jsx)("div",{className:"accordion__text",children:e.desc}),e.tech&&Object(o.jsx)("div",{className:"accordion__tech__container",children:O.map((function(e,t){return Object(o.jsx)("span",{className:"accordion__tech",children:e},t)}))}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"accordion__links__container",children:[e.github&&Object(o.jsx)("a",{href:e.github,rel:"noreferrer",target:"_blank",children:Object(o.jsx)(j.c,{className:"accordion__links"})}),e.website&&Object(o.jsx)("a",{href:e.website,rel:"noreferrer",target:"_blank",children:Object(o.jsx)(j.b,{className:"accordion__links"})})]})]})]})},x=function(){return Object(o.jsxs)("div",{id:"projects","data-aos":"fade-up",children:[Object(o.jsx)("h2",{children:"Projects"}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{title:"UBC Course Explorer",github:"https://github.com/ichung08/ubc-course-explorer",website:"https://ubc-course-app.herokuapp.com/",event:"Oakhacks 2020",desc:"Built a school course search web app with Python and Django, integrating a UBC Grades and RateMyProfessors API to display course, grades and professor information. Containerized and deployed using Docker and Heroku and established CI/CD pipeline with Github Actions. Designed and implemented frontend web pages using Django, HTML and CSS. Achieved first place amongst 40+ teams at Oakhacks 2020.",tech:"Python Django JavaScript Heroku Docker GithubActions HTML CSS"}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{title:"Battle To-Do",github:"https://github.com/ichung08/battle-todo",event:"nwHacks 2021",desc:"Developed a user authenticated to-do list game web app to encourage online productivity. Built login system, to-do list, and frontend web pages using Django, HTML and CSS. Achieved \u2018Honourable Mention\u2019 award amongst 200+ teams at nwHacks 2021.",tech:"Python Django HTML CSS"}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{title:"Modelling Meteorological Factors of COVID-19",github:"https://github.com/ericlee0920/2021-Data-Science-Projects",event:"Research Project",desc:"Evaluated the significance of meterological factors on COVID-19 infection rates in various regions of Canada using linear regression, decision tree regression, and a random forest regressor in Python. Presented project at Multidisciplinary Undergraduate Research Conference (MURC).",tech:"Python scikit-learn Django MongoDB"}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{title:"Restaurant List",github:"https://github.com/ichung08/Restaurant-List-App",event:"Independent Project",desc:"Created an application to help users record and list restaurants utilizing OOP concepts. Developed desktop application in Java, with SwingUI GUI. Aquired 100% code coverage with JUnit.",tech:"Java SwingUI JUnit JSON"}),Object(o.jsx)("br",{}),Object(o.jsx)(O,{title:"Personal Website",github:"https://github.com/ichung08/personal-website",website:"https://isaacchung.com",event:"Independent Project",desc:"The website you're currently on. Built with React, HTML and CSS.",tech:"JavaScript React HTML CSS"})]})},f=c(21),_=c.n(f);c(38);_.a.init({offset:200,delay:200,duration:300,easing:"ease-in",once:!1,mirror:!1,anchorPlacement:"top-bottom"});var v=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{}),Object(o.jsx)(u,{}),Object(o.jsx)(p,{}),Object(o.jsx)("br",{}),Object(o.jsx)(x,{})]}),Object(o.jsx)(b,{})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),k()}},[[39,1,2]]]);
//# sourceMappingURL=main.b375a67b.chunk.js.map