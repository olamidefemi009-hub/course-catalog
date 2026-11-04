
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (course) => course.slug === slug
  );

  if (!course) {
    return (
      <div className="not-found">
        <h1>Course not found</h1>
        <p>Sorry, we couldn't find this course.</p>
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <main className="course-detail">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      <span className="category-badge">
        {course.category}
      </span>

      <h1>{course.title}</h1>

      <p className="course-duration">
        Duration: {course.duration}
      </p>

      <p className="course-description">
        {course.description}
      </p>

      <h2>Topics Covered</h2>

      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </main>
  );
}

export default CourseDetail;
