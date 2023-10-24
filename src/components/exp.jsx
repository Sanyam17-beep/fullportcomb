import React, { useEffect } from 'react';
import './exp.css';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import Menu from './Menu';
import "./testimonial.css";
import Splide from '@splidejs/splide';
function Exper() {

  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);

  }
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      direction: 'ltr',
      width: '72%',
      height: '36rem',
      autoplay: true,
      arrows: false,
      pagination:false,
      perPage: 1,
      breakpoints: {
        1100: {
          height: '40rem',
          width: '90%'
        },
        720: {
          height: '46rem',
          width: '100%'
        }
      },
    });
    splide.mount();
  }, []);
  return (
    <>

      <div className="wro">
        <div className="box">
        <div className="expe">

<div className="word">ISHAN</div>
<main class="CV-page">
  <div class="CV-grid">
    <div class="CV-grid-column">
      <div class="CV-jobs">
        <section class="CV-timeline CV-job">
          <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Full Stack Developer </span>&#8211; <span class="CV-timeline-heading-location">Mercedes Benz Research Development India </span><small class="CV-timeline-heading-duration">April 2023 - Present</small></h3>
          <ul class="CV-timeline-details">
            <Fade cascade damping={0.1} triggerOnce>
              <li class="CV-job-timeline-item">Developed responsive and user-friendly web interfaces using modern web technologies such as HTML5, CSS3, and JavaScript, enhancing user experience and engagement.</li>
              <li class="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
              <li class="CV-job-timeline-item">Coordinated closely with other developers and digital producers to expedite projects.</li>
              <li class="CV-job-timeline-item">Utilized front-end frameworks such as React to create interactive and dynamic user interfaces that align with industry best practices.</li>

              <Stack direction="row" spacing={1} className='fle'>
                <Chip label="React" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Vue" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="ChaiScript" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="NodeJS" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="SBM" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Docker" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
              </Stack>

            </Fade>
          </ul>
        </section>
        <section class="CV-timeline CV-job">
          <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Junior Software Engineer </span>&#8211; <span class="CV-timeline-heading-location">Epam Systems</span><small class="CV-timeline-heading-duration">Feb 2022 - April 2023</small></h3>
          <ul class="CV-timeline-details">
            <Fade cascade damping={0.1} triggerOnce>
              <li class="CV-job-timeline-item">Developed a REST API for a web application using Node JS that enabled third-party integration.</li>
              <li class="CV-job-timeline-item">Utilized critical design patterns such as Adapter, Factory to assist with projects.</li>
              <li class="CV-job-timeline-item">Leveraged Node JS and Python Fast API to create robust server-side components that optimized data processing and ensured data integrity.</li>
              <li class="CV-job-timeline-item">Clients included Digital Bank of Singapore</li>

              <Stack direction="row" spacing={1} className='fle'>
                <Chip label="Python3" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Java8" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Selenium" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Cucumber" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Jenkins" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="FastAPI" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
              </Stack>

            </Fade>
          </ul>
        </section>
        <section class="CV-timeline CV-job">
          <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Test Automation Engineer</span>&#8211; <span class="CV-timeline-heading-location">Digital Bank of Singapore</span><small class="CV-timeline-heading-duration">July 2022 - April 2023</small></h3>
          <ul class="CV-timeline-details">
            <Fade cascade damping={0.1} triggerOnce>
              <li class="CV-job-timeline-item">Developed an automated system for collecting and analyzing test results, providing detailed reports for stakeholders</li>
              <li class="CV-job-timeline-item">Developed a fully automated Behaviour Driven Development Framework to test Mobile and Internet Banking application with complete Integration of CI/CD pipeline.</li>
              <li class="CV-job-timeline-item">Utilized the User Driven Development using JBehave</li>
              

              <Stack direction="row" spacing={1} className='fle'>
                <Chip label="JBehave" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Appium" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Mobile Testing" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Web Scraping" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="Java8" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                <Chip label="MariaDB" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
              </Stack>

            </Fade>
          </ul>
        </section>
      </div>
    </div>
  </div>
</main>
</div>
          <div className="expe">
       
            <div className="word">SANYAM</div>
            <main class="CV-page">
              <div class="CV-grid">
                <div class="CV-grid-column">
                  <div class="CV-jobs">
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Software Developer Intern</span>&#8211; <span class="CV-timeline-heading-location">Desi QnA </span><small class="CV-timeline-heading-duration">July 2023 - Present</small></h3>
                      <ul class="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li class="CV-job-timeline-item">Worked on the design and development part of a fully responsive webpage for a particular section of Desi QnA</li>
                          <li class="CV-job-timeline-item">Tested front-end code in multiple browsers to ensure cross-browser compatability.</li>
                          <li class="CV-job-timeline-item">Worked on User Verification/Authentication + Engineering challenges of detecting and removing the fake bots and posts.</li>
                          <li class="CV-job-timeline-item">Integrated Recaptcha with the website - Google Layer of Protection for websites.</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="HTML" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="CSS" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="JavaScript" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="PHP" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="MySQL" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Software Developer Intern </span>&#8211; <span class="CV-timeline-heading-location">Geekster</span><small class="CV-timeline-heading-duration">August 2022 - March 2023</small></h3>
                      <ul class="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li class="CV-job-timeline-item">Developed a REST API for a web application using Node JS that enabled third-party integration.</li>
                          <li class="CV-job-timeline-item"> Conducted thorough testing and debugging to ensure the functionality and reliability of the authentication system.</li>
                          <li class="CV-job-timeline-item">Developed and implemented JWT (JSON Web Token) authentication for the login page, enhancing the security and user experience of the Geekster’s E-Learning Portal.</li>
                          <li class="CV-job-timeline-item">Designed and developed modules to enhance the visual presentation and user experience of the website, also referred to as MCT (Module Configuration and Viewing).Collaborated closely with the design and development teams</li>

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="React" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="CSS" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Nodejs" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="ExpressJs" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="MongoDb" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="JWT" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                    <section class="CV-timeline CV-job">
                      <h3 class="CV-timeline-heading"><span class="CV-timeline-heading-title">Web Intern</span>&#8211; <span class="CV-timeline-heading-location">PepCoding</span><small class="CV-timeline-heading-duration">September 2021 - May 2022</small></h3>
                      <ul class="CV-timeline-details">
                        <Fade cascade damping={0.1} triggerOnce>
                          <li class="CV-job-timeline-item">Developed an automated system for assigning admin role to custom contests increasing 70% efficiency</li>
                          <li class="CV-job-timeline-item">Worked on Virtual Operating System created on Golang and Fyne framework.</li>
                          <li class="CV-job-timeline-item">Collaborated with teammates and developers to create efficient solutions for pepcoding.</li>
                          

                          <Stack direction="row" spacing={1} className='fle'>
                            <Chip label="JavaScript" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Html" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="CSS" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="PupeteerJS" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Mocha" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                            <Chip label="Insomnia" sx={{ bgcolor: '#ccc7c7;', color: 'black' }} />
                          </Stack>

                        </Fade>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <section class="container-testi">
            <div class="section" id="testimonials">
              <div class="section__header section__header--center">
                <h2 class="section__title">People Says</h2>
                <p class="section__subtitle">What others think about me</p>
              </div>
              <div class="testimonials">
                <div class="splide">
                  <div class="splide__track">
                    <div class="splide__list">
                    <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🤝 As a team player, Ishan excels in collaboration. Their open communication style, willingness to share insights, and eagerness to contribute ideas have fostered an environment of creativity and growth within our team. They have a knack for translating complex technical jargon into understandable terms, making them an invaluable bridge between developers and non-technical stakeholders.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Sanaula Haq</h4>
                              <p>Assistant Vice President, Digital Bank of Singapore</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🌐 Ishan's projects bear testimony to their commitment to delivering excellence. Whether it's architecting robust server-side systems, optimizing performance for scalability, or conceptualizing user-centric features, their contributions consistently exceed expectations.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Tanvi Aggarwal</h4>
                              <p>Principal Software Enginner,MBRDI</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🚀 Ishan's impact is truly transformative. Mentees under their guidance have not only gained a solid foundation in DSA but have also developed a mindset of analytical thinking and strategic problem-solving that extends far beyond the realm of algorithms.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Bittu Aggarwal</h4>
                              <p>Academic Head and Counsellor,Geekster</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🤝 Our web intern, Sanyam consistently produces work. His commitment and meticulousness have greatly enhanced our web projects. His ability to think creatively and solve problems is evident making him an invaluable member of our team. We are enthusiastic, about his future, in the field of web development.
                     </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Diwakar Gupta</h4>
                              <p>Principal Engineer, Pepcoding(Acquired by Scaler)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                            🌐 Sanyam has been a team member, in our project. His technical abilities are truly remarkable. His commitment, to our work is highly commendable. We have accomplished milestones together. I am eagerly anticipating successful partnerships with him.

                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Ishan Arora</h4>
                              <p>Software Development Engineer, Mercedes-Benz R&D</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="testimonials__box splide__slide">
                        <div className="testi-wrapper">
                          <span class="testimonials__sign">
                            <i class="bi bi-chat-square-quote"></i>
                          </span>
                          <p class="testimonials__quotes">
                          🚀Sanyam, the SDE intern at Geekster, has been exceptional. His work showcases remarkable skills and unwavering commitment, consistently going above and beyond for the team's success. His innovative thinking and strong work ethic make him indispensable, and his tech future looks bright.
                          </p>
                          <div class="testimonials__author">
                            <div class="testimonials__authorInfo">
                              <h4>Bittu Aggarwal</h4>
                              <p>Academic Head and Counsellor,Geekster</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <Menu></Menu>


        </div>
        <div className="next-work">
          <span id="nword">Next</span>
          <div className="elem" onClick={() => { navigateHandler('/projects'); }}>
            <h1>WORK</h1>
            <h2>+</h2>
            <div className="center14"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Exper
