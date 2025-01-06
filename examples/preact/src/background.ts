import type Chrome from '../../../src/types/chrome.ts'
import browserAPI from '../../../src/mod.ts'

browserAPI.tabs.onUpdated.addListener(
  (
    _tabId: number,
    _tabChangeInfo: Chrome.TabChangeInfo,
    { url }: Chrome.Tab,
  ) => {
    console.log(url)
  },
)
