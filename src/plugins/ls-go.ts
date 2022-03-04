const plugin: Fig.Plugin = {
  name: "ls-go",
  type: "shell",
  description: "ls-go aliases plugin for zsh",
  github: "MohamedElashri/ls-go-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;