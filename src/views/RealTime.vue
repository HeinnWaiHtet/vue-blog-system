<template>
  <h2>RealTime</h2>
</template>

<script>
import {ref} from "vue";
import {db, initialApp} from "../firebase/config";
import { getDatabase, ref as realtimeRef, once } from "firebase/database";
export default {
    setup(){
        let posts = ref([]);

        const tutorialsRef = realtimeRef(getDatabase(initialApp));
        once(child(tutorialsRef, 'post')).then((snapshot) => {
        var tutorials = [];

        snapshot.forEach(function(childSnapshot) {
            console.log(childSnapshot);
            // var key = childSnapshot.key;
            // var data = childSnapshot.val();
            // // ...

            // tutorials.push({ key: key, title: data.title, description: data.description});
        });
        });
        // get(child(dbRef, 'post')).then((snapshot) => {
        // if (snapshot.exists()) {
        //     console.log(snapshot.val());
        // } else {
        //     console.log("No data available");
        // }
        // }).catch((error) => {
        // console.error(error.message);
        // });

        //realtime database get in firebase v-8
        // db.collection("post").onSnapshot((snap) => {
        //     posts.value = snap.docs.map((doc) => {
        //         console.log(doc);
        //         return {...doc.data(), id :doc.id};
        //     })
        // })

        return {posts};
    }
}
</script>

<style>

</style>