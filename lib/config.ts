import { SiteConfig } from './types'

// 由于无法直接导入MD文件，我们使用一个默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "grow-a-garden-dark-spawner-script",
  siteName: "Grow a Garden Dark Spawner Script",
  logo: "/images/hot_game/grow-a-garden-dark-spawner-script.png",
  seo: {
    title: "Grow a Garden Dark Spawner Script | Roblox Exploit",
    description: "Grow a Garden Dark Spawner Script: Instantly spawn rare seeds, pets, eggs, and automate your garden for exclusive rewards.",
    ogImage: "/images/hot_game/grow-a-garden-dark-spawner-script.png",
    keywords: "Grow a Garden Script, Grow a Garden Dark Spawner Script,Dark Spawner Script,dark spawner grow a garden,dark spawner script grow a garden"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "Grow a Garden Dark Spawner Script",
    siteUrl: "https://www.growagardendarkspawnerscript.org",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

// 获取随机游戏数量配置
export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 