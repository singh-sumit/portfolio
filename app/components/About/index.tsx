import {AboutContent} from "@/app/components/About/AboutContent";
import {ProfilePicture} from "@/app/components/About/Picture";

export const About = ({content, name}) => {

    return (
        <section
          id="about"
          className="min-h-screen flex flex-row justify-around p-4">
            <AboutContent
                content={content}
                name={name}
            />
          <ProfilePicture />
        </section>
    )
}