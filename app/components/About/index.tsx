import {AboutContent} from "@/app/components/About/AboutContent";
import {ProfilePicture} from "@/app/components/About/Picture";
import data from "@/app/data.json";

export const About = () => {
  const COMPONENT_KEY = 'about'
  const {name, title, ...content} = data[COMPONENT_KEY]


    return (
        <section
          id="about"
          className="min-h-screen flex">
            <AboutContent
                content={content}
                name={name}
                title={title}
            />
          <ProfilePicture />
        </section>
    )
}