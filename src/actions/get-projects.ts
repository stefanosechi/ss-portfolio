export const getProjects = async () => {
  // Example static projects data with required properties
  return [
    {
      title: "Astra",
      description: "Astra project website",
      url: "https://astra-project-seven.vercel.app/",
      image: [{ url: "/images/astra.png" }],
      github: "https://github.com/stefanosechi/astra-ai",
      view: "https://astra-project-seven.vercel.app/",
    },
    {
      title: "Luro",
      description: "Luro AI project",
      url: "https://luro-ai-indol.vercel.app/",
      image: [{ url: "/images/luro.png" }],
      github: "https://github.com/stefanosechi/luro-ai",
      view: "https://luro-ai-indol.vercel.app/",
    },
    {
      title: "Vetra",
      description: "Vetra AI project",
      url: "https://vetra-ai-orcin.vercel.app/",
      image: [{ url: "/images/vetra.png" }],
      github: "https://github.com/stefanosechi/vetra-ai",
      view: "https://vetra-ai-orcin.vercel.app/",
    },
  ];
};
