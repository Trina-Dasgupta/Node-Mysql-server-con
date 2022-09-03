import { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios.jsx";

const App = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Async Await
  const getMyPostData = async () => {
    try {
      const res = await axios.get("/api/foods");
      console.log(res)
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Love to Eat</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0, 50).map((post) => {
          const { food_id,food_name,food_desc,food_pic,food_price } = post;
          return (
            <div key={food_id} className="card">
              <img className="food_pic" src={food_pic} alt=""/>
              <h2>{food_name} ₹{food_price}</h2>
              <p>{food_desc.slice(0, 100)}...</p>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "./axios.jsx";

// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Async Await
//   const getMyPostData = async () => {
//     try {
//       const res = await axios.get("/posts");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };

//   // NOTE:  calling the function
//   useEffect(() => {
//     getMyPostData();
//   }, []);

//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {isError !== "" && <h2>{isError}</h2>}

//       <div className="grid">
//         {myData.slice(0, 50).map((post) => {
//           const { body, id, title } = post;
//           return (
//             <div key={id} className="card">
//               <h2>{title.slice(0, 15).toUpperCase()}</h2>
//               <p>{body.slice(0, 100)}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;



// Use Axios in React with Async & Await. Also Error Handling woth Try Catch
// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios.jsx";


// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Async Await
//   const getMyPostData = async () => {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError(error.message);
//     }
//   };

//   // NOTE:  calling the function
//   useEffect(() => {
//     getMyPostData();
//   }, []);

//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {isError !== "" && <h2>{isError}</h2>}

//       <div className="grid">
//         {myData.slice(0, 9).map((post) => {
//           const { body, id, title } = post;
//           return (
//             <div key={id} className="card">
//               <h2>{title.slice(0, 15).toUpperCase()}</h2>
//               <p>{body.slice(0, 100)}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;


// Use Axios in React with Promises and Error Handling

// import { useState, useEffect } from "react";
// import "./App.css";
// import axios from "axios.jsx";

// const App = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   // using Promises
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => setMyData(response.data))
//       .catch((error) => setIsError(error.message));
//   }, []);

// //plz subscribe to thapa technical
//   return (
//     <>
//       <h1>Axios Tutorial</h1>
//       {isError !== "" && <h2>{isError}</h2>}

//       <div className="grid">
//         {myData.slice(0, 9).map((post) => {
//           const { body, id, title } = post;
//           return (
//             <div key={id} className="card">
//               <h2>{title.slice(0, 15).toUpperCase()}</h2>
//               <p>{body.slice(0, 100)}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;