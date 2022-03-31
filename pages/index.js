import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const page = () => {
  const [type, setType] = React.useState("");

  const router = useRouter();

  const clickHandler = () => {
    router.push("/books/[type]", `books/${type}`);
  };

  return (
    <div className={styles.formContainer}>
      <label htmlFor="type-select">
        <h2>Choose a type:</h2>
      </label>
      <select
        name="types"
        id="type-select"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className={styles.select}
      >
        <option value="">--Please choose an option--</option>
        <option value="horror">Horror</option>
        <option value="thriller">Thriller</option>
        <option value="comedy">Comedy</option>
        <option value="novel">Novel</option>
        <option value="scifi">Sci-Fi</option>
      </select>

      <button onClick={clickHandler} className={styles.button}>
        Submit
      </button>
    </div>
  );
};

export default page;

// Home page: Form with the submit button (maybe one drop down), on submit will <Link /> to that particular page
// update the books title page, for dynamic routes, e.g. books/horror, books/thriller, etc
// for that one getStaticPaths function followed by getStaticProps function for static generation
// On all the books cover, there will be one author link which will redirect to other url 'authors/<name>'
// On the [author].js page, one getServerSideProps function for the demo of server side rendering
