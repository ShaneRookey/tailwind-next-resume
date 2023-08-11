import JobDescription from "./job_description";

const SOFTWARE_ENGINEER = {
    title: "Software Engineer at STEM Inc.",
    date: "From June 2022 - July 2023",
    data: [
        "I played a valuable role on multiple small teams within the organization to bring the customer voice and passion for quality to the forefront of our application by providing useful feedback and suggestions during all agile ceremonies.",
        "I also leveraged my industry, application and customer knowledge to create and update our features within the flagship product. These jobs included fun tasks like charting with HighCharts, Running reports full of requested data/KPIs, implementing the UI for PV system modeling specs and visually displaying key data points within dashboards and widgets.",
        "The tech stack used for this web application was a complex web of new and legacy things. The new more modern frontend was developed using React and Node.js while the older legacy platform was a silverlight application with C++. Long story-short - I am not scared of a mess and am happy to jump in and begin learning."
    ]
}

const QA_ENGINEER = {
    title: "Quality Assurance Software Engineer at AlsoEnergy",
    date: "From March 2021 - June 2022",
    data: [
        "The QA team was fresh when I joined. I created the first fully automated testing suite at the company using Java and Selenium. I created a GitLab trigger to kickoff the testing pipeline via a test plan in XRAY on Jira. This also began automating our regression statistics and displaying the value that QA brought to the teams.",
        "I would regularly build and test branches locally which prevented the need to deploy to development before finding issues. I am a true advocate for Agile practices and having quick turn-arounds with feedback loops is something I value.",
        "I helped establish and lead the QA team in manual testing of the application for each release. This included writing and executing test plans such as regression and smoke testing. I would often take the responsibility of deploying the application to production."
    ]
}

const SUPPORT_MENTOR = {
    title: "Support Team Mentor at AlsoEnergy",
    date: "From October 2019 - March 2021",
    data: [
        "I became the go-to person for weird one-off problems that have were uncommon. My ability to diagnose and troubleshoot software coupled with hardware was my strength in this role.",
        "I began training the tier 2s by observing their live calls and figuring out which topics to cover each week to improve the efficiency of the support team.",
        "Onboarded new members and documented processes to ensure the success of the team, even when I was not there."
    ]
}

const ETC_SUPPORT = {
    title: "Tier 1 to Tier 3 Support at AlsoEnergy",
    date: "From August 2018 - October 2019",
    data: [
        "Quickly progressed through each tier of support until I was mentoring the entire team after just a year of joining the team out of college."
    ]
}

function Expertise() {
    return ( 
        <div>
            <h1 className="text-5xl flex justify-center mt-10 text-teal-700 font-medium">Professional Experience</h1>
            <JobDescription title={SOFTWARE_ENGINEER.title} date={SOFTWARE_ENGINEER.date} data={SOFTWARE_ENGINEER.data} />
            <JobDescription title={QA_ENGINEER.title} date={QA_ENGINEER.date} data={QA_ENGINEER.data} />
            <JobDescription title={SUPPORT_MENTOR.title} date={SUPPORT_MENTOR.date} data={SUPPORT_MENTOR.data} />
            <JobDescription title={ETC_SUPPORT.title} date={ETC_SUPPORT.date} data={ETC_SUPPORT.data} />
        </div>
    );
}

export default Expertise;