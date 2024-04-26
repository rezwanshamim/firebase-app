import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { getDoc, doc, collection } from "firebase/firestore";
import Navbar from "./Navbar";

const SingleBlog = () => {
  // console.log(useParams());
  const { id } = useParams();

  const [data, setData] = useState({});

  const colRef = collection(db, "blog");

  const singleData = doc(db, "blog", id);

  useEffect(() => {
    const singleFetch = () => {
      getDoc(singleData).then((doc) => setData(doc.data()));
    };

    singleFetch();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="left-img my-5">
          <img
            src={data.img}
            alt=""
            className="img-fluid"
            style={{ width: "90%" }}
          />
        </div>
        <div
          className="right-data d-flex justify-content-center align-items-center flex-column"
          style={{ width: "1000px" }}
        >
          <div
            className="user-content d-flex justify-content-center align-items-center"
            style={{ width: "54%" }}
          >
            <img
              src={data.authorImg}
              alt="firebase"
              style={{
                width: "8%",
                borderRadius: "50%",
                margin: "0.5rem ",
              }}
            />
            {/* <h2>{data.authorName}</h2> */}
            <h2>
              <u style={{ color: "#CDFADB" }}>{data.authorName}</u>
            </h2>
          </div>
          <div className="text-center">
            <h1 style={{ color: "#FFEBB2" }}>{data.title}</h1>
            <h3>{data.shortDesc}</h3>
            <h5 style={{ color: "#FFFC9B" }}>{data.fullDesc}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
