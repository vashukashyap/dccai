

export default function page() {
    return(
        <>
        <div className="flex">
        <div className="flex flex-col items-center w-fit gap-2 p-4">
        <input type="text" placeholder="Enter your Prompt Here!!" className="w-[58vw] bg-gray-200 bg-opacity-20 rounded-lg border-sm border text-white px-4 py-1 outline-none"/>
            <div className="h-[75vh] w-[60vw] border bordre-white rounded-2xl bg-gray-300 bg-opacity-20">
            </div>
            
        </div>
        <div className="flex flex-col p-4">
            <h1 className="text-white">IPFS info:</h1>
            <div className="h-[45vh] w-[35vw] border bordre-white rounded-sm bg-green-300 bg-opacity-20">

            </div>
            <div className="self-end mt-40 mr-4 rounded-lg bg-green-800 hover:bg-green-900 cursor-pointer px-4 py-2 text-white text-lg">
                Deploy
            </div>
        </div>
        </div>
        </>
    )
}