const plugin: Fig.Plugin = {
  name: "zsh-pyenv-lazy_davidparsson",
  type: "shell",
  description: "A zsh plugin for lazy loading of pyenv",
  authors: [
    {
      name: "davidparsson",
      github: "davidparsson",
    },
  ],
  github: "davidparsson/zsh-pyenv-lazy",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["pyenv-lazy.plugin.zsh"],
  },
};

export default plugin;
