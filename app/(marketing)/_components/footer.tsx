import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full border-t bg-slate-100 p-4">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <p className="text-xs font-semibold">
          Build with <span className="text-red-700">❤</span> by Arif
        </p>
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Term of Service
          </Button>
        </div>
      </div>
    </div>
  );
};
