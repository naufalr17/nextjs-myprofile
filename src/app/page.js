import Image from "next/image";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";



export default function Home() {
  return (
    <main className="flex flex-col m-0 bg-zinc-950">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:h-screen h-full">
        <Image
          src="https://storage.googleapis.com/nofal-profile/wallpaper.jpg"
          width="1080"
          height="1080"
          alt="profile"
          className="w-screen lg:w-[50%] bg-cover"
        />
        <div className="flex flex-col w-full lg:w-[50%] p-8 lg:p-0 items-center lg:items-start">
          <Image
            src="https://storage.googleapis.com/nofal-profile/myprofile.jpg"
            width="200"
            height="200"
            alt="profile"
            className="rounded-md"
          />
          <h6 className="text-sm lg:text-lg font-medium text-zinc-100 text-center lg:text-start mt-8">
            Welcome! Let's Explore the Realm of Code and Innovate Together!
          </h6>
          <h2 className="text-2xl lg:text-4xl font-bold text-zinc-100 mt-2 text-center lg:text-start">
            Muhammad Naufal Rizki
          </h2>
          <div className="flex lg:flex-row flex-col items-center mt-4 lg:gap-6 gap-4 text-zinc-400">
            <Specialsprofile paragraph={"ExpressJS"} />
            <Specialsprofile paragraph={"Google Cloud Platform"} />
            <Specialsprofile paragraph={"AWS"} />
            <Specialsprofile paragraph={"NextJS"} />
          </div>
          <div className="flex flex-col lg:flex-row mt-8 gap-8">
            <a
              href="https://instagram.com/mnflrizki"
              className="flex flex-col lg:flex-row transition-all hover:duration-300 bg-zinc-900	rounded-xl hover:bg-sky-800	text-zinc-300 gap-2 items-center p-4"
            >
              <IoLogoInstagram style={iconStyle} />
            </a>

            <a
              href="https://github.com/naufalr17"
              className="flex flex-col lg:flex-row transition-all hover:duration-300 bg-zinc-900	rounded-xl hover:bg-sky-800	 text-zinc-300 gap-2 items-center p-4"
            >
              <IoLogoGithub style={iconStyle} />
            </a>

            <a
              href="https://www.linkedin.com/in/mnaufalr"
              className="flex flex-col lg:flex-row transition-all hover:duration-300 bg-zinc-900	rounded-xl hover:bg-sky-800	 text-zinc-300 gap-2 items-center p-4"
            >
              <IoLogoLinkedin style={iconStyle} />
            </a>

            <a
              href="mailto:mnflrizki@gmail.com"
              className="flex flex-col lg:flex-row transition-all hover:duration-300 bg-zinc-900	rounded-xl hover:bg-sky-800	 text-zinc-300 gap-2 items-center p-4"
            >
              <IoMailOutline style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

const iconStyle = { fontSize: "25px", fill:'currentColor' };

function Specialsprofile({ paragraph }) {
  return <p className="text-lg lg:text-2xl font-medium">{paragraph} </p>;
}
