import Image from "next/image";

type Project = {
  title: string;
  description: string;
  href?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
};

const projects: Project[] = [
  {
    title: "Blog",
    description: "Personal blog where I share updates and articles.",
    href: "https://www.beaskyblue.com/",
    thumbnail: "/blog-thumbnail.svg",
    thumbnailAlt: "BeaSkyblue blog project thumbnail",
  },
  { title: "Project 2", description: "Currently under development." },
  { title: "Project 3", description: "Currently under development." },
  { title: "Project 4", description: "Currently under development." },
  { title: "Project 5", description: "Currently under development." },
  { title: "Project 6", description: "Currently under development." },
  { title: "Project 7", description: "Currently under development." },
  { title: "Project 8", description: "Currently under development." },
  { title: "Project 9", description: "Currently under development." },
];

const featuredProjects = projects.slice(0, 3);

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) =>
        project.href ? (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="card p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            {project.thumbnail ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={project.thumbnail}
                  alt={project.thumbnailAlt ?? `${project.title} thumbnail`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video w-full rounded-md bg-gradient-to-br from-brand-300/45 via-sky-200/45 to-rose-200/45" />
            )}
            <h3 className="mt-4 font-medium">{project.title}</h3>
            <p className="mt-1 text-sm text-neutral-400">{project.description}</p>
          </a>
        ) : (
          <div
            key={project.title}
            className="card p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-video w-full rounded-md bg-gradient-to-br from-brand-300/45 via-sky-200/45 to-rose-200/45" />
            <h3 className="mt-4 font-medium">{project.title}</h3>
            <p className="mt-1 text-sm text-neutral-400">{project.description}</p>
          </div>
        )
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="space-y-6 sm:space-y-8">
      <section className="section pb-8 md:pb-10">
        <div className="container">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Features</h1>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <section className="section pt-8 md:pt-10">
        <div className="container">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Works</h2>
          <ProjectGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
