import { MedalIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const MartketingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center rounded-full bg-amber-100 p-4 uppercase text-amber-700 shadow-sm">
          <MedalIcon className="mr-2 h-6 w-6" />
          No 1 Task Management
        </div>
        <h1 className="mb-6 text-center text-3xl text-neutral-800 md:text-6xl">
          TaskFlow helps your team
        </h1>
        <div className="w-fit rounded-md bg-gradient-to-r from-fuchsia-600 to-pink-600 p-2 px-4 pb-4 text-3xl text-white md:text-6xl">
          work forward.
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-xs text-center text-sm text-neutral-400 md:max-w-2xl md:text-xl">
        Collaborate, manage projects, and reach new productivity. From high
        rises to the home office, the way your team works is unique - accomplish
        it all with TaskFlow.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get TaskFlow for free</Link>
      </Button>
    </div>
  );
};

export default MartketingPage;