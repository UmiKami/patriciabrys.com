import SocialMediaBar from "../components/SocialMediaBar"
import { middleSectionContent } from "../store/GlobalValues"

const Home = () => {
    return (
        <main className="flex mx-[15%] my-7">
            <section className="left w-[25%] py-8"></section>
            <section className="center w-[50%] flex gap-8 flex-col items-center">
                <h1 className="text-4xl font-serif">{middleSectionContent.title || "Some Title"}</h1>
                <img className="object-contain max-h-[50%]" src={middleSectionContent.imgUrl || "https://placehold.co/600x650"} alt={middleSectionContent.imgDescription} />
                <div className="quote">
                    <span className="text-6xl font-alexbrush">"</span>
                    <span className="text-2xl font-serif">{middleSectionContent.quote || "A Quote is But something a human has behold"}</span>
                    <span className="text-6xl font-alexbrush">"</span>
                </div>
            </section>
            <section className="right w-[25%] py-8">
                <SocialMediaBar />
            </section>
        </main>
    )
}

export default Home