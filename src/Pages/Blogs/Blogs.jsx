import React from "react";

const Blogs = () => {
  return (
    <div className="w-full">
      <h2 className="text-5xl font-bold capitalize text-[#00095e] text-center my-10">
        blogs{" "}
      </h2>
      <div className="p-6 rounded-lg shadow-lg my-16">
        <h3 className="text-2xl font-bold text-[#ffcc13]">
          Difference between authorization and authentication:{" "}
        </h3>
        <p className="text-lg font-semibold text-gray-400 my-8">
          <span className="text-xl font-bold text-[#00095e] capitalize">
            ans:
          </span>{" "}
          Authentication means leting the user access the website by email and
          password. Anyone can login and access the website content.
          <br />
          <br />
          Authorization means gives some specific user a certain power to
          control the website and it's content.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg my-16">
        <h3 className="text-2xl font-bold text-[#ffcc13]">
          Why are you using firebase? What other options do you have to
          implement authentication?{" "}
        </h3>
        <p className="text-lg font-semibold text-gray-400 my-8">
          <span className="text-xl font-bold text-[#00095e] capitalize">
            ans:
          </span>{" "}
          Firebase provide services to implement user authentication without
          handleing backend. We can use firebase to implement social media login
          (like: google, facebook, twitter, github etc), email and password
          authentication easily. <br />
          <br />
          Wihtout Firebase we can implement authentication by handleing backend
          on our own. Also there are some alternative of firebase, like:
          <br />
        </p>
        <ul className="text-lg font-semibold text-gray-400">
          <li>Parse.</li>
          <li>Back4App.</li>
          <li>AWS Amplify.</li>
          <li>Kuzzle.</li>
          <li>Couchbase.</li>
        </ul>
      </div>
      <div className="p-6 rounded-lg shadow-lg my-16">
        <h3 className="text-2xl font-bold text-[#ffcc13]">
          What other services does firebase provide other than authentication?{" "}
        </h3>
        <p className="text-lg font-semibold text-gray-400 my-8">
          <span className="text-xl font-bold text-[#00095e] capitalize">
            ans:
          </span>{" "}
          Without authentication firebase provide the below services:
          <br />
        </p>
        <ul className=" text-lg font-semibold text-gray-400">
          <li>Firestore database</li>
          <li>Realtime database</li>
          <li>Storage</li>
          <li>Hosting</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
