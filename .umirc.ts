import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'React文档',
  description: 'React学习文档',
  favicon: 'https://portrait.gitee.com/uploads/avatars/user/3440/10321374_gybsl_1641986311.png',
  logo: 'https://portrait.gitee.com/uploads/avatars/user/3440/10321374_gybsl_1641986311.png',
  outputPath: 'docs-dist',
  mode: 'doc',
  hash: true,
  history: {
    type: 'hash',
  },
  base: '/',
  publicPath: '/',
  exportStatic: {},
});
