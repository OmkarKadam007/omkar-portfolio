export interface ProfileLink {
  id: string
  platform: string
  username: string
  url: string
  icon: 'linkedin' | 'x' | 'github' | 'leetcode' | 'geeksforgeeks' | 'unstop' | 'namastedev'
}

export interface ProfileGroup {
  id: string
  title: string
  badge: string
  categoryIcon: 'network' | 'code'
  animationVariant: 'float-a' | 'float-b'
  links: ProfileLink[]
}

export const PROFILE_GROUPS: readonly ProfileGroup[] = [
  {
    id: 'professional-social',
    title: 'Professional & Social',
    badge: 'Network',
    categoryIcon: 'network',
    animationVariant: 'float-a',
    links: [
      {
        id: 'linkedin',
        platform: 'LinkedIn',
        username: '@omkadam04',
        url: 'https://www.linkedin.com/in/omkadam04/',
        icon: 'linkedin',
      },
      {
        id: 'x-twitter',
        platform: 'X (Twitter)',
        username: '@omKadam04',
        url: 'https://x.com/omKadam04',
        icon: 'x',
      },
      {
        id: 'github',
        platform: 'GitHub',
        username: '@OmkarKadam007',
        url: 'https://github.com/OmkarKadam007',
        icon: 'github',
      },
    ],
  },
  {
    id: 'coding-learning',
    title: 'Coding & Learning',
    badge: 'Practice',
    categoryIcon: 'code',
    animationVariant: 'float-b',
    links: [
      {
        id: 'leetcode',
        platform: 'LeetCode',
        username: 'omkar_kadam2204',
        url: 'https://leetcode.com/u/omkar_kadam2204/',
        icon: 'leetcode',
      },
      {
        id: 'geeksforgeeks',
        platform: 'GeeksforGeeks',
        username: 'omkarkadh0z6',
        url: 'https://www.geeksforgeeks.org/user/omkarkadh0z6/',
        icon: 'geeksforgeeks',
      },
      {
        id: 'unstop',
        platform: 'Unstop',
        username: 'omkardes58583',
        url: 'https://unstop.com/u/omkardes58583',
        icon: 'unstop',
      },
      {
        id: 'namastedev',
        platform: 'NamasteDev',
        username: 'omkarkadam2204',
        url: 'https://namastedev.com/',
        icon: 'namastedev',
      },
    ],
  },
]
