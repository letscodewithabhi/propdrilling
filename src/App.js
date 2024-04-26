import logo from './logo.svg';
import './App.css';
import Section from "./Section";
import Heading from "./Heading";
import Post from "./Post";

function App() {
    return (
        <Section>
            <Heading>My Profile</Heading>
            <Post body="Ready my blog"/>
            <Section>
                <Heading>All Posts</Heading>
                <Post>1</Post>
                <Section>
                    <Heading>Comments</Heading>
                    <Post>Comment 1</Post>
                    <Post>Comment 2</Post>
                    <Section>
                        <Heading>Replies</Heading>
                        <Post>Replies 1</Post>
                        <Post>Replies 2</Post>
                        <Post>Replies 3</Post>
                    </Section>
                    <Post>Comment 3</Post>
                </Section>
                <Post>2</Post>
                <Section>
                    <Heading>Comments</Heading>
                    <Post>Comment 1</Post>
                    <Post>Comment 2</Post>
                    <Post>Comment 3</Post>
                </Section>
            </Section>
        </Section>
    );
}

export default App;
