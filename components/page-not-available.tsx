import { WrenchOffIcon } from "lucide-react";

export default function PageNotAvailable() {
  return (
    <div className="flex items-center justify-center w-full h-full max-lg:pt-50 max-lg:px-5">
      <div className="flex justify-center gap-5 -mt-20">
        <WrenchOffIcon className="size-12 my-2" />
        <div>
          <h1 className="text-2xl font-bold">Content not available</h1>
          <p>The page you are trying to access is not available in this prototype build.</p>

          <div className="mt-2">
            <small className="font-semibold">This may be due to:</small>
            <ul className="text-sm list-disc ml-3">
              <li>The page being a work in progress.</li>
              <li>The developer not intending to include this in the prototype build.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
