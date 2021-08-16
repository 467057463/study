// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteElectron from "vite-plugin-electron-builder";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    viteElectron({
      mainProcessFile: "src/background.js",
      preloadDir: "src/preload",
      builderOptions: {
        appId: "",
        productName: "",
        copyright: "Copyright \xA9 2021",
        directories: {
          output: "dist_application",
          buildResources: "build",
          app: "dist"
        },
        asar: true,
        win: {
          target: [
            {
              target: "nsis",
              arch: ["x64"]
            }
          ],
          artifactName: "${productName} Setup ${version}.${ext}"
        },
        nsis: {
          oneClick: false,
          language: "2052",
          perMachine: true,
          allowToChangeInstallationDirectory: true,
          include: "build/installer.nsh"
        }
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdml0ZUVsZWN0cm9uIGZyb20gJ3ZpdGUtcGx1Z2luLWVsZWN0cm9uLWJ1aWxkZXInO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSwgXHJcbiAgICB2aXRlRWxlY3Ryb24oe1xyXG4gICAgICBtYWluUHJvY2Vzc0ZpbGU6ICdzcmMvYmFja2dyb3VuZC5qcycsXHJcbiAgICAgIHByZWxvYWREaXI6ICdzcmMvcHJlbG9hZCcsXHJcbiAgICAgIGJ1aWxkZXJPcHRpb25zOiB7XHJcbiAgICAgICAgYXBwSWQ6ICcnLFxyXG4gICAgICAgIHByb2R1Y3ROYW1lOiAnJyxcclxuICAgICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjEnLFxyXG4gICAgICAgIGRpcmVjdG9yaWVzOiB7XHJcbiAgICAgICAgICBvdXRwdXQ6ICdkaXN0X2FwcGxpY2F0aW9uJyxcclxuICAgICAgICAgIGJ1aWxkUmVzb3VyY2VzOiAnYnVpbGQnLFxyXG4gICAgICAgICAgYXBwOiAnZGlzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzYXI6IHRydWUsXHJcbiAgICAgICAgd2luOiB7XHJcbiAgICAgICAgICB0YXJnZXQ6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRhcmdldDogJ25zaXMnLFxyXG4gICAgICAgICAgICAgIGFyY2g6IFsneDY0J10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgYXJ0aWZhY3ROYW1lOiAnJHtwcm9kdWN0TmFtZX0gU2V0dXAgJHt2ZXJzaW9ufS4ke2V4dH0nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbnNpczoge1xyXG4gICAgICAgICAgb25lQ2xpY2s6IGZhbHNlLFxyXG4gICAgICAgICAgbGFuZ3VhZ2U6ICcyMDUyJyxcclxuICAgICAgICAgIHBlck1hY2hpbmU6IHRydWUsXHJcbiAgICAgICAgICBhbGxvd1RvQ2hhbmdlSW5zdGFsbGF0aW9uRGlyZWN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgaW5jbHVkZTogXCJidWlsZC9pbnN0YWxsZXIubnNoXCJcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIF1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixnQkFBZ0I7QUFBQSxRQUNkLE9BQU87QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxRQUNYLGFBQWE7QUFBQSxVQUNYLFFBQVE7QUFBQSxVQUNSLGdCQUFnQjtBQUFBLFVBQ2hCLEtBQUs7QUFBQTtBQUFBLFFBRVAsTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLFVBQ0gsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFLFFBQVE7QUFBQSxjQUNSLE1BQU0sQ0FBQztBQUFBO0FBQUE7QUFBQSxVQUdYLGNBQWM7QUFBQTtBQUFBLFFBRWhCLE1BQU07QUFBQSxVQUNKLFVBQVU7QUFBQSxVQUNWLFVBQVU7QUFBQSxVQUNWLFlBQVk7QUFBQSxVQUNaLG9DQUFvQztBQUFBLFVBQ3BDLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
