// Use client-side only
'use client'

// Import necessary modules from tldraw and react
import { Tldraw, track, useEditor } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore } from '../hooks/YjsTldrawEditor'
import { useState } from 'react';

// Define the props for the MyCollaborativeCanvas component
interface MyCollaborativeCanvasProps {
  roomId: string;
}

// Define the host URL based on the environment
const HOST_URL =
process.env.NODE_ENV === 'development'
        ? 'ws://localhost:1234'
        : 'wss://demos.yjs.dev'

// Define the MyCollaborativeCanvas component
export default function MyCollaborativeCanvas({ roomId }: MyCollaborativeCanvasProps) {
  // Use the Yjs store for collaborative editing
    const store = useYjsStore({
        roomId: roomId,
        hostUrl: HOST_URL,
    })

  // State for whether the room ID has been copied
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying the room ID
  const handleCopy = async () => {
    try {
      // Attempt to write the room ID to the clipboard
      await navigator.clipboard.writeText(roomId);
      // Set the copied state to true
      setIsCopied(true);
      // Reset the copied state after 3 seconds
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      // Log any errors
      console.error('Failed to copy room ID: ', err);
    }
  };

  // Render the component
    return (
    <div className="tldraw__editor">
      <div className="font-mono " style={{ position: 'fixed', top: '100px', left: '10px', zIndex: 9999 }}>
        Room ID: {roomId}<br></br>
        {isCopied ? (
          // Show a "Copied" message if the room ID has been copied
          <span className="w-full relative flex text-black items-center justify-center p-0.5 border-4 border-black rounded-lg font-mono transition-colors duration-200">Copied ✔️</span>
        ) : (
          // Show a "Copy" button if the room ID has not been copied
          <button className="w-full relative flex text-black items-center justify-center p-0.5 border-4 border-black rounded-lg font-mono transition-colors duration-200" onClick={handleCopy}>Copy</button>
        )}
      </div>
      <Tldraw
        autoFocus
        store={store}
        components={{
          SharePanel: NameEditor,
        }}
      />
    </div>
    )
}

// Define the NameEditor component
const NameEditor = track(() => {
  // Use the editor
    const editor = useEditor()

  // Get the user's preferences
    const { color, name } = editor.user.getUserPreferences()

  // Render the component
    return (
        <div style={{ pointerEvents: 'all', display: 'flex' }}>
            <input
                type="color"
                value={color}
                onChange={(e) => {
          // Update the user's color preference when the color input changes
                    editor.user.updateUserPreferences({
                        color: e.currentTarget.value,
                    })
                }}
            />
            <input
                value={name}
                onChange={(e) => {
          // Update the user's name preference when the name input changes
                    editor.user.updateUserPreferences({
                        name: e.currentTarget.value,
                    })
                }}
            />
        </div>
    )
})