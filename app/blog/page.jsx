import "./page.css";
import author from "../../assets/founders/founder-mike-and-mandy.png";
import dev1 from "../../assets/jhearn.png";
import dev2 from "../../assets/jwhite.png";
import dev3 from "../../assets/dmcdonald.png";
import gitHist from "../../assets/gitCommitHist.png";
import file_structure from "../../assets/blog/file_structure.jpg";
import image_component from "../../assets/blog/image_component.jpg";
import layout from "../../assets/blog/layout.jpg";
import nav from "../../assets/blog/nav.jpg";
import swr from "../../assets/blog/swr.jpg";
import Image from "next/image";
import Main from "../../components/main/main";

function Blog() {
  return (
    <Main>
      <div className="blog__container">
        <div className="blog__author-wrapper">
          <Image className="blog__author-image" src={author} />
          <div className="post__details-wrapper">
            <span className="blog__post-date">22/03/2024</span>
            <span className="blog__post-author">Mike and Mandy</span>
          </div>
        </div>
        <h1 className="blog__post-title">Developing Fireplace Palace</h1>
        <article className="blog__post">
          <div className="post__category-title">
            <h2>The developers</h2>
          </div>
          <div className="post__developers-wrapper">
            <div className="developer__wrapper">
              <Image src={dev1} />
              <p className="blog__post-developers">James Hearn</p>
            </div>
            <div className="developer__wrapper">
              <Image src={dev2} />
              <p className="blog__post-developers">Jack White</p>
            </div>
            <div className="developer__wrapper">
              <Image src={dev3} />
              <p className="blog__post-developers">David MacDonald</p>
            </div>
          </div>

          <div className="post__category-title">
            <h2>The Plan</h2>
          </div>

          <div className="markdown__import-box">
            <h2 id="plan-for-hackathon">Plan for Hackathon</h2>
            <ul>
              <li>Basic component to add in the reviews</li>
              <li>new component with .jsx and .css</li>
              <li>call that component from the home page</li>
              <li>include import and exports</li>
              <li>
                buttons component will be:
                <ul>
                  <li>three buttons</li>
                  <li>one per country (england, wales, scotland)</li>
                  <li>title(trusted)</li>
                  <li>desc(click this to see reviews)</li>
                </ul>
              </li>
              <li>
                <p>review component:</p>
                <ul>
                  <li>review text</li>
                  <li>review author</li>
                </ul>
              </li>
              <li>
                <p>add state</p>
                <ul>
                  <li>useState hook for country</li>
                  <li>
                    initialise it as nothing
                    <ul>
                      <li>
                        once each is clicked, remove the state from the others
                        with a function
                      </li>
                    </ul>
                  </li>
                  <li>useState hook for review</li>
                  <li>initialise it as nothing</li>
                  <li>remember the review once button is clicked</li>
                </ul>
              </li>
              <li>
                <p>add effect</p>
                <ul>
                  <li>useEffect hook</li>
                  <li>
                    fetch data from Loz&#39;s API
                    <ul>
                      <li>
                        investigate that API to see it&#39;s docs (general)
                      </li>
                      <li>add query paramter with each country</li>
                    </ul>
                  </li>
                  <li>have useEffect depend on the country state</li>
                </ul>
              </li>
              <li>
                <p>review progress and assess stretch goals</p>
                <ul>
                  <li>make new plan for each stretch goal identified</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="markdown__import-box">
            <h2 id="stretch-goals">Stretch Goals</h2>
            <ul>
              <li>
                <p>
                  Remove the useEffect for fetching from the API and replace it
                  with useSWR
                </p>
                <ul>
                  <li>import SWR</li>
                  <li>set the path to the API using fetcher</li>
                  <li>determine what to return from that</li>
                  <li>ensure the error and laoding statements are added in</li>
                  <li>
                    check new output against previous output to preserve all
                    functionality
                  </li>
                </ul>
              </li>
              <li>
                <p>Try and make the page more real life-like</p>
                <ul>
                  <li>automatic review loaded depending on your location</li>
                  <li>
                    fixed size review box so we don&#39;t keep changing the size
                    of the page
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="post__category-title">
            <h2>Utilising Git</h2>
          </div>

          <div className="git__img-wrapper">
            <Image src={gitHist} className="git__hist" />
          </div>


          <div className="post__category-title">
            <h2>The Code:</h2>
          </div>

          <div className="david__wrapper">
            <p>This week, our team had the task of porting the Vite-React project to Next.js. Fireplace Palace wanted new pages and we had to deliver. The first thing involved in this process is pulling over all our React components and assets.</p>
            <p>Next.js's App Router - similar to its predecessor, the Pages Router - routes based on the file structure. Each page is in its own directory, named `page.jsx`, with its corresponding `page.css`. The directory name can be wrapped in square brakcets [ ] to give us dynamic routing capabilities in the future.</p>
            <Image src={file_structure} />
            <p>One thing Next.js provides for us is its `Image` component, which lets us optimise at build time, so we opted to replace all our image tags for an easy win.</p>
            <Image src={image_component} />
            <p>With the plan to add more pages, we would be making use of the Layouts feature of Next.js This lets us have a default wrapper for each page - all the stuff that doesn't change.</p>
            <Image src={layout} />
            <p>And of course, with the addition of new pages, we'd need a navigation. We set out to make this work on mobile first with a nice nav drawer, and then have it adjust for desktop users.</p>
            <Image src={nav} width="800" />
            <p>Okay, so we have routing, a new page, optimised images and a shiny new nav bar. Next was the requirement to add a reviews component for the home page that would fetch from our "backend".
              We started by using the `useEffect` hook to grab our data, but quickly decided on Vercel's own `swc` package that would abstract some of that away for us, while also providing us with error and loading support. We haven't made full use of it from a UX perspective, but we're well placed to add spinners or loading UI now.</p>
            <Image src={swr} width="900" />
          </div>
          <div className="post__category-title">
            <h2>Reflections:</h2>
          </div>
          <div className="david__wrapper">
            <h3>Teechnical</h3>
            <p>One thing we might consider for future iterations is mixing in some CSS modules to isolate styles to individual page components. We vaguely adopted the BEM styling methodology, but it may we worth looking into alternatives like CUBE CSS.</p>
            <p>Designing the skeleton of an individual page with content changes in mind. We'd like to avoid page layout changes for better UX.</p>
            <h3>Team</h3>
            <p>In the future, it would be wise to devise a formal workflow, using Github Issues and pull requests. We did work on branches and use pull requests, but not as strictly as we perhaps should have.</p>
          </div>

        </article>
      </div>
    </Main>
  );
}

export default Blog;
