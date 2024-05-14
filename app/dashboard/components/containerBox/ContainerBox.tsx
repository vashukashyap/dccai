 export const ContainerBox = ({
    title,
  }: {
    title: string;
  }) => {
    return(
        <>
        <div className="flex justify-start py-4 px-3 h-[10rem] w-[20rem] bg-gray-300 bg-opacity-20 hover:bg-opacity-30 rounded-lg">
            <h1 className="text-xl text-white font-semibold">Generate <br/> <span className="text-3xl">{title}</span> with Prompt</h1>
        </div>
        </>
    );
 }