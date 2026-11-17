"use client"
import Button from "../components/button"; //"@/component/button"//
import Welcome from "@/components/welcome";
import Message from "@/components/message";
import Greeting from "@/components/greeting";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/card";
import Profile from "@/components/profile";
import StudentList from "@/components/studentlist";
import UserProfile from "@/components/user-profile";
import SkillList from "@/components/skill-list";
import CardWrapper from "@/components/card-wapper";
import CustomButton from "@/components/custom-button";
import InputExample from "@/components/input-example";
import ToogleMessage from "@/components/toogle-message";
import TodoApp from "@/components/todo-app";
import StudentManagement from "@/components/student-management";
import LocalImage from "@/components/local-image";
import RemoteImage from "@/components/remote-image";
import ProfileCard from "@/components/profile-card";
import ActionCard from "@/components/action-card";






export default function Home() {
  const user = {
    name: "Aung Aung",
    age: 25,
    country: "Myanmar",

  }
  const students = ["Su Su", "Aung Aung", "Maung Maung"];
  function handelClick() {
    alert("User Clicked Button.")
  }
  const users = {
    name: "Aung",
    role: "Developer",
    company: "Ult"
  }
  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js"
  ]
  
  return (
    <div>
      <Header />
      <main style={{ padding: "lerm" }}>
        <h1>Home Page</h1>
        <Button/>
        <ProfileCard />
        <ActionCard />
        <LocalImage />
        <TodoApp />
        <Message />
        <RemoteImage />
        <ToogleMessage />
        <InputExample />
        <StudentManagement />
        <Button onClick={handelClick} />
        <UserProfile users={users} />
        <CardWrapper>
          <Profile user={user} />
        </CardWrapper>
        <CardWrapper>
          <SkillList skills={skills} />
        </CardWrapper>
        <StudentList students={students} />
        <CardWrapper>
          <CustomButton onClick={handelClick} />
        </CardWrapper>
        <Card
          title="React Basis"
          description=" Learn about Component and Props" />
        <Card
          title="Next.js App Router"
          description="Built pahes modern Routing" />
        <h1>Home Page</h1>
        <Greeting name="Maria" />
        <Greeting name="Alex" />
        <Message />
        <Welcome />

        <Footer />
      </main>
    </div>

  );
}
