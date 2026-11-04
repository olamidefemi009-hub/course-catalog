
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Category() {
  const { category } = useParams();

  const filteredCourses = courses.filter(
    (course) =>
      course.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="category-page">
      <section className="category-header">
        <h1>{category} Courses</h1>

        <p>
          Explore our {category.toLowerCase()} courses
          and improve your development skills.
        </p>
      </section>

      {filteredCourses.length > 0 ? (
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      ) : (
        <h2>No courses found in this category.</h2>
      )}
    </main>
  );
}

export default Category;
