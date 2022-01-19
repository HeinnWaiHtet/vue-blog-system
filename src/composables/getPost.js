import { ref } from "vue";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      let docRef = doc(db, "post", id);
      const docSnap = await getDoc(docRef);
      post.value = { id: docSnap.id, ...docSnap.data() };

      // let doc = await db.collection("post").doc(id).get();
      // post.value = { id: doc.id, ...doc.data() };
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};

// using Json server
// let response = await fetch("http://localhost:3000/posts/" + id);
//       if (response.status === 400) {
//         throw new Error("Something Wrong");
//       }
//       let data = await response.json();
//       post.value = data;

export default getPost;
