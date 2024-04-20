'use client'
// Import the necessary modules
import React from 'react' // React library for building user interfaces
import ExcalidrawAI from '@/app/ExcelliDrawAI'; // Custom Excalidraw component for AI
import { useRouter } from "next/navigation"; // Hook from Next.js for navigation

// Define the AIGenerationPage component
const AIGenerationPage = () => {
    // Use the useRouter hook from Next.js to get the router object
    const router = useRouter();

    // Define a function to handle the click event of the back button
    const BackHandleClick = () => {
        // Use the router object to navigate to the home page
        router.push('/');
    }

    // Return the JSX to render for this component
    return (
        <div>
            {/* Back button */}
            <button onClick={BackHandleClick} className="absolute top-0 left-2 p-1 z-50 text-black rounded-md  transition-colors duration-200">
                {/* SVG for the back button */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-10 w-10">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </button>
            
            {/* ExcalidrawAI component */}
            <ExcalidrawAI />
        </div>
    )
}

// Export the AIGenerationPage component as the default export
export default AIGenerationPage