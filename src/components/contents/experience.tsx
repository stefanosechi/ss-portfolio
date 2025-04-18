import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

const Experience = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Media Buyer & Web Developer (Sole Trader)
                        </span>
                        <br />
                        <span className="text-sm text-neutral-400">
                            Freelancer
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            03/2019 - Present
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Expert freelancer in advertising, Web development and e-commerce development.                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Analyst
                        </span>
                        <br />
                        <span className="text-sm text-neutral-400">
                            Covalen - Dublin
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            11/2024 - Present
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Investigating and resolving issues reported on the client’s platform, such as account support requests and
reports of potentially abusive content.                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Trust & Safety Associate (contractor)
                        </span>
                        <br />
                        <span className="text-sm text-neutral-400">
                            Acenture
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                           04/2024 - 09/2024
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Quality Assessment: Evaluating the accuracy, relevance, and quality of Gemini AI-generated content.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem last>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Data Analyst Stage
                        </span>
                        <br />
                        <span className="text-sm text-neutral-400">
                            Columen
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            04/2024 - 07/2024
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Contributed to data-driven projects by performing de‐
tailed analyses and providing recommendations based on findings.

                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};

export default Experience;
