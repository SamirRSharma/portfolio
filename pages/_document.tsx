
import {Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script';
import React from "react";


export default function Document() {
	return (
		<Html lang="en">

            <Head>
                {/*
				Author: Samir Sharma
                 GitHub: Visit the GitHub repository at https://github.com/samirrsharma/portfolio/ for more details.
                 license: MIT License
                  */}
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <title>Samir Sharma</title>
                <meta name="description"
                      content="Samir Sharma - Full Stack Dev proficient in App/Web, Cloud, DevOps and AL/ML."/>

                {/*These are need for PWA*/}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-title" content="Samir Sharma"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
                <meta name="msapplication-tap-highlight" content="no"/>

                <meta name="theme-color" content="#000000"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <link rel="canonical" href="https://samirsharma.ca"/>
                <meta name="license" content="MIT License"/>
                <meta httpEquiv="content-language" content="en-us"/>

                <link rel="preconnect" href="https://samirsharma.ca"/>

                <link rel="dns-prefetch" href="https://samirsharma.ca"/>

                <meta name="author" content="Samir Sharma"/>

                <link rel="alternate" hrefLang="en" href="https://samirsharma.ca"/>

                <meta name="robots" content="index, follow"/>
                <meta name="googlebot" content="index, follow"/>
                <meta name="bingbot" content="index, follow"/>

                <link rel="apple-touch-icon" href="/img/logo_rounded.png"/>

                <link rel="apple-touch-icon" sizes="180x180" href="/img/logo_rounded.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.jpg"/>
                <link rel="icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>
                <link rel="shortcut icon" href="/favicon/favicon-org.ico" type="image/x-icon"></link>

                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                <link rel="manifest" href="/manifest.json"/>


                <meta property="og:title" content="Samir Sharma" key="title"/>
                <meta property="og:description"
                      content="Samir Sharma - Full Stack Dev proficient in App/Web, Cloud, DevOps and AI/ML."/>
                <meta property="og:image" content="https://avatars.githubusercontent.com/u/63667630?=4"/>
                <meta property="og:image:secure_url" content="https://avatars.githubusercontent.com/u/63667630?=4"/>
                <meta property="og:image:type" content="image/jpeg"/>
                <meta property="og:image:alt" content="Samir Sharma"/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>
                <meta property="og:url" content="https://samirsharma.ca"/>
                <meta property="og:type" content="website"/>
                <meta property="og:profile" content="https://github.com/samirrsharma"/>
                <meta property="og:site_name" content="Samir Sharma"/>
                <meta property="og:locale" content="en_US"/>


                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="https://twitter.com/remove"/>
                <meta name="twitter:title" content="Samir Sharma"/>
                <meta name="twitter:description"
                      content="Samir Sharma - Full Stack Dev proficient in App/Web, Cloud, DevOps and AI/ML."/>
                <meta name="twitter:image" content="https://avatars.githubusercontent.com"/>
                <meta name="twitter:creator" content="https://twitter.com/remove"/>
                <meta name="twitter:domain" content="https://samirsharma.ca"/>


                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='2048x2732'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1668x2224'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1536x2048'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1125x2436'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='1242x2208'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='750x1334'/>
                <link rel='apple-touch-startup-image' href='/img/logo_rounded.png' sizes='640x1136'/>

                {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
                <meta name="keywords" content="
    Samir Sharma, Full Stack Engineer, Full Stack Developer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Web Developer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Web Developer, Samir Sharma Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Samir SharmaProjects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Samir Sharma Web Developer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Samir Sharma DevOps, IT Portfolio, Web Developer Portfolio, Samir Sharma Developer,
    Full Stack Engineer Samir Sharma, Samir Sharma Coding,Samir Sharma IT,
    Samir Sharma Full Stack Developer, MSamir Sharma Software Engineer, Samir Sharma DevOps Engineer,
    Samir Sharma Programming, Samir Sharma Software Development, Samir Sharma Coding Projects,
    Samir Sharma Tech Portfolio, Samir Sharma IT Portfolio, Samir Sharma Software Engineer Portfolio,
    Samir Sharma Web Developer Portfolio, Samir Sharma DevOps Portfolio, Samir Sharma Full Stack Engineer,
    Samir Sharma Full Stack Developer Portfolio, Samir Sharma Coding Portfolio, Samir Sharma Programming Portfolio,
    Samir Sharma Software Development Portfolio, Samir Sharma Technology Projects,
    Samir Sharma Computer Science, Samir Sharma Cloud Computing, Samir Sharma IT Professional,
    Samir Sharma Technology Enthusiast, Samir Sharma Computer Programmer, Samir Sharma Code Portfolio,
    Samir Sharma Technology Student, Samir Sharma Software Architect,sharma,sharma portfolio,sharma devops,sharma devops engineer,
    sharma devops portfolio,sharma devops projects,sharma devops specialist,sharma devops professional,sharma devops engineer portfolio,
    sharma devops engineer projects,sharma devops engineer specialist,sharma devops engineer professional,sharma devops engineer coding,
    sharma devops engineer coding projects,sharma devops engineer coding portfolio,sharma devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"/>
                {/*use your own ads sense code here*/}
		    <meta name="google-adsense-account" content="ca-pub-2040560600290490"/>
		     <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040560600290490`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
         
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Samir Sharma",
          "url": "https://samirsharma.ca",
          "sameAs": [
            "https://github.com/samirrsharma",
            "https://www.linkedin.com/in/samir-rsharma",
            "https://medium.com/@samirraisharma",
            "https://twitter.com/remove",
            "https://dev.to/samir_rsharma"
          ]
        }`
                    }}
                />


                {/*Edit this to your according FAQ */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and coops through Waterloo."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Samir Sharma?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Samir Sharma (the greatest dev alive) is a Full Stack Dev specializing in Cloud, DevOps, ML/AI, and Wevdev. He is currently studying at the University of Waterloo graduating in 2029."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Samir Sharma from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Samir Sharma is from Earth (shocking I know). He was born and raised in Calgary, Alberta, Canada."
                }
              },
              {
                "@type": "Question",
                "name": "What does Samir Sharma do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MSamir leverages Cloud, DevOps, ML/AI, Design, and web apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
                }}/>

                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://samirsharma.ca/"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Docs",
              "item": "https://samirsharma.ca/docs"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "Articles",
              "item": "https://samirsharma.ca/articles"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://samirsharma.ca/projects"
            },{
              "@type": "ListItem",
              "position": 5,
              "name": "Sign In",
              "item": "https://samirsharma.ca/signin"
            }]
          }
        `
                }}/>

                {/*Edit this to your according to your website*/}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: `
          {
            "@context": "http://3.21.227.52:3000/",
            "@type": "ResearchProject",
            "name": "Object Detection",
            "description": "Object Detection is a Python package that aims to provide object detectio image processing. It utilizes PyTorch and other related technologies for image processing and AI tasks.",
            "alternateName": "object detection",
            "url": "https://github.com/samirrsharma",
            "logo": "https://private-user-images.githubusercontent.com/75434191/242214243-82fbf702-43e2-46e6-8e01-11758fa26310.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ4NTE2ODksIm5iZiI6MTY5NDg1MTM4OSwicGF0aCI6Ii83NTQzNDE5MS8yNDIyMTQyNDMtODJmYmY3MDItNDNlMi00NmU2LThlMDEtMTE3NThmYTI2MzEwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTE2VDA4MDMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3NjJmNzA5MGU5NWY4NTUxZTcxYmVmNzNlZTYzOTViN2FjNzE1YTM2MjM1OTNlOGIxNzk0ODE1NDczMDMzNGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ay5bRLRoojQ33ZJLFnvjyq6Dq4qZfDY7quvv4WmgRLI",
             "sameAs": [
            "https://www.linkedin.com/in/samir-rsharma"
        ]          }
        `
                }}/>
                {/*theme*/}
                <Script id="theme.util.jsx" strategy="beforeInteractive">
                    {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
                </Script>

                {/* Google Analytics */}
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"/>
                <Script
                    id='google-analytics'
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
            </Head>

            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
