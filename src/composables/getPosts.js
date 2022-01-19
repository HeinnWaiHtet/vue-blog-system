import { ref } from "vue";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");

  let load = async () => {
    try {
      let querySnapshot = await getDocs(collection(db, "post"));
      querySnapshot.forEach((doc) => {
        posts.value.push({ id: doc.id, ...doc.data() });
      });

      // posts.value = response.map((doc) => {
      //   return { id: doc.id, ...doc.data() };
      // });

      // let response = await db.collection("post").get();
      // posts.value = response.docs().map((doc) => {
      //   return { id: doc.id, ...doc.data() };
      // });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

//Using Json Server
// let response = await fetch("http://localhost:3000/posts");
// if (response === 400) {
//   throw new Error("Something Went wrong");
// }
// let data = await response.json();
// posts.value = data;

export default getPosts;