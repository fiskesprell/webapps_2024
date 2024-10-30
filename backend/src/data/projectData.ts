export { projects }

const projects = [
    {
      id: crypto.randomUUID(),
      title: "Personal Website",
      description: "Personal website made for website week 2020",
      repoLink: "http://www.duckduckgo.com",
      publishedAt: new Date("2024-10-01"),
      tags: ["Webdev", "HTML", "CSS", "React", "TypeScript"],
      authorId: "1",
    },
    {
      id: crypto.randomUUID(),
      title: "SuperGame",
      description: "Game made for coolmathgames gamejam '24",
      repoLink: "http://www.duckduckgo.com",
      publishedAt: new Date("2024-10-02"),
      tags: ["Gamedev", "Godot", "C#"],
      authorId: "2",
    },
    {
      id: crypto.randomUUID(),
      title: "Secret Project",
      description: `Signed an NDA. Can't say. Sorry. But its amazing, huge even. Here is even more filler-text, just for you. 
      Yeah, you. You reading this filler text. You must really enjoy it, seeing as you've read this far. 
      You read for the love of the filler. I respect that.
      I recommend watching One Piece; seeing as you really, really seem to love filler.`,
      repoLink: "http://www.duckduckgo.com",
      publishedAt: new Date("2024-10-03"),
      tags: ["NDA"],
      authorId: "1",
    },
]