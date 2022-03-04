const plugin: Fig.Plugin = {
  name: "inspr",
  type: "shell",
  description: "oh-my-zsh plugin for the inspr cli",
  github: "ptcar2009/insprzsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;