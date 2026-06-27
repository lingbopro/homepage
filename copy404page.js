#!/usr/bin/env node

import { renameSync, rmdirSync } from 'node:fs';

// React Router 会把 /404 路由生成为 /404/index.html，所以我们要手动移动它到 /404.html

renameSync('build/client/404/index.html', 'build/client/404.html');
rmdirSync('build/client/404');
