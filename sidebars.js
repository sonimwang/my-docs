const sidebars = {
  tutorialSidebar: [
    'portfolio',
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
        'python-practice-classes',
        'python-requests',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      items: [
        'git-markdown-notes',
        'git-advanced',
        'git-fork-workflow',
      ],
    },
    {
      type: 'category',
      label: '文档工具',
      items: [
        'swagger-openapi',
        'mdx-intro',
        'info-architecture',
        'ai-prompt-engineering',
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