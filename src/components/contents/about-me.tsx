import AnimationContainer from "../utils/animation-container";

const AboutMe = () => {
    return (
        <div className="w-full relative pt-10 pb-20 z-40">
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto"
            >
                <div className="w-full">
                    <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
                        About Me
                    </h2>
                </div>
            </AnimationContainer>
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
            >
                <div className="w-full flex items-center justify-center">
                    <p className="text-base md:text-lg text-justify w-full">
                    I'm a versatile digital professional with expertise in media buying, web development,and front-end development. I craft engaging digital experiences with a focus on seamless functionality and stunning aesthetics. With proficiency in React, Next.js, and CMS platforms, I build responsive web applications and static websites that drive real results. I also leverage my media buying skills to optimize digital campaigns and reach target audiences. Let's build and grow something amazing together!✨
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
