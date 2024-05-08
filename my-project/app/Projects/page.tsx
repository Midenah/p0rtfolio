import Image from "next/image";
import pro1 from "@/public/Nurasound.png";
import pro2 from "@/public/yorubaloud.png";
import pro3 from "@/public/Shoppy.png";

export default function Projects() {
  return (
    <div
      id="projects"
      className="font-serif divide-y divide-teal-500 dark:divide-gray-700"
    >
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Projects
        </h1>
      </div>

      <div className=" space-y-2 xl:grid xl:gap-x-8 xl:space-y-0">
        <div className="prose items-center flex max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <a href="https://denah-nurasound.netlify.app/">
            <Image
              alt="Picture of Justina Olamide"
              src={pro1}
              className=" object-cover object-top"
            />
          </a>
        </div>
        <div className="prose items-center flex max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <a href="https://denah-yoruba-aloud.netlify.app/">
            <Image
              alt="Picture of Justina Olamide"
              src={pro2}
              className=" object-cover object-top"
            />
          </a>
        </div>
        <div className="prose items-center flex max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <a href=" https://denah-shoppy.netlify.app/">
            <Image
              alt="Picture of Justina Olamide"
              src={pro3}
              className=" object-cover object-top"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8">
        <a
          href="https://denah-deltify.netlify.app"
          className="text-xl font-bold text-teal-500"
        >
          See more.......
        </a>
      </div>
    </div>
  );
}
