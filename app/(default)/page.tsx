export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};


import Sidebar from "@/components/Sidebar";
import ChatArea from "@/components/ChatArea";
import ChatInput from "@/components/ChatInput";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
       
          

          <ChatArea />
        
          <ChatInput  />
          
          
      
    </>
  );
}
