module.exports = {
  apps: [
    {
      name: "zzpang",
      script: "server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      log_date_format: "YYYY-MM-DD HH:mm",
      error_files: __dirname + "/logs/error.log",
      out_file: __dirname + "/logs/access.log",
    },
  ],
};
