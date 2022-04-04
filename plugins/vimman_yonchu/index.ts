const plugin: Fig.Plugin = {
  name: "vimman_yonchu",
  type: "shell",
  description: "View vim plugin manuals (help) like man in zsh",
  authors: [
    {
      name: "yonchu",
      github: "yonchu",
    },
  ],
  github: "yonchu/vimman",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["vimman.zsh"],
  },
};

export default plugin;
