import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  // 自定义规则配置
  {
    files: ["**/*.vue"],
    rules: {
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: ["index"], // 添加你想要忽略的组件名称
        },
      ],
    },
  },
];
