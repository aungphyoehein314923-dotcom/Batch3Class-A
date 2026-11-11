import Button from "../components/button"; //"@/component/button"//
import Welcome from "@/components/welcome";
import Message from "@/components/message";
import Greeting from "@/components/greeting";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/components/card";

export default function Home() {
  return (
   <div>
    <Header/>
    <main style={{padding:"lerm"}}>
      <h1>Home Page</h1>
      <Card 
      title="React Basis"
      description=" Learn about Component and Props"/>
      <Card
      title="Next.js App Router"
      description="Built pahes modern Routing"/>
     <h1>Home Page</h1>
     <Greeting name="Maria"/>
     <Greeting name="Alex"/>
    <Message/>
     <Welcome/>
    <Button/>
    <Footer/>
    </main>
   </div>
   
  );
}
