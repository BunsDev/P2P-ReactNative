import { resolve } from 'path';

// Learn more https://docs.expo.io/guides/customizing-metro
import { getDefaultConfig } from '@expo/metro-config';

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = resolve(__dirname, '..');
const projectRoot = __dirname;

const config = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
config.watchFolders = [workspaceRoot];
// 2. Let Metro know where to resolve packages, and in what order
config.resolver.nodeModulesPaths = [
  resolve(projectRoot, 'node_modules'),
  resolve(workspaceRoot, 'packages', 'base', 'node_modules'),
  resolve(workspaceRoot, 'node_modules'),
];

config.projectRoot = projectRoot;

config.resolver.blacklistRE = [
  /website\/.*/,
  /coverage\/.*/,
  // /packages\/.*\/node_modules\/.*/,
];

export default config;
