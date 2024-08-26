import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";

import Script from "next/script"
import React, { useEffect, useRef } from 'react'; // Add useRef here
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import NavBar from '../components/NavBar';


export default function Home({ blogs, profile}) {
  const client = createClient({
    projectId: "p9uotfdy",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)


  
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
        const scrollAmount = 300; // Adjust this value as needed
        const currentScroll = scrollRef.current.scrollLeft;
        scrollRef.current.scrollTo({
            top: 0,
            left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
            behavior: 'smooth'
        });
    }
};
   

  return (
    <><>
      <Script src="/assets/js/main.js"></Script>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport" />

        {/* <title>{profile.title} - Developer | Coder | Software Geek</title> */}
        {/* <title>{profile && profile.title ? `${profile.title} - Developer | Coder | Software Geek` : "Default Title"}</title> */}
        <title> Developer | Coder | Software Geek</title> 
        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link
          rel="canonical"
          href="//" />

        <meta
          property="og:url"
          content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect" />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload" />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet" />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet" />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet" />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>


      </Head> 
      <NavBar profile={profile} />
      <div
        className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" /> 
      <div className="hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
        <button className="absolute top-0 right-0 mt-4 mr-4">
          <Image src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" width={24} height={24} optimized={true} />
        </button>

        <ul className="mt-8 flex flex-col">
          <li className="py-2"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">About</span>
          </li>
          <li className="py-2">
          <Link href="#services"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Services</span></Link>
          </li>
          <li className="py-2"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Portfolio</span>
          </li>
          <li className="py-2"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Clients</span>
          </li>
          <li className="py-2"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Work</span>
          </li>
          <li className="py-2"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Statistics</span>
          </li>
          <li className="py-2"><span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">Blog</span>
          </li>
        </ul>
      </div>
    </><><div>
      <div className="relative bg-cover bg-center bg-no-repeat py-8" style={{ backgroundImage: "url(/assets/img/bg-hero.jpg)" }}>
        <div
          className="absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat">
        </div>

        <div className="container relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
            {profile && profile.image && (
               <Image
               src={builder.image(profile.image).width(200).url()}
               alt="author"
               width={200} // Set appropriate width
               height={200} // Set appropriate height to maintain aspect ratio
               className="h-48 rounded-full sm:h-56"
           />
              // <img src={builder.image(profile.image).width(200).url()} className="h-48 rounded-full sm:h-56" alt="author" />
         
            )}
               </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-header text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                {/* Hello I'm {profile.name}! */}
                Hello I&apos;m Rehana Khan! 
              </h1>
              <p className="font-body text-center capitalize text-white"> Big Data & .NET Specialist | Software Developer<br></br>
              Expert in Cloud Technologies, SQL Server, ASP.NET Core, and Web APIs</p>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-body text-lg uppercase text-white">Let&apos;s connect</p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link href="https://www.facebook.com/rehana.khan.3158652">
                  {/* <Link href={profile.fbLink}> */}
                    <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  
                  <Link href="https://www.linkedin.com/in/rehana-khan-5647a9a6/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
                  </Link>
                  <Link href="/" className="pl-4">
                  {/* <Link href={profile.instagramLink} className="pl-4"> */}
                    <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
                  </Link>
                </div>
              </div>
                
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50" id="about">
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
          <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
            <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              Who am I?
            </h2>
            <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              I&apos;m Rehana Khan, a Software and Big Data Engineer with a strong background in .NET development and data engineering.
            </h4>
            <p className="pt-6 font-body leading-relaxed text-grey-20">
●	Technical Expertise: Proficient in .NET Core, ASP.NET Core, and MVC frameworks, with hands-on experience in cloud technologies like Microsoft Azure and CI/CD pipelines using Azure DevOps, Jenkins, and GitHub.
            <br></br>
●	 Full-Stack and Mobile Development: Skilled in C#, ASP.NET, React, and mobile web technologies. Built and maintained responsive web and mobile applications, integrating data processing capabilities for enhanced user experiences.
<br></br>
●  Database and Data Engineering: Extensive experience with SQL Server, MySQL, and NoSQL databases (MongoDB). Designed and optimized data models, and developed scalable ETL pipelines using Python, Apache Kafka, and PySpark for data transformation and integration.
<br></br>
●	 Cloud and DevOps: Applied Azure services including Azure Data Factory, Azure Synapse Analytics, and Azure Kubernetes Service (AKS) to build, deploy, and optimize cloud-based solutions.
<br></br>
●	 API Development and Integration: Developed and secured RESTful APIs and WCF services, ensuring efficient integration and data protection. Integrated data pipelines with .NET applications to streamline data processing and business logic.
<br></br>
●	 ETL and BI Solutions: Designed and automated ETL processes to manage data flows, utilizing tools like Hadoop, Hive, and Spark. Created interactive dashboards and visualizations with Tableau to support data-driven decision-making.
<br></br>
●	 Agile and Leadership: Led Agile teams to deliver cloud-based and data-driven solutions, mentored team members, and collaborated with stakeholders to ensure successful project outcomes.
<br></br>
●  Software Principles and Methodologies: Strong understanding of OOP, SOLID principles, design patterns, and Agile methodologies. Applied these principles to develop maintainable and scalable software solutions.
<br></br>

            </p>
            {/* <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-body text-lg font-semibold uppercase text-grey-20">
                  Connect with me
                </p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-2xl text-primary"></i>
                </div>
              </div>
              <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                <Link href="/">
                  <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                </Link>
                <Link href="/" className="pl-4">
                  <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                </Link>
              </div>
            </div> */}
          </div>
          <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
            <div>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  HTML & CSS
                </h4>
                <h3 className="font-body text-1xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{"width": "85%"}}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Javascript</h4>
                <h3 className="font-body text-1xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "70%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                C#
                </h4>
                <h3 className="font-body text-1xl font-bold text-primary">98%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{"width": "98%"}}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">ASP.NET Core</h4>
                <h3 className="font-body text-1xl font-bold text-primary">91%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">MVC</h4>
                <h3 className="font-body text-1xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Python</h4>
                <h3 className="font-body text-1xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">SQL SERVER, MYSQL, ORACLE</h4>
                <h3 className="font-body text-1xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Microsoft Azure</h4>
                <h3 className="font-body text-1xl font-bold text-primary">85%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">RESTful APIs</h4>
                <h3 className="font-body text-1xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">DevOps Practices</h4>
                <h3 className="font-body text-1xl font-bold text-primary">80%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">Agile methodology</h4>
                <h3 className="font-body text-1xl font-bold text-primary">90%</h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div className="h-3 rounded-full bg-primary" style={{ "width": "91%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="services">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s what I&apos;m good at
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
              <Image
        src="/assets/img/icon-development-white.svg"
        alt="development icon"
        width={100} // Set the width according to your design needs
        height={100} // Set the height according to your design needs
        layout="fixed" // This keeps the image from scaling with the container size
    />
                {/* <img src="/assets/img/icon-development-white.svg" alt="development icon" /> */}
              </div>
              <div className="block group-hover:hidden">
              <Image
        src="/assets/img/icon-development-black.svg"
        alt="development icon"
        width={100} // Set the width according to your design needs
        height={100} // Set the height according to your design needs
        layout="fixed" // This keeps the image from scaling with the container size
    />
                {/* <img src="/assets/img/icon-development-black.svg" alt="development icon" /> */}
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                WEB DEVELOPMENT
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                Front-end development(React, JavaScript)<br></br> Back-end Development( C#, Pthon, RESTful APIs)<br></br> Cloud Integration, DevOps Practices
                <br></br> CI/CD and Microservices.
              </p>
            </div>
          </div>

          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                {/* <img src="/assets/img/icon-content-white.svg" alt="content marketing icon" /> */}
                <Image
        src="/assets/img/icon-content-white.svg"
        alt="content marketing icon"
        width={100}  
        height={100}  
        layout="fixed"  
    />
              </div>
              <div className="block group-hover:hidden">
              <Image
        src="/assets/img/icon-content-black.svg"
        alt="content marketing icon"
        width={100}  
        height={100}  
        layout="fixed"  
    />
                {/* <img src="/assets/img/icon-content-black.svg" alt="content marketing icon" /> */}
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Data Engineering
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Microsoft SQL Server, MySQL Server, NoSQL Databases, Apache Kafka, Apache Spark, Hadoop, ETL Processes, Data Integration, Real-time Streaming, Microsoft Azure Data Services

              </p>
            </div>
          </div>
      
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                {/* <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" /> */}
                <Image src="/assets/img/icon-email-white.svg" alt="Email Marketing icon" width={100}  height={100} layout="fixed" />

              </div>
              <div className="block group-hover:hidden">
                {/* <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" /> */}
                <Image src="/assets/img/icon-email-black.svg" alt="Email Marketing icon" width={100}  height={100} layout="fixed" />

              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              Application Tier
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              ASP.NET Core, RESTful API<br></br>.NET MVC<br></br>Entity Framework
              </p>
            </div>
          </div>


          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                {/* <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon" /> */}
                <Image src="/assets/img/icon-design-white.svg" alt="Theme Design icon" width={100}  height={100} layout="fixed" />

              </div>
              <div className="block group-hover:hidden">
                {/* <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon" /> */}
                <Image src="/assets/img/icon-design-black.svg" alt="Theme Design icon" width={100}  height={100} layout="fixed" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Programming Languages
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                C#, ASP.NET, Java, Python, R
              </p>
            </div>
          </div>


          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                {/* <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon" /> */}
                <Image src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon"  width={100}  height={100} layout="fixed" />
              </div>
              <div className="block group-hover:hidden">
                {/* <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon" /> */}
                <Image src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon"  width={100}  height={100} layout="fixed" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Web Design
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              HTML, CSS, Bootstrap
              </p>
            </div>
          </div>

      
          <div className="group rounded px-8 py-12 shadow hover:bg-primary">
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
              <Image src="/assets/img/icon-development-white.svg" alt="development icon" width={100}  height={100} layout="fixed" />
              </div>
              <div className="block group-hover:hidden">
              <Image   src="/assets/img/icon-development-black.svg" alt="development icon" width={100}  height={100} layout="fixed" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                Others
              </h3>
              <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              Database Design, Query Optimization, Transactional SQL<br></br> Microsoft Azure, Azure Kubernetes Service (AKS)<br></br> Azure DevOps, Jenkins, CI/CD Pipelines
              </p>
            </div>
          </div>


        </div>
      </div>

      <div className="container py-16 md:py-20" id="portfolio">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Check out my Portfolio
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I have done with the past
        </h3>

        <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/1810-NFE-Mockup-Profile.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image
                src="/assets/img/Project_Image/1810-NFE-Mockup-Profile.png"
                alt="portfolio image"  width={700}  height={700}
                 
                objectFit="cover" 
                className="shadow"
            />
          </Link>
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/0418-Product-Screenshots_netFORUM_CRMOverview_5pc.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image
                src="/assets/img/Project_Image/0418-Product-Screenshots_netFORUM_CRMOverview_5pc.png"
                alt="portfolio image"  width={700}  height={700}
                 
                objectFit="cover" 
                className="shadow"
            />
          </Link>
        </div>

        <p className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Smart Facial Recognition Attendance Web Application Using Python flask with MS SQL Server
Integrated with external APIs </p>
          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-3">
          
          {/* <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Project_Image/p1.png" className="w-full shadow" alt="portfolio image" />
          </Link> */}
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/p2.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image src="/assets/img/Project_Image/p2.png" alt="portfolio image" width={500}  height={500} objectFit="cover" className="shadow" />
          </Link>
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/p3.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image src="/assets/img/Project_Image/p3.png" alt="portfolio image" width={500}  height={500}  objectFit="cover" className="shadow" />

          </Link>
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/p4.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image src="/assets/img/Project_Image/p4.png" alt="portfolio image" width={500}  height={500} objectFit="cover" className="shadow" />
          </Link>
         
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/p6.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image src="/assets/img/Project_Image/p6.png" alt="portfolio image" width={500}  height={500} objectFit="cover" className="shadow" />
          </Link>
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/p7.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image src="/assets/img/Project_Image/p7.png" alt="portfolio image" width={500}  height={500} objectFit="cover" className="shadow" />
          </Link>
          {/* <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src="/assets/img/Project_Image/p8.png" className="w-full shadow" alt="portfolio image" />
          </Link> */}
          <Link href="/" className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            {/* <img src="/assets/img/Project_Image/p11.png" className="w-full shadow" alt="portfolio image" /> */}
            <Image src="/assets/img/Project_Image/p11.png" alt="portfolio image" width={500}  height={500} objectFit="cover" className="shadow" />
          </Link>
        </div>
      </div>    
      <div className="bg-grey-50" id="clients">
        <div className="container py-16 md:py-20">
          <div className="mx-auto w-full sm:w-3/4 lg:w-full">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              My latest clients
            </h2>
            <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/AMC-Institute.webp" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '12rem' }}/> */}
                  <Image src="/assets/img/clients_image/AMC-Institute.webp" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span>
              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/american-mensa-logo.svg" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '12rem'  }} /> */}
                <Image src="/assets/img/clients_image/american-mensa-logo.svg" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span>

              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/ACRP.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '15rem'  }} /> */}
                 <Image src="/assets/img/clients_image/ACRP.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span>

              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/AAO.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '15rem'  }}/> */}
                  <Image src="/assets/img/clients_image/AAO.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span>

              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/ACSI.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '12rem'  }}/> */}
                  <Image src="/assets/img/clients_image/ACSI.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span>
              
              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/AALS.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '15rem'  }}/> */}
                  <Image src="/assets/img/clients_image/AALS.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
             </span>
              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/ACOG.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '15rem'  }}/> */}
                  <Image src="/assets/img/clients_image/ACOG.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span> 
              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/AAMC.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '15rem'  }}/> */}
                  <Image src="/assets/img/clients_image/AAMC.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span> 
              <span className="m-8 block">
                {/* <img src="/assets/img/clients_image/ACG.png" alt="client logo" className="mx-auto block h-12 w-auto" style={{ height: '8rem',width: '15rem'  }}/> */}
                <Image src="/assets/img/clients_image/ACG.png" alt="AMC Institute logo" width={192} height={128} className="mx-auto block" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here&apos;s what I did before 
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  {/* <img src="/assets/img/community-brands-seeklogo.com.svg" style={{ height: '4 rem' }} className="h-auto w-32" alt="company logo"   /> */}
                  <Image src="/assets/img/community-brands-seeklogo.com.svg" alt="Community Brands logo" width={128}  height={64} className="block" />

                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">Sep 2019 - April 2023</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Sofware Developer
                      </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">NetForum by Community Brands is a feature-rich membership management solution for growing associations and member-based organizations.
                       It is an association management system that enables you to manage and engage members, as well as analyze and score relationships.
                        There are many modules that can be customized to each organization which provides a huge warehouse of information.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  {/* <img src="/assets/img/nic.png" className="h-auto w-32" alt="company logo" /> */}
                  <Image src="/assets/img/nic.png" alt="NIC logo" width={100} height={100} layout="responsive" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">April 2017 - February 2019</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Assistant Programmer</span>
                    <div className="pt-2">
                      <span className="block font-body text-black">a. Client Site(Project): State Civil Supplies Corporation Ltd, M.P.
                        <br></br>
                        1.National Digital Health Mission (NDHM) Gateway<br></br>
                        Built an online solution using Big Data to aggregate and analyze health records, service data, and insurance claims nationwide.
                         The platform delivers real-time insights for policy-making, improves health interventions, and enhances resource allocation, driving efficiency and accessibility in national healthcare services.
                        <br></br><br></br>
                         2.Financial Insights and Risk Management Platform<br></br>
                         A comprehensive digital platform designed to aggregate and analyze financial transactions, market data, and investment portfolios from various financial institutions. 
                         This platform aims to enhance financial decision-making, optimize investment strategies, and improve risk assessment. The system integrates real-time data processing with predictive analytics to detect fraud, ensure regulatory compliance, and provide actionable insights for strategic financial planning.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  {/* <img src="/assets/img/infodeal.jpeg" className="h-auto w-32" alt="company logo" /> */}
                  <Image src="/assets/img/infodeal.jpeg" alt="Infodeal logo" width={128} height={128} layout="responsive" />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span
                  className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">July 2015 - March 2017</span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">Junior Database Developer</span>
                    <div className="pt-2">
                      <span className="block font-body text-black"> Unified Financial Data Integration System
                        <br></br>
                        The project significantly improved the accuracy and efficiency of financial data integration and reporting. 
                        By centralizing data from various sources, the system facilitated better decision-making and operational effectiveness, supporting the organization’s financial management and reporting needs.
