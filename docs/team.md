<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://cdn.mengze.vip/gh/YShenZe/Blog-Static-Resource@main/images/1f94e9c693374150b1f8dfd8de0fcce1.jpeg',
    name: 'MengZe',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/YSHenZe' }
    ]
  }
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />