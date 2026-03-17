# 🎨 Quick Reference: GitHub Profile Badges & Stats

A handy cheat sheet for customizing your GitHub profile README with badges, stats, and widgets.

---

## 📌 Table of Contents

- [Technology Badges](#-technology-badges)
- [GitHub Stats Cards](#-github-stats-cards)
- [Social Badges](#-social-badges)
- [Custom Badges](#-custom-badges)
- [Dynamic Content](#-dynamic-content)
- [Color Schemes](#-color-schemes)

---

## 💻 Technology Badges

### Format
```markdown
![Badge Name](https://img.shields.io/badge/Label-Message-COLOR?style=STYLE&logo=LOGO&logoColor=LOGOCOLOR)
```

### Common Technologies

#### Frontend
```markdown
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Nuxt.js](https://img.shields.io/badge/Nuxt.js-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
```

#### CSS Frameworks
```markdown
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
```

#### Backend
```markdown
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
```

#### Databases
```markdown
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
```

#### Languages
```markdown
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
```

#### Tools & Platforms
```markdown
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
```

---

## 📊 GitHub Stats Cards

### 1. Basic Stats Card
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=THEME)
```

**Parameters**:
- `username` - Your GitHub username (required)
- `show_icons` - Show icons (true/false)
- `theme` - Color theme (see themes below)
- `hide_border` - Hide border (true/false)
- `include_all_commits` - Count all commits (true/false)
- `count_private` - Include private contributions (true/false)
- `hide` - Hide specific stats (comma-separated: stars,commits,prs,issues,contribs)
- `show` - Show specific stats (reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage)

**Example**:
```markdown
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=amar-295&show_icons=true&theme=react&hide_border=true&include_all_commits=true&count_private=true)
```

### 2. GitHub Streak Stats
```markdown
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=YOUR_USERNAME&theme=THEME)
```

**Parameters**:
- `user` - Your GitHub username (required)
- `theme` - Color theme
- `hide_border` - Remove border
- `background` - Background color (hex without #)
- `stroke` - Border color
- `ring` - Ring color around current streak
- `fire` - Fire emoji color
- `currStreakNum` - Current streak number color
- `currStreakLabel` - Current streak label color

**Example**:
```markdown
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=amar-295&theme=react&hide_border=true&background=0D1117)
```

### 3. Top Languages Card
```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&theme=THEME)
```

**Parameters**:
- `username` - Your GitHub username (required)
- `layout` - Layout style (compact/default)
- `theme` - Color theme
- `hide` - Hide languages (comma-separated: html,css)
- `langs_count` - Number of languages to show (default: 5, max: 10)
- `exclude_repo` - Exclude specific repos (comma-separated)

**Example**:
```markdown
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=amar-295&layout=compact&theme=react&hide_border=true&langs_count=8)
```

### 4. GitHub Trophies
```markdown
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=YOUR_USERNAME&theme=THEME&no-frame=true&row=1)
```

**Parameters**:
- `username` - Your GitHub username (required)
- `theme` - Color theme
- `no-frame` - Remove frame
- `no-bg` - Transparent background
- `row` - Number of rows (1-3)
- `column` - Number of columns (1-7)
- `margin-w` - Horizontal margin
- `margin-h` - Vertical margin
- `rank` - Filter by rank (SECRET,SSS,SS,S,AAA,AA,A,B,C)

**Example**:
```markdown
![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=amar-295&theme=nord&no-frame=true&no-bg=true&row=2&column=6)
```

### 5. Contribution Activity Graph
```markdown
![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=YOUR_USERNAME&theme=THEME)
```

**Parameters**:
- `username` - Your GitHub username (required)
- `theme` - Color theme
- `bg_color` - Background color (hex without #)
- `color` - Graph line color
- `line` - Gradient line color
- `point` - Point color
- `area` - Show area under graph (true/false)
- `hide_border` - Hide border

**Example**:
```markdown
![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=amar-295&theme=react-dark&bg_color=0D1117&color=61DAFB&line=61DAFB&point=61DAFB&area=true&hide_border=true)
```

---

## 📱 Social Badges

### Format
```markdown
[![Badge Name](BADGE_URL)](LINK_URL)
```

### Common Social Platforms
```markdown
<!-- LinkedIn -->
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_PROFILE)

<!-- Twitter/X -->
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/YOUR_HANDLE)

<!-- Email -->
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your@email.com)

<!-- Portfolio -->
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://your-portfolio.com)

<!-- Discord -->
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/YOUR_INVITE)

<!-- YouTube -->
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@YOUR_CHANNEL)

<!-- Dev.to -->
[![Dev.to](https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/YOUR_USERNAME)

<!-- Medium -->
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@YOUR_USERNAME)

