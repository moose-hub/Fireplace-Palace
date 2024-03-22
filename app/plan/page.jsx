import "./page.css";
import Image from "next/image";

function Plan() {
  return (
    <main className="blog__main">
      <h1>What have the team been up to this week?</h1>
      <p>

      </p>
      <div>
        <h2>Plan</h2>
        <ul>
          <li>Move the components and assets folders over</li>
          <li>Make a subfolder for the assets per page</li>
          <li>Move the main App component over the root page</li>
          <li>Extract the layout</li>
          <li>Move the main/global CSS</li>
          <li>Rectify the paths</li>
          <li>Switch img/picture tags for Next.js Image component</li>
          <li>Do the Founders page</li>
          <li>Make a new directory</li>
          <li>Include page and CSS</li>
          <li>Include import and export statements</li>
          <li>Make the page</li>
          <ul>
            <li>Can we reuse any previous components?</li>
            <li>Page can reuse the same header and footer as in the layout.</li>
            <li>Hero image and desc to be updated</li>
            <li>
              Cards have the same title, image and desc but image and desc need
              reordering
            </li>
          </ul>
          <li>Complete the nav</li>
          <li>Put this in the header</li>
        </ul>
        <h2>Plan for Hackathon</h2>
        <ul>
          <li>
            Basic component to add in the reviews
            <ul>
              <li>New component with .jsx and .css</li>
              <li>Call that component from the home page</li>
              <li>Include import and exports</li>
              <li>
                Buttons component will be:
                <ul>
                  <li>Three buttons</li>
                  <li>One per country (England, Wales, Scotland)</li>
                  <li>Title (Trusted)</li>
                  <li>Desc (click this to see reviews)</li>
                </ul>
              </li>
              <li>
                Review component:
                <ul>
                  <li>Review text</li>
                  <li>Review author</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Add state
            <ul>
              <li>
                UseState hook for country
                <ul>
                  <li>Initialise it as nothing</li>
                  <li>
                    Once each is clicked, remove the state from the others with a
                    function
                  </li>
                </ul>
              </li>
              <li>
                UseState hook for review
                <ul>
                  <li>Initialise it as nothing</li>
                  <li>Remember the review once button is clicked</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Add effect
            <ul>
              <li>UseEffect hook</li>
              <li>
                Fetch data from Loz's API
                <ul>
                  <li>Investigate that API to see its docs (general)</li>
                  <li>Add query parameter with each country</li>
                </ul>
              </li>
              <li>Have useEffect depend on the country state</li>
            </ul>
          </li>
          <li>
            Review progress and assess stretch goals
            <ul>
              <li>Make new plan for each stretch goal identified</li>
            </ul>
          </li>
        </ul>
        <h2>Stretch Goals</h2>
        <ul>
          <li>
            Remove the useEffect for fetching from the API and replace it with useSWR
            <ul>
              <li>Import SWR</li>
              <li>Set the path to the API using fetcher</li>
              <li>Determine what to return from that</li>
              <li>Ensure the error and loading statements are added in</li>
              <li>
                Check new output against previous output to preserve all functionality
              </li>
            </ul>
          </li>
          <li>
            Try and make the page more real life-like
            <ul>
              <li>Automatic review loaded depending on your location</li>
              <li>
                Fixed size review box so we don't keep changing the size of the page
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Plan;