module.exports = {
    ci: {
      collect: {
        staticDistDir: "./build",
        // startServerCommand: "npm run start", // 서버를 키는 명령어를 통해서도 실행 가능
        // settings: {
        //     chromeFlags: "--no-sandbox --headless"
        // },
        numberOfRuns: 5,
        url:["http://localhost/", "http://localhost/sigma", "http://localhost/cosmos"]
          },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };