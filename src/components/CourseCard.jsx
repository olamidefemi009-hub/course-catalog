
import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <span className="category-badge">
        {course.category}
      </span>

      <h3>{course.title}</h3>

      <p className="course-duration">
        Duration: {course.duration}
      </p>

      <Link
        to={`/courses/${course.slug}`}
        className="course-link"
      >
        View Course →
      </Link>
    </div>
  );
}

export default CourseCard;
