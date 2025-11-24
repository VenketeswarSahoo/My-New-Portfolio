import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur mt-20">
        <div>
          <p className="text-zinc-500 text-sm">About</p>
          <h2 className="text-2xl font-bold">Me</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {" "}
          <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border group h-full w-full overflow-hidden transition-all p-0 border-gray-100 dark:border-gray-800 shadow-none"
          >
            <div
              data-slot="card-header"
              className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0"
            >
              <div className="relative aspect-video overflow-hidden">
                <a href="/blog/go-in-bits">
                  <img
                    alt="Go in bits"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="object-cover"
                    sizes="100vw"
                    src="/_next/image?url=https%3A%2F%2Fcms.ramx.in%2Fuploads%2Fgo_5d8281f281.png&amp;w=3840&amp;q=75"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                </a>
              </div>
            </div>
            <div data-slot="card-content" className="px-6">
              <div className="space-y-3">
                <a href="/blog/go-in-bits">
                  <h3 className="line-clamp-2 text-xl font-semibold leading-tight group-hover:text-primary">
                    Go in bits
                  </h3>
                </a>
                <p className="line-clamp-3 text-zinc-500 mt-4">
                  Archive of all the links from my socials for go tuts.
                </p>
              </div>
            </div>
            <div
              data-slot="card-footer"
              className="flex items-center [.border-t]:pt-6 p-6 pt-0"
            >
              <div className="flex w-full flex-col space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-zinc-500 text-zinc-500-foreground [a&amp;]:hover:bg-zinc-500/90 text-xs"
                  >
                    Go
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-zinc-500 text-zinc-500-foreground [a&amp;]:hover:bg-zinc-500/90 text-xs"
                  >
                    Development
                  </span>
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-zinc-500 text-zinc-500-foreground [a&amp;]:hover:bg-zinc-500/90 text-xs"
                  >
                    Backend
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-between mt-4">
                  <time className="text-sm text-zinc-500 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="size-4"
                    >
                      <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path>
                    </svg>{" "}
                    October 2, 2025
                  </time>
                  <a
                    className="flex items-center justify-end gap-2 hover:underline underline-offset-4 text-zinc-500"
                    href="/blog/go-in-bits"
                  >
                    Read More{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="size-4"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
