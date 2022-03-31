import Link from "next/link";
import React from "react";
import styles from "../../styles/Books.module.css";

const books = ({ data, type }) => {
  console.log("Working in the next app", data, type);
  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        <>
          <h2>{type.charAt(0).toUpperCase() + type.slice(1)} Books</h2>
          <div className={styles.bookContainer}>
            {data.map((item) => (
              <div key={item.title} className={styles.book}>
                {item.title}
                {item.authors.length > 0 ? (
                  <Link
                    href={`/authors/[id]`}
                    as={`../authors/${item.authors[0].key.slice(9)}`}
                  >
                    <a>{item.authors[0].name}</a>
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default books;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: "horror" } },
      { params: { type: "thriller" } },
      { params: { type: "comedy" } },
      { params: { type: "novel" } },
      { params: { type: "scifi" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://openlibrary.org/subjects/${params.type}.json`
  );
  const data = await res.json();
  return {
    props: {
      data: data.works,
      type: params.type,
    },
  };
}

// Home page: Form with the submit button (maybe one drop down), on submit will <Link /> to that particular page
// update the books title page, for dynamic routes, e.g. books/horror, books/thriller, etc
// for that one getStaticPaths function followed by getStaticProps function for static generation
// On all the books cover, there will be one author link which will redirect to other url 'authors/<name>'
// On the [author].js page, one getServerSideProps function for the demo of server side rendering
