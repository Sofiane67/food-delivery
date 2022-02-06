import Section from "../../../../components/Section/Section";
import H2 from "../../../../components/Typography/Heading/H2/H2";
import Work from "../../../../components/Work/Work";
import workImg1 from "../../../../images/work_1.png";
import workImg2 from "../../../../images/work_2.png";
import workImg3 from "../../../../images/work_3.png";
import classes from "./HowItWorks.module.scss";

const works = [
    {
        image:{
            src: workImg1,
            alt: "Adapt your menu items"
        },
        content:{
            title: "Adapt your menu items",
            text: "Easily adapt your menu using the webflow CMS and allow customers to browse your items."
        }
    },
    {
        image: {
            src: workImg2,
            alt: "Accept online orders & takeout"
        },
        content: {
            title: "Accept online orders & takeout",
            text: "Let your customers order and pay via the powerful ecommerce system, or simple let them call your store."
        }
    },
    {
        image: {
            src: workImg3,
            alt: "Manage delivery or takeout"
        },
        content: {
            title: "Manage delivery or takeout",
            text: "Manage your own logistics and take orders simply through the ecommerce system."
        }
    }
]

const HowItWorks = () => {
    return (
        <Section layout="" backgroundImage={false}>
            <H2>How it works.</H2>
            <div className={classes.works}>
                {
                    works.map((work:{
                        image:{
                            src:string,
                            alt:string
                        },
                        content:{
                            title:string,
                            text:string
                        }
                    }, index:number) => {
                        return <Work key={index} image={work.image} content={work.content}/>
                    })
                }
            </div>
        </Section>
    )
}

export default HowItWorks;