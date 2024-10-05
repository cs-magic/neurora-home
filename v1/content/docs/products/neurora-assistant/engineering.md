---
title: 飞脑工程架构
---

# CS魔法社 - 飞脑

[//]: # (![assistant Logo]&#40;packages/assistant-frontend/src/assets/branding/enterprise/assistant.png&#41;)

## Project Overview

```mermaid
graph LR;
    subgraph general
        prisma --> common & llm;
        common --> llm;
    end
    
    subgraph wechaty_eco
        wechat4u --> wechaty-puppet-wechat4u;
        wechaty-puppet --> wechaty-puppet-wechat4u & wechaty;
        wechaty-puppet-wechat4u --> wechaty;
    end
    
    subgraph frontend_common_eco
        general --> react;
        react --> frontend_common;
        assets --> frontend_common;
    end
    
    subgraph cs-magic_frontend_eco
        frontend_common --> cs-magic_frontend;
    end
    
    subgraph assistant_backend_eco
        general --> assistant_backend;
        wechaty_eco --> assistant_backend;
    end
    
    subgraph assistant_frontend_eco
        frontend_common_eco --> assistant_frontend;
        assistant_backend_eco --> assistant_frontend;
        assistant_frontend --> assistant-web & assistant-pc;
    end
```

## Run

```shell
# start web in dev
yarn workspace @cs-magic/assistant-backend dev & yarn workspace @cs-magic/assistant-web dev

# start pc in dev
yarn workspace assistant-pc dev

# build backend
yarn workspace @cs-magic/assistant-backend build

# build web
yarn workspace @cs-magic/assistant-frontend build

# build pc
yarn workspace assistant-pc build:mac

# start web after build
yarn workspace @cs-magic/assistant-frontend start

# start pc after build
# double click to install: packages/assistant-pc/dist/assistant-pc-${version}.dmg
```


## todo: logic on generate card

```shell
[//]: # (```mermaid)
subgraph backend

[bot]
link2card@app_assistant/backend/src/bot/handlers/handle-message/plugins/parser.plugin.ts

[simulator]
app_assistant/frontend-web/src/app/(home2)/card/gen/page.tsx
packages_frontend/common/src/components/card.tsx:Card (js)
packages_frontend/common/src/components/card-input-frontend.tsx:CardInputFrontend
packages_frontend/common/src/components/card-action-input.tsx:InputCardAction
packages_frontend/common/src/utils/gen-card.ts:genCardFromUrl
app_assistant/backend/src/bot/utils/wxmp-fetch.ts:fetchWxmpArticle
app_assistant/backend/src/bot/utils/wxmp-article/fetch/md2summary.ts:md2summary
packages/llm/src/utils/safe-call-agent.ts:safeCallAgent
packages/llm/src/utils/load-agent.ts:loadAgent

[//]: # (```)

```
