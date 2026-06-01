const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Python 学习笔记',
      items: [
        'python-week1',
        'python-functions',
        'python-modules',
        'python-file-io',
        'python-exceptions',
        'python-classes',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      items: [
        'git-markdown-notes',
        'git-advanced',
      ],
    },
    {
      type: 'category',
      label: '文档工具',
      items: [
        'swagger-openapi',
        'mdx-intro',
        'info-architecture',
        'docs-as-code',
      ],
    },
    {
      type: 'category',
      label: 'API 文档',
      items: [
        'api/gitee-api-guide',
        'api/gitee-api-guide-cn',
      ],
    },
    'computer-basics',
    'week2-summary',
  ],
};

export default sidebars;