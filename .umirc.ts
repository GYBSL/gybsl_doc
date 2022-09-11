import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'React文档',
  description: 'React学习文档',
  favicon: 'https://gitee.com/gybsl/image-upload/raw/master/image_docs/gybsl.png',
  logo: 'https://gitee.com/gybsl/image-upload/raw/master/image_docs/gybsl.png',
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
