'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import logo from '../logo/logo.png';
import Link from "next/link";

function LandingPage  () {
  const router = useRouter();

  const navigateToPage1 = () => {
    router.push('/LiveCollaborationPage'); // Navigates to Page 1
  };

  const navigateToPage2 = () => {
    router.push('/AIGenerationPage'); // Navigates to Page 2
  };

  return (<div style={{ background: '#3b3c45' }} className="flex items-center justify-center min-h-screen pt-16">
  <div className="mr-10">
    <Image width={512} height={512} src={logo} alt="Logo" />
  </div>
  <main className="text-center">
<h1 style={{ color: 'white' }} className="text-6xl font-semibold mb-5 font-mono">Welcome to</h1>
<h1 style={{ color: 'white' }} className="text-9xl font-semibold mb-5 font-mono">freedraw!</h1>

<h1 style={{ color: 'white' }} className="text-4xl font-semibold mb-10 font-mono">A MockAI Interactive Whiteboard.</h1>

<div  className="flex items-center justify-start">

<h2 style={{ color: 'white' }} className="text-2xl font-semibold mb-5 font-mono">Get Started</h2>
</div>



<div  className="flex items-center justify-start space-x-8" >
<Link href={"/LiveCollaborationPage"}>
<button  className="relative flex flex-col items-start justify-center p-2 pr-24 bg-[#3b3c45] hover:bg-[#2b2c35] rounded-sm border-2 border-white font-mono transition-colors duration-200">
<span  className="text-white text-lg font-bold">Live Interact</span>
<span className="text-white text-sm overflow-hidden overflow-ellipsis">
Collab with your team
</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
</button>
</Link>
<Link href={"/AIGenerationPage"}>
<button className="relative flex flex-col items-start justify-center p-2 pr-24 bg-[#3b3c45] hover:bg-[#2b2c35] rounded-sm border-2 border-white font-mono transition-colors duration-200">
<span className="text-white text-lg font-bold">Genius Board</span>
<span className="text-white text-sm overflow-hidden overflow-ellipsis">
Genereate AI images
</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-white">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
</button>
</Link>
</div>
</main>
</div>
  );
};

export default LandingPage;
