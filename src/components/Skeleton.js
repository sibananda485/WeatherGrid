import React from "react";

export default function Skeleton() {
  return (
    <div class="border bg-gray-100 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse space-y-8">
        <div className="flex justify-between">
          <div class="bg-slate-700 h-4 w-20 rounded-full"></div>
          <div class="bg-slate-700 h-4 w-10 rounded-full"></div>
        </div>
        <div class="bg-slate-700 h-10 mx-auto w-24 rounded-full"></div>
        <div className="flex justify-between">
          <div className="space-y-2">
            <div class="bg-slate-700 h-4 w-20 rounded-full"></div>
            <div class="bg-slate-700 h-4 w-20 rounded-full"></div>
          </div>
          <div className="space-y-2">
            <div class="bg-slate-700 h-4 w-20 rounded-full"></div>
            <div class="bg-slate-700 h-4 w-20 rounded-full"></div>
          </div>
        </div>
        <div class="bg-slate-700 h-4 w-20 rounded-full"></div>
      </div>
    </div>
  );
}
