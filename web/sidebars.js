module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'getting-started',
        'about',
        'how-it-works',
      ]
    },
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Todo app',
          collapsed: true,
          items: [
            'tutorials/todo-app',
            {
              type: 'category',
              label: 'Basics',
              collapsed: true,
              items: [
                'tutorials/todo-app/01-creating-new-project',
                'tutorials/todo-app/02-task-entity',
                'tutorials/todo-app/03-listing-tasks',
                'tutorials/todo-app/04-creating-tasks',
                'tutorials/todo-app/05-updating-tasks'
              ]
            },
            'tutorials/todo-app/06-auth',
            'tutorials/todo-app/07-dependencies',
            'tutorials/todo-app/08-the-end'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Language',
      collapsed: false,
      items: [
        'language/overview',
        'language/syntax',
        'language/features'
      ]
    },
    'cli',
    'deploying',
    'examples',
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: [
        'integrations/google',
        'integrations/css-frameworks'
      ]
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: false,
      items: [
        'contributing',
        'vision',
        'telemetry',
        'contact'
      ]
    }
  ]
}
