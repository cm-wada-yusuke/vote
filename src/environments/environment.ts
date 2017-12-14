// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  region: 'ap-northeast-1',
  userPoolId: 'ap-northeast-1_xxxxxxxx', // User Pools の画面から取得できる User Pools そのもののID。
  clientId: 'xxxxxxxxxxxxxxxx'  // User Pools で作成できる、発行したクライアントアプリケーションのID。
};
