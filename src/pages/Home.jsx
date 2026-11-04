
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Explore Our Courses</h1>

        <p>
          Build your skills and become a better developer.
          Find the right course to start or advance your journey.
        </p>
      </section>

      <section className="courses-section">
        <h2>All Courses</h2>

        <div className="courses-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
