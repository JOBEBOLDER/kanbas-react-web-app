export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        {/* Unpublish 和 Publish on the top */}
        <button>Unpublish</button> <button>Publish</button>
  
        {/* function button */}
        <div>
          <button>Import Existing Content</button>
          <button>Import from Commons</button>
          <button>Choose Home Page</button>
          <button>View Course Stream</button>
          <button>New Announcement</button>
          <button>New Analytics</button>
          <button>View Course Notifications</button>
        </div>
      </div>
    );
  }