</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
        style={{"backgroundImage": "url(/assets/img/experience-figure.png)"}} id="statistics">
        <div className="container">
          <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
            <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  {/* <img src="/assets/img/icon-project.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon project" /> */}
                  <Image src="/assets/img/icon-project.svg" alt="Project Icon" width={48} height={48} layout="fixed" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    4
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Finished Projects
                  </h4>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                <div>
                  {/* <img src="/assets/img/icon-award.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon award" /> */}
                  <Image src="/assets/img/icon-award.svg" alt="Project Icon" width={48} height={48} layout="fixed" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    3
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Awards Won
                  </h4>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  {/* <img src="/assets/img/icon-happy.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon happy clients" /> */}
                  <Image src="/assets/img/icon-happy.svg" alt="Project Icon" width={48} height={48} layout="fixed" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    8
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Happy Clients
                  </h4>
                </div>
              </div>
              <div  className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                <div>
                  {/* <img src="/assets/img/icon-puzzle.svg" className="mx-auto h-12 w-auto md:h-20" alt="icon puzzle" /> */}
                  <Image src="/assets/img/icon-puzzle.svg" alt="Project Icon" width={48} height={48} layout="fixed" />
                </div>
                <div className="pt-5 md:pl-5 md:pt-0">
                  <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                    50+
                  </h1>
                  <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                    Bugs Fixed
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-grey-50" id="blog">
        <div className="container py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write blog
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
              <div><div style={{"backgroundImage": `url(${item.blogimage ? builder.image(item.blogimage).width(200).url() : '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
          
          </div>
        </div>
      </div> */}

      {/* <div className="container py-16 md:py-20" id="contact"> */}
        {/* <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          Here&apos;s a contact form
        </h2>
        <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Have Any Questions?
        </h4>
        <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
          <p className="font-body text-grey-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
            condimentum turpis nisl sem, viverra habitasse urna ante lobortis
            fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
            accumsan.
          </p>
        </div>
        <form className="mx-auto w-full pt-10 sm:w-3/4">
          <div className="flex flex-col md:flex-row">
            <input className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
              placeholder="Name" type="text" id="name" />
            <input
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
              placeholder="Email" type="text" id="email" />
          </div>
          <textarea className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
            placeholder="Message" id="message" cols="30" rows="10"></textarea>
          <button
            classNam.gallery-iteme="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
            Send
            <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
          </button>
        </form> */}
        <div className="flex flex-col pt-16 lg:flex-row">
          <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
            <div className="flex items-center">
              <i className="bx bx-phone text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Phone
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              (+1) 519 568 9543
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-envelope text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Email
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              rehana123k@gmail.com
            </p>
          </div>
          <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
            <div className="flex items-center">
              <i className="bx bx-map text-2xl text-grey-40"></i>
              <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                My Address
              </p>
            </div>
            <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
              60 Frederick Street, Kitchener N2H 0C7, Ontario CAN
            </p>
          </div>
        </div>
      {/* </div> */}

      {/* <div className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
        style={{"backgroundImage": "url(/assets/img/map.png)"}}></div> */}

      {/* <div className="relative bg-primary bg-cover bg-center bg-no-repeat py-16 bg-blend-multiply lg:py-24"
        style={{"backgroundImage": "url(/assets/img/bg-cta.jpg)"}}>
        <div className="container relative z-30">
           
          <form className="mt-6 flex flex-col justify-center sm:flex-row">
            <input className="w-full rounded px-4 py-3 font-body text-black sm:w-2/5 sm:py-4 lg:w-1/3" type="text"
              id="email" placeholder="Give me your Email" />
            <button
              className="mt-2 rounded bg-yellow px-8 py-3 font-body text-base font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white focus:border-transparent focus:outline-none focus:ring focus:ring-yellow sm:ml-2 sm:mt-0 sm:py-4 md:text-lg">
              Join the club
            </button>
          </form>
        </div>
      </div> */}
    </div><div className="bg-primary">
          <div className="container flex flex-col justify-center py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-center">
              © Copyright 2024, Rehana Portfolio.
            </p>
          </div>
        </div></></>
     
    // <div className="home mx-8">
    //   <h1>{blogs[0].title}</h1>
    //   <div className="mx-8">

    //   <PortableText
    //   // Pass in block content straight from Sanity.io
    //   content={blogs[0].content}
    //   projectId = "iytovi01"
    // dataset = "production"
    //   // Optionally override marks, decorators, blocks, etc. in a flat
    //   // structure without doing any gymnastics
    //   serializers={{
    //     h1: (props) => <h1 style={{ color: "red" }} {...props} />,
    //     li: ({ children }) => <li className="special-list-item">{children}</li>,
    //   }}
    // />
    //   </div>
    //   <span>I am homepage</span>
    // </div>
  )
}


// export async function getServerSideProps(context) {
  export async function getStaticProps(context) {
    const client = createClient({
      projectId: "p9uotfdy",
      dataset: "production",
      useCdn: false
    });
  
    try {
      const query = `*[_type == "blog"][0...3]`;
      const blogs = await client.fetch(query);
  
      const profileQuery = `*[_type == "profile"][0]`;
      const profile = await client.fetch(profileQuery);
  
      // Optionally, fetch other necessary data using fetchData() or another function
      // const data = await fetchData();
  
      return {
        props: {
          blogs,
          profile,
          // data, // Include this only if you have additional data to fetch
        },
        revalidate: 10, // Seconds to revalidate (optional, for ISR)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
      return {
        notFound: true,
      };
    }
  }
  