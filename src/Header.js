// import React, { useState, useEffect, useCallback } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';
// import { useInView } from 'react-intersection-observer';
import GitHubProjects from './GitHubProjects';







function Header() {
  // const slidesCount = 2;
  // const [activeIndex, changeSlide] = useCarousel(slidesCount);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('https://tahaahmedportfolio.herokuapp.com/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        const errorDetails = await response.json();
        console.error('Error details:', errorDetails);
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    
    <body class="flex flex-col min-h screen relative flex flex-col items-stretch justify-center min-h-screen">

      <Element name="section1">

        <main class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black flex-grow">

          <section class="container mx-auto px-4 py-8">
            <div class="text-5xl font-semibold pt-4 lg:pt-0 relative top-10 text-center items-center text-white font-sans -translate-y-3">Big ambitions start with 0 and 1's</div>



            <body class="font-sans antialiased leading-normal tracking-wider bg-cover">




              <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0 ">


                <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white mx-6 lg:mx-0 opacity-90 -translate-y-10">


                  <div class="p-4 md:p-12 text-center lg:text-left">

                    <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-14 h-48 w-48 bg-cover bg-center bg-custom-image"></div>

                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">Taha Ahmed</h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"></path></svg>Computer Science @ UTDallas</p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"></path></svg> Dallas, TX</p>
                    <p class="font-medium m-2 text-blue-700 pt-5 font-bold">Current Senior Studying Computer Science at the University of Texas at Dallas. Enjoy sports, hanging out, and trying new things. </p>

                    <div class="pt-12 pb-8">
                      <Link
                        to="section4"
                        smooth={true}
                        duration={500}
                        className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
                      >
                        Get In Touch
                      </Link>
                    </div>

                    <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center space-x-4 justify-center">
                      <a class="link" href="https://github.com/Taha7865" data-tippy-content="@github_handle" target='_blank' rel='noreferrer'><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a>
                      <a class="link" href="https://www.linkedin.com/in/ta786/" data-tippy-content="@linkden_handle" target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="h-6 fill-current text-gray-600 hover:text-green-700"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></a>
                      <a class="link" href="https://www.instagram.com/taha.ahmed15/" data-tippy-content="@instagram_handle" target='_blank' rel='noreferrer'><svg class="h-6 fill-current text-gray-600 hover:text-green-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg></a>
                    </div>



                  </div>

                </div>


                <div class="w-full lg:w-2/5 -translate-y-10">

                  <img src="\images\IMG_0323[6091].jpg" alt="Head Pic" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />


                </div>





              </div>





            </body>
          </section>
        </main>
      </Element>

      <Element name="section2">
        <main class="flex-grow">
          <div class="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black py-4 w-full">
            <div class="font-semibold tracking-wide font-serif flex justify-center text-4xl text-white">Skills</div>
            <div class="mt-2 font-medium font-serif flex justify-center text-white text-xl">Below are my skills, always learning more</div>
            <section class="container mx-auto px-8">
              <section class="container mx-auto my-16">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-8 font-thin">

                  <div class="bg-blue-700 p-8 rounded-lg text-center justify-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="85" height="80" viewBox="0 0 20 20" class=" mt-6"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" /></svg>
                    <h3 class="text-white text-xl font-semibold mt-8">Web Development</h3>
                    <p class="pt-2 font-normal font-semibold">I have hands-on experience in designing and implementing visually appealing user interfaces for web applications. I am proficient in HTML, CSS, JavaScript, Angular, and React, and have successfully used these technologies in various projects to create seamless user experiences.</p>
                  </div>


                  <div class="bg-blue-700 p-8 rounded-lg text-center justify-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <i class="fa fa-desktop text-4xl"></i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-code" viewBox="0 0 16 16"> <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" /> </svg>
                    <h3 class=" text-white text-xl font-semibold mt-4">Programming Languanges</h3>
                    <p class="pt-2 font-normal font-semibold">I have a strong foundation in multiple programming languages, including Java, C++, C#, Python, JavaScript, TypeScript and HTML. Knowing various different languanges and syntaxes allows me to create different projects using various tech stacks.</p>
                  </div>


                  <div class="bg-blue-700 p-8 rounded-lg text-center justify-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <svg width="100" height="100" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> <path d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> <path d="M11 21C4 21 4 18 4 18V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> <path d="M17.3056 17.1133L18.2147 15.1856C18.3314 14.9381 18.6686 14.9381 18.7853 15.1856L19.6944 17.1133L21.7275 17.4243C21.9884 17.4642 22.0923 17.7998 21.9035 17.9923L20.4326 19.4917L20.7797 21.61C20.8243 21.882 20.5515 22.0895 20.3181 21.961L18.5 20.9603L16.6819 21.961C16.4485 22.0895 16.1757 21.882 16.2203 21.61L16.5674 19.4917L15.0965 17.9923C14.9077 17.7998 15.0116 17.4642 15.2725 17.4243L17.3056 17.1133Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /> </svg>
                    <h3 class="text-white text-xl font-semibold mt-4">Datebase Management</h3>
                    <p class="pt-2 font-normal font-semibold">In my role as a Data Engineer Intern, I managed, archived, and updated hundreds of databases containing sensitive consumer information. I am skilled in SQL and have experience ensuring data integrity and generating detailed reports on database architecture.</p>
                  </div>


                  <div class="bg-blue-700 p-8 rounded-lg text-center justify-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="100" height="90"><rect width="256" height="256" fill="none" /><path d="M208,86.7V72a40,40,0,0,0-80,0,40,40,0,0,0-80,0V86.7a48.1,48.1,0,0,0,0,90.6h0V184a40,40,0,0,0,80,0,40,40,0,0,0,80,0v-6.7h0a48.1,48.1,0,0,0,0-90.6Z" opacity="0.2" /><line x1="128" y1="176" x2="128" y2="80" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M88,144a40,40,0,1,1-40,40v-6.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M168,144a40,40,0,1,0,40,40v-6.7" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M72,180H64A48,48,0,0,1,48,86.7V72a40,40,0,0,1,80,0V184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M184,180h8a48,48,0,0,0,16-93.3V72a40,40,0,0,0-80,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M88,84v8a28,28,0,0,1-28,28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><path d="M168,84v8a28,28,0,0,0,28,28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
                    <h3 class="text-white text-xl font-semibold mt-4">Machine Learning</h3>
                    <p class="pt-2 font-normal font-semibold">With an introductory knowledge of machine learning techniques, I have worked with the Amazon API Gateway to train models and generate data for various applications. One such project, Don't Drive Dangerously, used this technology to identify and highlight dangerous driving areas based on user location. Would like to learn more about this topic.</p>
                  </div>


                  <div class="bg-blue-700 p-8 rounded-lg text-center justify-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-hdd-rack" viewBox="0 0 16 16"> <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" /> <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" /> </svg>
                    <h3 class="text-white text-xl font-semibold mt-4">Software Engineering</h3>
                    <p class="pt-2 font-normal font-semibold"> I possess a solid understanding of software engineering principles, including requirements engineering, debugging, and establishing connections between different technologies. My experiences as a Software Engineer Intern have allowed me to apply these principles in real-world situations, such as designing web interfaces and engineering connections between servers and databases.</p>
                  </div>


                  <div class="bg-blue-700 p-8 rounded-lg text-center justify-center flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16"> <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" /> <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /> </svg>
                    <h3 class="text-white text-xl font-semibold mt-4">Collaboration</h3>
                    <p class="pt-2 font-normal font-semibold">I have demonstrated the ability to work effectively with developers, academic advisors, and other team members on various projects and tasks. As an Engineering and Computer Science Teaching Intern, I collaborated with the University's academic advisor to ensure successful teaching and grading outcomes. I worked closely with developers to forsee problems in company code. My communication and teamwork skills enable me to contribute positively to any team environment.</p>
                  </div>
                </div>

              </section>
            </section>
          </div>
          </main>
        </Element>
        

          <Element name="section3">
            <main class="flex-grow">
              <div class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black py-4 w-full">
                <section class="container mx-auto px-4 py-8 w-full">
                  <div class="font-semibold tracking-wide font-serif flex justify-center text-4xl text-white">Timeline</div>
                  <div class="mt-2 font-medium font-serif flex justify-center text-white text-xl">Below are my experiences</div>
                  <section class="container mx-auto px-4 py-8 w-full">
                    <body>
                    <div class = "container mx-auto py-10 px-4 flex flex-col justify-center items-center">
                                              <div class="flex flex-col space-y-8">


                          <div class='flex items-center justify-between space-x-4'>
                            <div class="text-left">
                              <h2 class="text-xl font-semibold text-white">2023</h2>
                              <h3 class="text-2xl text-yellow-700 font-bold">Software Engineer Intern</h3>
                              <h4 class="text-xl font-semibold text-white">Austin, TX</h4>
                              <p class="text-gray-400 ">Incoming Internship</p>
                            </div>
                            <a class="link" href="https://optum.com" target='_blank' rel="noreferrer"><div class="bg-optum-logo w-24 h-24 rounded-full flex-shrink-0 p-3 border-solid border-8 border-slate-200 " ></div></a>
                          </div>


                          <div class='flex items-center justify-between space-x-4'>
                            <a class="link" href="https://uhc.com" target='_blank' rel='noreferrer'><div class="bg-uhc-logo w-24 h-24 rounded-full flex-shrink-0 p-3 bg-white border-solid border-8 border-slate-200 "></div></a>
                            <div class="text-left">
                              <h2 class="text-xl font-semibold text-white">2022</h2>
                              <h3 class="text-2xl text-yellow-700 font-bold">Software Engineer Intern</h3>
                              <h4 class="text-xl font-semibold text-white">Minneapolis, MN</h4>
                              <p class="text-gray-400 overflow-wrap w-72">At UnitedHealth Care, I designed a comprehensive web interface using Angular, CSS, JavaScript, and HTML, covering all aspects from requirements engineering to design, implementation, and debugging. I also established a connection between a server and databases using technologies such as C#, ASP.NET, and SQL Server, allowing for the real-time display of thousands of data points. Additionally, I introduced various functionality enhancements to create a modern and visually appealing user interface.</p>
                            </div>
                          </div>
                          <div class='flex items-center justify-between space-x-4'>
                            <div class="text-left">
                              <h2 class="text-xl font-semibold text-white">2021</h2>
                              <h3 class="text-2xl text-yellow-700 font-bold">Computer Science Education Specialist Intern</h3>
                              <h4 class="text-xl font-semibold text-white">Richardson, TX</h4>
                              <p class="text-gray-400 overflow-wrap w-72">During my sophmore year of college, I had the opportunity to undertake a teaching internship. At the time, I did not realize great of an opportunity this was. This proved to be an invaluable experience not only for my professional growth, but personal as well. This allowed me to explain the fundamentals of computer science in a straightfoward manner. By working with a diverse group of students, I learned how to adapt my teaching methods to cater to different learning styles. Overall, This internship allowed me to develop effective communication styles and foster an open-minded approach where I was able to consider varying personalities and perspectives.</p>
                            </div>
                            <a class="link" href='https://utdallas.edu' target='_blank' rel='noreferrer'><div class="bg-utd-logo w-24 h-24 rounded-full flex-shrink-0 p-3 border-solid border-8 border-slate-200 " ></div></a>
                          </div>


                          <div class='flex items-center justify-between space-x-4'>
                            <a class="link" href='https://www.publishingconcepts.com/not-the-big-company' target='_blank' rel='noreferrer'><div class="bg-pci-logo w-24 h-24 rounded-full flex-shrink-0 p-3 border-solid border-8 border-slate-200 "></div></a>
                            <div class="text-left">
                              <h2 class="text-xl font-semibold text-white">2021</h2>
                              <h3 class="text-2xl text-yellow-700 font-bold">Data Engineer Intern</h3>
                              <h4 class="text-xl font-semibold text-white">Dallas, TX</h4>
                              <p class="text-gray-400 overflow-wrap w-72">As a Data Engineer Intern at Publishing Concepts Inc., I managed and archived hundreds of databases containing sensitive consumer information. I generated reports detailing database architecture and ensured data integrity. I executed stored procedures in SQL to responsibly update thousands of client materials and collaborated with developers to debug network issues and system errors.</p>
                            </div>

                          </div>



                        </div>
                      </div>
                    </body>
                  </section>
                </section>
              </div>
            </main>
          </Element>
          
          <Element name="projects">
            <main class="flex-grow">
              <div class="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black py-4 w-full">
                <section class="container mx-auto px-4 py-8 w-full">
                <div class="font-semibold tracking-wide font-serif flex justify-center text-4xl text-white">Projects</div>
                  <div class="mt-2 font-medium font-serif flex justify-center text-white text-xl">Some of my projects that highlight my skill set</div>
                    <GitHubProjects/>


                  
                </section>
                </div>
                </main>
                </Element>
          <Element name="section4">
            <main class="flex-grow">
              <div class="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black py-4 w-full">
                <section class="container mx-auto px-4 py-8 w-full">
                  <div class="font-semibold tracking-wide font-serif flex justify-center text-4xl text-white">Contact Me</div>

                  <section class="container mx-auto px-4 py-8 w-full">

                    <div class="text-center font-semibold text-2xl"><h5 class="contact-info text-white">Email: <a class="lead text-blue-500 no-underline hover:underline font-normal" href="mailto:Taha.Ahmed@UTDallas.edu">Taha.Ahmed@UTDallas.edu</a> || <a class="text-blue-500 lead font-normal no-underline hover:underline" href="mailto:taha.ahmed1786@gmail.com">taha.ahmed1786@gmail.com</a></h5></div>
                    <h5 class="text-center contact-info font-semibold font-semibold text-2xl text-white">Phone: <a class="text-blue-500 font-normal lead no-underline hover:underline" href="tel:469-785-8538">469-785-8538</a></h5>
                    {/* add contact html here */}
                    <section class="mb-32 text-center text-gray-700">
                      <div class="max-w-[700px] mx-auto px-3 lg:px-6">
                        <p class="text-center text-xl font-semibold mt-2">... Or Contact Directly Using Form Below</p>
                        <form onSubmit={handleSubmit}>
                          <div class="form-group mb-6 mt-3">
                            <input type="text" name="name" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                              placeholder="Name" />
                          </div>
                          <div class="form-group mb-6">
                            <input type="email" name="email" class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                              placeholder="Email address" />
                          </div>
                          <div class="form-group mb-6">
                            <textarea name="message" class="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                          </div>
                          <button type="submit" class="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
                        </form>
                      </div>
                    </section>
                  </section>
                </section>
              </div>
            </main>
          </Element>


        
      


       <footer class=" text-white pb-2 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">

        <div class="mt-2 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center space-x-4 justify-center">
          <span class="gap-8 text-white flex items-start">© 2023 Taha Ahmed All Rights Reserved.</span>
          <a class="link" href="https://github.com/Taha7865" data-tippy-content="@github_handle" target='_blank' rel='noreferrer'><svg class="h-6 fill-current text-white hover:text-gray-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a>
          <a class="link" href="https://www.linkedin.com/in/ta786/" data-tippy-content="@linkden_handle" target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="h-6 fill-current text-white hover:text-gray-700"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg></a>
          <a class="link" href="https://www.instagram.com/taha.ahmed15/" data-tippy-content="@instagram_handle" target='_blank' rel='noreferrer'><svg class="h-6 fill-current text-white hover:text-gray-700" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path></svg></a>

        </div>
      </footer> 
      


      <script src="https://unpkg.com/popper.js@1/dist/umd/popper.min.js"></script>
      <script src="https://unpkg.com/tippy.js@4"></script>
      <script></script>

    </body>


  );
}

export default Header;
