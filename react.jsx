
import { BarLoader, CircleLoader, ClipLoader, PuffLoader ,HashLoader,BeatLoader,BounceLoader,FadeLoader,RingLoader,ScaleLoader } from 'react-spinners';


export default function Loading (isLoading ) {
    return (
        <div className="flex justify-center items-center">
            <div className="font-bold text-4xl">
                
                <ClipLoader color={"#123abc"} className='font-extrabold' loading={isLoading} size={100} />
                <PuffLoader color={"#123abc"} className='font-extrabold' loading={isLoading} size={100} />
                <CircleLoader color={"#123abc"} className='font-extrabold' loading={isLoading} size={100} />
                <BarLoader color={"#123abc"} className='font-extrabold' loading={isLoading} width={200} height={10} />
                <ScaleLoader color={"#123abc"} loading={isLoading} height={60} width={10} />
                <HashLoader color={"#123abc"} loading={isLoading} size={100} />
                <RingLoader color={"#123abc"} loading={isLoading} size={150} />
                <FadeLoader color={"#123abc"} loading={isLoading} width={15} height={50} />
                <BounceLoader color={"#123abc"} loading={isLoading} size={120} />
                Loading <BeatLoader color={"black"} loading={isLoading} size={15} margin={4} />
            </div>
        </div>
    )
}