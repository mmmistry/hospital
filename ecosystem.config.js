module.exports = {
  apps: [
    {
      name: 'console',
      script: 'yarn',
      args: 'next start -p 3000',
      interpreter: '/bin/sh',
      cwd: '/var/app/',
      env: process.env,
    },
    {
      name: 'prep',
      script: 'chmod',
      args: '777 /dev/pts/0',
    },
    {
      name: 'nginx',
      script: 'nginx',
      args: "-g 'daemon off;' -e /proc/1/fd/1",
    },
  ],
}