import type React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Auth form */}
      <div className="flex-1 flex flex-col p-8">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-2">
            <h1 className="logo uppercase text-green-900 font-semibold text-2xl">
              GHOSTROUTE_SECURITY
            </h1>
          </div>

          {/* Auth form content (passed as children) */}
          {children}
        </div>
      </div>

      {/* Right side - Marketing content */}
      <div className="hidden md:flex md:flex-1 bg-green-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 p-6 flex justify-end">
          <Button
            variant="ghost"
            className="text-white hover:bg-green-800/20 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
            Support
          </Button>
        </div>

        <div className="flex flex-col justify-center items-center w-full px-12">
          {/* Feature card */}
          <div className="bg-white text-green-900 rounded-lg p-6 max-w-sm mb-12 relative">
            <div className="space-y-2 mb-4">
              <h3 className="text-xl font-semibold">
                Find the Nearest Petrol Stations Instantly
              </h3>
              <p className="text-sm text-gray-600">
                Easily locate the closest petrol stations in real-time with our
                app. Get directions, fuel prices, and station availability at
                your fingertips.
              </p>
            </div>

            <Button
              variant="pill"
              size="xs"
              className="bg-green-800 hover:bg-green-900 text-white"
            >
              Learn more
            </Button>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-1 bg-gray-200 rounded-full"></div>
                <div className="w-6 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500">Example</div>
                <div className="font-semibold">$30.40</div>
              </div>
            </div>
          </div>

          {/* Feature description */}
          <div className="max-w-md text-center mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Introducing new features
            </h2>
            <p className="text-sm text-gray-200">
              Never run out of fuel unexpectedly! Our app helps you find the
              nearest petrol station quickly, ensuring a smooth and hassle-free
              journey.
            </p>
          </div>

          {/* Pagination controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full p-2 hover:bg-green-800/20"
            >
              <ChevronLeft size={20} />
            </Button>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full p-2 hover:bg-green-800/20"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
