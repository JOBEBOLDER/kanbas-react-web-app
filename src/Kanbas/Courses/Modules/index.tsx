
export default function Modules() {
    return (
      <div>
        {/* options: collapse all and view progress button */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Lecture 1</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    <a href="#reading-material">READING</a>
                  </li>
                  <li className="wd-content-item">
                    <a href="#slides">SLIDES</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Understanding HTML</li>
                  <li className="wd-content-item">Basic CSS Concepts</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">Lecture 2</span>
                <ul className="wd-content">
                  <li className="wd-content-item">
                    <a href="#reading-material">READING</a>
                  </li>
                  <li className="wd-content-item">
                    <a href="#slides">SLIDES</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }