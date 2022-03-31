import React from "react";
import styles from "../../styles/Authors.module.css";

const Authors = ({ data }) => {
  return (
    <div>
      {data.name ? (
        <div className={styles.container}>
          <h2 className={styles.name}>{data.name}</h2>
          <div className={styles.information}>{data.bio}</div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Authors;

export async function getServerSideProps(context) {
  const authorId = context.params.id;
  const apiResponse = await fetch(
    `http://localhost:3000/api/authors/${authorId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const jsonRes = await apiResponse.json();
  const data = jsonRes.data;
  return {
    props: {
      data,
    },
  };
}
