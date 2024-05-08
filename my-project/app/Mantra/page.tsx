import Image from "next/image";
import BG from "@/public/bg.jpg";

export default function Mantra() {
  return (
    <div id="mantra" className="divide-y divide-teal-500 dark:divide-gray-700 font-serif">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Mantra
        </h1>
      </div>

      <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8">
          <Image
            alt="Picture of Justina Olamide"
            src={BG}
            className="h-80 w-50% rounded-3xl object-cover"
          />
          
        </div>

        <div className="prose max-w-none prose-lg pt-8 pb-7 dark:prose-invert xl:col-span-2">
          <p className="mantra text-center rounded-3xl text-3xl bg-gradient-to-r from-cyan-500 to-teal-500 mb-10">
            <em>
              Art is a life-giving source for design harmony. Get a dose of
              design inspiration in the set of wise and powerful ideas from
              famous creative people of different times.
            </em>
          </p>
          <p className="mantra text-center rounded-3xl text-3xl bg-gradient-to-r from-cyan-500 to-teal-500 mb-10">
            <em>Everything you can imagine is real</em>
          </p>
          <p className="mantra text-center rounded-3xl text-3xl bg-gradient-to-r from-cyan-500 to-teal-500 mb-10">
            <em>Experience is the best teacher</em>
          </p>
          <p className="mantra text-center rounded-3xl text-3xl bg-gradient-to-r from-cyan-500 to-teal-500 mb-10">
            <em>No harm in trying</em>
          </p>
          <p className="mantra text-center rounded-3xl text-3xl bg-gradient-to-r from-cyan-500 to-teal-500 mb-10">
            <em>Practice makes perfect</em>
          </p>
        </div>
      </div>
    </div>
  );
}