<!-- Stack Overflow -->
[![Stack Overflow](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/YOUR_ID)

<!-- CodePen -->
[![CodePen](https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white)](https://codepen.io/YOUR_USERNAME)
```

---

## 🎨 Custom Badges

### Create Your Own Badge
```markdown
![Badge Name](https://img.shields.io/badge/YOUR_TEXT-YOUR_MESSAGE-COLOR?style=STYLE&logo=LOGO&logoColor=LOGOCOLOR)
```

### Badge Styles
- `flat` - Flat style (default)
- `flat-square` - Flat with square edges
- `plastic` - Plastic 3D style
- `for-the-badge` - Large badge with uppercase text
- `social` - Social media style

### Examples
```markdown
<!-- Custom status badge -->
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

<!-- Custom version badge -->
![Version](https://img.shields.io/badge/Version-2.0.0-blue?style=for-the-badge)

<!-- Custom license badge -->
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<!-- Open to work badge -->
![Open to Work](https://img.shields.io/badge/Open_To_Work-YES-brightgreen?style=for-the-badge)

<!-- Location badge -->
![Location](https://img.shields.io/badge/Location-India-orange?style=for-the-badge)
```

---

## 🎯 Dynamic Content

### 1. Typing Animation
```markdown
![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=F75C7E&width=435&lines=First+Line+of+Text;Second+Line+of+Text;Third+Line+of+Text)
```

**Parameters**:
- `font` - Font family (URL encoded)
- `size` - Font size
- `duration` - Animation duration per character (ms)
- `pause` - Pause between lines (ms)
- `color` - Text color (hex without #)
- `width` - Width of SVG
- `height` - Height of SVG
- `lines` - Lines of text (semicolon-separated)
- `center` - Center text (true/false)
- `vCenter` - Vertical center (true/false)
- `multiline` - Show multiple lines at once (true/false)
- `repeat` - Repeat animation (true/false)

### 2. Profile Views Counter
```markdown
![Profile Views](https://komarev.com/ghpvc/?username=YOUR_USERNAME&label=Profile%20Views&color=blueviolet&style=for-the-badge)
```

**Colors**: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `lightgrey`, `blue`, `blueviolet`

### 3. Wakatime Stats
```markdown
![Wakatime Stats](https://github-readme-stats.vercel.app/api/wakatime?username=YOUR_WAKATIME_USERNAME&theme=THEME)
```

### 4. Latest Blog Posts (with GitHub Actions)
```markdown
## 📝 Latest Blog Posts
<!-- BLOG-POST-LIST:START -->
<!-- BLOG-POST-LIST:END -->
```

Requires [blog-post-workflow](https://github.com/gautamkrishnar/blog-post-workflow) GitHub Action.

### 5. Spotify Now Playing
```markdown
[![Spotify](https://spotify-github-profile.vercel.app/api/view?uid=YOUR_SPOTIFY_ID&cover_image=true&theme=default)](https://spotify-github-profile.vercel.app/api/view?uid=YOUR_SPOTIFY_ID&redirect=true)
```

---

## 🌈 Color Schemes

### Stats Card Themes
- `default`, `transparent`, `shadow_red`, `shadow_green`, `shadow_blue`
- `dark`, `radical`, `merko`, `gruvbox`, `gruvbox_light`, `tokyonight`
- `onedark`, `cobalt`, `synthwave`, `highcontrast`, `dracula`
- `prussian`, `monokai`, `vue`, `vue-dark`, `shades-of-purple`
- `nightowl`, `buefy`, `blue-green`, `algolia`, `great-gatsby`
- `darcula`, `bear`, `solarized-dark`, `solarized-light`
- `chartreuse-dark`, `nord`, `gotham`, `material-palenight`
- `graywhite`, `vision-friendly-dark`, `ayu-mirage`
- `midnight-purple`, `calm`, `flag-india`, `omni`, `react`, `jolly`
- `maroongold`, `yeblu`, `blueberry`, `slateorange`, `kacho_ga`

### Hex Color Codes (Common)
- React Blue: `61DAFB`
- GitHub Dark: `0D1117`
- Success Green: `28A745`
- Warning Yellow: `FFC107`
- Danger Red: `DC3545`
- Info Blue: `17A2B8`
- Primary Purple: `6F42C1`

### Popular Color Combinations

#### React Theme (Current)
```
Background: 0D1117
Title: 61DAFB
Icon: 61DAFB
Text: FFFFFF
```

#### Dracula Theme
```
Background: 282A36
Title: FF79C6
Icon: BD93F9
Text: F8F8F2
```

#### Nord Theme
```
Background: 2E3440
Title: 88C0D0
Icon: 81A1C1
Text: ECEFF4
```

---

## 🔍 Finding Logos

**Simple Icons**: https://simpleicons.org/
- Search for brand names to find logo slugs
- Use the slug in `logo=` parameter
- Check color codes for brand colors

**Example**: For React logo
1. Go to simpleicons.org
2. Search "React"
3. Logo slug: `react`
4. Brand color: `#61DAFB`

---

## 📚 Useful Resources

- **Shields.io**: https://shields.io/ - Badge generator
- **GitHub Readme Stats**: https://github.com/anuraghazra/github-readme-stats
- **GitHub Readme Streak Stats**: https://github.com/DenverCoder1/github-readme-streak-stats
- **GitHub Profile Trophy**: https://github.com/ryo-ma/github-profile-trophy
- **Readme Typing SVG**: https://github.com/DenverCoder1/readme-typing-svg
- **Simple Icons**: https://simpleicons.org/ - Brand icons and colors
- **Awesome GitHub Profile README**: https://github.com/abhisheknaiidu/awesome-github-profile-readme

---

## 💡 Pro Tips

1. **Consistency**: Use the same theme across all stat cards
2. **Color Harmony**: Match badge colors with your stats theme
3. **Mobile Friendly**: Test how your profile looks on mobile
4. **Performance**: Don't overload with too many dynamic widgets
5. **Links**: Make badges clickable by wrapping in `[![]()]()` format
6. **Alignment**: Use `<p align="center">` for centered content
7. **Spacing**: Add `---` for horizontal rules between sections
8. **Updates**: Keep your profile updated with latest projects
9. **Accessibility**: Use descriptive alt text for all images
10. **Testing**: Preview changes before committing

---

<p align="center">
  <i>Made with ❤️ for developers who love beautiful profiles!</i>
</p>
