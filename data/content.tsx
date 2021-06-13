export const breadcrumb = {
  blog: 'Blog',
  create: 'Create',
  drafts: 'Drafts',
  edit: 'Edit',
}

export const footer = {
  copyright: {
    text: 'Copyright ©',
    name: 'Amir Ardalan',
  },
  poweredby: [
    {
      path: 'https://nextjs.org/',
      title: 'Next.js',
    },
    {
      path: 'https://vercel.com/',
      title: 'Vercel',
    },
    {
      path: 'https://www.prisma.io/',
      title: 'Prisma',
    },
    {
      path: 'https://threejs.org/',
      title: 'Three.js',
    }
  ],
  social: [
    {
      path: 'https://github.com/amirardalan',
      title: 'GitHub',
    },
    {
      path: 'https://twitter.com/amirardalan',
      title: 'Twitter',
    },
    {
      path: 'https://linkedin.com/in/amirardalan',
      title: 'LinkedIn',
    },
    {
      path: '/amir-ardalan-resume.pdf',
      title: 'Resume',
    },
  ]
}

export const home = {
  meta: {
    title: 'Amir Ardalan – Developer, Designer, Writer',
    description: 'Front-end developer, UI designer & TypeScript enthusiast based in Portland, OR'
  },
  title: 'Amir Ardalan',
  typed: {
    heading: `I'm currently focusing on:`,
    items: [
      `Next.js / React^1500`,
      `TypeScript / JavaScript^1500`,
      `Emotion CSS in JS^1500`,
      `Three.js / R3F^1500`,
      `Prisma ORM^1500`,
      `PostgreSQL^1500`,
      `Fullstack Engineering^1500`,
      `UI Design^1500`,
      `Web Accessibility^1500`,
      `Writing^1500`,
      `Technical Learning^1500`,
      `...eating pizza 🍕^1500`,
    ]
  },
  cta: {
    blog: {
      path: '/blog',
      title: 'Blog',
    },
    about: {
      path: '/about',
      title: 'About',
    },
  },
  latestPost: {
    title: 'Latest Post:'
  }
}

export const blog = {
  meta: {
    title: 'Blog – Amir Ardalan',
  },
  error: {
    database: '⚠️ Database Error: Posts Could not be loaded.'
  },
}

export const blogPost = {
  meta: {
    title: ' – Amir Ardalan'
  },
  title: {
    draft: '(Draft)'
  },
}

export const about = {
  meta: {
    title: 'About – Amir Ardalan',
    github: 'GitHub',
    twitter: 'Twitter',
    linkedin: 'LinkedIn',
  },
  title: 'Design & Code.',
  subtitle: '– from Portland, OR –',
  link: {
    github: {
      url: 'https://github.com/amirardalan',
      title: 'GitHub',
    },
    twitter: {
      url: 'https://twitter.com/amirardalan',
      title: 'Twitter',
      dm: {
        url: 'https://twitter.com/messages/compose?recipient_id=23831468',
        title: 'DM @amirardalan',
        handle: '@amirardalan'
      },
    },
    linkedin: {
      url: 'https://linkedin.com/in/amirardalan',
      title: 'LinkedIn',
    },
  },
  bio: {
    heading: 'Bio:',
    subheading: 'Developer, Designer, Writer.',
    content: `I write code, design user interfaces, and blog about web development. I'm passionate about the art and science of interfacing humans with technology.`,
    items: [  
      {
        path: '/amir-ardalan-resume.pdf',
        title: 'Resume (pdf)',
      },
      {
        path: '/blog/2021-a-dev-odyssey',
        title: 'Dev Journey',
      },
      {
        path: '/spotify',
        title: `Spotify Dashboard`,
      },
    ],
  },
  skills: {
    title: 'Skills:',
    items: [
      'Fullstack Engineering',
      'User Interface Design',
      'JavaScript / TypeScript',
      'React.js / Next.js',
      'CSS in JS / SCSS',
      'Prisma ORM + PostgreSQL',
      'Testing & documentation',
    ],
  },
  experience: {
    title: 'Experience:',
    items: [
      '10+ years',
      'Columbia Sportswear',
      'KEEN Footwear',
      'Chrome Industries',
      'Hanna Andersson',
      'Salesforce Commerce Cloud',
      'Freelance',
    ],
  },
  availability: {
    title: 'Availability:',
    items: [
      '✅ Currently Available',
      'Remote or Portland, OR',
    ]
  },
  social: {
    title: 'Social:',
  },
  contact: {
    title: 'Contact:',
    items: [
      'hi@amirardalan.com',
      '- or -'
    ],
  },
}

export const error = {
  meta: {
    title: 'Page Not Found – Amir Ardalan'
  },
  title: '404',
  img: {
    meta: 'Error'
  },
  text: 'You seem to be lost in space...',
  link: {
    path: '/',
    title: 'Return Home'
  },
}

// Admin

export const admin = {
  controls: {
    publish: 'Publish',
    unpublish: 'Unpublish',
    edit: 'Edit',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel',
    update: 'Update',
    save: 'Save',
  },
  input: {
    placeholder: {
      title: 'Title',
      slug: 'URL/Slug',
      teaser: 'Teaser',
      content: 'Content'
    }
  },
  edit: {
    meta: {
      title: 'Edit'
    }
  },
  create: {
    meta: {
      title: 'Create – Amir Ardalan'
    }
  },
  drafts: {
    meta: {
      title: 'Drafts - Amir Ardalan'
    }
  }
}