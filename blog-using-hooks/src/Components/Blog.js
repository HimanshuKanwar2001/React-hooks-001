import {
  collection,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useReducer, useRef, useState } from "react";
import { db } from "../firebaseinit";

// function blogsReducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       return [action.blog, ...state];

//     case "REMOVE":
//       return state.filter((blog, index) => index !== action.index);

//     default:
//       return [];
//   }
// }

//Blogging App using Hooks
export default function Blog() {
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");

  const [formData, setFormData] = useState({ title: "", content: "" });
    const [blogs, setBlogs] = useState([]);
  // const [blogs, dispatch] = useReducer(blogsReducer, []);
  const titleRef = useRef(null);
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  useEffect(() => {
    // async function fetchData() {
    //   const querySnapshot = await getDocs(collection(db, "blogs"));
    //   // console.log("querySnapshot = ",querySnapshot)
    //   const blogs=await querySnapshot.docs.map((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data().title);
    //       return{
    //         id:doc.id,
    //         ...doc.data()
    //       }
    //   });

    //   blogs.forEach((blog)=>{
    //     console.log("data:",blog.title,blog.content);
    //      dispatch({
    //       type: "ADD",
    //       blog:{title:blog.title,content:blog.content}
    //     });
    //   })

    // }
    // fetchData();

    const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
      const blogs = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log("blogs", blogs);
        // dispatch({
        //   type: "ADD",
        //   blog: {...blogs},
        // });
        setBlogs(blogs);
    });
  }, []);
  useEffect(() => {
    if (blogs.length && blogs[0].title) {
      document.title = blogs[0].title;
    } else {
      document.title = "No Blogs";
    }
  }, [blogs]);
  //Passing the synthetic event as argument to stop refreshing the page on submit
  async function handleSubmit(e) {
    e.preventDefault();

    // console.log("Document written with ID: ", docRef.id);

    console.log(formData.title);
    //setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
    // dispatch({
    //   type: "ADD",
    //   blog: { title: formData.title, content: formData.content },
    // });

    setFormData({ title: "", content: "" });
    titleRef.current.focus();

    const docRef = doc(collection(db, "blogs"));

    // Add a new document with a generated id.
    await setDoc(docRef, {
      title: formData.title,
      content: formData.content,
      createdOn: new Date(),
    });

    console.log(blogs);
  }

  async function removeBlog(id) {
    //setBlogs(blogs.filter((blog, index) => i !== index));
    // dispatch({ type: "REMOVE", index: i });
    // console.log('ID',id);
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
  }

  return (
    <>
      {/* Heading of the page */}
      <h1>Write a Blog!</h1>
      {/* Division created to provide styling of section to the form */}
      <div className="section">
        {/* Form for to write the blog */}
        <form onSubmit={handleSubmit}>
          {/* Row component to create a row for first input field */}
          <Row label="Title">
            <input
              className="input"
              placeholder="Enter the Title of the Blog here.."
              value={formData.title}
              ref={titleRef}
              onChange={(e) =>
                setFormData({
                  title: e.target.value,
                  content: formData.content,
                })
              }
            />
          </Row>

          {/* Row component to create a row for Text area field */}
          <Row label="Content">
            <textarea
              className="input content"
              placeholder="Content of the Blog goes here.."
              value={formData.content}
              required
              onChange={(e) =>
                setFormData({ title: formData.title, content: e.target.value })
              }
            />
          </Row>

          {/* Button to submit the blog */}
          <button className="btn">ADD</button>
        </form>
      </div>
      <hr />
      {/* Section where submitted blogs will be displayed */}
      <h2> Blogs </h2>
      {blogs.map((item, i) => (
        
        <div className="blog" key={i}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>

          <div className="blog-btn">
            <button onClick={() => removeBlog(item.id)} className="btn remove ">
              Delete
            </button>
          </div>
        </div>
      ))}
      ;
    </>
  );
}

//Row component to introduce a new row section in the form
function Row(props) {
  const { label } = props;
  return (
    <>
      <label>
        {label}
        <br />
      </label>
      {props.children}
      <hr />
    </>
  );
}
