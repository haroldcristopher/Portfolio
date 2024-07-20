import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    location: "Chatbot, GPT-4, LLMs, LangChain",
    description:
      "The Most Powerful AI Assistant to Chat with PDF and Ask Anything Online",
    title: "UPDF AI Online",
  },
  {
    img: "/2.png",
    title: "DocsBot AI",
    description:
      "Get instant answers for you, your customers, or your team with AI powered chatbots trained with your content and documentation.",
    location: "ChatGPT, GPT-4, LangChain, RAG",
  },
  {
    img: "/3.png",
    title: "Bharat Bot",
    description:
      "Your Everyday Chatbot Partner",
    location: "ChatGPT, GPT-4, LLMs, LangChain",
  },
  {
    img: "/4.png",
    title: "Your free AI messenger now with GPT",
    description:
      "We connect you with the AI of GPT. Just launch the WebApp or add a Telegram/Whatsapp contact and ask anything you want to know. You're looking for advice, help, entertainment, a recipe or DIY. Ask the AI!",
    location: "ChatGPT, GPT-4, LLMs, LangChain, RAG",
  },
  {
    img: "/7.png",
    title: "Cognitive AI for Healthcare",
    description:
      "Juji powers cognitive AI assistants in the form of chatbots for telehealth.",
    location: "ChatGPT, GPT-4, LLMs, LangChain, Hugging-Face",
  },
];

const initData = sliderData[0];
