import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import InputOption from '../input/InputOption'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import Post from '../post/Post'
import { db } from '../../auth/firebase'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid';
import { selectUser } from '../../features/userSlice'
import FlipMove from 'react-flip-move'

function Feed() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        var postsRef = firebase.firestore().collection("posts").orderBy('timestamp', 'desc');
        
        postsRef.onSnapshot((snapshot) => {
            // console.log('onSnapshot Called!');
            setPosts(

                snapshot.docs.map((doc) => ({
                    data: doc.data(),
                }))
            )
        })

        // postsRef.get().then((snapshot) => {
        //     // var posts = [];
          
        //     snapshot.forEach((childSnapshot) => {
        //       const id = childSnapshot.id;
        //       const data = childSnapshot.data();
        //       // ...
        //       const { name, description, message, photoUrl } = data;
        //       setPosts(...posts, [id, name, description, message, photoUrl] )
        //     //   posts.push({ id: id, data: data});
        //     //   setPosts(posts);
        //     });
        // });

        /*eslint no-unused-expressions: */
        // db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
        //     setPosts(
        //         ...posts,
        //         snapshot.docs.map((doc) => {
        //                 id: doc.id
        //                 data: doc.data()
        //         })
        //     )
        //     console.log("Posts:  "+posts);
        // })

        // db.collection("posts")
        // .onSnapshot((snapshot) => {
        //     // Respond to data
        //     // ...
        //     setPosts(
        //         ...posts,
        //         snapshot.docs.map(( doc, index ) => {
        //             id: doc.id
        //             data: doc.data()
        //         })
        //     )
        //     console.log("Snapshot  "+snapshot);   
        // });
        
        // db.collection("posts").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         setPosts(
        //             ...posts,
        //             {
        //                 id: doc.id,
        //                 data: doc.data()
        //             }
        //         )
        //     });
        // });

        // eslint-disable-next-line react-hooks/exhaustive-deps


    }, [])

    const sendPost = (e) => {
        // if(input.length !== '') {
            e.preventDefault();
            db.collection("posts").add(
                {
                    id: uuidv4(),
                    name: user.displayName,
                    description: user.email ,
                    message: input,
                    photoUrl: user.photoUrl || "",
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    
                }
            )
        // }

        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input values={input} onChange={ (e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ ImageIcon } title="Photo" color="#70B5F9" />
                    <InputOption Icon={ SubscriptionsIcon } title="Video" color="#75D246" />
                    <InputOption Icon={ EventNoteIcon } title="Event" color="#C0CBCD" />
                    <InputOption Icon={ CalendarViewDayIcon } title="Write Article" color="#E7A33E" />
                </div>
            </div>

            <FlipMove>
            {posts && [posts].map(( post , i ) =>  {
                        post.forEach((values,key) => {
                //     return <p>{i+1} = {JSON.stringify(values)} </p>
                // })
                // return <div><p key={i+1}>{JSON.stringify(post)}Index{i+1}</p></div>
                // [{"id":"oV4jnCz3RjfVGGcKXfHz","data":{"description":"This is a test","name":"Abhijit Majumder","timestamp":
                // {"seconds":1613560087,"nanoseconds":688000000},"message":"alibaba","id":"c5d95327-c181-44b0-9f85-6329a431ce8f","photoUrl":""}}]

                const { description, name, message, id, photoUrl } = JSON.stringify(values.data);
                // alert("Post: "+JSON.stringify(values.data));
                            (<div key={key+1}>
                                {/* <p>{JSON.stringify(values.data)}</p> */}
                                <Post 
                                    key={id}
                                    name={name}
                                    description={description}
                                    message={message}
                                    photoUrl={photoUrl}
                                    />
                                </div>)
                        })
                    }
                )
            }
            <Post name={user.displayName} description={user.email} message={user.message}/>
            <Post name={user.displayName} description={user.email} message={user.message}/>
            <Post name={user.displayName} description={user.email} message={user.message}/>
            <Post name={user.displayName} description={user.email} message={user.message}/>
            </FlipMove>
        </div>
    )
}

export default Feed
