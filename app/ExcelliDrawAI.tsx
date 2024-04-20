// Use 'client' as the environment
'use client'

// Import the necessary modules 
import { useState, useEffect } from 'react'
import * as fal from "@fal-ai/serverless-client"
import Image from 'next/image'

// Configure the FAL AI serverless client with a proxy URL
fal.config({
  proxyUrl: "/api/fal/proxy",
})

// Generate a random seed for the AI model
const seed = Math.floor(Math.random() * 100000)

// Define base arguments for the AI model
const baseArgs = {
  sync_mode: true,
  strength: .99,
  seed
}
// Define the Home component3
export default function Home() {
   // Define state variables for the input, image, scene data, Excalidraw API, application state, and Excalidraw export functions
  const [input, setInput] = useState('masterpice, best quality, A cinematic shot of a baby raccoon wearing an intricate italian priest robe')
  const [image, setImage] = useState(null)
  const [sceneData, setSceneData] = useState<any>(null)
  const [excalidrawAPI, setExcalidrawAPI] = useState<any>(null)
  const [_appState, setAppState] = useState<any>(null)
  const [excalidrawExportFns, setexcalidrawExportFns] = useState<any>(null)
  const [isClient, setIsClient] = useState<boolean>(false)
// Import the Excalidraw component dynamically
  const [Comp, setComp] = useState<any>(null);
  useEffect(() => {
    import('@excalidraw/excalidraw').then((comp) => setComp(comp.Excalidraw))
  }, [])
  // Set isClient to true after the component mounts
  useEffect(() => { setIsClient(true) }, [])
   // Import the Excalidraw export functions dynamically
  useEffect(() => {
    import('@excalidraw/excalidraw').then((module) =>
      setexcalidrawExportFns({
        exportToBlob: module.exportToBlob,
        serializeAsJSON: module.serializeAsJSON
      })
    );
  }, []);
// Connect to the FAL AI server
  const { send } = fal.realtime.connect('110602490-sdxl-turbo-realtime', {
    connectionKey: 'realtime-nextjs-app',
    onResult(result) {
      if (result.error) return
      setImage(result.images[0].url)
    }
  })
 // Define a function to get a data URL for the current Excalidraw scene
  async function getDataUrl(appState = _appState) {
    const elements = excalidrawAPI.getSceneElements()
    if (!elements || !elements.length) return
    const blob = await excalidrawExportFns.exportToBlob({
      elements,
      exportPadding: 0,
      appState,
      quality: 1,
      files: excalidrawAPI.getFiles(),
      getDimensions: () => { return { width: 450, height: 450 } }
    })
    return await new Promise(r => { let a = new FileReader(); a.onload = r; a.readAsDataURL(blob) }).then((e: any) => e.target.result)
  }
// Start of the main component
  return (
     // Main container with padding
    <main className="p-12">
      <p className="text-xl mb-2">Pitch Your Imagination</p>
      <input
        className='border-2 border-black rounded-lg p-2 w-full mb-2'
        value={input}
        // Event handler for when the input changes
        onChange={async (e) => {
           // Update the input state with the new value
          setInput(e.target.value)
          // Get a data URL for the current Excalidraw scene
          let dataUrl = await getDataUrl()
          // Send the new input and scene to the FAL AI server
          send({
            ...baseArgs,
            prompt: e.target.value,
            image_url: dataUrl
          })
        }
        }



      />
      <div className='flex'>
        <div className="w-[550px] h-[570px]">
          {
            isClient && excalidrawExportFns && (
              <Comp
               // Set the Excalidraw API when the component is mounted
                excalidrawAPI={(api: any) => setExcalidrawAPI(api)}
                 // Event handler for when the Excalidraw scene changes
                onChange={async (elements: any, appState: any) => {

// Serialize the new scene to JSON

                  const newSceneData = excalidrawExportFns.serializeAsJSON(
                    elements,
                    appState,
                    excalidrawAPI.getFiles(),
                    'local'
                  )
// If the new scene is different from the current scene
                  if (newSceneData !== sceneData) {
                    // Update the application state and scene data
                    setAppState(appState)
                    setSceneData(newSceneData)
                     // Get a data URL for the new scene
                    let dataUrl = await getDataUrl(appState)
                     // Get a data URL for the new scene
                    send({
                      ...baseArgs,
                      image_url: dataUrl,
                      prompt: input,
                    })
                  }

                }
                }
              />
            )
          }
        </div>
        {
          image && (
            <Image
              src={image}
              width={550}
              height={550}
              alt='fal image'
            />
          )
        }
      </div>
    </main>

  )
  // End of the main component
}