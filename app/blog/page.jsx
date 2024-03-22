import "./page.css";
import author from "../../assets/SOC Icon.png";
import dev1 from "../../assets/jhearn.png";
import dev2 from "../../assets/jwhite.png";
import dev3 from "../../assets/dmcdonald.png";
import gitHist from "../../assets/gitCommitHist.png";
import Image from "next/image";
import Main from "../../components/main/main";

function Blog() {
  return (
    <Main>
      <div className="blog__container">
        <div className="blog__author-wrapper">
          <Image src={author} />
          <div className="post__details-wrapper">
            <span className="blog__post-date">22/03/2024</span>
            <span className="blog__post-author">John Doe</span>
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
            <Image src={gitHist} className="git__hist"/>
          </div>


          <div className="post__category-title">
            <h2>The Code:</h2>
          </div>

          <div className="david__wrapper">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quia accusamus magni, nostrum itaque molestias. Nostrum, qui iste asperiores aspernatur excepturi corporis sapiente possimus laboriosam fugit, cumque quasi, dicta praesentium.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quia accusamus magni, nostrum itaque molestias. Nostrum, qui iste asperiores aspernatur excepturi corporis sapiente possimus laboriosam fugit, cumque quasi, dicta praesentium.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quia accusamus magni, nostrum itaque molestias. Nostrum, qui iste asperiores aspernatur excepturi corporis sapiente possimus laboriosam fugit, cumque quasi, dicta praesentium.</p>
          </div>

        </article>
      </div>
    </Main>
  );
}

export default Blog;
