import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

const Experience = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Frontend Developer at Polymath AI
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Jun 2024 - Aug 2024
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Worked as a frontend developer at Polymath AI, contributing to innovative solutions in the AI space.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem last>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Backend Developer (Freelance) at Saman Technosys
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Oct 2023 - Nov 2023
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Developed scripts with Node.js to get scrap data of profiles and store in excel. (300k profiles)
                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};

export default Experience;
