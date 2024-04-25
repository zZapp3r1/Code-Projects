root@v14555:/var/www/pterodactyl# blueprint -rerun-install
11:27:18 WARNING: This is an advanced feature, only proceed if you know what you are doing.
  ██
██  ██
  ████

11:27:19 INFO: Searching and validating framework dependencies..
11:27:19 INFO: Linking directories and filesystems..
11:27:19 INFO: Replacing internal placeholders..
11:27:19 INFO: Put application into maintenance mode.
11:27:19 INFO: Flushing view, config and route cache..
11:27:19 INPUT: Would you like to migrate your database? (Y/n)
y
11:27:20 INFO: Running database migrations..
PHP Warning:  require(/var/www/pterodactyl/vendor/composer/../../app/helpers.php): Failed to open stream: No such file or directory in /var/www/pterodactyl/vendor/composer/autoload_real.php on line 41
PHP Fatal error:  Uncaught Error: Failed opening required '/var/www/pterodactyl/vendor/composer/../../app/helpers.php' (include_path='.:/usr/share/php') in /var/www/pterodactyl/vendor/composer/autoload_real.php:41
Stack trace:
#0 /var/www/pterodactyl/vendor/composer/autoload_real.php(45): {closure}()
#1 /var/www/pterodactyl/vendor/autoload.php(25): ComposerAutoloaderInitc825c79676768901c780446d7550a7f6::getLoader()
#2 /var/www/pterodactyl/artisan(18): require('...')
#3 {main}
  thrown in /var/www/pterodactyl/vendor/composer/autoload_real.php on line 41
11:27:20 INFO: Changing Pterodactyl file ownership to 'www-data:www-data'..
11:27:20 INFO: Rebuilding panel assets..
yarn run v1.22.22
$ yarn run clean && cross-env NODE_ENV=production ./node_modules/.bin/webpack --mode production --progress
$ cd public/assets && find . \( -name "*.js" -o -name "*.map" \) -type f -delete
10% building 1/2 modules 1 active ...index.js!/var/www/pterodactyl/resources/scripts/index.tsxBrowserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
Hash: 0bd77780effa38329f12
Version: webpack 4.43.0
Time: 9469ms
Built at: 04/10/2024 11:27:31 AM
 1 asset
Entrypoint main = bundle.ff10cda9.js
 [1] ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./resources/scripts/blueprint/css/extensions.css 426 bytes {0} [built]
 [8] multi react-hot-loader/patch ./resources/scripts/index.tsx 40 bytes {0} [built]
[14] ./resources/scripts/index.tsx + 1 modules 1.01 KiB {0} [built]
     | ./resources/scripts/index.tsx 584 bytes [built]
     | ./resources/scripts/blueprint/css/extensions.css 421 bytes [built]
    + 12 hidden modules

ERROR in ./resources/scripts/index.tsx
Module not found: Error: Can't resolve './i18n' in '/var/www/pterodactyl/resources/scripts'
 @ ./resources/scripts/index.tsx 7:0-16
 @ multi react-hot-loader/patch ./resources/scripts/index.tsx

ERROR in ./resources/scripts/index.tsx
Module not found: Error: Can't resolve '@/components/App' in '/var/www/pterodactyl/resources/scripts'
 @ ./resources/scripts/index.tsx 3:0-35 16:50-53
 @ multi react-hot-loader/patch ./resources/scripts/index.tsx

ERROR in resources/scripts/api/server/getServer.ts:1:64
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
  > 1 | import http, { FractalResponseData, FractalResponseList } from '@/api/http';
      |                                                                ^^^^^^^^^^^^
    2 | import { rawDataToServerAllocation, rawDataToServerEggVariable } from '@/api/transformers';
    3 | import { ServerEggVariable, ServerStatus } from '@/api/server/types';
    4 |

ERROR in resources/scripts/api/server/getServer.ts:2:71
TS2307: Cannot find module '@/api/transformers' or its corresponding type declarations.
    1 | import http, { FractalResponseData, FractalResponseList } from '@/api/http';
  > 2 | import { rawDataToServerAllocation, rawDataToServerEggVariable } from '@/api/transformers';
      |                                                                       ^^^^^^^^^^^^^^^^^^^^
    3 | import { ServerEggVariable, ServerStatus } from '@/api/server/types';
    4 |
    5 | export interface Allocation {

ERROR in resources/scripts/api/server/getServer.ts:3:49
TS2307: Cannot find module '@/api/server/types' or its corresponding type declarations.
    1 | import http, { FractalResponseData, FractalResponseList } from '@/api/http';
    2 | import { rawDataToServerAllocation, rawDataToServerEggVariable } from '@/api/transformers';
  > 3 | import { ServerEggVariable, ServerStatus } from '@/api/server/types';
      |                                                 ^^^^^^^^^^^^^^^^^^^^
    4 |
    5 | export interface Allocation {
    6 |   id: number;

ERROR in resources/scripts/api/server/getServer.ts:87:16
TS7031: Binding element 'data' implicitly has an 'any' type.
    85 |     http
    86 |       .get(`/api/client/servers/${uuid}`)
  > 87 |       .then(({ data }) =>
       |                ^^^^
    88 |         resolve([
    89 |           rawDataToServerObject(data),
    90 |           // eslint-disable-next-line camelcase

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:4:26
TS2307: Cannot find module '@/components/elements/ScreenBlock' or its corresponding type declarations.
    2 | import { NavLink, Route, Switch } from 'react-router-dom';
    3 | import { useLocation } from 'react-router';
  > 4 | import { NotFound } from '@/components/elements/ScreenBlock';
      |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import TransitionRouter from '@/TransitionRouter';
    6 | import DashboardContainer from '@/components/dashboard/DashboardContainer';
    7 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:5:30
TS2307: Cannot find module '@/TransitionRouter' or its corresponding type declarations.
    3 | import { useLocation } from 'react-router';
    4 | import { NotFound } from '@/components/elements/ScreenBlock';
  > 5 | import TransitionRouter from '@/TransitionRouter';
      |                              ^^^^^^^^^^^^^^^^^^^^
    6 | import DashboardContainer from '@/components/dashboard/DashboardContainer';
    7 | import Spinner from '@/components/elements/Spinner';
    8 | import { useStoreState } from 'easy-peasy';

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:6:32
TS2307: Cannot find module '@/components/dashboard/DashboardContainer' or its corresponding type declarations.
    4 | import { NotFound } from '@/components/elements/ScreenBlock';
    5 | import TransitionRouter from '@/TransitionRouter';
  > 6 | import DashboardContainer from '@/components/dashboard/DashboardContainer';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import Spinner from '@/components/elements/Spinner';
    8 | import { useStoreState } from 'easy-peasy';
    9 |

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:7:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
     5 | import TransitionRouter from '@/TransitionRouter';
     6 | import DashboardContainer from '@/components/dashboard/DashboardContainer';
  >  7 | import Spinner from '@/components/elements/Spinner';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import { useStoreState } from 'easy-peasy';
     9 |
    10 | import routes from '@/routers/routes';

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:10:20
TS2307: Cannot find module '@/routers/routes' or its corresponding type declarations.
     8 | import { useStoreState } from 'easy-peasy';
     9 |
  > 10 | import routes from '@/routers/routes';
       |                    ^^^^^^^^^^^^^^^^^^
    11 | import blueprintRoutes from './routes';
    12 |
    13 | export const NavigationLinks = () => {

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:14:52
TS2339: Property 'user' does not exist on type 'StateMapper<_Pick<{}, never>>'.
    12 |
    13 | export const NavigationLinks = () => {
  > 14 |   const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
       |                                                    ^^^^
    15 |   return (
    16 |     <>
    17 |

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:20:18
TS7006: Parameter 'route' implicitly has an 'any' type.
    18 |       {/* Pterodactyl routes */}
    19 |       {routes.account
  > 20 |         .filter((route) => !!route.name)
       |                  ^^^^^
    21 |         .map(({ path, name, exact = false }) => (
    22 |           <NavLink key={path} to={`/account/${path}`.replace('//', '/')} exact={exact}>
    23 |             {name}

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:21:17
TS7031: Binding element 'path' implicitly has an 'any' type.
    19 |       {routes.account
    20 |         .filter((route) => !!route.name)
  > 21 |         .map(({ path, name, exact = false }) => (
       |                 ^^^^
    22 |           <NavLink key={path} to={`/account/${path}`.replace('//', '/')} exact={exact}>
    23 |             {name}
    24 |           </NavLink>

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:21:23
TS7031: Binding element 'name' implicitly has an 'any' type.
    19 |       {routes.account
    20 |         .filter((route) => !!route.name)
  > 21 |         .map(({ path, name, exact = false }) => (
       |                       ^^^^
    22 |           <NavLink key={path} to={`/account/${path}`.replace('//', '/')} exact={exact}>
    23 |             {name}
    24 |           </NavLink>

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:45:52
TS2339: Property 'user' does not exist on type 'StateMapper<_Pick<{}, never>>'.
    43 | export const NavigationRouter = () => {
    44 |   const location = useLocation();
  > 45 |   const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
       |                                                    ^^^^
    46 |   return (
    47 |     <>
    48 |       <TransitionRouter>

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:56:36
TS7031: Binding element 'path' implicitly has an 'any' type.
    54 |
    55 |             {/* Pterodactyl routes */}
  > 56 |             {routes.account.map(({ path, component: Component }) => (
       |                                    ^^^^
    57 |               <Route key={path} path={`/account/${path}`.replace('//', '/')} exact>
    58 |                 <Component />
    59 |               </Route>

ERROR in resources/scripts/blueprint/extends/routers/DashboardRouter.tsx:56:53
TS7031: Binding element 'Component' implicitly has an 'any' type.
    54 |
    55 |             {/* Pterodactyl routes */}
  > 56 |             {routes.account.map(({ path, component: Component }) => (
       |                                                     ^^^^^^^^^
    57 |               <Route key={path} path={`/account/${path}`.replace('//', '/')} exact>
    58 |                 <Component />
    59 |               </Route>

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:3:30
TS2307: Cannot find module '@/TransitionRouter' or its corresponding type declarations.
    1 | import React, { useState, useEffect } from 'react';
    2 | import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
  > 3 | import TransitionRouter from '@/TransitionRouter';
      |                              ^^^^^^^^^^^^^^^^^^^^
    4 | import PermissionRoute from '@/components/elements/PermissionRoute';
    5 | import Can from '@/components/elements/Can';
    6 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:4:29
TS2307: Cannot find module '@/components/elements/PermissionRoute' or its corresponding type declarations.
    2 | import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
    3 | import TransitionRouter from '@/TransitionRouter';
  > 4 | import PermissionRoute from '@/components/elements/PermissionRoute';
      |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import Can from '@/components/elements/Can';
    6 | import Spinner from '@/components/elements/Spinner';
    7 | import { NotFound } from '@/components/elements/ScreenBlock';

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:5:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
    3 | import TransitionRouter from '@/TransitionRouter';
    4 | import PermissionRoute from '@/components/elements/PermissionRoute';
  > 5 | import Can from '@/components/elements/Can';
      |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import Spinner from '@/components/elements/Spinner';
    7 | import { NotFound } from '@/components/elements/ScreenBlock';
    8 | import { useLocation } from 'react-router';

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:6:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    4 | import PermissionRoute from '@/components/elements/PermissionRoute';
    5 | import Can from '@/components/elements/Can';
  > 6 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import { NotFound } from '@/components/elements/ScreenBlock';
    8 | import { useLocation } from 'react-router';
    9 | import { useStoreState } from 'easy-peasy';

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:7:26
TS2307: Cannot find module '@/components/elements/ScreenBlock' or its corresponding type declarations.
     5 | import Can from '@/components/elements/Can';
     6 | import Spinner from '@/components/elements/Spinner';
  >  7 | import { NotFound } from '@/components/elements/ScreenBlock';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import { useLocation } from 'react-router';
     9 | import { useStoreState } from 'easy-peasy';
    10 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:10:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
     8 | import { useLocation } from 'react-router';
     9 | import { useStoreState } from 'easy-peasy';
  > 10 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    11 |
    12 | import routes from '@/routers/routes';
    13 | import blueprintRoutes from './routes';

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:12:20
TS2307: Cannot find module '@/routers/routes' or its corresponding type declarations.
    10 | import { ServerContext } from '@/state/server';
    11 |
  > 12 | import routes from '@/routers/routes';
       |                    ^^^^^^^^^^^^^^^^^^
    13 | import blueprintRoutes from './routes';
    14 |
    15 | const blueprintExtensions = [...new Set(blueprintRoutes.server.map((route) => route.identifier))];

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:40:52
TS2339: Property 'user' does not exist on type 'StateMapper<_Pick<{}, never>>'.
    38 |
    39 | export const NavigationLinks = () => {
  > 40 |   const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
       |                                                    ^^^^
    41 |   const serverEgg = ServerContext.useStoreState((state) => state.server.data?.BlueprintFramework.eggId);
    42 |   const match = useRouteMatch<{ id: string }>();
    43 |   const to = (value: string, url = false) => {

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:41:50
TS7006: Parameter 'state' implicitly has an 'any' type.
    39 | export const NavigationLinks = () => {
    40 |   const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
  > 41 |   const serverEgg = ServerContext.useStoreState((state) => state.server.data?.BlueprintFramework.eggId);
       |                                                  ^^^^^
    42 |   const match = useRouteMatch<{ id: string }>();
    43 |   const to = (value: string, url = false) => {
    44 |     if (value === '/') {

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:56:18
TS7006: Parameter 'route' implicitly has an 'any' type.
    54 |       {/* Pterodactyl routes */}
    55 |       {routes.server
  > 56 |         .filter((route) => !!route.name)
       |                  ^^^^^
    57 |         .map((route) =>
    58 |           route.permission ? (
    59 |             <Can key={route.path} action={route.permission} matchAny>

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:57:15
TS7006: Parameter 'route' implicitly has an 'any' type.
    55 |       {routes.server
    56 |         .filter((route) => !!route.name)
  > 57 |         .map((route) =>
       |               ^^^^^
    58 |           route.permission ? (
    59 |             <Can key={route.path} action={route.permission} matchAny>
    60 |               <NavLink to={to(route.path, true)} exact={route.exact}>

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:99:52
TS2339: Property 'user' does not exist on type 'StateMapper<_Pick<{}, never>>'.
     97 |
     98 | export const NavigationRouter = () => {
  >  99 |   const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
        |                                                    ^^^^
    100 |   const serverEgg = ServerContext.useStoreState((state) => state.server.data?.BlueprintFramework.eggId);
    101 |   const match = useRouteMatch<{ id: string }>();
    102 |   const to = (value: string, url = false) => {

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:100:50
TS7006: Parameter 'state' implicitly has an 'any' type.
     98 | export const NavigationRouter = () => {
     99 |   const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
  > 100 |   const serverEgg = ServerContext.useStoreState((state) => state.server.data?.BlueprintFramework.eggId);
        |                                                  ^^^^^
    101 |   const match = useRouteMatch<{ id: string }>();
    102 |   const to = (value: string, url = false) => {
    103 |     if (value === '/') {

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:116:33
TS7031: Binding element 'path' implicitly has an 'any' type.
    114 |         <Switch location={location}>
    115 |           {/* Pterodactyl routes */}
  > 116 |           {routes.server.map(({ path, permission, component: Component }) => (
        |                                 ^^^^
    117 |             <PermissionRoute key={path} permission={permission} path={to(path)} exact>
    118 |               <Spinner.Suspense>
    119 |                 <Component />

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:116:39
TS7031: Binding element 'permission' implicitly has an 'any' type.
    114 |         <Switch location={location}>
    115 |           {/* Pterodactyl routes */}
  > 116 |           {routes.server.map(({ path, permission, component: Component }) => (
        |                                       ^^^^^^^^^^
    117 |             <PermissionRoute key={path} permission={permission} path={to(path)} exact>
    118 |               <Spinner.Suspense>
    119 |                 <Component />

ERROR in resources/scripts/blueprint/extends/routers/ServerRouter.tsx:116:62
TS7031: Binding element 'Component' implicitly has an 'any' type.
    114 |         <Switch location={location}>
    115 |           {/* Pterodactyl routes */}
  > 116 |           {routes.server.map(({ path, permission, component: Component }) => (
        |                                                              ^^^^^^^^^
    117 |             <PermissionRoute key={path} permission={permission} path={to(path)} exact>
    118 |               <Spinner.Suspense>
    119 |                 <Component />

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:4:28
TS2307: Cannot find module '@/theme' or its corresponding type declarations.
    2 | import { Form } from 'formik';
    3 | import styled from 'styled-components/macro';
  > 4 | import { breakpoint } from '@/theme';
      |                            ^^^^^^^^^
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
    6 | import tw from 'twin.macro';
    7 |

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:5:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    3 | import styled from 'styled-components/macro';
    4 | import { breakpoint } from '@/theme';
  > 5 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import tw from 'twin.macro';
    7 |
    8 | import BeforeContent from '@/blueprint/components/Authentication/Container/BeforeContent';

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:36:23
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
    34 | export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    35 |     <Container>
  > 36 |         {title && <h2 css={tw`text-3xl text-center text-neutral-100 font-medium py-4`}>{title}</h2>}
       |                       ^^^
    37 |         <FlashMessageRender css={tw`mb-2 px-1`} />
    38 |         <BeforeContent />
    39 |         <Form {...props} ref={ref}>

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:40:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    38 |         <BeforeContent />
    39 |         <Form {...props} ref={ref}>
  > 40 |             <div css={tw`md:flex w-full bg-white shadow-lg rounded-lg p-6 md:pl-0 mx-1`}>
       |                  ^^^
    41 |                 <div css={tw`flex-none select-none mb-6 md:mb-0 self-center`}>
    42 |                     <img src={'/assets/svgs/pterodactyl.svg'} css={tw`block w-48 md:w-64 mx-auto`} />
    43 |                 </div>

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:41:22
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    39 |         <Form {...props} ref={ref}>
    40 |             <div css={tw`md:flex w-full bg-white shadow-lg rounded-lg p-6 md:pl-0 mx-1`}>
  > 41 |                 <div css={tw`flex-none select-none mb-6 md:mb-0 self-center`}>
       |                      ^^^
    42 |                     <img src={'/assets/svgs/pterodactyl.svg'} css={tw`block w-48 md:w-64 mx-auto`} />
    43 |                 </div>
    44 |                 <div css={tw`flex-1`}>{props.children}</div>

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:42:63
TS2322: Type '{ src: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>'.
    40 |             <div css={tw`md:flex w-full bg-white shadow-lg rounded-lg p-6 md:pl-0 mx-1`}>
    41 |                 <div css={tw`flex-none select-none mb-6 md:mb-0 self-center`}>
  > 42 |                     <img src={'/assets/svgs/pterodactyl.svg'} css={tw`block w-48 md:w-64 mx-auto`} />
       |                                                               ^^^
    43 |                 </div>
    44 |                 <div css={tw`flex-1`}>{props.children}</div>
    45 |             </div>

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:44:22
TS2322: Type '{ children: ReactNode; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    42 |                     <img src={'/assets/svgs/pterodactyl.svg'} css={tw`block w-48 md:w-64 mx-auto`} />
    43 |                 </div>
  > 44 |                 <div css={tw`flex-1`}>{props.children}</div>
       |                      ^^^
    45 |             </div>
    46 |         </Form>
    47 |         <AfterContent />

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:48:12
TS2322: Type '{ children: (string | number | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    46 |         </Form>
    47 |         <AfterContent />
  > 48 |         <p css={tw`text-center text-neutral-500 text-xs mt-4`}>
       |            ^^^
    49 |             &copy; 2015 - {new Date().getFullYear()}&nbsp;
    50 |             <a
    51 |                 rel={'noopener nofollow noreferrer'}

ERROR in resources/scripts/components/auth/LoginFormContainer.tsx:54:17
TS2322: Type '{ children: string; rel: string; href: string; target: "_blank"; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
    52 |                 href={'https://pterodactyl.io'}
    53 |                 target={'_blank'}
  > 54 |                 css={tw`no-underline text-neutral-500 hover:text-neutral-300`}
       |                 ^^^
    55 |             >
    56 |                 Pterodactyl Software
    57 |             </a>

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:2:24
TS2307: Cannot find module '@/components/elements/ContentBox' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
  > 2 | import ContentBox from '@/components/elements/ContentBox';
      |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import CreateApiKeyForm from '@/components/dashboard/forms/CreateApiKeyForm';
    4 | import getApiKeys, { ApiKey } from '@/api/account/getApiKeys';
    5 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:3:30
TS2307: Cannot find module '@/components/dashboard/forms/CreateApiKeyForm' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
    2 | import ContentBox from '@/components/elements/ContentBox';
  > 3 | import CreateApiKeyForm from '@/components/dashboard/forms/CreateApiKeyForm';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 | import getApiKeys, { ApiKey } from '@/api/account/getApiKeys';
    5 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    6 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:4:36
TS2307: Cannot find module '@/api/account/getApiKeys' or its corresponding type declarations.
    2 | import ContentBox from '@/components/elements/ContentBox';
    3 | import CreateApiKeyForm from '@/components/dashboard/forms/CreateApiKeyForm';
  > 4 | import getApiKeys, { ApiKey } from '@/api/account/getApiKeys';
      |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    6 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    7 | import { faKey, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:5:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
    3 | import CreateApiKeyForm from '@/components/dashboard/forms/CreateApiKeyForm';
    4 | import getApiKeys, { ApiKey } from '@/api/account/getApiKeys';
  > 5 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
      |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    7 | import { faKey, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
    8 | import deleteApiKey from '@/api/account/deleteApiKey';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:8:26
TS2307: Cannot find module '@/api/account/deleteApiKey' or its corresponding type declarations.     6 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     7 | import { faKey, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
  >  8 | import deleteApiKey from '@/api/account/deleteApiKey';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import FlashMessageRender from '@/components/FlashMessageRender';
    10 | import { format } from 'date-fns';
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:9:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
     7 | import { faKey, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
     8 | import deleteApiKey from '@/api/account/deleteApiKey';
  >  9 | import FlashMessageRender from '@/components/FlashMessageRender';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import { format } from 'date-fns';
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';
    12 | import tw from 'twin.macro';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:11:30
TS2307: Cannot find module '@/components/elements/PageContentBlock' or its corresponding type declarations.
     9 | import FlashMessageRender from '@/components/FlashMessageRender';
    10 | import { format } from 'date-fns';
  > 11 | import PageContentBlock from '@/components/elements/PageContentBlock';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import tw from 'twin.macro';
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';
    14 | import { Dialog } from '@/components/elements/dialog';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:13:24
TS2307: Cannot find module '@/components/elements/GreyRowBox' or its corresponding type declarations.
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';
    12 | import tw from 'twin.macro';
  > 13 | import GreyRowBox from '@/components/elements/GreyRowBox';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import { Dialog } from '@/components/elements/dialog';
    15 | import { useFlashKey } from '@/plugins/useFlash';
    16 | import Code from '@/components/elements/Code';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:14:24
TS2307: Cannot find module '@/components/elements/dialog' or its corresponding type declarations.
    12 | import tw from 'twin.macro';
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';
  > 14 | import { Dialog } from '@/components/elements/dialog';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import { useFlashKey } from '@/plugins/useFlash';
    16 | import Code from '@/components/elements/Code';
    17 |

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:15:29
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';
    14 | import { Dialog } from '@/components/elements/dialog';
  > 15 | import { useFlashKey } from '@/plugins/useFlash';
       |                             ^^^^^^^^^^^^^^^^^^^^
    16 | import Code from '@/components/elements/Code';
    17 |
    18 | import BeforeContent from '@/blueprint/components/Account/API/BeforeContent';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:16:18
TS2307: Cannot find module '@/components/elements/Code' or its corresponding type declarations.    14 | import { Dialog } from '@/components/elements/dialog';
    15 | import { useFlashKey } from '@/plugins/useFlash';
  > 16 | import Code from '@/components/elements/Code';
       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    17 |
    18 | import BeforeContent from '@/blueprint/components/Account/API/BeforeContent';
    19 | import AfterContent  from '@/blueprint/components/Account/API/AfterContent';

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:29:20
TS7006: Parameter 'keys' implicitly has an 'any' type.
    27 |     useEffect(() => {
    28 |         getApiKeys()
  > 29 |             .then((keys) => setKeys(keys))
       |                    ^^^^
    30 |             .then(() => setLoading(false))
    31 |             .catch((error) => clearAndAddHttpError(error));
    32 |     }, []);

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:31:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    29 |             .then((keys) => setKeys(keys))
    30 |             .then(() => setLoading(false))
  > 31 |             .catch((error) => clearAndAddHttpError(error));
       |                     ^^^^^
    32 |     }, []);
    33 |
    34 |     const doDeletion = (identifier: string) => {

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:40:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    38 |         deleteApiKey(identifier)
    39 |             .then(() => setKeys((s) => [...(s || []).filter((key) => key.identifier !== identifier)]))
  > 40 |             .catch((error) => clearAndAddHttpError(error))
       |                     ^^^^^
    41 |             .then(() => {
    42 |                 setLoading(false);
    43 |                 setDeleteIdentifier('');

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:51:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    49 |             <FlashMessageRender byKey={'account'} />
    50 |             <BeforeContent />
  > 51 |             <div css={tw`md:flex flex-nowrap my-10`}>
       |                  ^^^
    52 |                 <ContentBox title={'Create API Key'} css={tw`flex-none w-full md:w-1/2`}>
    53 |                     <CreateApiKeyForm onKeyCreated={(key) => setKeys((s) => [...s!, key])} />
    54 |                 </ContentBox>

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:53:54
TS7006: Parameter 'key' implicitly has an 'any' type.
    51 |             <div css={tw`md:flex flex-nowrap my-10`}>
    52 |                 <ContentBox title={'Create API Key'} css={tw`flex-none w-full md:w-1/2`}>
  > 53 |                     <CreateApiKeyForm onKeyCreated={(key) => setKeys((s) => [...s!, key])} />
       |                                                      ^^^
    54 |                 </ContentBox>
    55 |                 <ContentBox title={'API Keys'} css={tw`flex-1 overflow-hidden mt-8 md:mt-0 md:ml-8`}>
    56 |                     <SpinnerOverlay visible={loading} />

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:67:28
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    65 |                     </Dialog.Confirm>
    66 |                     {keys.length === 0 ? (
  > 67 |                         <p css={tw`text-center text-sm`}>
       |                            ^^^
    68 |                             {loading ? 'Loading...' : 'No API keys exist for this account.'}
    69 |                         </p>
    70 |                     ) : (

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:76:63
TS2322: Type '{ icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    74 |                                 css={[tw`bg-neutral-600 flex items-center`, index > 0 && tw`mt-2`]}
    75 |                             >
  > 76 |                                 <FontAwesomeIcon icon={faKey} css={tw`text-neutral-300`} />
       |                                                               ^^^
    77 |                                 <div css={tw`ml-4 flex-1 overflow-hidden`}>
    78 |                                     <p css={tw`text-sm break-words`}>{key.description}</p>
    79 |                                     <p css={tw`text-2xs text-neutral-300 uppercase`}>

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:77:38
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    75 |                             >
    76 |                                 <FontAwesomeIcon icon={faKey} css={tw`text-neutral-300`} />
  > 77 |                                 <div css={tw`ml-4 flex-1 overflow-hidden`}>
       |                                      ^^^
    78 |                                     <p css={tw`text-sm break-words`}>{key.description}</p>
    79 |                                     <p css={tw`text-2xs text-neutral-300 uppercase`}>
    80 |                                         Last used:&nbsp;

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:78:40
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    76 |                                 <FontAwesomeIcon icon={faKey} css={tw`text-neutral-300`} />
    77 |                                 <div css={tw`ml-4 flex-1 overflow-hidden`}>
  > 78 |                                     <p css={tw`text-sm break-words`}>{key.description}</p>
       |                                        ^^^
    79 |                                     <p css={tw`text-2xs text-neutral-300 uppercase`}>
    80 |                                         Last used:&nbsp;
    81 |                                         {key.lastUsedAt ? format(key.lastUsedAt, 'MMM do, yyyy HH:mm') : 'Never'}

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:79:40
TS2322: Type '{ children: string[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    77 |                                 <div css={tw`ml-4 flex-1 overflow-hidden`}>
    78 |                                     <p css={tw`text-sm break-words`}>{key.description}</p>
  > 79 |                                     <p css={tw`text-2xs text-neutral-300 uppercase`}>
       |                                        ^^^
    80 |                                         Last used:&nbsp;
    81 |                                         {key.lastUsedAt ? format(key.lastUsedAt, 'MMM do, yyyy HH:mm') : 'Never'}
    82 |                                     </p>

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:84:36
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    82 |                                     </p>
    83 |                                 </div>
  > 84 |                                 <p css={tw`text-sm ml-4 hidden md:block`}>
       |                                    ^^^
    85 |                                     <code css={tw`font-mono py-1 px-2 bg-neutral-900 rounded`}>{key.identifier}</code>
    86 |                                 </p>
    87 |                                 <button css={tw`ml-4 p-2 text-sm`} onClick={() => setDeleteIdentifier(key.identifier)}>

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:85:43
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    83 |                                 </div>
    84 |                                 <p css={tw`text-sm ml-4 hidden md:block`}>
  > 85 |                                     <code css={tw`font-mono py-1 px-2 bg-neutral-900 rounded`}>{key.identifier}</code>
       |                                           ^^^
    86 |                                 </p>
    87 |                                 <button css={tw`ml-4 p-2 text-sm`} onClick={() => setDeleteIdentifier(key.identifier)}>
    88 |                                     <FontAwesomeIcon

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:87:41
TS2322: Type '{ children: Element; css: TwStyle; onClick: () => void; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
    85 |                                     <code css={tw`font-mono py-1 px-2 bg-neutral-900 rounded`}>{key.identifier}</code>
    86 |                                 </p>
  > 87 |                                 <button css={tw`ml-4 p-2 text-sm`} onClick={() => setDeleteIdentifier(key.identifier)}>
       |                                         ^^^
    88 |                                     <FontAwesomeIcon
    89 |                                         icon={faTrashAlt}
    90 |                                         css={tw`text-neutral-400 hover:text-red-400 transition-colors duration-150`}

ERROR in resources/scripts/components/dashboard/AccountApiContainer.tsx:90:41
TS2322: Type '{ icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    88 |                                     <FontAwesomeIcon
    89 |                                         icon={faTrashAlt}
  > 90 |                                         css={tw`text-neutral-400 hover:text-red-400 transition-colors duration-150`}
       |                                         ^^^
    91 |                                     />
    92 |                                 </button>
    93 |                             </GreyRowBox>

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:2:24
TS2307: Cannot find module '@/components/elements/ContentBox' or its corresponding type declarations.
    1 | import * as React from 'react';
  > 2 | import ContentBox from '@/components/elements/ContentBox';
      |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import UpdatePasswordForm from '@/components/dashboard/forms/UpdatePasswordForm';
    4 | import UpdateEmailAddressForm from '@/components/dashboard/forms/UpdateEmailAddressForm';
    5 | import ConfigureTwoFactorForm from '@/components/dashboard/forms/ConfigureTwoFactorForm';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:3:32
TS2307: Cannot find module '@/components/dashboard/forms/UpdatePasswordForm' or its corresponding type declarations.
    1 | import * as React from 'react';
    2 | import ContentBox from '@/components/elements/ContentBox';
  > 3 | import UpdatePasswordForm from '@/components/dashboard/forms/UpdatePasswordForm';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 | import UpdateEmailAddressForm from '@/components/dashboard/forms/UpdateEmailAddressForm';
    5 | import ConfigureTwoFactorForm from '@/components/dashboard/forms/ConfigureTwoFactorForm';
    6 | import PageContentBlock from '@/components/elements/PageContentBlock';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:4:36
TS2307: Cannot find module '@/components/dashboard/forms/UpdateEmailAddressForm' or its corresponding type declarations.
    2 | import ContentBox from '@/components/elements/ContentBox';
    3 | import UpdatePasswordForm from '@/components/dashboard/forms/UpdatePasswordForm';
  > 4 | import UpdateEmailAddressForm from '@/components/dashboard/forms/UpdateEmailAddressForm';
      |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import ConfigureTwoFactorForm from '@/components/dashboard/forms/ConfigureTwoFactorForm';
    6 | import PageContentBlock from '@/components/elements/PageContentBlock';
    7 | import tw from 'twin.macro';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:5:36
TS2307: Cannot find module '@/components/dashboard/forms/ConfigureTwoFactorForm' or its corresponding type declarations.
    3 | import UpdatePasswordForm from '@/components/dashboard/forms/UpdatePasswordForm';
    4 | import UpdateEmailAddressForm from '@/components/dashboard/forms/UpdateEmailAddressForm';
  > 5 | import ConfigureTwoFactorForm from '@/components/dashboard/forms/ConfigureTwoFactorForm';
      |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import PageContentBlock from '@/components/elements/PageContentBlock';
    7 | import tw from 'twin.macro';
    8 | import { breakpoint } from '@/theme';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:6:30
TS2307: Cannot find module '@/components/elements/PageContentBlock' or its corresponding type declarations.
    4 | import UpdateEmailAddressForm from '@/components/dashboard/forms/UpdateEmailAddressForm';
    5 | import ConfigureTwoFactorForm from '@/components/dashboard/forms/ConfigureTwoFactorForm';
  > 6 | import PageContentBlock from '@/components/elements/PageContentBlock';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import tw from 'twin.macro';
    8 | import { breakpoint } from '@/theme';
    9 | import styled from 'styled-components/macro';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:8:28
TS2307: Cannot find module '@/theme' or its corresponding type declarations.
     6 | import PageContentBlock from '@/components/elements/PageContentBlock';
     7 | import tw from 'twin.macro';
  >  8 | import { breakpoint } from '@/theme';
       |                            ^^^^^^^^^
     9 | import styled from 'styled-components/macro';
    10 | import MessageBox from '@/components/MessageBox';
    11 | import { useLocation } from 'react-router-dom';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:10:24
TS2307: Cannot find module '@/components/MessageBox' or its corresponding type declarations.
     8 | import { breakpoint } from '@/theme';
     9 | import styled from 'styled-components/macro';
  > 10 | import MessageBox from '@/components/MessageBox';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import { useLocation } from 'react-router-dom';
    12 |
    13 | import BeforeContent from '@/blueprint/components/Account/Overview/BeforeContent';

ERROR in resources/scripts/components/dashboard/AccountOverviewContainer.tsx:44:24
TS2769: No overload matches this call.
  Overload 1 of 2, '(props: Omit<Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, never> & Partial<...>, "theme"> & { ...; } & { ...; }): ReactElement<...>', gave the following error.
    Type '{ children: Element[]; css: TwStyle[]; }' is not assignable to type 'IntrinsicAttributes & Omit<Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, never> & Partial<...>, "theme"> & { ...; } & { ...; }'.      Property 'css' does not exist on type 'IntrinsicAttributes & Omit<Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, never> & Partial<...>, "theme"> & { ...; } & { ...; }'.
  Overload 2 of 2, '(props: StyledComponentPropsWithAs<"div", any, {}, never, "div">): ReactElement<StyledComponentPropsWithAs<"div", any, {}, never, "div">, string | JSXElementConstructor<...>>', gave the following error.
    Type '{ children: Element[]; css: TwStyle[]; }' is not assignable to type 'IntrinsicAttributes & Omit<Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, never> & Partial<...>, "theme"> & { ...; } & { ...; }'.      Property 'css' does not exist on type 'IntrinsicAttributes & Omit<Omit<Pick<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof HTMLAttributes<...>> & { ...; }, never> & Partial<...>, "theme"> & { ...; } & { ...; }'.
    42 |
    43 |             <BeforeContent />
  > 44 |             <Container css={[tw`lg:grid lg:grid-cols-3 mb-10`, state?.twoFactorRedirect ? tw`mt-4` : tw`mt-10`]}>
       |                        ^^^
    45 |                 <ContentBox title={'Update Password'} showFlashes={'account:password'}>
    46 |                     <UpdatePasswordForm />
    47 |                 </ContentBox>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:6:71
TS2307: Cannot find module '@/api/server/getServerResourceUsage' or its corresponding type declarations.
    4 | import { Link } from 'react-router-dom';
    5 | import { Server } from '@/api/server/getServer';
  > 6 | import getServerResourceUsage, { ServerPowerState, ServerStats } from '@/api/server/getServerResourceUsage';
      |                                                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import { bytesToString, ip, mbToBytes } from '@/lib/formatters';
    8 | import tw from 'twin.macro';
    9 | import GreyRowBox from '@/components/elements/GreyRowBox';

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:7:46
TS2307: Cannot find module '@/lib/formatters' or its corresponding type declarations.
     5 | import { Server } from '@/api/server/getServer';
     6 | import getServerResourceUsage, { ServerPowerState, ServerStats } from '@/api/server/getServerResourceUsage';
  >  7 | import { bytesToString, ip, mbToBytes } from '@/lib/formatters';
       |                                              ^^^^^^^^^^^^^^^^^^
     8 | import tw from 'twin.macro';
     9 | import GreyRowBox from '@/components/elements/GreyRowBox';
    10 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:9:24
TS2307: Cannot find module '@/components/elements/GreyRowBox' or its corresponding type declarations.
     7 | import { bytesToString, ip, mbToBytes } from '@/lib/formatters';
     8 | import tw from 'twin.macro';
  >  9 | import GreyRowBox from '@/components/elements/GreyRowBox';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import Spinner from '@/components/elements/Spinner';
    11 | import styled from 'styled-components/macro';
    12 | import isEqual from 'react-fast-compare';

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:10:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
     8 | import tw from 'twin.macro';
     9 | import GreyRowBox from '@/components/elements/GreyRowBox';
  > 10 | import Spinner from '@/components/elements/Spinner';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import styled from 'styled-components/macro';
    12 | import isEqual from 'react-fast-compare';
    13 |

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:65:20
TS7006: Parameter 'data' implicitly has an 'any' type.
    63 |     const getStats = () =>
    64 |         getServerResourceUsage(server.uuid)
  > 65 |             .then((data) => setStats(data))
       |                    ^^^^
    66 |             .catch((error) => console.error(error));
    67 |
    68 |     useEffect(() => {

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:66:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    64 |         getServerResourceUsage(server.uuid)
    65 |             .then((data) => setStats(data))
  > 66 |             .catch((error) => console.error(error));
       |                     ^^^^^
    67 |
    68 |     useEffect(() => {
    69 |         setIsSuspended(stats?.isSuspended || server.status === 'suspended');

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:99:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
     97 |     return (
     98 |         <StatusIndicatorBox as={Link} to={`/server/${server.id}`} className={className} $status={stats?.status}>
  >  99 |             <div css={tw`flex items-center col-span-12 sm:col-span-5 lg:col-span-6`}>        |                  ^^^
    100 |                 <div className={'icon mr-4'}>
    101 |                     <FontAwesomeIcon icon={faServer} />
    102 |                 </div>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:105:24
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    103 |                 <div>
    104 |                     <BeforeEntryName />
  > 105 |                     <p css={tw`text-lg break-words`}>{server.name}</p>
        |                        ^^^
    106 |                     <AfterEntryName />
    107 |                     {!!server.description && (
    108 |                         <div>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:110:32
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    108 |                         <div>
    109 |                             <BeforeEntryDescription />
  > 110 |                             <p css={tw`text-sm text-neutral-300 break-words line-clamp-2`}>{server.description}</p>
        |                                ^^^
    111 |                             <AfterEntryDescription />
    112 |                         </div>
    113 |                     )}

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:116:18
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    114 |                 </div>
    115 |             </div>
  > 116 |             <div css={tw`flex-1 ml-4 lg:block lg:col-span-2 hidden`}>
        |                  ^^^
    117 |                 <div css={tw`flex justify-center`}>
    118 |                     <FontAwesomeIcon icon={faEthernet} css={tw`text-neutral-500`} />
    119 |                     <p css={tw`text-sm text-neutral-400 ml-2`}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:117:22
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    115 |             </div>
    116 |             <div css={tw`flex-1 ml-4 lg:block lg:col-span-2 hidden`}>
  > 117 |                 <div css={tw`flex justify-center`}>
        |                      ^^^
    118 |                     <FontAwesomeIcon icon={faEthernet} css={tw`text-neutral-500`} />
    119 |                     <p css={tw`text-sm text-neutral-400 ml-2`}>
    120 |                         {server.allocations

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:118:56
TS2322: Type '{ icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    116 |             <div css={tw`flex-1 ml-4 lg:block lg:col-span-2 hidden`}>
    117 |                 <div css={tw`flex justify-center`}>
  > 118 |                     <FontAwesomeIcon icon={faEthernet} css={tw`text-neutral-500`} />
        |                                                        ^^^
    119 |                     <p css={tw`text-sm text-neutral-400 ml-2`}>
    120 |                         {server.allocations
    121 |                             .filter((alloc) => alloc.isDefault)

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:119:24
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    117 |                 <div css={tw`flex justify-center`}>
    118 |                     <FontAwesomeIcon icon={faEthernet} css={tw`text-neutral-500`} />
  > 119 |                     <p css={tw`text-sm text-neutral-400 ml-2`}>
        |                        ^^^
    120 |                         {server.allocations
    121 |                             .filter((alloc) => alloc.isDefault)
    122 |                             .map((allocation) => (

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:130:18
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    128 |                 </div>
    129 |             </div>
  > 130 |             <div css={tw`hidden col-span-7 lg:col-span-4 sm:flex items-baseline justify-center`}>
        |                  ^^^
    131 |                 {!stats || isSuspended ? (
    132 |                     isSuspended ? (
    133 |                         <div css={tw`flex-1 text-center`}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:133:30
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    131 |                 {!stats || isSuspended ? (
    132 |                     isSuspended ? (
  > 133 |                         <div css={tw`flex-1 text-center`}>
        |                              ^^^
    134 |                             <span css={tw`bg-red-500 rounded px-2 py-1 text-red-100 text-xs`}>
    135 |                                 {server.status === 'suspended' ? 'Suspended' : 'Connection Error'}
    136 |                             </span>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:134:35
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    132 |                     isSuspended ? (
    133 |                         <div css={tw`flex-1 text-center`}>
  > 134 |                             <span css={tw`bg-red-500 rounded px-2 py-1 text-red-100 text-xs`}>
        |                                   ^^^
    135 |                                 {server.status === 'suspended' ? 'Suspended' : 'Connection Error'}
    136 |                             </span>
    137 |                         </div>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:139:30
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    137 |                         </div>
    138 |                     ) : server.isTransferring || server.status ? (
  > 139 |                         <div css={tw`flex-1 text-center`}>
        |                              ^^^
    140 |                             <span css={tw`bg-neutral-500 rounded px-2 py-1 text-neutral-100 text-xs`}>
    141 |                                 {server.isTransferring
    142 |                                     ? 'Transferring'

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:140:35
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    138 |                     ) : server.isTransferring || server.status ? (
    139 |                         <div css={tw`flex-1 text-center`}>
  > 140 |                             <span css={tw`bg-neutral-500 rounded px-2 py-1 text-neutral-100 text-xs`}>
        |                                   ^^^
    141 |                                 {server.isTransferring
    142 |                                     ? 'Transferring'
    143 |                                     : server.status === 'installing'

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:155:30
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    153 |                 ) : (
    154 |                     <React.Fragment>
  > 155 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
        |                              ^^^
    156 |                             <div css={tw`flex justify-center`}>
    157 |                                 <Icon icon={faMicrochip} $alarm={alarms.cpu} />
    158 |                                 <IconDescription $alarm={alarms.cpu}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:156:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    154 |                     <React.Fragment>
    155 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
  > 156 |                             <div css={tw`flex justify-center`}>
        |                                  ^^^
    157 |                                 <Icon icon={faMicrochip} $alarm={alarms.cpu} />
    158 |                                 <IconDescription $alarm={alarms.cpu}>
    159 |                                     {stats.cpuUsagePercent.toFixed(2)} %

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:162:32
TS2322: Type '{ children: string[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    160 |                                 </IconDescription>
    161 |                             </div>
  > 162 |                             <p css={tw`text-xs text-neutral-600 text-center mt-1`}>of {cpuLimit}</p>
        |                                ^^^
    163 |                         </div>
    164 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
    165 |                             <div css={tw`flex justify-center`}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:164:30
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    162 |                             <p css={tw`text-xs text-neutral-600 text-center mt-1`}>of {cpuLimit}</p>
    163 |                         </div>
  > 164 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
        |                              ^^^
    165 |                             <div css={tw`flex justify-center`}>
    166 |                                 <Icon icon={faMemory} $alarm={alarms.memory} />
    167 |                                 <IconDescription $alarm={alarms.memory}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:165:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    163 |                         </div>
    164 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
  > 165 |                             <div css={tw`flex justify-center`}>
        |                                  ^^^
    166 |                                 <Icon icon={faMemory} $alarm={alarms.memory} />
    167 |                                 <IconDescription $alarm={alarms.memory}>
    168 |                                     {bytesToString(stats.memoryUsageInBytes)}

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:171:32
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    169 |                                 </IconDescription>
    170 |                             </div>
  > 171 |                             <p css={tw`text-xs text-neutral-600 text-center mt-1`}>of {memoryLimit}</p>
        |                                ^^^
    172 |                         </div>
    173 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
    174 |                             <div css={tw`flex justify-center`}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:173:30
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    171 |                             <p css={tw`text-xs text-neutral-600 text-center mt-1`}>of {memoryLimit}</p>
    172 |                         </div>
  > 173 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
        |                              ^^^
    174 |                             <div css={tw`flex justify-center`}>
    175 |                                 <Icon icon={faHdd} $alarm={alarms.disk} />
    176 |                                 <IconDescription $alarm={alarms.disk}>

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:174:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    172 |                         </div>
    173 |                         <div css={tw`flex-1 ml-4 sm:block hidden`}>
  > 174 |                             <div css={tw`flex justify-center`}>
        |                                  ^^^
    175 |                                 <Icon icon={faHdd} $alarm={alarms.disk} />
    176 |                                 <IconDescription $alarm={alarms.disk}>
    177 |                                     {bytesToString(stats.diskUsageInBytes)}

ERROR in resources/scripts/components/dashboard/ServerRow.tsx:180:32
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    178 |                                 </IconDescription>
    179 |                             </div>
  > 180 |                             <p css={tw`text-xs text-neutral-600 text-center mt-1`}>of {diskLimit}</p>
        |                                ^^^
    181 |                         </div>
    182 |                         <ResourceLimits />
    183 |                     </React.Fragment>

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:2:24
TS2307: Cannot find module '@/components/elements/ContentBox' or its corresponding type declarations.
    1 | import React, { useEffect } from 'react';
  > 2 | import ContentBox from '@/components/elements/ContentBox';
      |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    4 | import FlashMessageRender from '@/components/FlashMessageRender';
    5 | import PageContentBlock from '@/components/elements/PageContentBlock';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:3:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
    1 | import React, { useEffect } from 'react';
    2 | import ContentBox from '@/components/elements/ContentBox';
  > 3 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
      |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 | import FlashMessageRender from '@/components/FlashMessageRender';
    5 | import PageContentBlock from '@/components/elements/PageContentBlock';
    6 | import tw from 'twin.macro';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:4:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    2 | import ContentBox from '@/components/elements/ContentBox';
    3 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
  > 4 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import PageContentBlock from '@/components/elements/PageContentBlock';
    6 | import tw from 'twin.macro';
    7 | import GreyRowBox from '@/components/elements/GreyRowBox';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:5:30
TS2307: Cannot find module '@/components/elements/PageContentBlock' or its corresponding type declarations.
    3 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    4 | import FlashMessageRender from '@/components/FlashMessageRender';
  > 5 | import PageContentBlock from '@/components/elements/PageContentBlock';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import tw from 'twin.macro';
    7 | import GreyRowBox from '@/components/elements/GreyRowBox';
    8 | import { useSSHKeys } from '@/api/account/ssh-keys';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:7:24
TS2307: Cannot find module '@/components/elements/GreyRowBox' or its corresponding type declarations.
     5 | import PageContentBlock from '@/components/elements/PageContentBlock';
     6 | import tw from 'twin.macro';
  >  7 | import GreyRowBox from '@/components/elements/GreyRowBox';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import { useSSHKeys } from '@/api/account/ssh-keys';
     9 | import { useFlashKey } from '@/plugins/useFlash';
    10 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:8:28
TS2307: Cannot find module '@/api/account/ssh-keys' or its corresponding type declarations.
     6 | import tw from 'twin.macro';
     7 | import GreyRowBox from '@/components/elements/GreyRowBox';
  >  8 | import { useSSHKeys } from '@/api/account/ssh-keys';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import { useFlashKey } from '@/plugins/useFlash';
    10 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    11 | import { faKey } from '@fortawesome/free-solid-svg-icons';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:9:29
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
     7 | import GreyRowBox from '@/components/elements/GreyRowBox';
     8 | import { useSSHKeys } from '@/api/account/ssh-keys';
  >  9 | import { useFlashKey } from '@/plugins/useFlash';
       |                             ^^^^^^^^^^^^^^^^^^^^
    10 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    11 | import { faKey } from '@fortawesome/free-solid-svg-icons';
    12 | import { format } from 'date-fns';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:13:30
TS2307: Cannot find module '@/components/dashboard/ssh/CreateSSHKeyForm' or its corresponding type declarations.
    11 | import { faKey } from '@fortawesome/free-solid-svg-icons';
    12 | import { format } from 'date-fns';
  > 13 | import CreateSSHKeyForm from '@/components/dashboard/ssh/CreateSSHKeyForm';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import DeleteSSHKeyButton from '@/components/dashboard/ssh/DeleteSSHKeyButton';
    15 |
    16 | import BeforeContent from '@/blueprint/components/Account/SSH/BeforeContent';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:14:32
TS2307: Cannot find module '@/components/dashboard/ssh/DeleteSSHKeyButton' or its corresponding type declarations.
    12 | import { format } from 'date-fns';
    13 | import CreateSSHKeyForm from '@/components/dashboard/ssh/CreateSSHKeyForm';
  > 14 | import DeleteSSHKeyButton from '@/components/dashboard/ssh/DeleteSSHKeyButton';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 |
    16 | import BeforeContent from '@/blueprint/components/Account/SSH/BeforeContent';
    17 | import AfterContent  from '@/blueprint/components/Account/SSH/AfterContent';

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:34:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    32 |             <FlashMessageRender byKey={'account'} />
    33 |             <BeforeContent />
  > 34 |             <div css={tw`md:flex flex-nowrap my-10`}>
       |                  ^^^
    35 |                 <ContentBox title={'Add SSH Key'} css={tw`flex-none w-full md:w-1/2`}>    36 |                     <CreateSSHKeyForm />
    37 |                 </ContentBox>

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:41:28
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    39 |                     <SpinnerOverlay visible={!data && isValidating} />
    40 |                     {!data || !data.length ? (
  > 41 |                         <p css={tw`text-center text-sm`}>
       |                            ^^^
    42 |                             {!data ? 'Loading...' : 'No SSH Keys exist for this account.'}
    43 |                         </p>
    44 |                     ) : (

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:45:35
TS7006: Parameter 'key' implicitly has an 'any' type.
    43 |                         </p>
    44 |                     ) : (
  > 45 |                         data.map((key, index) => (
       |                                   ^^^
    46 |                             <GreyRowBox
    47 |                                 key={key.fingerprint}
    48 |                                 css={[tw`bg-neutral-600 flex space-x-4 items-center`, index > 0 && tw`mt-2`]}

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:45:40
TS7006: Parameter 'index' implicitly has an 'any' type.
    43 |                         </p>
    44 |                     ) : (
  > 45 |                         data.map((key, index) => (
       |                                        ^^^^^
    46 |                             <GreyRowBox
    47 |                                 key={key.fingerprint}
    48 |                                 css={[tw`bg-neutral-600 flex space-x-4 items-center`, index > 0 && tw`mt-2`]}

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:50:63
TS2322: Type '{ icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    48 |                                 css={[tw`bg-neutral-600 flex space-x-4 items-center`, index > 0 && tw`mt-2`]}
    49 |                             >
  > 50 |                                 <FontAwesomeIcon icon={faKey} css={tw`text-neutral-300`} />
       |                                                               ^^^
    51 |                                 <div css={tw`flex-1`}>
    52 |                                     <p css={tw`text-sm break-words font-medium`}>{key.name}</p>
    53 |                                     <p css={tw`text-xs mt-1 font-mono truncate`}>SHA256:{key.fingerprint}</p>

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:51:38
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    49 |                             >
    50 |                                 <FontAwesomeIcon icon={faKey} css={tw`text-neutral-300`} />
  > 51 |                                 <div css={tw`flex-1`}>
       |                                      ^^^
    52 |                                     <p css={tw`text-sm break-words font-medium`}>{key.name}</p>
    53 |                                     <p css={tw`text-xs mt-1 font-mono truncate`}>SHA256:{key.fingerprint}</p>
    54 |                                     <p css={tw`text-xs mt-1 text-neutral-300 uppercase`}>

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:52:40
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    50 |                                 <FontAwesomeIcon icon={faKey} css={tw`text-neutral-300`} />
    51 |                                 <div css={tw`flex-1`}>
  > 52 |                                     <p css={tw`text-sm break-words font-medium`}>{key.name}</p>
       |                                        ^^^
    53 |                                     <p css={tw`text-xs mt-1 font-mono truncate`}>SHA256:{key.fingerprint}</p>
    54 |                                     <p css={tw`text-xs mt-1 text-neutral-300 uppercase`}>
    55 |                                         Added on:&nbsp;

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:53:40
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    51 |                                 <div css={tw`flex-1`}>
    52 |                                     <p css={tw`text-sm break-words font-medium`}>{key.name}</p>
  > 53 |                                     <p css={tw`text-xs mt-1 font-mono truncate`}>SHA256:{key.fingerprint}</p>
       |                                        ^^^
    54 |                                     <p css={tw`text-xs mt-1 text-neutral-300 uppercase`}>
    55 |                                         Added on:&nbsp;
    56 |                                         {format(key.createdAt, 'MMM do, yyyy HH:mm')}

ERROR in resources/scripts/components/dashboard/ssh/AccountSSHContainer.tsx:54:40
TS2322: Type '{ children: string[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    52 |                                     <p css={tw`text-sm break-words font-medium`}>{key.name}</p>
    53 |                                     <p css={tw`text-xs mt-1 font-mono truncate`}>SHA256:{key.fingerprint}</p>
  > 54 |                                     <p css={tw`text-xs mt-1 text-neutral-300 uppercase`}>
       |                                        ^^^
    55 |                                         Added on:&nbsp;
    56 |                                         {format(key.createdAt, 'MMM do, yyyy HH:mm')}
    57 |                                     </p>

ERROR in resources/scripts/components/NavigationBar.tsx:7:34
TS2307: Cannot find module '@/state' or its corresponding type declarations.
     5 | import { faCogs, faLayerGroup, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
     6 | import { useStoreState } from 'easy-peasy';
  >  7 | import { ApplicationStore } from '@/state';
       |                                  ^^^^^^^^^
     8 | import SearchContainer from '@/components/dashboard/search/SearchContainer';
     9 | import tw, { theme } from 'twin.macro';
    10 | import styled from 'styled-components/macro';

ERROR in resources/scripts/components/NavigationBar.tsx:8:29
TS2307: Cannot find module '@/components/dashboard/search/SearchContainer' or its corresponding type declarations.
     6 | import { useStoreState } from 'easy-peasy';
     7 | import { ApplicationStore } from '@/state';
  >  8 | import SearchContainer from '@/components/dashboard/search/SearchContainer';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import tw, { theme } from 'twin.macro';
    10 | import styled from 'styled-components/macro';
    11 | import http from '@/api/http';

ERROR in resources/scripts/components/NavigationBar.tsx:11:18
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
     9 | import tw, { theme } from 'twin.macro';
    10 | import styled from 'styled-components/macro';
  > 11 | import http from '@/api/http';
       |                  ^^^^^^^^^^^^
    12 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    13 | import Tooltip from '@/components/elements/tooltip/Tooltip';
    14 | import Avatar from '@/components/Avatar';

ERROR in resources/scripts/components/NavigationBar.tsx:12:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
    10 | import styled from 'styled-components/macro';
    11 | import http from '@/api/http';
  > 12 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import Tooltip from '@/components/elements/tooltip/Tooltip';
    14 | import Avatar from '@/components/Avatar';
    15 |

ERROR in resources/scripts/components/NavigationBar.tsx:13:21
TS2307: Cannot find module '@/components/elements/tooltip/Tooltip' or its corresponding type declarations.
    11 | import http from '@/api/http';
    12 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
  > 13 | import Tooltip from '@/components/elements/tooltip/Tooltip';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import Avatar from '@/components/Avatar';
    15 |
    16 | import BeforeNavigation from '@/blueprint/components/Navigation/NavigationBar/BeforeNavigation';

ERROR in resources/scripts/components/NavigationBar.tsx:14:20
TS2307: Cannot find module '@/components/Avatar' or its corresponding type declarations.
    12 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    13 | import Tooltip from '@/components/elements/tooltip/Tooltip';
  > 14 | import Avatar from '@/components/Avatar';
       |                    ^^^^^^^^^^^^^^^^^^^^^
    15 |
    16 | import BeforeNavigation from '@/blueprint/components/Navigation/NavigationBar/BeforeNavigation';
    17 | import AdditionalItems  from '@/blueprint/components/Navigation/NavigationBar/AdditionalItems';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:2:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    1 | import React, { useContext, useEffect, useState } from 'react';
  > 2 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import useFlash from '@/plugins/useFlash';
    4 | import Can from '@/components/elements/Can';
    5 | import CreateBackupButton from '@/components/server/backups/CreateBackupButton';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:3:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    1 | import React, { useContext, useEffect, useState } from 'react';
    2 | import Spinner from '@/components/elements/Spinner';
  > 3 | import useFlash from '@/plugins/useFlash';
      |                      ^^^^^^^^^^^^^^^^^^^^
    4 | import Can from '@/components/elements/Can';
    5 | import CreateBackupButton from '@/components/server/backups/CreateBackupButton';
    6 | import FlashMessageRender from '@/components/FlashMessageRender';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:4:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
    2 | import Spinner from '@/components/elements/Spinner';
    3 | import useFlash from '@/plugins/useFlash';
  > 4 | import Can from '@/components/elements/Can';
      |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import CreateBackupButton from '@/components/server/backups/CreateBackupButton';
    6 | import FlashMessageRender from '@/components/FlashMessageRender';
    7 | import BackupRow from '@/components/server/backups/BackupRow';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:5:32
TS2307: Cannot find module '@/components/server/backups/CreateBackupButton' or its corresponding type declarations.
    3 | import useFlash from '@/plugins/useFlash';
    4 | import Can from '@/components/elements/Can';
  > 5 | import CreateBackupButton from '@/components/server/backups/CreateBackupButton';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import FlashMessageRender from '@/components/FlashMessageRender';
    7 | import BackupRow from '@/components/server/backups/BackupRow';
    8 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:6:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    4 | import Can from '@/components/elements/Can';
    5 | import CreateBackupButton from '@/components/server/backups/CreateBackupButton';
  > 6 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import BackupRow from '@/components/server/backups/BackupRow';
    8 | import tw from 'twin.macro';
    9 | import getServerBackups, { Context as ServerBackupContext } from '@/api/swr/getServerBackups';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:7:23
TS2307: Cannot find module '@/components/server/backups/BackupRow' or its corresponding type declarations.
     5 | import CreateBackupButton from '@/components/server/backups/CreateBackupButton';
     6 | import FlashMessageRender from '@/components/FlashMessageRender';
  >  7 | import BackupRow from '@/components/server/backups/BackupRow';
       |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import tw from 'twin.macro';
     9 | import getServerBackups, { Context as ServerBackupContext } from '@/api/swr/getServerBackups';
    10 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:9:66
TS2307: Cannot find module '@/api/swr/getServerBackups' or its corresponding type declarations.     7 | import BackupRow from '@/components/server/backups/BackupRow';
     8 | import tw from 'twin.macro';
  >  9 | import getServerBackups, { Context as ServerBackupContext } from '@/api/swr/getServerBackups';
       |                                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import { ServerContext } from '@/state/server';
    11 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    12 | import Pagination from '@/components/elements/Pagination';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:10:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
     8 | import tw from 'twin.macro';
     9 | import getServerBackups, { Context as ServerBackupContext } from '@/api/swr/getServerBackups';
  > 10 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    11 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    12 | import Pagination from '@/components/elements/Pagination';
    13 |

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:11:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
     9 | import getServerBackups, { Context as ServerBackupContext } from '@/api/swr/getServerBackups';
    10 | import { ServerContext } from '@/state/server';
  > 11 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import Pagination from '@/components/elements/Pagination';
    13 |
    14 | import BeforeContent from '@/blueprint/components/Server/Backups/BeforeContent';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:12:24
TS2307: Cannot find module '@/components/elements/Pagination' or its corresponding type declarations.
    10 | import { ServerContext } from '@/state/server';
    11 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
  > 12 | import Pagination from '@/components/elements/Pagination';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 |
    14 | import BeforeContent from '@/blueprint/components/Server/Backups/BeforeContent';
    15 | import AfterContent  from '@/blueprint/components/Server/Backups/AfterContent';

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:22:54
TS7006: Parameter 'state' implicitly has an 'any' type.
    20 |     const { data: backups, error, isValidating } = getServerBackups();
    21 |
  > 22 |     const backupLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.backups);
       |                                                      ^^^^^
    23 |
    24 |     useEffect(() => {
    25 |         if (!error) {

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:43:21
TS7031: Binding element 'items' implicitly has an 'any' type.
    41 |             <BeforeContent />
    42 |             <Pagination data={backups} onPageSelect={setPage}>
  > 43 |                 {({ items }) =>
       |                     ^^^^^
    44 |                     !items.length ? (
    45 |                         // Don't show any error messages if the server has no backups and the user cannot
    46 |                         // create additional ones for the server.

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:48:32
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    46 |                         // create additional ones for the server.
    47 |                         !backupLimit ? null : (
  > 48 |                             <p css={tw`text-center text-sm text-neutral-300`}>
       |                                ^^^
    49 |                                 {page > 1
    50 |                                     ? "Looks like we've run out of backups to show you, try going back a page."
    51 |                                     : 'It looks like there are no backups currently stored for this server.'}

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:55:36
TS7006: Parameter 'backup' implicitly has an 'any' type.
    53 |                         )
    54 |                     ) : (
  > 55 |                         items.map((backup, index) => (
       |                                    ^^^^^^
    56 |                             <BackupRow key={backup.uuid} backup={backup} css={index > 0 ? tw`mt-2` : undefined} />
    57 |                         ))
    58 |                     )

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:55:44
TS7006: Parameter 'index' implicitly has an 'any' type.
    53 |                         )
    54 |                     ) : (
  > 55 |                         items.map((backup, index) => (
       |                                            ^^^^^
    56 |                             <BackupRow key={backup.uuid} backup={backup} css={index > 0 ? tw`mt-2` : undefined} />
    57 |                         ))
    58 |                     )

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:62:20
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    60 |             </Pagination>
    61 |             {backupLimit === 0 && (
  > 62 |                 <p css={tw`text-center text-sm text-neutral-300`}>
       |                    ^^^
    63 |                     Backups cannot be created for this server because the backup limit is set to 0.
    64 |                 </p>
    65 |             )}

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:67:22
TS2322: Type '{ children: (false | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    65 |             )}
    66 |             <Can action={'backup.create'}>
  > 67 |                 <div css={tw`mt-6 sm:flex items-center justify-end`}>
       |                      ^^^
    68 |                     {backupLimit > 0 && backups.backupCount > 0 && (
    69 |                         <p css={tw`text-sm text-neutral-300 mb-4 sm:mr-6 sm:mb-0`}>
    70 |                             {backups.backupCount} of {backupLimit} backups have been created for this server.

ERROR in resources/scripts/components/server/backups/BackupContainer.tsx:69:28
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    67 |                 <div css={tw`mt-6 sm:flex items-center justify-end`}>
    68 |                     {backupLimit > 0 && backups.backupCount > 0 && (
  > 69 |                         <p css={tw`text-sm text-neutral-300 mb-4 sm:mr-6 sm:mb-0`}>
       |                            ^^^
    70 |                             {backups.backupCount} of {backupLimit} backups have been created for this server.
    71 |                         </p>
    72 |                     )}

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:11:49
TS2307: Cannot find module '@/components/elements/DropdownMenu' or its corresponding type declarations.
     9 | } from '@fortawesome/free-solid-svg-icons';
    10 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  > 11 | import DropdownMenu, { DropdownButtonRow } from '@/components/elements/DropdownMenu';
       |                                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import getBackupDownloadUrl from '@/api/server/backups/getBackupDownloadUrl';
    13 | import useFlash from '@/plugins/useFlash';
    14 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:12:34
TS2307: Cannot find module '@/api/server/backups/getBackupDownloadUrl' or its corresponding type declarations.
    10 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    11 | import DropdownMenu, { DropdownButtonRow } from '@/components/elements/DropdownMenu';
  > 12 | import getBackupDownloadUrl from '@/api/server/backups/getBackupDownloadUrl';
       |                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import useFlash from '@/plugins/useFlash';
    14 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    15 | import deleteBackup from '@/api/server/backups/deleteBackup';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:13:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    11 | import DropdownMenu, { DropdownButtonRow } from '@/components/elements/DropdownMenu';
    12 | import getBackupDownloadUrl from '@/api/server/backups/getBackupDownloadUrl';
  > 13 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    14 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    15 | import deleteBackup from '@/api/server/backups/deleteBackup';
    16 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:14:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
    12 | import getBackupDownloadUrl from '@/api/server/backups/getBackupDownloadUrl';
    13 | import useFlash from '@/plugins/useFlash';
  > 14 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import deleteBackup from '@/api/server/backups/deleteBackup';
    16 | import Can from '@/components/elements/Can';
    17 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:15:26
TS2307: Cannot find module '@/api/server/backups/deleteBackup' or its corresponding type declarations.
    13 | import useFlash from '@/plugins/useFlash';
    14 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
  > 15 | import deleteBackup from '@/api/server/backups/deleteBackup';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 | import Can from '@/components/elements/Can';
    17 | import tw from 'twin.macro';
    18 | import getServerBackups from '@/api/swr/getServerBackups';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:16:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
    14 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    15 | import deleteBackup from '@/api/server/backups/deleteBackup';
  > 16 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    17 | import tw from 'twin.macro';
    18 | import getServerBackups from '@/api/swr/getServerBackups';
    19 | import { ServerBackup } from '@/api/server/types';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:18:30
TS2307: Cannot find module '@/api/swr/getServerBackups' or its corresponding type declarations.    16 | import Can from '@/components/elements/Can';
    17 | import tw from 'twin.macro';
  > 18 | import getServerBackups from '@/api/swr/getServerBackups';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    19 | import { ServerBackup } from '@/api/server/types';
    20 | import { ServerContext } from '@/state/server';
    21 | import Input from '@/components/elements/Input';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:19:30
TS2307: Cannot find module '@/api/server/types' or its corresponding type declarations.
    17 | import tw from 'twin.macro';
    18 | import getServerBackups from '@/api/swr/getServerBackups';
  > 19 | import { ServerBackup } from '@/api/server/types';
       |                              ^^^^^^^^^^^^^^^^^^^^
    20 | import { ServerContext } from '@/state/server';
    21 | import Input from '@/components/elements/Input';
    22 | import { restoreServerBackup } from '@/api/server/backups';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:20:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    18 | import getServerBackups from '@/api/swr/getServerBackups';
    19 | import { ServerBackup } from '@/api/server/types';
  > 20 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    21 | import Input from '@/components/elements/Input';
    22 | import { restoreServerBackup } from '@/api/server/backups';
    23 | import http, { httpErrorToHuman } from '@/api/http';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:21:19
TS2307: Cannot find module '@/components/elements/Input' or its corresponding type declarations.
    19 | import { ServerBackup } from '@/api/server/types';
    20 | import { ServerContext } from '@/state/server';
  > 21 | import Input from '@/components/elements/Input';
       |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    22 | import { restoreServerBackup } from '@/api/server/backups';
    23 | import http, { httpErrorToHuman } from '@/api/http';
    24 | import { Dialog } from '@/components/elements/dialog';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:22:37
TS2307: Cannot find module '@/api/server/backups' or its corresponding type declarations.
    20 | import { ServerContext } from '@/state/server';
    21 | import Input from '@/components/elements/Input';
  > 22 | import { restoreServerBackup } from '@/api/server/backups';
       |                                     ^^^^^^^^^^^^^^^^^^^^^^
    23 | import http, { httpErrorToHuman } from '@/api/http';
    24 | import { Dialog } from '@/components/elements/dialog';
    25 |

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:23:40
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
    21 | import Input from '@/components/elements/Input';
    22 | import { restoreServerBackup } from '@/api/server/backups';
  > 23 | import http, { httpErrorToHuman } from '@/api/http';
       |                                        ^^^^^^^^^^^^
    24 | import { Dialog } from '@/components/elements/dialog';
    25 |
    26 | import DropdownItems from '@/blueprint/components/Server/Backups/DropdownItems';

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:24:24
TS2307: Cannot find module '@/components/elements/dialog' or its corresponding type declarations.
    22 | import { restoreServerBackup } from '@/api/server/backups';
    23 | import http, { httpErrorToHuman } from '@/api/http';
  > 24 | import { Dialog } from '@/components/elements/dialog';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    25 |
    26 | import DropdownItems from '@/blueprint/components/Server/Backups/DropdownItems';
    27 |

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:33:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    31 |
    32 | export default ({ backup }: Props) => {
  > 33 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    34 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);
    35 |     const [modal, setModal] = useState('');
    36 |     const [loading, setLoading] = useState(false);

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:34:63
TS7006: Parameter 'actions' implicitly has an 'any' type.
    32 | export default ({ backup }: Props) => {
    33 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
  > 34 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);
       |                                                               ^^^^^^^
    35 |     const [modal, setModal] = useState('');
    36 |     const [loading, setLoading] = useState(false);
    37 |     const [truncate, setTruncate] = useState(false);

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:45:20
TS7006: Parameter 'url' implicitly has an 'any' type.
    43 |         clearFlashes('backups');
    44 |         getBackupDownloadUrl(uuid, backup.uuid)
  > 45 |             .then((url) => {
       |                    ^^^
    46 |                 // @ts-expect-error this is valid
    47 |                 window.location = url;
    48 |             })

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:46:17
TS2578: Unused '@ts-expect-error' directive.
    44 |         getBackupDownloadUrl(uuid, backup.uuid)
    45 |             .then((url) => {
  > 46 |                 // @ts-expect-error this is valid
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    47 |                 window.location = url;
    48 |             })
    49 |             .catch((error) => {

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:49:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    47 |                 window.location = url;
    48 |             })
  > 49 |             .catch((error) => {
       |                     ^^^^^
    50 |                 console.error(error);
    51 |                 clearAndAddHttpError({ key: 'backups', error });
    52 |             })

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:62:22
TS7006: Parameter 'data' implicitly has an 'any' type.
    60 |             .then(() =>
    61 |                 mutate(
  > 62 |                     (data) => ({
       |                      ^^^^
    63 |                         ...data,
    64 |                         items: data.items.filter((b) => b.uuid !== backup.uuid),
    65 |                         backupCount: data.backupCount - 1,

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:64:51
TS7006: Parameter 'b' implicitly has an 'any' type.
    62 |                     (data) => ({
    63 |                         ...data,
  > 64 |                         items: data.items.filter((b) => b.uuid !== backup.uuid),
       |                                                   ^
    65 |                         backupCount: data.backupCount - 1,
    66 |                     }),
    67 |                     false

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:70:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    68 |                 )
    69 |             )
  > 70 |             .catch((error) => {
       |                     ^^^^^
    71 |                 console.error(error);
    72 |                 clearAndAddHttpError({ key: 'backups', error });
    73 |                 setLoading(false);

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:83:37
TS7006: Parameter 's' implicitly has an 'any' type.
    81 |         restoreServerBackup(uuid, backup.uuid, truncate)
    82 |             .then(() =>
  > 83 |                 setServerFromState((s) => ({
       |                                     ^
    84 |                     ...s,
    85 |                     status: 'restoring_backup',
    86 |                 }))

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:88:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    86 |                 }))
    87 |             )
  > 88 |             .catch((error) => {
       |                     ^^^^^
    89 |                 console.error(error);
    90 |                 clearAndAddHttpError({ key: 'backups', error });
    91 |             })

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:104:22
TS7006: Parameter 'data' implicitly has an 'any' type.
    102 |             .then(() =>
    103 |                 mutate(
  > 104 |                     (data) => ({
        |                      ^^^^
    105 |                         ...data,
    106 |                         items: data.items.map((b) =>
    107 |                             b.uuid !== backup.uuid

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:106:48
TS7006: Parameter 'b' implicitly has an 'any' type.
    104 |                     (data) => ({
    105 |                         ...data,
  > 106 |                         items: data.items.map((b) =>
        |                                                ^
    107 |                             b.uuid !== backup.uuid
    108 |                                 ? b
    109 |                                 : {

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:118:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    116 |                 )
    117 |             )
  > 118 |             .catch((error) => alert(httpErrorToHuman(error)))
        |                     ^^^^^
    119 |             .then(() => setModal(''));
    120 |     };
    121 |

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:143:20
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    141 |                     manager, or create additional backups until completed.
    142 |                 </p>
  > 143 |                 <p css={tw`mt-4 -mb-2 bg-gray-700 p-3 rounded`}>
        |                    ^^^
    144 |                     <label htmlFor={'restore_truncate'} css={tw`text-base flex items-center cursor-pointer`}>
    145 |                         <Input
    146 |                             type={'checkbox'}

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:144:57
TS2322: Type '{ children: (string | Element)[]; htmlFor: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>'.
    142 |                 </p>
    143 |                 <p css={tw`mt-4 -mb-2 bg-gray-700 p-3 rounded`}>
  > 144 |                     <label htmlFor={'restore_truncate'} css={tw`text-base flex items-center cursor-pointer`}>
        |                                                         ^^^
    145 |                         <Input
    146 |                             type={'checkbox'}
    147 |                             css={tw`text-red-500! w-5! h-5! mr-2`}

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:169:36
TS7006: Parameter 'onClick' implicitly has an 'any' type.
    167 |             {backup.isSuccessful ? (
    168 |                 <DropdownMenu
  > 169 |                     renderToggle={(onClick) => (
        |                                    ^^^^^^^
    170 |                         <button
    171 |                             onClick={onClick}
    172 |                             css={tw`text-gray-200 transition-colors duration-150 hover:text-gray-100 p-2`}

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:172:29
TS2322: Type '{ children: Element; onClick: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
    170 |                         <button
    171 |                             onClick={onClick}
  > 172 |                             css={tw`text-gray-200 transition-colors duration-150 hover:text-gray-100 p-2`}
        |                             ^^^
    173 |                         >
    174 |                             <FontAwesomeIcon icon={faEllipsisH} />
    175 |                         </button>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:178:26
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    176 |                     )}
    177 |                 >
  > 178 |                     <div css={tw`text-sm`}>
        |                          ^^^
    179 |                         <Can action={'backup.download'}>
    180 |                             <DropdownButtonRow onClick={doDownload}>
    181 |                                 <FontAwesomeIcon fixedWidth icon={faCloudDownloadAlt} css={tw`text-xs`} />

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:181:87
TS2322: Type '{ fixedWidth: true; icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    179 |                         <Can action={'backup.download'}>
    180 |                             <DropdownButtonRow onClick={doDownload}>
  > 181 |                                 <FontAwesomeIcon fixedWidth icon={faCloudDownloadAlt} css={tw`text-xs`} />
        |                                                                                       ^^^
    182 |                                 <span css={tw`ml-2`}>Download</span>
    183 |                             </DropdownButtonRow>
    184 |                         </Can>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:182:39
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    180 |                             <DropdownButtonRow onClick={doDownload}>
    181 |                                 <FontAwesomeIcon fixedWidth icon={faCloudDownloadAlt} css={tw`text-xs`} />
  > 182 |                                 <span css={tw`ml-2`}>Download</span>
        |                                       ^^^
    183 |                             </DropdownButtonRow>
    184 |                         </Can>
    185 |                         <Can action={'backup.restore'}>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:187:78
TS2322: Type '{ fixedWidth: true; icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    185 |                         <Can action={'backup.restore'}>
    186 |                             <DropdownButtonRow onClick={() => setModal('restore')}>
  > 187 |                                 <FontAwesomeIcon fixedWidth icon={faBoxOpen} css={tw`text-xs`} />
        |                                                                              ^^^
    188 |                                 <span css={tw`ml-2`}>Restore</span>
    189 |                             </DropdownButtonRow>
    190 |                         </Can>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:188:39
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    186 |                             <DropdownButtonRow onClick={() => setModal('restore')}>
    187 |                                 <FontAwesomeIcon fixedWidth icon={faBoxOpen} css={tw`text-xs`} />
  > 188 |                                 <span css={tw`ml-2`}>Restore</span>
        |                                       ^^^
    189 |                             </DropdownButtonRow>
    190 |                         </Can>
    191 |                         <Can action={'backup.delete'}>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:197:41
TS2322: Type '{ fixedWidth: true; icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    195 |                                         fixedWidth
    196 |                                         icon={backup.isLocked ? faUnlock : faLock}
  > 197 |                                         css={tw`text-xs mr-2`}
        |                                         ^^^
    198 |                                     />
    199 |                                     {backup.isLocked ? 'Unlock' : 'Lock'}
    200 |                                 </DropdownButtonRow>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:203:87
TS2322: Type '{ fixedWidth: true; icon: IconDefinition; css: TwStyle; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    201 |                                 {!backup.isLocked && (
    202 |                                     <DropdownButtonRow danger onClick={() => setModal('delete')}>
  > 203 |                                         <FontAwesomeIcon fixedWidth icon={faTrashAlt} css={tw`text-xs`} />
        |                                                                                       ^^^
    204 |                                         <span css={tw`ml-2`}>Delete</span>
    205 |                                     </DropdownButtonRow>
    206 |                                 )}

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:204:47
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    202 |                                     <DropdownButtonRow danger onClick={() => setModal('delete')}>
    203 |                                         <FontAwesomeIcon fixedWidth icon={faTrashAlt} css={tw`text-xs`} />
  > 204 |                                         <span css={tw`ml-2`}>Delete</span>
        |                                               ^^^
    205 |                                     </DropdownButtonRow>
    206 |                                 )}
    207 |                             </>

ERROR in resources/scripts/components/server/backups/BackupContextMenu.tsx:215:21
TS2322: Type '{ children: Element; onClick: () => void; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'.
    213 |                 <button
    214 |                     onClick={() => setModal('delete')}
  > 215 |                     css={tw`text-gray-200 transition-colors duration-150 hover:text-gray-100 p-2`}
        |                     ^^^
    216 |                 >
    217 |                     <FontAwesomeIcon icon={faTrashAlt} />
    218 |                 </button>

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:2:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    1 | import React, { memo } from 'react';
  > 2 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    3 | import Can from '@/components/elements/Can';
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    5 | import isEqual from 'react-fast-compare';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:3:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
    1 | import React, { memo } from 'react';
    2 | import { ServerContext } from '@/state/server';
  > 3 | import Can from '@/components/elements/Can';
      |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    5 | import isEqual from 'react-fast-compare';
    6 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:4:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    2 | import { ServerContext } from '@/state/server';
    3 | import Can from '@/components/elements/Can';
  > 4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import isEqual from 'react-fast-compare';
    6 | import Spinner from '@/components/elements/Spinner';
    7 | import Features from '@feature/Features';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:6:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    5 | import isEqual from 'react-fast-compare';
  > 6 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import Features from '@feature/Features';
    8 | import Console from '@/components/server/console/Console';
    9 | import StatGraphs from '@/components/server/console/StatGraphs';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:7:22
TS2307: Cannot find module '@feature/Features' or its corresponding type declarations.
     5 | import isEqual from 'react-fast-compare';
     6 | import Spinner from '@/components/elements/Spinner';
  >  7 | import Features from '@feature/Features';
       |                      ^^^^^^^^^^^^^^^^^^^
     8 | import Console from '@/components/server/console/Console';
     9 | import StatGraphs from '@/components/server/console/StatGraphs';
    10 | import PowerButtons from '@/components/server/console/PowerButtons';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:8:21
TS2307: Cannot find module '@/components/server/console/Console' or its corresponding type declarations.
     6 | import Spinner from '@/components/elements/Spinner';
     7 | import Features from '@feature/Features';
  >  8 | import Console from '@/components/server/console/Console';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import StatGraphs from '@/components/server/console/StatGraphs';
    10 | import PowerButtons from '@/components/server/console/PowerButtons';
    11 | import ServerDetailsBlock from '@/components/server/console/ServerDetailsBlock';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:9:24
TS2307: Cannot find module '@/components/server/console/StatGraphs' or its corresponding type declarations.
     7 | import Features from '@feature/Features';
     8 | import Console from '@/components/server/console/Console';
  >  9 | import StatGraphs from '@/components/server/console/StatGraphs';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import PowerButtons from '@/components/server/console/PowerButtons';
    11 | import ServerDetailsBlock from '@/components/server/console/ServerDetailsBlock';
    12 | import { Alert } from '@/components/elements/alert';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:10:26
TS2307: Cannot find module '@/components/server/console/PowerButtons' or its corresponding type declarations.
     8 | import Console from '@/components/server/console/Console';
     9 | import StatGraphs from '@/components/server/console/StatGraphs';
  > 10 | import PowerButtons from '@/components/server/console/PowerButtons';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import ServerDetailsBlock from '@/components/server/console/ServerDetailsBlock';
    12 | import { Alert } from '@/components/elements/alert';
    13 |

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:11:32
TS2307: Cannot find module '@/components/server/console/ServerDetailsBlock' or its corresponding type declarations.
     9 | import StatGraphs from '@/components/server/console/StatGraphs';
    10 | import PowerButtons from '@/components/server/console/PowerButtons';
  > 11 | import ServerDetailsBlock from '@/components/server/console/ServerDetailsBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import { Alert } from '@/components/elements/alert';
    13 |
    14 | import BeforeContent from '@/blueprint/components/Server/Terminal/BeforeContent';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:12:23
TS2307: Cannot find module '@/components/elements/alert' or its corresponding type declarations.
    10 | import PowerButtons from '@/components/server/console/PowerButtons';
    11 | import ServerDetailsBlock from '@/components/server/console/ServerDetailsBlock';
  > 12 | import { Alert } from '@/components/elements/alert';
       |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 |
    14 | import BeforeContent from '@/blueprint/components/Server/Terminal/BeforeContent';
    15 | import AfterContent  from '@/blueprint/components/Server/Terminal/AfterContent';

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:20:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    18 |
    19 | const ServerConsoleContainer = () => {
  > 20 |     const name = ServerContext.useStoreState((state) => state.server.data!.name);
       |                                               ^^^^^
    21 |     const description = ServerContext.useStoreState((state) => state.server.data!.description);
    22 |     const isInstalling = ServerContext.useStoreState((state) => state.server.isInstalling);
    23 |     const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:21:54
TS7006: Parameter 'state' implicitly has an 'any' type.
    19 | const ServerConsoleContainer = () => {
    20 |     const name = ServerContext.useStoreState((state) => state.server.data!.name);
  > 21 |     const description = ServerContext.useStoreState((state) => state.server.data!.description);
       |                                                      ^^^^^
    22 |     const isInstalling = ServerContext.useStoreState((state) => state.server.isInstalling);
    23 |     const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);
    24 |     const eggFeatures = ServerContext.useStoreState((state) => state.server.data!.eggFeatures, isEqual);

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:22:55
TS7006: Parameter 'state' implicitly has an 'any' type.
    20 |     const name = ServerContext.useStoreState((state) => state.server.data!.name);
    21 |     const description = ServerContext.useStoreState((state) => state.server.data!.description);
  > 22 |     const isInstalling = ServerContext.useStoreState((state) => state.server.isInstalling);
       |                                                       ^^^^^
    23 |     const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);
    24 |     const eggFeatures = ServerContext.useStoreState((state) => state.server.data!.eggFeatures, isEqual);
    25 |     const isNodeUnderMaintenance = ServerContext.useStoreState((state) => state.server.data!.isNodeUnderMaintenance);

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:23:57
TS7006: Parameter 'state' implicitly has an 'any' type.
    21 |     const description = ServerContext.useStoreState((state) => state.server.data!.description);
    22 |     const isInstalling = ServerContext.useStoreState((state) => state.server.isInstalling);
  > 23 |     const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);
       |                                                         ^^^^^
    24 |     const eggFeatures = ServerContext.useStoreState((state) => state.server.data!.eggFeatures, isEqual);
    25 |     const isNodeUnderMaintenance = ServerContext.useStoreState((state) => state.server.data!.isNodeUnderMaintenance);
    26 |

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:24:54
TS7006: Parameter 'state' implicitly has an 'any' type.
    22 |     const isInstalling = ServerContext.useStoreState((state) => state.server.isInstalling);
    23 |     const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);
  > 24 |     const eggFeatures = ServerContext.useStoreState((state) => state.server.data!.eggFeatures, isEqual);
       |                                                      ^^^^^
    25 |     const isNodeUnderMaintenance = ServerContext.useStoreState((state) => state.server.data!.isNodeUnderMaintenance);
    26 |
    27 |     return (

ERROR in resources/scripts/components/server/console/ServerConsoleContainer.tsx:25:65
TS7006: Parameter 'state' implicitly has an 'any' type.
    23 |     const isTransferring = ServerContext.useStoreState((state) => state.server.data!.isTransferring);
    24 |     const eggFeatures = ServerContext.useStoreState((state) => state.server.data!.eggFeatures, isEqual);
  > 25 |     const isNodeUnderMaintenance = ServerContext.useStoreState((state) => state.server.data!.isNodeUnderMaintenance);
       |                                                                 ^^^^^
    26 |
    27 |     return (
    28 |         <ServerContentBlock title={'Console'}>

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:2:32
TS2307: Cannot find module '@/api/server/databases/getServerDatabases' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
  > 2 | import getServerDatabases from '@/api/server/databases/getServerDatabases';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import { ServerContext } from '@/state/server';
    4 | import { httpErrorToHuman } from '@/api/http';
    5 | import FlashMessageRender from '@/components/FlashMessageRender';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:3:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
    2 | import getServerDatabases from '@/api/server/databases/getServerDatabases';
  > 3 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    4 | import { httpErrorToHuman } from '@/api/http';
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
    6 | import DatabaseRow from '@/components/server/databases/DatabaseRow';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:4:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
    2 | import getServerDatabases from '@/api/server/databases/getServerDatabases';
    3 | import { ServerContext } from '@/state/server';
  > 4 | import { httpErrorToHuman } from '@/api/http';
      |                                  ^^^^^^^^^^^^
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
    6 | import DatabaseRow from '@/components/server/databases/DatabaseRow';
    7 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:5:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    3 | import { ServerContext } from '@/state/server';
    4 | import { httpErrorToHuman } from '@/api/http';
  > 5 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import DatabaseRow from '@/components/server/databases/DatabaseRow';
    7 | import Spinner from '@/components/elements/Spinner';
    8 | import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:6:25
TS2307: Cannot find module '@/components/server/databases/DatabaseRow' or its corresponding type declarations.
    4 | import { httpErrorToHuman } from '@/api/http';
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
  > 6 | import DatabaseRow from '@/components/server/databases/DatabaseRow';
      |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import Spinner from '@/components/elements/Spinner';
    8 | import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';
    9 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:7:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
     5 | import FlashMessageRender from '@/components/FlashMessageRender';
     6 | import DatabaseRow from '@/components/server/databases/DatabaseRow';
  >  7 | import Spinner from '@/components/elements/Spinner';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';     9 | import Can from '@/components/elements/Can';
    10 | import useFlash from '@/plugins/useFlash';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:8:34
TS2307: Cannot find module '@/components/server/databases/CreateDatabaseButton' or its corresponding type declarations.
     6 | import DatabaseRow from '@/components/server/databases/DatabaseRow';
     7 | import Spinner from '@/components/elements/Spinner';
  >  8 | import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';       |                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import Can from '@/components/elements/Can';
    10 | import useFlash from '@/plugins/useFlash';
    11 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:9:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     7 | import Spinner from '@/components/elements/Spinner';
     8 | import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';  >  9 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import useFlash from '@/plugins/useFlash';
    11 | import tw from 'twin.macro';
    12 | import Fade from '@/components/elements/Fade';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:10:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
     8 | import CreateDatabaseButton from '@/components/server/databases/CreateDatabaseButton';     9 | import Can from '@/components/elements/Can';
  > 10 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    11 | import tw from 'twin.macro';
    12 | import Fade from '@/components/elements/Fade';
    13 | import ServerContentBlock from '@/components/elements/ServerContentBlock';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:12:18
TS2307: Cannot find module '@/components/elements/Fade' or its corresponding type declarations.    10 | import useFlash from '@/plugins/useFlash';
    11 | import tw from 'twin.macro';
  > 12 | import Fade from '@/components/elements/Fade';
       |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    14 | import { useDeepMemoize } from '@/plugins/useDeepMemoize';
    15 |

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:13:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    11 | import tw from 'twin.macro';
    12 | import Fade from '@/components/elements/Fade';
  > 13 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import { useDeepMemoize } from '@/plugins/useDeepMemoize';
    15 |
    16 | import BeforeContent from '@/blueprint/components/Server/Databases/BeforeContent';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:14:32
TS2307: Cannot find module '@/plugins/useDeepMemoize' or its corresponding type declarations.
    12 | import Fade from '@/components/elements/Fade';
    13 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
  > 14 | import { useDeepMemoize } from '@/plugins/useDeepMemoize';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 |
    16 | import BeforeContent from '@/blueprint/components/Server/Databases/BeforeContent';
    17 | import AfterContent  from '@/blueprint/components/Server/Databases/AfterContent';

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:20:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    18 |
    19 | export default () => {
  > 20 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    21 |     const databaseLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.databases);
    22 |
    23 |     const { addError, clearFlashes } = useFlash();

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:21:56
TS7006: Parameter 'state' implicitly has an 'any' type.
    19 | export default () => {
    20 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
  > 21 |     const databaseLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.databases);
       |                                                        ^^^^^
    22 |
    23 |     const { addError, clearFlashes } = useFlash();
    24 |     const [loading, setLoading] = useState(true);

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:26:67
TS7006: Parameter 'state' implicitly has an 'any' type.
    24 |     const [loading, setLoading] = useState(true);
    25 |
  > 26 |     const databases = useDeepMemoize(ServerContext.useStoreState((state) => state.databases.data));
       |                                                                   ^^^^^
    27 |     const setDatabases = ServerContext.useStoreActions((state) => state.databases.setDatabases);
    28 |
    29 |     useEffect(() => {

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:27:57
TS7006: Parameter 'state' implicitly has an 'any' type.
    25 |
    26 |     const databases = useDeepMemoize(ServerContext.useStoreState((state) => state.databases.data));
  > 27 |     const setDatabases = ServerContext.useStoreActions((state) => state.databases.setDatabases);
       |                                                         ^^^^^
    28 |
    29 |     useEffect(() => {
    30 |         setLoading(!databases.length);

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:34:20
TS7006: Parameter 'databases' implicitly has an 'any' type.
    32 |
    33 |         getServerDatabases(uuid)
  > 34 |             .then((databases) => setDatabases(databases))
       |                    ^^^^^^^^^
    35 |             .catch((error) => {
    36 |                 console.error(error);
    37 |                 addError({ key: 'databases', message: httpErrorToHuman(error) });

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:35:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    33 |         getServerDatabases(uuid)
    34 |             .then((databases) => setDatabases(databases))
  > 35 |             .catch((error) => {
       |                     ^^^^^
    36 |                 console.error(error);
    37 |                 addError({ key: 'databases', message: httpErrorToHuman(error) });
    38 |             })

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:52:44
TS7006: Parameter 'database' implicitly has an 'any' type.
    50 |                         <BeforeContent />
    51 |                         {databases.length > 0 ? (
  > 52 |                             databases.map((database, index) => (
       |                                            ^^^^^^^^
    53 |                                 <DatabaseRow
    54 |                                     key={database.id}
    55 |                                     database={database}

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:52:54
TS7006: Parameter 'index' implicitly has an 'any' type.
    50 |                         <BeforeContent />
    51 |                         {databases.length > 0 ? (
  > 52 |                             databases.map((database, index) => (
       |                                                      ^^^^^
    53 |                                 <DatabaseRow
    54 |                                     key={database.id}
    55 |                                     database={database}

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:60:32
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    58 |                             ))
    59 |                         ) : (
  > 60 |                             <p css={tw`text-center text-sm text-neutral-300`}>
       |                                ^^^
    61 |                                 {databaseLimit > 0
    62 |                                     ? 'It looks like you have no databases.'
    63 |                                     : 'Databases cannot be created for this server.'}

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:67:34
TS2322: Type '{ children: (false | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    65 |                         )}
    66 |                         <Can action={'database.create'}>
  > 67 |                             <div css={tw`mt-6 flex items-center justify-end`}>
       |                                  ^^^
    68 |                                 {databaseLimit > 0 && databases.length > 0 && (
    69 |                                     <p css={tw`text-sm text-neutral-300 mb-4 sm:mr-6 sm:mb-0`}>
    70 |                                         {databases.length} of {databaseLimit} databases have been allocated to this

ERROR in resources/scripts/components/server/databases/DatabasesContainer.tsx:69:40
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    67 |                             <div css={tw`mt-6 flex items-center justify-end`}>
    68 |                                 {databaseLimit > 0 && databases.length > 0 && (
  > 69 |                                     <p css={tw`text-sm text-neutral-300 mb-4 sm:mr-6 sm:mb-0`}>
       |                                        ^^^
    70 |                                         {databases.length} of {databaseLimit} databases have been allocated to this
    71 |                                         server.
    72 |                                     </p>

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:15:29
TS2307: Cannot find module '@/components/server/files/RenameFileModal' or its corresponding type declarations.
    13 |     IconDefinition,
    14 | } from '@fortawesome/free-solid-svg-icons';
  > 15 | import RenameFileModal from '@/components/server/files/RenameFileModal';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 | import { ServerContext } from '@/state/server';
    17 | import { join } from 'path';
    18 | import deleteFiles from '@/api/server/files/deleteFiles';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:16:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    14 | } from '@fortawesome/free-solid-svg-icons';
    15 | import RenameFileModal from '@/components/server/files/RenameFileModal';
  > 16 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    17 | import { join } from 'path';
    18 | import deleteFiles from '@/api/server/files/deleteFiles';
    19 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:18:25
TS2307: Cannot find module '@/api/server/files/deleteFiles' or its corresponding type declarations.
    16 | import { ServerContext } from '@/state/server';
    17 | import { join } from 'path';
  > 18 | import deleteFiles from '@/api/server/files/deleteFiles';
       |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    19 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    20 | import copyFile from '@/api/server/files/copyFile';
    21 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:19:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
    17 | import { join } from 'path';
    18 | import deleteFiles from '@/api/server/files/deleteFiles';
  > 19 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    20 | import copyFile from '@/api/server/files/copyFile';
    21 | import Can from '@/components/elements/Can';
    22 | import getFileDownloadUrl from '@/api/server/files/getFileDownloadUrl';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:20:22
TS2307: Cannot find module '@/api/server/files/copyFile' or its corresponding type declarations.
    18 | import deleteFiles from '@/api/server/files/deleteFiles';
    19 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
  > 20 | import copyFile from '@/api/server/files/copyFile';
       |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    21 | import Can from '@/components/elements/Can';
    22 | import getFileDownloadUrl from '@/api/server/files/getFileDownloadUrl';
    23 | import useFlash from '@/plugins/useFlash';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:21:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
    19 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    20 | import copyFile from '@/api/server/files/copyFile';
  > 21 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    22 | import getFileDownloadUrl from '@/api/server/files/getFileDownloadUrl';
    23 | import useFlash from '@/plugins/useFlash';
    24 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:22:32
TS2307: Cannot find module '@/api/server/files/getFileDownloadUrl' or its corresponding type declarations.
    20 | import copyFile from '@/api/server/files/copyFile';
    21 | import Can from '@/components/elements/Can';
  > 22 | import getFileDownloadUrl from '@/api/server/files/getFileDownloadUrl';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    23 | import useFlash from '@/plugins/useFlash';
    24 | import tw from 'twin.macro';
    25 | import { FileObject } from '@/api/server/files/loadDirectory';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:23:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    21 | import Can from '@/components/elements/Can';
    22 | import getFileDownloadUrl from '@/api/server/files/getFileDownloadUrl';
  > 23 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    24 | import tw from 'twin.macro';
    25 | import { FileObject } from '@/api/server/files/loadDirectory';
    26 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:25:28
TS2307: Cannot find module '@/api/server/files/loadDirectory' or its corresponding type declarations.
    23 | import useFlash from '@/plugins/useFlash';
    24 | import tw from 'twin.macro';
  > 25 | import { FileObject } from '@/api/server/files/loadDirectory';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    26 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
    27 | import DropdownMenu from '@/components/elements/DropdownMenu';
    28 | import styled from 'styled-components/macro';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:26:31
TS2307: Cannot find module '@/plugins/useFileManagerSwr' or its corresponding type declarations.
    24 | import tw from 'twin.macro';
    25 | import { FileObject } from '@/api/server/files/loadDirectory';
  > 26 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
       |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    27 | import DropdownMenu from '@/components/elements/DropdownMenu';
    28 | import styled from 'styled-components/macro';
    29 | import useEventListener from '@/plugins/useEventListener';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:27:26
TS2307: Cannot find module '@/components/elements/DropdownMenu' or its corresponding type declarations.
    25 | import { FileObject } from '@/api/server/files/loadDirectory';
    26 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
  > 27 | import DropdownMenu from '@/components/elements/DropdownMenu';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    28 | import styled from 'styled-components/macro';
    29 | import useEventListener from '@/plugins/useEventListener';
    30 | import compressFiles from '@/api/server/files/compressFiles';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:29:30
TS2307: Cannot find module '@/plugins/useEventListener' or its corresponding type declarations.    27 | import DropdownMenu from '@/components/elements/DropdownMenu';
    28 | import styled from 'styled-components/macro';
  > 29 | import useEventListener from '@/plugins/useEventListener';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    30 | import compressFiles from '@/api/server/files/compressFiles';
    31 | import decompressFiles from '@/api/server/files/decompressFiles';
    32 | import isEqual from 'react-fast-compare';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:30:27
TS2307: Cannot find module '@/api/server/files/compressFiles' or its corresponding type declarations.
    28 | import styled from 'styled-components/macro';
    29 | import useEventListener from '@/plugins/useEventListener';
  > 30 | import compressFiles from '@/api/server/files/compressFiles';
       |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    31 | import decompressFiles from '@/api/server/files/decompressFiles';
    32 | import isEqual from 'react-fast-compare';
    33 | import ChmodFileModal from '@/components/server/files/ChmodFileModal';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:31:29
TS2307: Cannot find module '@/api/server/files/decompressFiles' or its corresponding type declarations.
    29 | import useEventListener from '@/plugins/useEventListener';
    30 | import compressFiles from '@/api/server/files/compressFiles';
  > 31 | import decompressFiles from '@/api/server/files/decompressFiles';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    32 | import isEqual from 'react-fast-compare';
    33 | import ChmodFileModal from '@/components/server/files/ChmodFileModal';
    34 | import { Dialog } from '@/components/elements/dialog';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:33:28
TS2307: Cannot find module '@/components/server/files/ChmodFileModal' or its corresponding type declarations.
    31 | import decompressFiles from '@/api/server/files/decompressFiles';
    32 | import isEqual from 'react-fast-compare';
  > 33 | import ChmodFileModal from '@/components/server/files/ChmodFileModal';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    34 | import { Dialog } from '@/components/elements/dialog';
    35 |
    36 | import DropdownItems from '@/blueprint/components/Server/Files/Browse/DropdownItems';

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:34:24
TS2307: Cannot find module '@/components/elements/dialog' or its corresponding type declarations.
    32 | import isEqual from 'react-fast-compare';
    33 | import ChmodFileModal from '@/components/server/files/ChmodFileModal';
  > 34 | import { Dialog } from '@/components/elements/dialog';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    35 |
    36 | import DropdownItems from '@/blueprint/components/Server/Files/Browse/DropdownItems';
    37 |

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:54:38
TS2322: Type '{ icon: IconDefinition; css: TwStyle; fixedWidth: true; }' is not assignable to type 'IntrinsicAttributes & FontAwesomeIconProps'.
  Property 'css' does not exist on type 'IntrinsicAttributes & FontAwesomeIconProps'.
    52 | const Row = ({ icon, title, ...props }: RowProps) => (
    53 |     <StyledRow {...props}>
  > 54 |         <FontAwesomeIcon icon={icon} css={tw`text-xs`} fixedWidth />
       |                                      ^^^
    55 |         <span css={tw`ml-2`}>{title}</span>
    56 |     </StyledRow>
    57 | );

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:55:15
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    53 |     <StyledRow {...props}>
    54 |         <FontAwesomeIcon icon={icon} css={tw`text-xs`} fixedWidth />
  > 55 |         <span css={tw`ml-2`}>{title}</span>
       |               ^^^
    56 |     </StyledRow>
    57 | );
    58 |

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:65:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    63 |     const [showConfirmation, setShowConfirmation] = useState(false);
    64 |
  > 65 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    66 |     const { mutate } = useFileManagerSwr();
    67 |     const { clearAndAddHttpError, clearFlashes } = useFlash();
    68 |     const directory = ServerContext.useStoreState((state) => state.files.directory);

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:68:52
TS7006: Parameter 'state' implicitly has an 'any' type.
    66 |     const { mutate } = useFileManagerSwr();
    67 |     const { clearAndAddHttpError, clearFlashes } = useFlash();
  > 68 |     const directory = ServerContext.useStoreState((state) => state.files.directory);
       |                                                    ^^^^^
    69 |
    70 |     useEventListener(`pterodactyl:files:ctx:${file.key}`, (e: CustomEvent) => {
    71 |         if (onClickRef.current) {

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:81:17
TS7006: Parameter 'files' implicitly has an 'any' type.
    79 |         // For UI speed, immediately remove the file from the listing before calling the deletion function.
    80 |         // If the delete actually fails, we'll fetch the current directory contents again automatically.
  > 81 |         mutate((files) => files.filter((f) => f.key !== file.key), false);
       |                 ^^^^^
    82 |
    83 |         deleteFiles(uuid, directory, [file.name]).catch((error) => {
    84 |             mutate();

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:81:41
TS7006: Parameter 'f' implicitly has an 'any' type.
    79 |         // For UI speed, immediately remove the file from the listing before calling the deletion function.
    80 |         // If the delete actually fails, we'll fetch the current directory contents again automatically.
  > 81 |         mutate((files) => files.filter((f) => f.key !== file.key), false);
       |                                         ^
    82 |
    83 |         deleteFiles(uuid, directory, [file.name]).catch((error) => {
    84 |             mutate();

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:83:58
TS7006: Parameter 'error' implicitly has an 'any' type.
    81 |         mutate((files) => files.filter((f) => f.key !== file.key), false);
    82 |
  > 83 |         deleteFiles(uuid, directory, [file.name]).catch((error) => {
       |                                                          ^^^^^
    84 |             mutate();
    85 |             clearAndAddHttpError({ key: 'files', error });
    86 |         });

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:95:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    93 |         copyFile(uuid, join(directory, file.name))
    94 |             .then(() => mutate())
  > 95 |             .catch((error) => clearAndAddHttpError({ key: 'files', error }))
       |                     ^^^^^
    96 |             .then(() => setShowSpinner(false));
    97 |     };
    98 |

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:104:20
TS7006: Parameter 'url' implicitly has an 'any' type.
    102 |
    103 |         getFileDownloadUrl(uuid, join(directory, file.name))
  > 104 |             .then((url) => {
        |                    ^^^
    105 |                 // @ts-expect-error this is valid
    106 |                 window.location = url;
    107 |             })

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:105:17
TS2578: Unused '@ts-expect-error' directive.
    103 |         getFileDownloadUrl(uuid, join(directory, file.name))
    104 |             .then((url) => {
  > 105 |                 // @ts-expect-error this is valid
        |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    106 |                 window.location = url;
    107 |             })
    108 |             .catch((error) => clearAndAddHttpError({ key: 'files', error }))

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:108:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    106 |                 window.location = url;
    107 |             })
  > 108 |             .catch((error) => clearAndAddHttpError({ key: 'files', error }))
        |                     ^^^^^
    109 |             .then(() => setShowSpinner(false));
    110 |     };
    111 |

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:118:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    116 |         compressFiles(uuid, directory, [file.name])
    117 |             .then(() => mutate())
  > 118 |             .catch((error) => clearAndAddHttpError({ key: 'files', error }))
        |                     ^^^^^
    119 |             .then(() => setShowSpinner(false));
    120 |     };
    121 |

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:128:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    126 |         decompressFiles(uuid, directory, file.name)
    127 |             .then(() => mutate())
  > 128 |             .catch((error) => clearAndAddHttpError({ key: 'files', error }))
        |                     ^^^^^
    129 |             .then(() => setShowSpinner(false));
    130 |     };
    131 |

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:146:32
TS7006: Parameter 'onClick' implicitly has an 'any' type.
    144 |             <DropdownMenu
    145 |                 ref={onClickRef}
  > 146 |                 renderToggle={(onClick) => (
        |                                ^^^^^^^
    147 |                     <div css={tw`px-4 py-2 hover:text-white`} onClick={onClick}>
    148 |                         <FontAwesomeIcon icon={faEllipsisH} />
    149 |                         {modal ? (

ERROR in resources/scripts/components/server/files/FileDropdownMenu.tsx:147:26
TS2322: Type '{ children: (Element | null)[]; css: TwStyle; onClick: any; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    145 |                 ref={onClickRef}
    146 |                 renderToggle={(onClick) => (
  > 147 |                     <div css={tw`px-4 py-2 hover:text-white`} onClick={onClick}>
        |                          ^^^
    148 |                         <FontAwesomeIcon icon={faEllipsisH} />
    149 |                         {modal ? (
    150 |                             modal === 'chmod' ? (

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:2:29
TS2307: Cannot find module '@/api/server/files/getFileContents' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
  > 2 | import getFileContents from '@/api/server/files/getFileContents';
      |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import { httpErrorToHuman } from '@/api/http';
    4 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    5 | import saveFileContents from '@/api/server/files/saveFileContents';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:3:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
    2 | import getFileContents from '@/api/server/files/getFileContents';
  > 3 | import { httpErrorToHuman } from '@/api/http';
      |                                  ^^^^^^^^^^^^
    4 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    5 | import saveFileContents from '@/api/server/files/saveFileContents';
    6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:4:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
    2 | import getFileContents from '@/api/server/files/getFileContents';
    3 | import { httpErrorToHuman } from '@/api/http';
  > 4 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
      |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import saveFileContents from '@/api/server/files/saveFileContents';
    6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';
    7 | import { useHistory, useLocation, useParams } from 'react-router';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:5:30
TS2307: Cannot find module '@/api/server/files/saveFileContents' or its corresponding type declarations.
    3 | import { httpErrorToHuman } from '@/api/http';
    4 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
  > 5 | import saveFileContents from '@/api/server/files/saveFileContents';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';
    7 | import { useHistory, useLocation, useParams } from 'react-router';
    8 | import FileNameModal from '@/components/server/files/FileNameModal';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:6:36
TS2307: Cannot find module '@/components/server/files/FileManagerBreadcrumbs' or its corresponding type declarations.
    4 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    5 | import saveFileContents from '@/api/server/files/saveFileContents';
  > 6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';
      |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import { useHistory, useLocation, useParams } from 'react-router';
    8 | import FileNameModal from '@/components/server/files/FileNameModal';
    9 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:8:27
TS2307: Cannot find module '@/components/server/files/FileNameModal' or its corresponding type declarations.
     6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';     7 | import { useHistory, useLocation, useParams } from 'react-router';
  >  8 | import FileNameModal from '@/components/server/files/FileNameModal';
       |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import Can from '@/components/elements/Can';
    10 | import FlashMessageRender from '@/components/FlashMessageRender';
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:9:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     7 | import { useHistory, useLocation, useParams } from 'react-router';
     8 | import FileNameModal from '@/components/server/files/FileNameModal';
  >  9 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import FlashMessageRender from '@/components/FlashMessageRender';
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';
    12 | import { ServerError } from '@/components/elements/ScreenBlock';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:10:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
     8 | import FileNameModal from '@/components/server/files/FileNameModal';
     9 | import Can from '@/components/elements/Can';
  > 10 | import FlashMessageRender from '@/components/FlashMessageRender';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';
    12 | import { ServerError } from '@/components/elements/ScreenBlock';
    13 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:11:30
TS2307: Cannot find module '@/components/elements/PageContentBlock' or its corresponding type declarations.
     9 | import Can from '@/components/elements/Can';
    10 | import FlashMessageRender from '@/components/FlashMessageRender';
  > 11 | import PageContentBlock from '@/components/elements/PageContentBlock';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import { ServerError } from '@/components/elements/ScreenBlock';
    13 | import tw from 'twin.macro';
    14 | import Button from '@/components/elements/Button';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:12:29
TS2307: Cannot find module '@/components/elements/ScreenBlock' or its corresponding type declarations.
    10 | import FlashMessageRender from '@/components/FlashMessageRender';
    11 | import PageContentBlock from '@/components/elements/PageContentBlock';
  > 12 | import { ServerError } from '@/components/elements/ScreenBlock';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import tw from 'twin.macro';
    14 | import Button from '@/components/elements/Button';
    15 | import Select from '@/components/elements/Select';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:14:20
TS2307: Cannot find module '@/components/elements/Button' or its corresponding type declarations.
    12 | import { ServerError } from '@/components/elements/ScreenBlock';
    13 | import tw from 'twin.macro';
  > 14 | import Button from '@/components/elements/Button';
       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import Select from '@/components/elements/Select';
    16 | import modes from '@/modes';
    17 | import useFlash from '@/plugins/useFlash';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:15:20
TS2307: Cannot find module '@/components/elements/Select' or its corresponding type declarations.
    13 | import tw from 'twin.macro';
    14 | import Button from '@/components/elements/Button';
  > 15 | import Select from '@/components/elements/Select';
       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 | import modes from '@/modes';
    17 | import useFlash from '@/plugins/useFlash';
    18 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:16:19
TS2307: Cannot find module '@/modes' or its corresponding type declarations.
    14 | import Button from '@/components/elements/Button';
    15 | import Select from '@/components/elements/Select';
  > 16 | import modes from '@/modes';
       |                   ^^^^^^^^^
    17 | import useFlash from '@/plugins/useFlash';
    18 | import { ServerContext } from '@/state/server';
    19 | import ErrorBoundary from '@/components/elements/ErrorBoundary';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:17:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    15 | import Select from '@/components/elements/Select';
    16 | import modes from '@/modes';
  > 17 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    18 | import { ServerContext } from '@/state/server';
    19 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
    20 | import { encodePathSegments, hashToPath } from '@/helpers';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:18:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    16 | import modes from '@/modes';
    17 | import useFlash from '@/plugins/useFlash';
  > 18 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    19 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
    20 | import { encodePathSegments, hashToPath } from '@/helpers';
    21 | import { dirname } from 'path';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:19:27
TS2307: Cannot find module '@/components/elements/ErrorBoundary' or its corresponding type declarations.
    17 | import useFlash from '@/plugins/useFlash';
    18 | import { ServerContext } from '@/state/server';
  > 19 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
       |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    20 | import { encodePathSegments, hashToPath } from '@/helpers';
    21 | import { dirname } from 'path';
    22 | import CodemirrorEditor from '@/components/elements/CodemirrorEditor';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:20:48
TS2307: Cannot find module '@/helpers' or its corresponding type declarations.
    18 | import { ServerContext } from '@/state/server';
    19 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
  > 20 | import { encodePathSegments, hashToPath } from '@/helpers';
       |                                                ^^^^^^^^^^^
    21 | import { dirname } from 'path';
    22 | import CodemirrorEditor from '@/components/elements/CodemirrorEditor';
    23 |

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:22:30
TS2307: Cannot find module '@/components/elements/CodemirrorEditor' or its corresponding type declarations.
    20 | import { encodePathSegments, hashToPath } from '@/helpers';
    21 | import { dirname } from 'path';
  > 22 | import CodemirrorEditor from '@/components/elements/CodemirrorEditor';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    23 |
    24 | import BeforeEdit from '@/blueprint/components/Server/Files/Edit/BeforeEdit';
    25 | import AfterEdit  from '@/blueprint/components/Server/Files/Edit/AfterEdit';

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:38:45
TS7006: Parameter 'state' implicitly has an 'any' type.
    36 |     const { hash } = useLocation();
    37 |
  > 38 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
       |                                             ^^^^^
    39 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    40 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
    41 |     const { addError, clearFlashes } = useFlash();

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:39:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    37 |
    38 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
  > 39 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    40 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
    41 |     const { addError, clearFlashes } = useFlash();
    42 |

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:40:57
TS7006: Parameter 'actions' implicitly has an 'any' type.
    38 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
    39 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
  > 40 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
       |                                                         ^^^^^^^
    41 |     const { addError, clearFlashes } = useFlash();
    42 |
    43 |     let fetchFileContent: null | (() => Promise<string>) = null;

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:54:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    52 |         getFileContents(uuid, path)
    53 |             .then(setContent)
  > 54 |             .catch((error) => {
       |                     ^^^^^
    55 |                 console.error(error);
    56 |                 setError(httpErrorToHuman(error));
    57 |             })

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:93:22
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    91 |             <FlashMessageRender byKey={'files:view'} css={tw`mb-4`} />
    92 |             <ErrorBoundary>
  > 93 |                 <div css={tw`mb-4`}>
       |                      ^^^
    94 |                     <FileManagerBreadcrumbs withinFileEditor isNewFile={action !== 'edit'} />
    95 |                 </div>
    96 |             </ErrorBoundary>

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:99:22
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
     97 |             <BeforeEdit />
     98 |             {hash.replace(/^#/, '').endsWith('.pteroignore') && (
  >  99 |                 <div css={tw`mb-4 p-4 border-l-4 bg-neutral-900 rounded border-cyan-400`}>
        |                      ^^^
    100 |                     <p css={tw`text-neutral-300 text-sm`}>
    101 |                         You&apos;re editing a <code css={tw`font-mono bg-black rounded py-px px-1`}>.pteroignore</code>{' '}
    102 |                         file. Any files or directories listed in here will be excluded from backups. Wildcards are

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:100:24
TS2322: Type '{ children: (string | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
     98 |             {hash.replace(/^#/, '').endsWith('.pteroignore') && (
     99 |                 <div css={tw`mb-4 p-4 border-l-4 bg-neutral-900 rounded border-cyan-400`}>
  > 100 |                     <p css={tw`text-neutral-300 text-sm`}>
        |                        ^^^
    101 |                         You&apos;re editing a <code css={tw`font-mono bg-black rounded py-px px-1`}>.pteroignore</code>{' '}
    102 |                         file. Any files or directories listed in here will be excluded from backups. Wildcards are
    103 |                         supported by using an asterisk (<code css={tw`font-mono bg-black rounded py-px px-1`}>*</code>).

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:101:53
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
     99 |                 <div css={tw`mb-4 p-4 border-l-4 bg-neutral-900 rounded border-cyan-400`}>
    100 |                     <p css={tw`text-neutral-300 text-sm`}>
  > 101 |                         You&apos;re editing a <code css={tw`font-mono bg-black rounded py-px px-1`}>.pteroignore</code>{' '}
        |                                                     ^^^
    102 |                         file. Any files or directories listed in here will be excluded from backups. Wildcards are
    103 |                         supported by using an asterisk (<code css={tw`font-mono bg-black rounded py-px px-1`}>*</code>).
    104 |                         You can negate a prior rule by prepending an exclamation point (

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:103:63
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    101 |                         You&apos;re editing a <code css={tw`font-mono bg-black rounded py-px px-1`}>.pteroignore</code>{' '}
    102 |                         file. Any files or directories listed in here will be excluded from backups. Wildcards are
  > 103 |                         supported by using an asterisk (<code css={tw`font-mono bg-black rounded py-px px-1`}>*</code>).
        |                                                               ^^^
    104 |                         You can negate a prior rule by prepending an exclamation point (
    105 |                         <code css={tw`font-mono bg-black rounded py-px px-1`}>!</code>).
    106 |                     </p>

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:105:31
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    103 |                         supported by using an asterisk (<code css={tw`font-mono bg-black rounded py-px px-1`}>*</code>).
    104 |                         You can negate a prior rule by prepending an exclamation point (
  > 105 |                         <code css={tw`font-mono bg-black rounded py-px px-1`}>!</code>).
        |                               ^^^
    106 |                     </p>
    107 |                 </div>
    108 |             )}

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:112:31
TS7006: Parameter 'name' implicitly has an 'any' type.
    110 |                 visible={modalVisible}
    111 |                 onDismissed={() => setModalVisible(false)}
  > 112 |                 onFileNamed={(name) => {
        |                               ^^^^
    113 |                     setModalVisible(false);
    114 |                     save(name);
    115 |                 }}

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:117:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    115 |                 }}
    116 |             />
  > 117 |             <div css={tw`relative`}>
        |                  ^^^
    118 |                 <SpinnerOverlay visible={loading} />
    119 |                 <CodemirrorEditor
    120 |                     mode={mode}

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:124:36
TS7006: Parameter 'value' implicitly has an 'any' type.
    122 |                     onModeChanged={setMode}
    123 |                     initialContent={content}
  > 124 |                     fetchContent={(value) => {
        |                                    ^^^^^
    125 |                         fetchFileContent = value;
    126 |                     }}
    127 |                     onContentSaved={() => {

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:136:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    134 |                 />
    135 |             </div>
  > 136 |             <div css={tw`flex justify-end mt-4`}>
        |                  ^^^
    137 |                 <div css={tw`flex-1 sm:flex-none rounded bg-neutral-900 mr-4`}>
    138 |                     <Select value={mode} onChange={(e) => setMode(e.currentTarget.value)}>
    139 |                         {modes.map((mode) => (

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:137:22
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    135 |             </div>
    136 |             <div css={tw`flex justify-end mt-4`}>
  > 137 |                 <div css={tw`flex-1 sm:flex-none rounded bg-neutral-900 mr-4`}>
        |                      ^^^
    138 |                     <Select value={mode} onChange={(e) => setMode(e.currentTarget.value)}>
    139 |                         {modes.map((mode) => (
    140 |                             <option key={`${mode.name}_${mode.mime}`} value={mode.mime}>

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:138:53
TS7006: Parameter 'e' implicitly has an 'any' type.
    136 |             <div css={tw`flex justify-end mt-4`}>
    137 |                 <div css={tw`flex-1 sm:flex-none rounded bg-neutral-900 mr-4`}>
  > 138 |                     <Select value={mode} onChange={(e) => setMode(e.currentTarget.value)}>
        |                                                     ^
    139 |                         {modes.map((mode) => (
    140 |                             <option key={`${mode.name}_${mode.mime}`} value={mode.mime}>
    141 |                                 {mode.name}

ERROR in resources/scripts/components/server/files/FileEditContainer.tsx:139:37
TS7006: Parameter 'mode' implicitly has an 'any' type.
    137 |                 <div css={tw`flex-1 sm:flex-none rounded bg-neutral-900 mr-4`}>
    138 |                     <Select value={mode} onChange={(e) => setMode(e.currentTarget.value)}>
  > 139 |                         {modes.map((mode) => (
        |                                     ^^^^
    140 |                             <option key={`${mode.name}_${mode.mime}`} value={mode.mime}>
    141 |                                 {mode.name}
    142 |                             </option>

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:2:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
    1 | import React, { useEffect } from 'react';
  > 2 | import { httpErrorToHuman } from '@/api/http';
      |                                  ^^^^^^^^^^^^
    3 | import { CSSTransition } from 'react-transition-group';
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import FileObjectRow from '@/components/server/files/FileObjectRow';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:4:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    2 | import { httpErrorToHuman } from '@/api/http';
    3 | import { CSSTransition } from 'react-transition-group';
  > 4 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import FileObjectRow from '@/components/server/files/FileObjectRow';
    6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';
    7 | import { FileObject } from '@/api/server/files/loadDirectory';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:5:27
TS2307: Cannot find module '@/components/server/files/FileObjectRow' or its corresponding type declarations.
    3 | import { CSSTransition } from 'react-transition-group';
    4 | import Spinner from '@/components/elements/Spinner';
  > 5 | import FileObjectRow from '@/components/server/files/FileObjectRow';
      |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';
    7 | import { FileObject } from '@/api/server/files/loadDirectory';
    8 | import NewDirectoryButton from '@/components/server/files/NewDirectoryButton';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:6:36
TS2307: Cannot find module '@/components/server/files/FileManagerBreadcrumbs' or its corresponding type declarations.
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import FileObjectRow from '@/components/server/files/FileObjectRow';
  > 6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';
      |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import { FileObject } from '@/api/server/files/loadDirectory';
    8 | import NewDirectoryButton from '@/components/server/files/NewDirectoryButton';
    9 | import { NavLink, useLocation } from 'react-router-dom';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:7:28
TS2307: Cannot find module '@/api/server/files/loadDirectory' or its corresponding type declarations.
     5 | import FileObjectRow from '@/components/server/files/FileObjectRow';
     6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';  >  7 | import { FileObject } from '@/api/server/files/loadDirectory';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import NewDirectoryButton from '@/components/server/files/NewDirectoryButton';
     9 | import { NavLink, useLocation } from 'react-router-dom';
    10 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:8:32
TS2307: Cannot find module '@/components/server/files/NewDirectoryButton' or its corresponding type declarations.
     6 | import FileManagerBreadcrumbs from '@/components/server/files/FileManagerBreadcrumbs';     7 | import { FileObject } from '@/api/server/files/loadDirectory';
  >  8 | import NewDirectoryButton from '@/components/server/files/NewDirectoryButton';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import { NavLink, useLocation } from 'react-router-dom';
    10 | import Can from '@/components/elements/Can';
    11 | import { ServerError } from '@/components/elements/ScreenBlock';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:10:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     8 | import NewDirectoryButton from '@/components/server/files/NewDirectoryButton';
     9 | import { NavLink, useLocation } from 'react-router-dom';
  > 10 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import { ServerError } from '@/components/elements/ScreenBlock';
    12 | import tw from 'twin.macro';
    13 | import { Button } from '@/components/elements/button/index';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:11:29
TS2307: Cannot find module '@/components/elements/ScreenBlock' or its corresponding type declarations.
     9 | import { NavLink, useLocation } from 'react-router-dom';
    10 | import Can from '@/components/elements/Can';
  > 11 | import { ServerError } from '@/components/elements/ScreenBlock';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import tw from 'twin.macro';
    13 | import { Button } from '@/components/elements/button/index';
    14 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:13:24
TS2307: Cannot find module '@/components/elements/button/index' or its corresponding type declarations.
    11 | import { ServerError } from '@/components/elements/ScreenBlock';
    12 | import tw from 'twin.macro';
  > 13 | import { Button } from '@/components/elements/button/index';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import { ServerContext } from '@/state/server';
    15 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
    16 | import FileManagerStatus from '@/components/server/files/FileManagerStatus';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:14:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    12 | import tw from 'twin.macro';
    13 | import { Button } from '@/components/elements/button/index';
  > 14 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    15 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
    16 | import FileManagerStatus from '@/components/server/files/FileManagerStatus';
    17 | import MassActionsBar from '@/components/server/files/MassActionsBar';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:15:31
TS2307: Cannot find module '@/plugins/useFileManagerSwr' or its corresponding type declarations.
    13 | import { Button } from '@/components/elements/button/index';
    14 | import { ServerContext } from '@/state/server';
  > 15 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
       |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 | import FileManagerStatus from '@/components/server/files/FileManagerStatus';
    17 | import MassActionsBar from '@/components/server/files/MassActionsBar';
    18 | import UploadButton from '@/components/server/files/UploadButton';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:16:31
TS2307: Cannot find module '@/components/server/files/FileManagerStatus' or its corresponding type declarations.
    14 | import { ServerContext } from '@/state/server';
    15 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
  > 16 | import FileManagerStatus from '@/components/server/files/FileManagerStatus';
       |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    17 | import MassActionsBar from '@/components/server/files/MassActionsBar';
    18 | import UploadButton from '@/components/server/files/UploadButton';
    19 | import ServerContentBlock from '@/components/elements/ServerContentBlock';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:17:28
TS2307: Cannot find module '@/components/server/files/MassActionsBar' or its corresponding type declarations.
    15 | import useFileManagerSwr from '@/plugins/useFileManagerSwr';
    16 | import FileManagerStatus from '@/components/server/files/FileManagerStatus';
  > 17 | import MassActionsBar from '@/components/server/files/MassActionsBar';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    18 | import UploadButton from '@/components/server/files/UploadButton';
    19 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    20 | import { useStoreActions } from '@/state/hooks';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:18:26
TS2307: Cannot find module '@/components/server/files/UploadButton' or its corresponding type declarations.
    16 | import FileManagerStatus from '@/components/server/files/FileManagerStatus';
    17 | import MassActionsBar from '@/components/server/files/MassActionsBar';
  > 18 | import UploadButton from '@/components/server/files/UploadButton';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    19 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    20 | import { useStoreActions } from '@/state/hooks';
    21 | import ErrorBoundary from '@/components/elements/ErrorBoundary';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:19:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    17 | import MassActionsBar from '@/components/server/files/MassActionsBar';
    18 | import UploadButton from '@/components/server/files/UploadButton';
  > 19 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    20 | import { useStoreActions } from '@/state/hooks';
    21 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
    22 | import { FileActionCheckbox } from '@/components/server/files/SelectFileCheckbox';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:20:33
TS2307: Cannot find module '@/state/hooks' or its corresponding type declarations.
    18 | import UploadButton from '@/components/server/files/UploadButton';
    19 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
  > 20 | import { useStoreActions } from '@/state/hooks';
       |                                 ^^^^^^^^^^^^^^^
    21 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
    22 | import { FileActionCheckbox } from '@/components/server/files/SelectFileCheckbox';
    23 | import { hashToPath } from '@/helpers';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:21:27
TS2307: Cannot find module '@/components/elements/ErrorBoundary' or its corresponding type declarations.
    19 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    20 | import { useStoreActions } from '@/state/hooks';
  > 21 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
       |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    22 | import { FileActionCheckbox } from '@/components/server/files/SelectFileCheckbox';
    23 | import { hashToPath } from '@/helpers';
    24 | import style from './style.module.css';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:22:36
TS2307: Cannot find module '@/components/server/files/SelectFileCheckbox' or its corresponding type declarations.
    20 | import { useStoreActions } from '@/state/hooks';
    21 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
  > 22 | import { FileActionCheckbox } from '@/components/server/files/SelectFileCheckbox';
       |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    23 | import { hashToPath } from '@/helpers';
    24 | import style from './style.module.css';
    25 |

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:23:28
TS2307: Cannot find module '@/helpers' or its corresponding type declarations.
    21 | import ErrorBoundary from '@/components/elements/ErrorBoundary';
    22 | import { FileActionCheckbox } from '@/components/server/files/SelectFileCheckbox';
  > 23 | import { hashToPath } from '@/helpers';
       |                            ^^^^^^^^^^^
    24 | import style from './style.module.css';
    25 |
    26 | import BeforeContent from '@/blueprint/components/Server/Files/Browse/BeforeContent';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:24:19
TS2307: Cannot find module './style.module.css' or its corresponding type declarations.
    22 | import { FileActionCheckbox } from '@/components/server/files/SelectFileCheckbox';
    23 | import { hashToPath } from '@/helpers';
  > 24 | import style from './style.module.css';
       |                   ^^^^^^^^^^^^^^^^^^^^
    25 |
    26 | import BeforeContent from '@/blueprint/components/Server/Files/Browse/BeforeContent';
    27 | import FileButtons   from '@/blueprint/components/Server/Files/Browse/FileButtons';

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:38:45
TS7006: Parameter 'state' implicitly has an 'any' type.
    36 |
    37 | export default () => {
  > 38 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
       |                                             ^^^^^
    39 |     const { hash } = useLocation();
    40 |     const { data: files, error, mutate } = useFileManagerSwr();
    41 |     const directory = ServerContext.useStoreState((state) => state.files.directory);

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:41:52
TS7006: Parameter 'state' implicitly has an 'any' type.
    39 |     const { hash } = useLocation();
    40 |     const { data: files, error, mutate } = useFileManagerSwr();
  > 41 |     const directory = ServerContext.useStoreState((state) => state.files.directory);
       |                                                    ^^^^^
    42 |     const clearFlashes = useStoreActions((actions) => actions.flashes.clearFlashes);
    43 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
    44 |

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:42:43
TS7006: Parameter 'actions' implicitly has an 'any' type.
    40 |     const { data: files, error, mutate } = useFileManagerSwr();
    41 |     const directory = ServerContext.useStoreState((state) => state.files.directory);
  > 42 |     const clearFlashes = useStoreActions((actions) => actions.flashes.clearFlashes);
       |                                           ^^^^^^^
    43 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
    44 |
    45 |     const setSelectedFiles = ServerContext.useStoreActions((actions) => actions.files.setSelectedFiles);

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:43:57
TS7006: Parameter 'actions' implicitly has an 'any' type.
    41 |     const directory = ServerContext.useStoreState((state) => state.files.directory);
    42 |     const clearFlashes = useStoreActions((actions) => actions.flashes.clearFlashes);
  > 43 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
       |                                                         ^^^^^^^
    44 |
    45 |     const setSelectedFiles = ServerContext.useStoreActions((actions) => actions.files.setSelectedFiles);
    46 |     const selectedFilesLength = ServerContext.useStoreState((state) => state.files.selectedFiles.length);

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:45:61
TS7006: Parameter 'actions' implicitly has an 'any' type.
    43 |     const setDirectory = ServerContext.useStoreActions((actions) => actions.files.setDirectory);
    44 |
  > 45 |     const setSelectedFiles = ServerContext.useStoreActions((actions) => actions.files.setSelectedFiles);
       |                                                             ^^^^^^^
    46 |     const selectedFilesLength = ServerContext.useStoreState((state) => state.files.selectedFiles.length);
    47 |
    48 |     useEffect(() => {

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:46:62
TS7006: Parameter 'state' implicitly has an 'any' type.
    44 |
    45 |     const setSelectedFiles = ServerContext.useStoreActions((actions) => actions.files.setSelectedFiles);
  > 46 |     const selectedFilesLength = ServerContext.useStoreState((state) => state.files.selectedFiles.length);
       |                                                              ^^^^^
    47 |
    48 |     useEffect(() => {
    49 |         clearFlashes('files');

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:59:64
TS7006: Parameter 'file' implicitly has an 'any' type.
    57 |
    58 |     const onSelectAllClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  > 59 |         setSelectedFiles(e.currentTarget.checked ? files?.map((file) => file.name) || [] : []);
       |                                                                ^^^^
    60 |     };
    61 |
    62 |     if (error) {

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:99:28
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
     97 |                 <>
     98 |                     {!files.length ? (
  >  99 |                         <p css={tw`text-sm text-neutral-400 text-center`}>This directory seems to be empty.</p>
        |                            ^^^
    100 |                     ) : (
    101 |                         <CSSTransition classNames={'fade'} timeout={150} appear in>
    102 |                             <div>

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:104:42
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    102 |                             <div>
    103 |                                 {files.length > 250 && (
  > 104 |                                     <div css={tw`rounded bg-yellow-400 mb-px p-3`}>
        |                                          ^^^
    105 |                                         <p css={tw`text-yellow-900 text-sm text-center`}>
    106 |                                             This directory is too large to display in the browser, limiting the output
    107 |                                             to the first 250 files.

ERROR in resources/scripts/components/server/files/FileManagerContainer.tsx:105:44
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    103 |                                 {files.length > 250 && (
    104 |                                     <div css={tw`rounded bg-yellow-400 mb-px p-3`}>
  > 105 |                                         <p css={tw`text-yellow-900 text-sm text-center`}>
        |                                            ^^^
    106 |                                             This directory is too large to display in the browser, limiting the output
    107 |                                             to the first 250 files.
    108 |                                         </p>

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:2:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
  > 2 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import { useFlashKey } from '@/plugins/useFlash';
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    5 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:3:29
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
    2 | import Spinner from '@/components/elements/Spinner';
  > 3 | import { useFlashKey } from '@/plugins/useFlash';
      |                             ^^^^^^^^^^^^^^^^^^^^
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    5 | import { ServerContext } from '@/state/server';
    6 | import AllocationRow from '@/components/server/network/AllocationRow';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:4:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    2 | import Spinner from '@/components/elements/Spinner';
    3 | import { useFlashKey } from '@/plugins/useFlash';
  > 4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import { ServerContext } from '@/state/server';
    6 | import AllocationRow from '@/components/server/network/AllocationRow';
    7 | import Button from '@/components/elements/Button';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:5:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    3 | import { useFlashKey } from '@/plugins/useFlash';
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
  > 5 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    6 | import AllocationRow from '@/components/server/network/AllocationRow';
    7 | import Button from '@/components/elements/Button';
    8 | import createServerAllocation from '@/api/server/network/createServerAllocation';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:6:27
TS2307: Cannot find module '@/components/server/network/AllocationRow' or its corresponding type declarations.
    4 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    5 | import { ServerContext } from '@/state/server';
  > 6 | import AllocationRow from '@/components/server/network/AllocationRow';
      |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import Button from '@/components/elements/Button';
    8 | import createServerAllocation from '@/api/server/network/createServerAllocation';
    9 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:7:20
TS2307: Cannot find module '@/components/elements/Button' or its corresponding type declarations.
     5 | import { ServerContext } from '@/state/server';
     6 | import AllocationRow from '@/components/server/network/AllocationRow';
  >  7 | import Button from '@/components/elements/Button';
       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import createServerAllocation from '@/api/server/network/createServerAllocation';
     9 | import tw from 'twin.macro';
    10 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:8:36
TS2307: Cannot find module '@/api/server/network/createServerAllocation' or its corresponding type declarations.
     6 | import AllocationRow from '@/components/server/network/AllocationRow';
     7 | import Button from '@/components/elements/Button';
  >  8 | import createServerAllocation from '@/api/server/network/createServerAllocation';
       |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import tw from 'twin.macro';
    10 | import Can from '@/components/elements/Can';
    11 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:10:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     8 | import createServerAllocation from '@/api/server/network/createServerAllocation';
     9 | import tw from 'twin.macro';
  > 10 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
    12 | import getServerAllocations from '@/api/swr/getServerAllocations';
    13 | import isEqual from 'react-fast-compare';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:11:28
TS2307: Cannot find module '@/components/elements/SpinnerOverlay' or its corresponding type declarations.
     9 | import tw from 'twin.macro';
    10 | import Can from '@/components/elements/Can';
  > 11 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
       |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import getServerAllocations from '@/api/swr/getServerAllocations';
    13 | import isEqual from 'react-fast-compare';
    14 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:12:34
TS2307: Cannot find module '@/api/swr/getServerAllocations' or its corresponding type declarations.
    10 | import Can from '@/components/elements/Can';
    11 | import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
  > 12 | import getServerAllocations from '@/api/swr/getServerAllocations';
       |                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import isEqual from 'react-fast-compare';
    14 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';
    15 |

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:14:38
TS2307: Cannot find module '@/plugins/useDeepCompareEffect' or its corresponding type declarations.
    12 | import getServerAllocations from '@/api/swr/getServerAllocations';
    13 | import isEqual from 'react-fast-compare';
  > 14 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';
       |                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 |
    16 | import BeforeContent from '@/blueprint/components/Server/Network/BeforeContent';
    17 | import AfterContent  from '@/blueprint/components/Server/Network/AfterContent';

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:21:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    19 | const NetworkContainer = () => {
    20 |     const [loading, setLoading] = useState(false);
  > 21 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    22 |     const allocationLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.allocations);
    23 |     const allocations = ServerContext.useStoreState((state) => state.server.data!.allocations, isEqual);
    24 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:22:58
TS7006: Parameter 'state' implicitly has an 'any' type.
    20 |     const [loading, setLoading] = useState(false);
    21 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
  > 22 |     const allocationLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.allocations);
       |                                                          ^^^^^
    23 |     const allocations = ServerContext.useStoreState((state) => state.server.data!.allocations, isEqual);
    24 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);
    25 |

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:23:54
TS7006: Parameter 'state' implicitly has an 'any' type.
    21 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    22 |     const allocationLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.allocations);
  > 23 |     const allocations = ServerContext.useStoreState((state) => state.server.data!.allocations, isEqual);
       |                                                      ^^^^^
    24 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);
    25 |
    26 |     const { clearFlashes, clearAndAddHttpError } = useFlashKey('server:network');

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:24:63
TS7006: Parameter 'actions' implicitly has an 'any' type.
    22 |     const allocationLimit = ServerContext.useStoreState((state) => state.server.data!.featureLimits.allocations);
    23 |     const allocations = ServerContext.useStoreState((state) => state.server.data!.allocations, isEqual);
  > 24 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);
       |                                                               ^^^^^^^
    25 |
    26 |     const { clearFlashes, clearAndAddHttpError } = useFlashKey('server:network');
    27 |     const { data, error, mutate } = getServerAllocations();

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:40:29
TS7006: Parameter 'state' implicitly has an 'any' type.
    38 |         if (!data) return;
    39 |
  > 40 |         setServerFromState((state) => ({ ...state, allocations: data }));
       |                             ^^^^^
    41 |     }, [data]);
    42 |
    43 |     const onCreateAllocation = () => {

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:48:20
TS7006: Parameter 'allocation' implicitly has an 'any' type.
    46 |         setLoading(true);
    47 |         createServerAllocation(uuid)
  > 48 |             .then((allocation) => {
       |                    ^^^^^^^^^^
    49 |                 setServerFromState((s) => ({ ...s, allocations: s.allocations.concat(allocation) }));
    50 |                 return mutate(data?.concat(allocation), false);
    51 |             })

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:49:37
TS7006: Parameter 's' implicitly has an 'any' type.
    47 |         createServerAllocation(uuid)
    48 |             .then((allocation) => {
  > 49 |                 setServerFromState((s) => ({ ...s, allocations: s.allocations.concat(allocation) }));
       |                                     ^
    50 |                 return mutate(data?.concat(allocation), false);
    51 |             })
    52 |             .catch((error) => clearAndAddHttpError(error))

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:52:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    50 |                 return mutate(data?.concat(allocation), false);
    51 |             })
  > 52 |             .catch((error) => clearAndAddHttpError(error))
       |                     ^^^^^
    53 |             .then(() => setLoading(false));
    54 |     };
    55 |

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:63:32
TS7006: Parameter 'allocation' implicitly has an 'any' type.
    61 |                 <>
    62 |                     <BeforeContent />
  > 63 |                     {data.map((allocation) => (
       |                                ^^^^^^^^^^
    64 |                         <AllocationRow key={`${allocation.ip}:${allocation.port}`} allocation={allocation} />
    65 |                     ))}
    66 |                     {allocationLimit > 0 && (

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:69:34
TS2322: Type '{ children: (false | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    67 |                         <Can action={'allocation.create'}>
    68 |                             <SpinnerOverlay visible={loading} />
  > 69 |                             <div css={tw`mt-6 sm:flex items-center justify-end`}>
       |                                  ^^^
    70 |                                 <p css={tw`text-sm text-neutral-300 mb-4 sm:mr-6 sm:mb-0`}>
    71 |                                     You are currently using {data.length} of {allocationLimit} allowed allocations for
    72 |                                     this server.

ERROR in resources/scripts/components/server/network/NetworkContainer.tsx:70:36
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    68 |                             <SpinnerOverlay visible={loading} />
    69 |                             <div css={tw`mt-6 sm:flex items-center justify-end`}>
  > 70 |                                 <p css={tw`text-sm text-neutral-300 mb-4 sm:mr-6 sm:mb-0`}>
       |                                    ^^^
    71 |                                     You are currently using {data.length} of {allocationLimit} allowed allocations for
    72 |                                     this server.
    73 |                                 </p>

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:2:32
TS2307: Cannot find module '@/api/server/schedules/getServerSchedules' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
  > 2 | import getServerSchedules from '@/api/server/schedules/getServerSchedules';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import { ServerContext } from '@/state/server';
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import { useHistory, useRouteMatch } from 'react-router-dom';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:3:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
    2 | import getServerSchedules from '@/api/server/schedules/getServerSchedules';
  > 3 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import { useHistory, useRouteMatch } from 'react-router-dom';
    6 | import FlashMessageRender from '@/components/FlashMessageRender';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:4:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    2 | import getServerSchedules from '@/api/server/schedules/getServerSchedules';
    3 | import { ServerContext } from '@/state/server';
  > 4 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import { useHistory, useRouteMatch } from 'react-router-dom';
    6 | import FlashMessageRender from '@/components/FlashMessageRender';
    7 | import ScheduleRow from '@/components/server/schedules/ScheduleRow';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:6:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import { useHistory, useRouteMatch } from 'react-router-dom';
  > 6 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import ScheduleRow from '@/components/server/schedules/ScheduleRow';
    8 | import { httpErrorToHuman } from '@/api/http';
    9 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:7:25
TS2307: Cannot find module '@/components/server/schedules/ScheduleRow' or its corresponding type declarations.
     5 | import { useHistory, useRouteMatch } from 'react-router-dom';
     6 | import FlashMessageRender from '@/components/FlashMessageRender';
  >  7 | import ScheduleRow from '@/components/server/schedules/ScheduleRow';
       |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import { httpErrorToHuman } from '@/api/http';
     9 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
    10 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:8:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
     6 | import FlashMessageRender from '@/components/FlashMessageRender';
     7 | import ScheduleRow from '@/components/server/schedules/ScheduleRow';
  >  8 | import { httpErrorToHuman } from '@/api/http';
       |                                  ^^^^^^^^^^^^
     9 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
    10 | import Can from '@/components/elements/Can';
    11 | import useFlash from '@/plugins/useFlash';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:9:31
TS2307: Cannot find module '@/components/server/schedules/EditScheduleModal' or its corresponding type declarations.
     7 | import ScheduleRow from '@/components/server/schedules/ScheduleRow';
     8 | import { httpErrorToHuman } from '@/api/http';
  >  9 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
       |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import Can from '@/components/elements/Can';
    11 | import useFlash from '@/plugins/useFlash';
    12 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:10:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     8 | import { httpErrorToHuman } from '@/api/http';
     9 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
  > 10 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import useFlash from '@/plugins/useFlash';
    12 | import tw from 'twin.macro';
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:11:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
     9 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
    10 | import Can from '@/components/elements/Can';
  > 11 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    12 | import tw from 'twin.macro';
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';
    14 | import { Button } from '@/components/elements/button/index';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:13:24
TS2307: Cannot find module '@/components/elements/GreyRowBox' or its corresponding type declarations.
    11 | import useFlash from '@/plugins/useFlash';
    12 | import tw from 'twin.macro';
  > 13 | import GreyRowBox from '@/components/elements/GreyRowBox';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import { Button } from '@/components/elements/button/index';
    15 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    16 |

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:14:24
TS2307: Cannot find module '@/components/elements/button/index' or its corresponding type declarations.
    12 | import tw from 'twin.macro';
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';
  > 14 | import { Button } from '@/components/elements/button/index';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    16 |
    17 | import BeforeContent from '@/blueprint/components/Server/Schedules/List/BeforeContent';

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:15:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    13 | import GreyRowBox from '@/components/elements/GreyRowBox';
    14 | import { Button } from '@/components/elements/button/index';
  > 15 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 |
    17 | import BeforeContent from '@/blueprint/components/Server/Schedules/List/BeforeContent';
    18 | import AfterContent  from '@/blueprint/components/Server/Schedules/List/AfterContent';
ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:24:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    22 |     const history = useHistory();
    23 |
  > 24 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    25 |     const { clearFlashes, addError } = useFlash();
    26 |     const [loading, setLoading] = useState(true);
    27 |     const [visible, setVisible] = useState(false);

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:29:52
TS7006: Parameter 'state' implicitly has an 'any' type.
    27 |     const [visible, setVisible] = useState(false);
    28 |
  > 29 |     const schedules = ServerContext.useStoreState((state) => state.schedules.data);
       |                                                    ^^^^^
    30 |     const setSchedules = ServerContext.useStoreActions((actions) => actions.schedules.setSchedules);
    31 |
    32 |     useEffect(() => {

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:30:57
TS7006: Parameter 'actions' implicitly has an 'any' type.
    28 |
    29 |     const schedules = ServerContext.useStoreState((state) => state.schedules.data);
  > 30 |     const setSchedules = ServerContext.useStoreActions((actions) => actions.schedules.setSchedules);
       |                                                         ^^^^^^^
    31 |
    32 |     useEffect(() => {
    33 |         clearFlashes('schedules');

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:35:20
TS7006: Parameter 'schedules' implicitly has an 'any' type.
    33 |         clearFlashes('schedules');
    34 |         getServerSchedules(uuid)
  > 35 |             .then((schedules) => setSchedules(schedules))
       |                    ^^^^^^^^^
    36 |             .catch((error) => {
    37 |                 addError({ message: httpErrorToHuman(error), key: 'schedules' });
    38 |                 console.error(error);

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:36:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    34 |         getServerSchedules(uuid)
    35 |             .then((schedules) => setSchedules(schedules))
  > 36 |             .catch((error) => {
       |                     ^^^^^
    37 |                 addError({ message: httpErrorToHuman(error), key: 'schedules' });
    38 |                 console.error(error);
    39 |             })

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:52:28
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    50 |                     <BeforeContent />
    51 |                     {schedules.length === 0 ? (
  > 52 |                         <p css={tw`text-sm text-center text-neutral-300`}>
       |                            ^^^
    53 |                             There are no schedules configured for this server.
    54 |                         </p>
    55 |                     ) : (

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:56:40
TS7006: Parameter 'schedule' implicitly has an 'any' type.
    54 |                         </p>
    55 |                     ) : (
  > 56 |                         schedules.map((schedule) => (
       |                                        ^^^^^^^^
    57 |                             <GreyRowBox
    58 |                                 as={'a'}
    59 |                                 key={schedule.id}

ERROR in resources/scripts/components/server/schedules/ScheduleContainer.tsx:72:30
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    70 |                     )}
    71 |                     <Can action={'schedule.create'}>
  > 72 |                         <div css={tw`mt-8 flex justify-end`}>
       |                              ^^^
    73 |                             <EditScheduleModal visible={visible} onModalDismissed={() => setVisible(false)} />
    74 |                             <Button type={'button'} onClick={() => setVisible(true)}>
    75 |                                 Create schedule

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:3:31
TS2307: Cannot find module '@/api/server/schedules/getServerSchedule' or its corresponding type declarations.
    1 | import React, { useCallback, useEffect, useState } from 'react';
    2 | import { useHistory, useParams } from 'react-router-dom';
  > 3 | import getServerSchedule from '@/api/server/schedules/getServerSchedule';
      |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
    6 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:4:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    2 | import { useHistory, useParams } from 'react-router-dom';
    3 | import getServerSchedule from '@/api/server/schedules/getServerSchedule';
  > 4 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
    6 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
    7 | import NewTaskButton from '@/components/server/schedules/NewTaskButton';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:5:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    3 | import getServerSchedule from '@/api/server/schedules/getServerSchedule';
    4 | import Spinner from '@/components/elements/Spinner';
  > 5 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
    7 | import NewTaskButton from '@/components/server/schedules/NewTaskButton';
    8 | import DeleteScheduleButton from '@/components/server/schedules/DeleteScheduleButton';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:6:31
TS2307: Cannot find module '@/components/server/schedules/EditScheduleModal' or its corresponding type declarations.
    4 | import Spinner from '@/components/elements/Spinner';
    5 | import FlashMessageRender from '@/components/FlashMessageRender';
  > 6 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
      |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import NewTaskButton from '@/components/server/schedules/NewTaskButton';
    8 | import DeleteScheduleButton from '@/components/server/schedules/DeleteScheduleButton';
    9 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:7:27
TS2307: Cannot find module '@/components/server/schedules/NewTaskButton' or its corresponding type declarations.
     5 | import FlashMessageRender from '@/components/FlashMessageRender';
     6 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
  >  7 | import NewTaskButton from '@/components/server/schedules/NewTaskButton';
       |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import DeleteScheduleButton from '@/components/server/schedules/DeleteScheduleButton';     9 | import Can from '@/components/elements/Can';
    10 | import useFlash from '@/plugins/useFlash';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:8:34
TS2307: Cannot find module '@/components/server/schedules/DeleteScheduleButton' or its corresponding type declarations.
     6 | import EditScheduleModal from '@/components/server/schedules/EditScheduleModal';
     7 | import NewTaskButton from '@/components/server/schedules/NewTaskButton';
  >  8 | import DeleteScheduleButton from '@/components/server/schedules/DeleteScheduleButton';       |                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import Can from '@/components/elements/Can';
    10 | import useFlash from '@/plugins/useFlash';
    11 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:9:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     7 | import NewTaskButton from '@/components/server/schedules/NewTaskButton';
     8 | import DeleteScheduleButton from '@/components/server/schedules/DeleteScheduleButton';  >  9 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import useFlash from '@/plugins/useFlash';
    11 | import { ServerContext } from '@/state/server';
    12 | import PageContentBlock from '@/components/elements/PageContentBlock';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:10:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
     8 | import DeleteScheduleButton from '@/components/server/schedules/DeleteScheduleButton';     9 | import Can from '@/components/elements/Can';
  > 10 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    11 | import { ServerContext } from '@/state/server';
    12 | import PageContentBlock from '@/components/elements/PageContentBlock';
    13 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:11:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
     9 | import Can from '@/components/elements/Can';
    10 | import useFlash from '@/plugins/useFlash';
  > 11 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    12 | import PageContentBlock from '@/components/elements/PageContentBlock';
    13 | import tw from 'twin.macro';
    14 | import { Button } from '@/components/elements/button/index';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:12:30
TS2307: Cannot find module '@/components/elements/PageContentBlock' or its corresponding type declarations.
    10 | import useFlash from '@/plugins/useFlash';
    11 | import { ServerContext } from '@/state/server';
  > 12 | import PageContentBlock from '@/components/elements/PageContentBlock';
       |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import tw from 'twin.macro';
    14 | import { Button } from '@/components/elements/button/index';
    15 | import ScheduleTaskRow from '@/components/server/schedules/ScheduleTaskRow';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:14:24
TS2307: Cannot find module '@/components/elements/button/index' or its corresponding type declarations.
    12 | import PageContentBlock from '@/components/elements/PageContentBlock';
    13 | import tw from 'twin.macro';
  > 14 | import { Button } from '@/components/elements/button/index';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import ScheduleTaskRow from '@/components/server/schedules/ScheduleTaskRow';
    16 | import isEqual from 'react-fast-compare';
    17 | import { format } from 'date-fns';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:15:29
TS2307: Cannot find module '@/components/server/schedules/ScheduleTaskRow' or its corresponding type declarations.
    13 | import tw from 'twin.macro';
    14 | import { Button } from '@/components/elements/button/index';
  > 15 | import ScheduleTaskRow from '@/components/server/schedules/ScheduleTaskRow';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 | import isEqual from 'react-fast-compare';
    17 | import { format } from 'date-fns';
    18 | import ScheduleCronRow from '@/components/server/schedules/ScheduleCronRow';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:18:29
TS2307: Cannot find module '@/components/server/schedules/ScheduleCronRow' or its corresponding type declarations.
    16 | import isEqual from 'react-fast-compare';
    17 | import { format } from 'date-fns';
  > 18 | import ScheduleCronRow from '@/components/server/schedules/ScheduleCronRow';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    19 | import RunScheduleButton from '@/components/server/schedules/RunScheduleButton';
    20 |
    21 | import BeforeEdit from '@/blueprint/components/Server/Schedules/Edit/BeforeEdit';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:19:31
TS2307: Cannot find module '@/components/server/schedules/RunScheduleButton' or its corresponding type declarations.
    17 | import { format } from 'date-fns';
    18 | import ScheduleCronRow from '@/components/server/schedules/ScheduleCronRow';
  > 19 | import RunScheduleButton from '@/components/server/schedules/RunScheduleButton';
       |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    20 |
    21 | import BeforeEdit from '@/blueprint/components/Server/Schedules/Edit/BeforeEdit';
    22 | import AfterEdit  from '@/blueprint/components/Server/Schedules/Edit/AfterEdit';

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:29:10
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    27 |
    28 | const CronBox = ({ title, value }: { title: string; value: string }) => (
  > 29 |     <div css={tw`bg-neutral-700 rounded p-3`}>
       |          ^^^
    30 |         <p css={tw`text-neutral-300 text-sm`}>{title}</p>
    31 |         <p css={tw`text-xl font-medium text-neutral-100`}>{value}</p>
    32 |     </div>

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:30:12
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    28 | const CronBox = ({ title, value }: { title: string; value: string }) => (
    29 |     <div css={tw`bg-neutral-700 rounded p-3`}>
  > 30 |         <p css={tw`text-neutral-300 text-sm`}>{title}</p>
       |            ^^^
    31 |         <p css={tw`text-xl font-medium text-neutral-100`}>{value}</p>
    32 |     </div>
    33 | );

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:31:12
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    29 |     <div css={tw`bg-neutral-700 rounded p-3`}>
    30 |         <p css={tw`text-neutral-300 text-sm`}>{title}</p>
  > 31 |         <p css={tw`text-xl font-medium text-neutral-100`}>{value}</p>
       |            ^^^
    32 |     </div>
    33 | );
    34 |

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:37:9
TS2322: Type '{ children: string; css: TwStyle[]; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    35 | const ActivePill = ({ active }: { active: boolean }) => (
    36 |     <span
  > 37 |         css={[
       |         ^^^
    38 |             tw`rounded-full px-2 py-px text-xs ml-4 uppercase`,
    39 |             active ? tw`bg-green-600 text-green-100` : tw`bg-red-600 text-red-100`,
    40 |         ]}

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:50:45
TS7006: Parameter 'state' implicitly has an 'any' type.
    48 |     const { id: scheduleId } = useParams<Params>();
    49 |
  > 50 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
       |                                             ^^^^^
    51 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    52 |
    53 |     const { clearFlashes, clearAndAddHttpError } = useFlash();

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:51:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    49 |
    50 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
  > 51 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    52 |
    53 |     const { clearFlashes, clearAndAddHttpError } = useFlash();
    54 |     const [isLoading, setIsLoading] = useState(true);

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:58:10
TS7006: Parameter 'st' implicitly has an 'any' type.
    56 |
    57 |     const schedule = ServerContext.useStoreState(
  > 58 |         (st) => st.schedules.data.find((s) => s.id === Number(scheduleId)),
       |          ^^
    59 |         isEqual
    60 |     );
    61 |     const appendSchedule = ServerContext.useStoreActions((actions) => actions.schedules.appendSchedule);

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:58:41
TS7006: Parameter 's' implicitly has an 'any' type.
    56 |
    57 |     const schedule = ServerContext.useStoreState(
  > 58 |         (st) => st.schedules.data.find((s) => s.id === Number(scheduleId)),
       |                                         ^
    59 |         isEqual
    60 |     );
    61 |     const appendSchedule = ServerContext.useStoreActions((actions) => actions.schedules.appendSchedule);

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:61:59
TS7006: Parameter 'actions' implicitly has an 'any' type.
    59 |         isEqual
    60 |     );
  > 61 |     const appendSchedule = ServerContext.useStoreActions((actions) => actions.schedules.appendSchedule);
       |                                                           ^^^^^^^
    62 |
    63 |     useEffect(() => {
    64 |         if (schedule?.id === Number(scheduleId)) {

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:71:20
TS7006: Parameter 'schedule' implicitly has an 'any' type.
    69 |         clearFlashes('schedules');
    70 |         getServerSchedule(uuid, Number(scheduleId))
  > 71 |             .then((schedule) => appendSchedule(schedule))
       |                    ^^^^^^^^
    72 |             .catch((error) => {
    73 |                 console.error(error);
    74 |                 clearAndAddHttpError({ error, key: 'schedules' });

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:72:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    70 |         getServerSchedule(uuid, Number(scheduleId))
    71 |             .then((schedule) => appendSchedule(schedule))
  > 72 |             .catch((error) => {
       |                     ^^^^^
    73 |                 console.error(error);
    74 |                 clearAndAddHttpError({ error, key: 'schedules' });
    75 |             })

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:92:26
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    90 |                     <BeforeEdit />
    91 |                     <ScheduleCronRow cron={schedule.cron} css={tw`sm:hidden bg-neutral-700 rounded mb-4 p-3`} />
  > 92 |                     <div css={tw`rounded shadow`}>
       |                          ^^^
    93 |                         <div
    94 |                             css={tw`sm:flex items-center bg-neutral-900 p-3 sm:p-6 border-b-4 border-neutral-600 rounded-t`}
    95 |                         >

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:94:29
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    92 |                     <div css={tw`rounded shadow`}>
    93 |                         <div
  > 94 |                             css={tw`sm:flex items-center bg-neutral-900 p-3 sm:p-6 border-b-4 border-neutral-600 rounded-t`}
       |                             ^^^
    95 |                         >
    96 |                             <div css={tw`flex-1`}>
    97 |                                 <h3 css={tw`flex items-center text-neutral-100 text-2xl`}>

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:96:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    94 |                             css={tw`sm:flex items-center bg-neutral-900 p-3 sm:p-6 border-b-4 border-neutral-600 rounded-t`}
    95 |                         >
  > 96 |                             <div css={tw`flex-1`}>
       |                                  ^^^
    97 |                                 <h3 css={tw`flex items-center text-neutral-100 text-2xl`}>
    98 |                                     {schedule.name}
    99 |                                     {schedule.isProcessing ? (

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:97:37
TS2322: Type '{ children: any[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
     95 |                         >
     96 |                             <div css={tw`flex-1`}>
  >  97 |                                 <h3 css={tw`flex items-center text-neutral-100 text-2xl`}>
        |                                     ^^^
     98 |                                     {schedule.name}
     99 |                                     {schedule.isProcessing ? (
    100 |                                         <span

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:101:45
TS2322: Type '{ children: (string | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
     99 |                                     {schedule.isProcessing ? (
    100 |                                         <span
  > 101 |                                             css={tw`flex items-center rounded-full px-2 py-px text-xs ml-4 uppercase bg-neutral-600 text-white`}
        |                                             ^^^
    102 |                                         >
    103 |                                             <Spinner css={tw`w-3! h-3! mr-2`} />
    104 |                                             Processing

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:110:36
TS2322: Type '{ children: (string | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    108 |                                     )}
    109 |                                 </h3>
  > 110 |                                 <p css={tw`mt-1 text-sm text-neutral-200`}>
        |                                    ^^^
    111 |                                     Last run at:&nbsp;
    112 |                                     {schedule.lastRunAt ? (
    113 |                                         format(schedule.lastRunAt, "MMM do 'at' h:mma")

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:115:47
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    113 |                                         format(schedule.lastRunAt, "MMM do 'at' h:mma")
    114 |                                     ) : (
  > 115 |                                         <span css={tw`text-neutral-300`}>n/a</span>
        |                                               ^^^
    116 |                                     )}
    117 |                                     <span css={tw`ml-4 pl-4 border-l-4 border-neutral-600 py-px`}>
    118 |                                         Next run at:&nbsp;

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:117:43
TS2322: Type '{ children: (string | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    115 |                                         <span css={tw`text-neutral-300`}>n/a</span>
    116 |                                     )}
  > 117 |                                     <span css={tw`ml-4 pl-4 border-l-4 border-neutral-600 py-px`}>
        |                                           ^^^
    118 |                                         Next run at:&nbsp;
    119 |                                         {schedule.nextRunAt ? (
    120 |                                             format(schedule.nextRunAt, "MMM do 'at' h:mma")

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:122:51
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>'.
    120 |                                             format(schedule.nextRunAt, "MMM do 'at' h:mma")
    121 |                                         ) : (
  > 122 |                                             <span css={tw`text-neutral-300`}>n/a</span>
        |                                                   ^^^
    123 |                                         )}
    124 |                                     </span>
    125 |                                 </p>

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:127:34
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    125 |                                 </p>
    126 |                             </div>
  > 127 |                             <div css={tw`flex sm:block mt-3 sm:mt-0`}>
        |                                  ^^^
    128 |                                 <Can action={'schedule.update'}>
    129 |                                     <Button.Text className={'flex-1 mr-4'} onClick={toggleEditModal}>
    130 |                                         Edit

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:136:30
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    134 |                             </div>
    135 |                         </div>
  > 136 |                         <div css={tw`hidden sm:grid grid-cols-5 md:grid-cols-5 gap-4 mb-4 mt-4`}>
        |                              ^^^
    137 |                             <CronBox title={'Minute'} value={schedule.cron.minute} />    138 |                             <CronBox title={'Hour'} value={schedule.cron.hour} />
    139 |                             <CronBox title={'Day (Month)'} value={schedule.cron.dayOfMonth} />

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:143:30
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    141 |                             <CronBox title={'Day (Week)'} value={schedule.cron.dayOfWeek} />
    142 |                         </div>
  > 143 |                         <div css={tw`bg-neutral-700 rounded-b`}>
        |                              ^^^
    144 |                             {schedule.tasks.length > 0
    145 |                                 ? schedule.tasks
    146 |                                       .sort((a, b) =>

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:146:46
TS7006: Parameter 'a' implicitly has an 'any' type.
    144 |                             {schedule.tasks.length > 0
    145 |                                 ? schedule.tasks
  > 146 |                                       .sort((a, b) =>
        |                                              ^
    147 |                                           a.sequenceId === b.sequenceId ? 0 : a.sequenceId > b.sequenceId ? 1 : -1
    148 |                                       )
    149 |                                       .map((task) => (

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:146:49
TS7006: Parameter 'b' implicitly has an 'any' type.
    144 |                             {schedule.tasks.length > 0
    145 |                                 ? schedule.tasks
  > 146 |                                       .sort((a, b) =>
        |                                                 ^
    147 |                                           a.sequenceId === b.sequenceId ? 0 : a.sequenceId > b.sequenceId ? 1 : -1
    148 |                                       )
    149 |                                       .map((task) => (

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:149:45
TS7006: Parameter 'task' implicitly has an 'any' type.
    147 |                                           a.sequenceId === b.sequenceId ? 0 : a.sequenceId > b.sequenceId ? 1 : -1
    148 |                                       )
  > 149 |                                       .map((task) => (
        |                                             ^^^^
    150 |                                           <ScheduleTaskRow
    151 |                                               key={`${schedule.id}_${task.id}`}
    152 |                                               task={task}

ERROR in resources/scripts/components/server/schedules/ScheduleEditContainer.tsx:160:26
TS2322: Type '{ children: (false | Element)[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    158 |                     </div>
    159 |                     <EditScheduleModal visible={showEditModal} schedule={schedule} onModalDismissed={toggleEditModal} />
  > 160 |                     <div css={tw`mt-6 flex sm:justify-end`}>
        |                          ^^^
    161 |                         <Can action={'schedule.delete'}>
    162 |                             <DeleteScheduleButton
    163 |                                 scheduleId={schedule.id}

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:2:27
TS2307: Cannot find module '@/components/elements/TitledGreyBox' or its corresponding type declarations.
    1 | import React from 'react';
  > 2 | import TitledGreyBox from '@/components/elements/TitledGreyBox';
      |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import { ServerContext } from '@/state/server';
    4 | import { useStoreState } from 'easy-peasy';
    5 | import RenameServerBox from '@/components/server/settings/RenameServerBox';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:3:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    1 | import React from 'react';
    2 | import TitledGreyBox from '@/components/elements/TitledGreyBox';
  > 3 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    4 | import { useStoreState } from 'easy-peasy';
    5 | import RenameServerBox from '@/components/server/settings/RenameServerBox';
    6 | import FlashMessageRender from '@/components/FlashMessageRender';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:5:29
TS2307: Cannot find module '@/components/server/settings/RenameServerBox' or its corresponding type declarations.
    3 | import { ServerContext } from '@/state/server';
    4 | import { useStoreState } from 'easy-peasy';
  > 5 | import RenameServerBox from '@/components/server/settings/RenameServerBox';
      |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import FlashMessageRender from '@/components/FlashMessageRender';
    7 | import Can from '@/components/elements/Can';
    8 | import ReinstallServerBox from '@/components/server/settings/ReinstallServerBox';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:6:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
    4 | import { useStoreState } from 'easy-peasy';
    5 | import RenameServerBox from '@/components/server/settings/RenameServerBox';
  > 6 | import FlashMessageRender from '@/components/FlashMessageRender';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import Can from '@/components/elements/Can';
    8 | import ReinstallServerBox from '@/components/server/settings/ReinstallServerBox';
    9 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:7:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     5 | import RenameServerBox from '@/components/server/settings/RenameServerBox';
     6 | import FlashMessageRender from '@/components/FlashMessageRender';
  >  7 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import ReinstallServerBox from '@/components/server/settings/ReinstallServerBox';
     9 | import tw from 'twin.macro';
    10 | import Input from '@/components/elements/Input';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:8:32
TS2307: Cannot find module '@/components/server/settings/ReinstallServerBox' or its corresponding type declarations.
     6 | import FlashMessageRender from '@/components/FlashMessageRender';
     7 | import Can from '@/components/elements/Can';
  >  8 | import ReinstallServerBox from '@/components/server/settings/ReinstallServerBox';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import tw from 'twin.macro';
    10 | import Input from '@/components/elements/Input';
    11 | import Label from '@/components/elements/Label';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:10:19
TS2307: Cannot find module '@/components/elements/Input' or its corresponding type declarations.
     8 | import ReinstallServerBox from '@/components/server/settings/ReinstallServerBox';
     9 | import tw from 'twin.macro';
  > 10 | import Input from '@/components/elements/Input';
       |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    11 | import Label from '@/components/elements/Label';
    12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    13 | import isEqual from 'react-fast-compare';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:11:19
TS2307: Cannot find module '@/components/elements/Label' or its corresponding type declarations.
     9 | import tw from 'twin.macro';
    10 | import Input from '@/components/elements/Input';
  > 11 | import Label from '@/components/elements/Label';
       |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    13 | import isEqual from 'react-fast-compare';
    14 | import CopyOnClick from '@/components/elements/CopyOnClick';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:12:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    10 | import Input from '@/components/elements/Input';
    11 | import Label from '@/components/elements/Label';
  > 12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import isEqual from 'react-fast-compare';
    14 | import CopyOnClick from '@/components/elements/CopyOnClick';
    15 | import { ip } from '@/lib/formatters';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:14:25
TS2307: Cannot find module '@/components/elements/CopyOnClick' or its corresponding type declarations.
    12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    13 | import isEqual from 'react-fast-compare';
  > 14 | import CopyOnClick from '@/components/elements/CopyOnClick';
       |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import { ip } from '@/lib/formatters';
    16 | import { Button } from '@/components/elements/button/index';
    17 |

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:15:20
TS2307: Cannot find module '@/lib/formatters' or its corresponding type declarations.
    13 | import isEqual from 'react-fast-compare';
    14 | import CopyOnClick from '@/components/elements/CopyOnClick';
  > 15 | import { ip } from '@/lib/formatters';
       |                    ^^^^^^^^^^^^^^^^^^
    16 | import { Button } from '@/components/elements/button/index';
    17 |
    18 | import BeforeContent from '@/blueprint/components/Server/Backups/BeforeContent';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:16:24
TS2307: Cannot find module '@/components/elements/button/index' or its corresponding type declarations.
    14 | import CopyOnClick from '@/components/elements/CopyOnClick';
    15 | import { ip } from '@/lib/formatters';
  > 16 | import { Button } from '@/components/elements/button/index';
       |                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    17 |
    18 | import BeforeContent from '@/blueprint/components/Server/Backups/BeforeContent';
    19 | import AfterContent  from '@/blueprint/components/Server/Backups/AfterContent';

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:22:53
TS2339: Property 'user' does not exist on type 'StateMapper<_Pick<{}, never>>'.
    20 |
    21 | export default () => {
  > 22 |     const username = useStoreState((state) => state.user.data!.username);
       |                                                     ^^^^
    23 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
    24 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    25 |     const node = ServerContext.useStoreState((state) => state.server.data!.node);

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:23:45
TS7006: Parameter 'state' implicitly has an 'any' type.
    21 | export default () => {
    22 |     const username = useStoreState((state) => state.user.data!.username);
  > 23 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
       |                                             ^^^^^
    24 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    25 |     const node = ServerContext.useStoreState((state) => state.server.data!.node);
    26 |     const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:24:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    22 |     const username = useStoreState((state) => state.user.data!.username);
    23 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
  > 24 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    25 |     const node = ServerContext.useStoreState((state) => state.server.data!.node);
    26 |     const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);
    27 |

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:25:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    23 |     const id = ServerContext.useStoreState((state) => state.server.data!.id);
    24 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
  > 25 |     const node = ServerContext.useStoreState((state) => state.server.data!.node);
       |                                               ^^^^^
    26 |     const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);
    27 |
    28 |     return (

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:26:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    24 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    25 |     const node = ServerContext.useStoreState((state) => state.server.data!.node);
  > 26 |     const sftp = ServerContext.useStoreState((state) => state.server.data!.sftpDetails, isEqual);
       |                                               ^^^^^
    27 |
    28 |     return (
    29 |         <ServerContentBlock title={'Settings'}>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:32:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    30 |             <FlashMessageRender byKey={'settings'} css={tw`mb-4`} />
    31 |             <BeforeContent />
  > 32 |             <div css={tw`md:flex`}>
       |                  ^^^
    33 |                 <div css={tw`w-full md:flex-1 md:mr-10`}>
    34 |                     <Can action={'file.sftp'}>
    35 |                         <TitledGreyBox title={'SFTP Details'} css={tw`mb-6 md:mb-10`}>
ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:33:22
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    31 |             <BeforeContent />
    32 |             <div css={tw`md:flex`}>
  > 33 |                 <div css={tw`w-full md:flex-1 md:mr-10`}>
       |                      ^^^
    34 |                     <Can action={'file.sftp'}>
    35 |                         <TitledGreyBox title={'SFTP Details'} css={tw`mb-6 md:mb-10`}>    36 |                             <div>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:42:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    40 |                                 </CopyOnClick>
    41 |                             </div>
  > 42 |                             <div css={tw`mt-6`}>
       |                                  ^^^
    43 |                                 <Label>Username</Label>
    44 |                                 <CopyOnClick text={`${username}.${id}`}>
    45 |                                     <Input type={'text'} value={`${username}.${id}`} readOnly />

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:48:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    46 |                                 </CopyOnClick>
    47 |                             </div>
  > 48 |                             <div css={tw`mt-6 flex items-center`}>
       |                                  ^^^
    49 |                                 <div css={tw`flex-1`}>
    50 |                                     <div css={tw`border-l-4 border-cyan-500 p-3`}>
    51 |                                         <p css={tw`text-xs text-neutral-200`}>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:49:38
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    47 |                             </div>
    48 |                             <div css={tw`mt-6 flex items-center`}>
  > 49 |                                 <div css={tw`flex-1`}>
       |                                      ^^^
    50 |                                     <div css={tw`border-l-4 border-cyan-500 p-3`}>
    51 |                                         <p css={tw`text-xs text-neutral-200`}>
    52 |                                             Your SFTP password is the same as the password you use to access this panel.

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:50:42
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    48 |                             <div css={tw`mt-6 flex items-center`}>
    49 |                                 <div css={tw`flex-1`}>
  > 50 |                                     <div css={tw`border-l-4 border-cyan-500 p-3`}>
       |                                          ^^^
    51 |                                         <p css={tw`text-xs text-neutral-200`}>
    52 |                                             Your SFTP password is the same as the password you use to access this panel.
    53 |                                         </p>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:51:44
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    49 |                                 <div css={tw`flex-1`}>
    50 |                                     <div css={tw`border-l-4 border-cyan-500 p-3`}>
  > 51 |                                         <p css={tw`text-xs text-neutral-200`}>
       |                                            ^^^
    52 |                                             Your SFTP password is the same as the password you use to access this panel.
    53 |                                         </p>
    54 |                                     </div>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:56:38
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    54 |                                     </div>
    55 |                                 </div>
  > 56 |                                 <div css={tw`ml-4`}>
       |                                      ^^^
    57 |                                     <a href={`sftp://${username}.${id}@${ip(sftp.ip)}:${sftp.port}`}>
    58 |                                         <Button.Text variant={Button.Variants.Secondary}>Launch SFTP</Button.Text>
    59 |                                     </a>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:65:30
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    63 |                     </Can>
    64 |                     <TitledGreyBox title={'Debug Information'} css={tw`mb-6 md:mb-10`}>
  > 65 |                         <div css={tw`flex items-center justify-between text-sm`}>
       |                              ^^^
    66 |                             <p>Node</p>
    67 |                             <code css={tw`font-mono bg-neutral-900 rounded py-1 px-2`}>{node}</code>
    68 |                         </div>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:67:35
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    65 |                         <div css={tw`flex items-center justify-between text-sm`}>
    66 |                             <p>Node</p>
  > 67 |                             <code css={tw`font-mono bg-neutral-900 rounded py-1 px-2`}>{node}</code>
       |                                   ^^^
    68 |                         </div>
    69 |                         <CopyOnClick text={uuid}>
    70 |                             <div css={tw`flex items-center justify-between mt-2 text-sm`}>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:70:34
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    68 |                         </div>
    69 |                         <CopyOnClick text={uuid}>
  > 70 |                             <div css={tw`flex items-center justify-between mt-2 text-sm`}>
       |                                  ^^^
    71 |                                 <p>Server ID</p>
    72 |                                 <code css={tw`font-mono bg-neutral-900 rounded py-1 px-2`}>{uuid}</code>
    73 |                             </div>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:72:39
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    70 |                             <div css={tw`flex items-center justify-between mt-2 text-sm`}>
    71 |                                 <p>Server ID</p>
  > 72 |                                 <code css={tw`font-mono bg-neutral-900 rounded py-1 px-2`}>{uuid}</code>
       |                                       ^^^
    73 |                             </div>
    74 |                         </CopyOnClick>
    75 |                     </TitledGreyBox>

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:77:22
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    75 |                     </TitledGreyBox>
    76 |                 </div>
  > 77 |                 <div css={tw`w-full mt-6 md:flex-1 md:mt-0`}>
       |                      ^^^
    78 |                     <Can action={'settings.rename'}>
    79 |                         <div css={tw`mb-6 md:mb-10`}>
    80 |                             <RenameServerBox />

ERROR in resources/scripts/components/server/settings/SettingsContainer.tsx:79:30
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    77 |                 <div css={tw`w-full mt-6 md:flex-1 md:mt-0`}>
    78 |                     <Can action={'settings.rename'}>
  > 79 |                         <div css={tw`mb-6 md:mb-10`}>
       |                              ^^^
    80 |                             <RenameServerBox />
    81 |                         </div>
    82 |                     </Can>

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:2:27
TS2307: Cannot find module '@/components/elements/TitledGreyBox' or its corresponding type declarations.
    1 | import React, { useCallback, useEffect, useState } from 'react';
  > 2 | import TitledGreyBox from '@/components/elements/TitledGreyBox';
      |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    3 | import tw from 'twin.macro';
    4 | import VariableBox from '@/components/server/startup/VariableBox';
    5 | import ServerContentBlock from '@/components/elements/ServerContentBlock';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:4:25
TS2307: Cannot find module '@/components/server/startup/VariableBox' or its corresponding type declarations.
    2 | import TitledGreyBox from '@/components/elements/TitledGreyBox';
    3 | import tw from 'twin.macro';
  > 4 | import VariableBox from '@/components/server/startup/VariableBox';
      |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    5 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    6 | import getServerStartup from '@/api/swr/getServerStartup';
    7 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:5:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    3 | import tw from 'twin.macro';
    4 | import VariableBox from '@/components/server/startup/VariableBox';
  > 5 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
      |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import getServerStartup from '@/api/swr/getServerStartup';
    7 | import Spinner from '@/components/elements/Spinner';
    8 | import { ServerError } from '@/components/elements/ScreenBlock';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:6:30
TS2307: Cannot find module '@/api/swr/getServerStartup' or its corresponding type declarations.    4 | import VariableBox from '@/components/server/startup/VariableBox';
    5 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
  > 6 | import getServerStartup from '@/api/swr/getServerStartup';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import Spinner from '@/components/elements/Spinner';
    8 | import { ServerError } from '@/components/elements/ScreenBlock';
    9 | import { httpErrorToHuman } from '@/api/http';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:7:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
     5 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
     6 | import getServerStartup from '@/api/swr/getServerStartup';
  >  7 | import Spinner from '@/components/elements/Spinner';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import { ServerError } from '@/components/elements/ScreenBlock';
     9 | import { httpErrorToHuman } from '@/api/http';
    10 | import { ServerContext } from '@/state/server';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:8:29
TS2307: Cannot find module '@/components/elements/ScreenBlock' or its corresponding type declarations.
     6 | import getServerStartup from '@/api/swr/getServerStartup';
     7 | import Spinner from '@/components/elements/Spinner';
  >  8 | import { ServerError } from '@/components/elements/ScreenBlock';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import { httpErrorToHuman } from '@/api/http';
    10 | import { ServerContext } from '@/state/server';
    11 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:9:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
     7 | import Spinner from '@/components/elements/Spinner';
     8 | import { ServerError } from '@/components/elements/ScreenBlock';
  >  9 | import { httpErrorToHuman } from '@/api/http';
       |                                  ^^^^^^^^^^^^
    10 | import { ServerContext } from '@/state/server';
    11 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';
    12 | import Select from '@/components/elements/Select';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:10:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
     8 | import { ServerError } from '@/components/elements/ScreenBlock';
     9 | import { httpErrorToHuman } from '@/api/http';
  > 10 | import { ServerContext } from '@/state/server';
       |                               ^^^^^^^^^^^^^^^^
    11 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';
    12 | import Select from '@/components/elements/Select';
    13 | import isEqual from 'react-fast-compare';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:11:38
TS2307: Cannot find module '@/plugins/useDeepCompareEffect' or its corresponding type declarations.
     9 | import { httpErrorToHuman } from '@/api/http';
    10 | import { ServerContext } from '@/state/server';
  > 11 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';
       |                                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import Select from '@/components/elements/Select';
    13 | import isEqual from 'react-fast-compare';
    14 | import Input from '@/components/elements/Input';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:12:20
TS2307: Cannot find module '@/components/elements/Select' or its corresponding type declarations.
    10 | import { ServerContext } from '@/state/server';
    11 | import { useDeepCompareEffect } from '@/plugins/useDeepCompareEffect';
  > 12 | import Select from '@/components/elements/Select';
       |                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import isEqual from 'react-fast-compare';
    14 | import Input from '@/components/elements/Input';
    15 | import setSelectedDockerImage from '@/api/server/setSelectedDockerImage';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:14:19
TS2307: Cannot find module '@/components/elements/Input' or its corresponding type declarations.
    12 | import Select from '@/components/elements/Select';
    13 | import isEqual from 'react-fast-compare';
  > 14 | import Input from '@/components/elements/Input';
       |                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    15 | import setSelectedDockerImage from '@/api/server/setSelectedDockerImage';
    16 | import InputSpinner from '@/components/elements/InputSpinner';
    17 | import useFlash from '@/plugins/useFlash';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:15:36
TS2307: Cannot find module '@/api/server/setSelectedDockerImage' or its corresponding type declarations.
    13 | import isEqual from 'react-fast-compare';
    14 | import Input from '@/components/elements/Input';
  > 15 | import setSelectedDockerImage from '@/api/server/setSelectedDockerImage';
       |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    16 | import InputSpinner from '@/components/elements/InputSpinner';
    17 | import useFlash from '@/plugins/useFlash';
    18 |

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:16:26
TS2307: Cannot find module '@/components/elements/InputSpinner' or its corresponding type declarations.
    14 | import Input from '@/components/elements/Input';
    15 | import setSelectedDockerImage from '@/api/server/setSelectedDockerImage';
  > 16 | import InputSpinner from '@/components/elements/InputSpinner';
       |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    17 | import useFlash from '@/plugins/useFlash';
    18 |
    19 | import BeforeContent from '@/blueprint/components/Server/Startup/BeforeContent';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:17:22
TS2307: Cannot find module '@/plugins/useFlash' or its corresponding type declarations.
    15 | import setSelectedDockerImage from '@/api/server/setSelectedDockerImage';
    16 | import InputSpinner from '@/components/elements/InputSpinner';
  > 17 | import useFlash from '@/plugins/useFlash';
       |                      ^^^^^^^^^^^^^^^^^^^^
    18 |
    19 | import BeforeContent from '@/blueprint/components/Server/Startup/BeforeContent';
    20 | import AfterContent  from '@/blueprint/components/Server/Startup/AfterContent';

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:26:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    24 |     const { clearFlashes, clearAndAddHttpError } = useFlash();
    25 |
  > 26 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    27 |     const variables = ServerContext.useStoreState(
    28 |         ({ server }) => ({
    29 |             variables: server.data!.variables,

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:28:12
TS7031: Binding element 'server' implicitly has an 'any' type.
    26 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    27 |     const variables = ServerContext.useStoreState(
  > 28 |         ({ server }) => ({
       |            ^^^^^^
    29 |             variables: server.data!.variables,
    30 |             invocation: server.data!.invocation,
    31 |             dockerImage: server.data!.dockerImage,

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:41:63
TS7006: Parameter 'actions' implicitly has an 'any' type.
    39 |     });
    40 |
  > 41 |     const setServerFromState = ServerContext.useStoreActions((actions) => actions.server.setServerFromState);
       |                                                               ^^^^^^^
    42 |     const isCustomImage =
    43 |         data &&
    44 |         !Object.values(data.dockerImages)

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:45:25
TS2571: Object is of type 'unknown'.
    43 |         data &&
    44 |         !Object.values(data.dockerImages)
  > 45 |             .map((v) => v.toLowerCase())
       |                         ^
    46 |             .includes(variables.dockerImage.toLowerCase());
    47 |
    48 |     useEffect(() => {

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:58:29
TS7006: Parameter 's' implicitly has an 'any' type.
    56 |         if (!data) return;
    57 |
  > 58 |         setServerFromState((s) => ({
       |                             ^
    59 |             ...s,
    60 |             invocation: data.invocation,
    61 |             variables: data.variables,

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:72:49
TS7006: Parameter 's' implicitly has an 'any' type.
    70 |             const image = v.currentTarget.value;
    71 |             setSelectedDockerImage(uuid, image)
  > 72 |                 .then(() => setServerFromState((s) => ({ ...s, dockerImage: image })))       |                                                 ^
    73 |                 .catch((error) => {
    74 |                     console.error(error);
    75 |                     clearAndAddHttpError({ key: 'startup:image', error });

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:73:25
TS7006: Parameter 'error' implicitly has an 'any' type.
    71 |             setSelectedDockerImage(uuid, image)
    72 |                 .then(() => setServerFromState((s) => ({ ...s, dockerImage: image })))  > 73 |                 .catch((error) => {
       |                         ^^^^^
    74 |                     console.error(error);
    75 |                     clearAndAddHttpError({ key: 'startup:image', error });
    76 |                 })

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:91:18
TS2322: Type '{ children: Element[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    89 |         <ServerContentBlock title={'Startup Settings'} showFlashKey={'startup:image'}>    90 |             <BeforeContent />
  > 91 |             <div css={tw`md:flex`}>
       |                  ^^^
    92 |                 <TitledGreyBox title={'Startup Command'} css={tw`flex-1`}>
    93 |                     <div css={tw`px-1 py-2`}>
    94 |                         <p css={tw`font-mono bg-neutral-900 rounded py-2 px-4`}>{data.invocation}</p>

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:93:26
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    91 |             <div css={tw`md:flex`}>
    92 |                 <TitledGreyBox title={'Startup Command'} css={tw`flex-1`}>
  > 93 |                     <div css={tw`px-1 py-2`}>
       |                          ^^^
    94 |                         <p css={tw`font-mono bg-neutral-900 rounded py-2 px-4`}>{data.invocation}</p>
    95 |                     </div>
    96 |                 </TitledGreyBox>

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:94:28
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    92 |                 <TitledGreyBox title={'Startup Command'} css={tw`flex-1`}>
    93 |                     <div css={tw`px-1 py-2`}>
  > 94 |                         <p css={tw`font-mono bg-neutral-900 rounded py-2 px-4`}>{data.invocation}</p>
       |                            ^^^
    95 |                     </div>
    96 |                 </TitledGreyBox>
    97 |                 <TitledGreyBox title={'Docker Image'} css={tw`flex-1 lg:flex-none lg:w-1/3 mt-8 md:mt-0 md:ml-10`}>

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:113:32
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    111 |                                 </Select>
    112 |                             </InputSpinner>
  > 113 |                             <p css={tw`text-xs text-neutral-300 mt-2`}>
        |                                ^^^
    114 |                                 This is an advanced feature allowing you to select a Docker image to use when running
    115 |                                 this server instance.
    116 |                             </p>

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:122:36
TS2322: Type '{ children: string[]; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    120 |                             <Input disabled readOnly value={variables.dockerImage} />    121 |                             {isCustomImage && (
  > 122 |                                 <p css={tw`text-xs text-neutral-300 mt-2`}>
        |                                    ^^^
    123 |                                     This {"server's"} Docker image has been manually set by an administrator and cannot
    124 |                                     be changed through this UI.
    125 |                                 </p>

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:131:17
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>'.
    129 |                 </TitledGreyBox>
    130 |             </div>
  > 131 |             <h3 css={tw`mt-8 mb-2 text-2xl`}>Variables</h3>
        |                 ^^^
    132 |             <div css={tw`grid gap-8 md:grid-cols-2`}>
    133 |                 {data.variables.map((variable) => (
    134 |                     <VariableBox key={variable.envVariable} variable={variable} />

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:132:18
TS2322: Type '{ children: any; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    130 |             </div>
    131 |             <h3 css={tw`mt-8 mb-2 text-2xl`}>Variables</h3>
  > 132 |             <div css={tw`grid gap-8 md:grid-cols-2`}>
        |                  ^^^
    133 |                 {data.variables.map((variable) => (
    134 |                     <VariableBox key={variable.envVariable} variable={variable} />
    135 |                 ))}

ERROR in resources/scripts/components/server/startup/StartupContainer.tsx:133:38
TS7006: Parameter 'variable' implicitly has an 'any' type.
    131 |             <h3 css={tw`mt-8 mb-2 text-2xl`}>Variables</h3>
    132 |             <div css={tw`grid gap-8 md:grid-cols-2`}>
  > 133 |                 {data.variables.map((variable) => (
        |                                      ^^^^^^^^
    134 |                     <VariableBox key={variable.envVariable} variable={variable} />
    135 |                 ))}
    136 |             </div>

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:2:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    1 | import React, { useEffect, useState } from 'react';
  > 2 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    3 | import { Actions, useStoreActions, useStoreState } from 'easy-peasy';
    4 | import { ApplicationStore } from '@/state';
    5 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:4:34
TS2307: Cannot find module '@/state' or its corresponding type declarations.
    2 | import { ServerContext } from '@/state/server';
    3 | import { Actions, useStoreActions, useStoreState } from 'easy-peasy';
  > 4 | import { ApplicationStore } from '@/state';
      |                                  ^^^^^^^^^
    5 | import Spinner from '@/components/elements/Spinner';
    6 | import AddSubuserButton from '@/components/server/users/AddSubuserButton';
    7 | import UserRow from '@/components/server/users/UserRow';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:5:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
    3 | import { Actions, useStoreActions, useStoreState } from 'easy-peasy';
    4 | import { ApplicationStore } from '@/state';
  > 5 | import Spinner from '@/components/elements/Spinner';
      |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import AddSubuserButton from '@/components/server/users/AddSubuserButton';
    7 | import UserRow from '@/components/server/users/UserRow';
    8 | import FlashMessageRender from '@/components/FlashMessageRender';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:6:30
TS2307: Cannot find module '@/components/server/users/AddSubuserButton' or its corresponding type declarations.
    4 | import { ApplicationStore } from '@/state';
    5 | import Spinner from '@/components/elements/Spinner';
  > 6 | import AddSubuserButton from '@/components/server/users/AddSubuserButton';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    7 | import UserRow from '@/components/server/users/UserRow';
    8 | import FlashMessageRender from '@/components/FlashMessageRender';
    9 | import getServerSubusers from '@/api/server/users/getServerSubusers';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:7:21
TS2307: Cannot find module '@/components/server/users/UserRow' or its corresponding type declarations.
     5 | import Spinner from '@/components/elements/Spinner';
     6 | import AddSubuserButton from '@/components/server/users/AddSubuserButton';
  >  7 | import UserRow from '@/components/server/users/UserRow';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     8 | import FlashMessageRender from '@/components/FlashMessageRender';
     9 | import getServerSubusers from '@/api/server/users/getServerSubusers';
    10 | import { httpErrorToHuman } from '@/api/http';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:8:32
TS2307: Cannot find module '@/components/FlashMessageRender' or its corresponding type declarations.
     6 | import AddSubuserButton from '@/components/server/users/AddSubuserButton';
     7 | import UserRow from '@/components/server/users/UserRow';
  >  8 | import FlashMessageRender from '@/components/FlashMessageRender';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import getServerSubusers from '@/api/server/users/getServerSubusers';
    10 | import { httpErrorToHuman } from '@/api/http';
    11 | import Can from '@/components/elements/Can';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:9:31
TS2307: Cannot find module '@/api/server/users/getServerSubusers' or its corresponding type declarations.
     7 | import UserRow from '@/components/server/users/UserRow';
     8 | import FlashMessageRender from '@/components/FlashMessageRender';
  >  9 | import getServerSubusers from '@/api/server/users/getServerSubusers';
       |                               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import { httpErrorToHuman } from '@/api/http';
    11 | import Can from '@/components/elements/Can';
    12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:10:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
     8 | import FlashMessageRender from '@/components/FlashMessageRender';
     9 | import getServerSubusers from '@/api/server/users/getServerSubusers';
  > 10 | import { httpErrorToHuman } from '@/api/http';
       |                                  ^^^^^^^^^^^^
    11 | import Can from '@/components/elements/Can';
    12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    13 | import tw from 'twin.macro';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:11:17
TS2307: Cannot find module '@/components/elements/Can' or its corresponding type declarations.
     9 | import getServerSubusers from '@/api/server/users/getServerSubusers';
    10 | import { httpErrorToHuman } from '@/api/http';
  > 11 | import Can from '@/components/elements/Can';
       |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
    13 | import tw from 'twin.macro';
    14 |

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:12:32
TS2307: Cannot find module '@/components/elements/ServerContentBlock' or its corresponding type declarations.
    10 | import { httpErrorToHuman } from '@/api/http';
    11 | import Can from '@/components/elements/Can';
  > 12 | import ServerContentBlock from '@/components/elements/ServerContentBlock';
       |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import tw from 'twin.macro';
    14 |
    15 | import BeforeContent from '@/blueprint/components/Server/Users/BeforeContent';

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:21:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    19 |     const [loading, setLoading] = useState(true);
    20 |
  > 21 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
       |                                               ^^^^^
    22 |     const subusers = ServerContext.useStoreState((state) => state.subusers.data);
    23 |     const setSubusers = ServerContext.useStoreActions((actions) => actions.subusers.setSubusers);
    24 |

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:22:51
TS7006: Parameter 'state' implicitly has an 'any' type.
    20 |
    21 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
  > 22 |     const subusers = ServerContext.useStoreState((state) => state.subusers.data);
       |                                                   ^^^^^
    23 |     const setSubusers = ServerContext.useStoreActions((actions) => actions.subusers.setSubusers);
    24 |
    25 |     const permissions = useStoreState((state: ApplicationStore) => state.permissions.data);

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:23:56
TS7006: Parameter 'actions' implicitly has an 'any' type.
    21 |     const uuid = ServerContext.useStoreState((state) => state.server.data!.uuid);
    22 |     const subusers = ServerContext.useStoreState((state) => state.subusers.data);
  > 23 |     const setSubusers = ServerContext.useStoreActions((actions) => actions.subusers.setSubusers);
       |                                                        ^^^^^^^
    24 |
    25 |     const permissions = useStoreState((state: ApplicationStore) => state.permissions.data);
    26 |     const getPermissions = useStoreActions((actions: Actions<ApplicationStore>) => actions.permissions.getPermissions);

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:32:20
TS7006: Parameter 'subusers' implicitly has an 'any' type.
    30 |         clearFlashes('users');
    31 |         getServerSubusers(uuid)
  > 32 |             .then((subusers) => {
       |                    ^^^^^^^^
    33 |                 setSubusers(subusers);
    34 |                 setLoading(false);
    35 |             })

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:36:21
TS7006: Parameter 'error' implicitly has an 'any' type.
    34 |                 setLoading(false);
    35 |             })
  > 36 |             .catch((error) => {
       |                     ^^^^^
    37 |                 console.error(error);
    38 |                 addError({ key: 'users', message: httpErrorToHuman(error) });
    39 |             });

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:43:33
TS7006: Parameter 'error' implicitly has an 'any' type.
    41 |
    42 |     useEffect(() => {
  > 43 |         getPermissions().catch((error) => {
       |                                 ^^^^^
    44 |             addError({ key: 'users', message: httpErrorToHuman(error) });
    45 |             console.error(error);
    46 |         });

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:58:20
TS2322: Type '{ children: string; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>'.
    56 |             <BeforeContent />
    57 |             {!subusers.length ? (
  > 58 |                 <p css={tw`text-center text-sm text-neutral-300`}>It looks like you don&apos;t have any subusers.</p>
       |                    ^^^
    59 |             ) : (
    60 |                 subusers.map((subuser) => <UserRow key={subuser.uuid} subuser={subuser} />)
    61 |             )}

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:60:31
TS7006: Parameter 'subuser' implicitly has an 'any' type.
    58 |                 <p css={tw`text-center text-sm text-neutral-300`}>It looks like you don&apos;t have any subusers.</p>
    59 |             ) : (
  > 60 |                 subusers.map((subuser) => <UserRow key={subuser.uuid} subuser={subuser} />)
       |                               ^^^^^^^
    61 |             )}
    62 |             <Can action={'user.create'}>
    63 |                 <div css={tw`flex justify-end mt-6`}>

ERROR in resources/scripts/components/server/users/UsersContainer.tsx:63:22
TS2322: Type '{ children: Element; css: TwStyle; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
  Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>'.
    61 |             )}
    62 |             <Can action={'user.create'}>
  > 63 |                 <div css={tw`flex justify-end mt-6`}>
       |                      ^^^
    64 |                     <AddSubuserButton />
    65 |                 </div>
    66 |             </Can>

ERROR in resources/scripts/index.tsx:3:17
TS2307: Cannot find module '@/components/App' or its corresponding type declarations.
    1 | import React from 'react';
    2 | import ReactDOM from 'react-dom';
  > 3 | import App from '@/components/App';
      |                 ^^^^^^^^^^^^^^^^^^
    4 | import { setConfig } from 'react-hot-loader';
    5 | import './blueprint/css/extensions.css';
    6 |

ERROR in resources/scripts/routers/DashboardRouter.tsx:3:27
TS2307: Cannot find module '@/components/elements/SubNavigation' or its corresponding type declarations.
    1 | import React from 'react';
    2 | import NavigationBar from '@/components/NavigationBar';
  > 3 | import SubNavigation from '@/components/elements/SubNavigation';
      |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 | import { useLocation } from 'react-router';
    5 |
    6 | import { NavigationLinks, NavigationRouter } from '@/blueprint/extends/routers/DashboardRouter';

ERROR in resources/scripts/routers/ServerRouter.tsx:1:30
TS2307: Cannot find module '@/components/server/TransferListener' or its corresponding type declarations.
  > 1 | import TransferListener from '@/components/server/TransferListener';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    2 | import React, { useEffect, useState } from 'react';
    3 | import { useRouteMatch } from 'react-router-dom';
    4 | import NavigationBar from '@/components/NavigationBar';

ERROR in resources/scripts/routers/ServerRouter.tsx:5:30
TS2307: Cannot find module '@/components/server/WebsocketHandler' or its corresponding type declarations.
    3 | import { useRouteMatch } from 'react-router-dom';
    4 | import NavigationBar from '@/components/NavigationBar';
  > 5 | import WebsocketHandler from '@/components/server/WebsocketHandler';
      |                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    6 | import { ServerContext } from '@/state/server';
    7 | import { CSSTransition } from 'react-transition-group';
    8 | import Spinner from '@/components/elements/Spinner';

ERROR in resources/scripts/routers/ServerRouter.tsx:6:31
TS2307: Cannot find module '@/state/server' or its corresponding type declarations.
    4 | import NavigationBar from '@/components/NavigationBar';
    5 | import WebsocketHandler from '@/components/server/WebsocketHandler';
  > 6 | import { ServerContext } from '@/state/server';
      |                               ^^^^^^^^^^^^^^^^
    7 | import { CSSTransition } from 'react-transition-group';
    8 | import Spinner from '@/components/elements/Spinner';
    9 | import { ServerError } from '@/components/elements/ScreenBlock';

ERROR in resources/scripts/routers/ServerRouter.tsx:8:21
TS2307: Cannot find module '@/components/elements/Spinner' or its corresponding type declarations.
     6 | import { ServerContext } from '@/state/server';
     7 | import { CSSTransition } from 'react-transition-group';
  >  8 | import Spinner from '@/components/elements/Spinner';
       |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
     9 | import { ServerError } from '@/components/elements/ScreenBlock';
    10 | import { httpErrorToHuman } from '@/api/http';
    11 | import { useStoreState } from 'easy-peasy';

ERROR in resources/scripts/routers/ServerRouter.tsx:9:29
TS2307: Cannot find module '@/components/elements/ScreenBlock' or its corresponding type declarations.
     7 | import { CSSTransition } from 'react-transition-group';
     8 | import Spinner from '@/components/elements/Spinner';
  >  9 | import { ServerError } from '@/components/elements/ScreenBlock';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    10 | import { httpErrorToHuman } from '@/api/http';
    11 | import { useStoreState } from 'easy-peasy';
    12 | import SubNavigation from '@/components/elements/SubNavigation';

ERROR in resources/scripts/routers/ServerRouter.tsx:10:34
TS2307: Cannot find module '@/api/http' or its corresponding type declarations.
     8 | import Spinner from '@/components/elements/Spinner';
     9 | import { ServerError } from '@/components/elements/ScreenBlock';
  > 10 | import { httpErrorToHuman } from '@/api/http';
       |                                  ^^^^^^^^^^^^
    11 | import { useStoreState } from 'easy-peasy';
    12 | import SubNavigation from '@/components/elements/SubNavigation';
    13 | import InstallListener from '@/components/server/InstallListener';

ERROR in resources/scripts/routers/ServerRouter.tsx:12:27
TS2307: Cannot find module '@/components/elements/SubNavigation' or its corresponding type declarations.
    10 | import { httpErrorToHuman } from '@/api/http';
    11 | import { useStoreState } from 'easy-peasy';
  > 12 | import SubNavigation from '@/components/elements/SubNavigation';
       |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    13 | import InstallListener from '@/components/server/InstallListener';
    14 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    15 | import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

ERROR in resources/scripts/routers/ServerRouter.tsx:13:29
TS2307: Cannot find module '@/components/server/InstallListener' or its corresponding type declarations.
    11 | import { useStoreState } from 'easy-peasy';
    12 | import SubNavigation from '@/components/elements/SubNavigation';
  > 13 | import InstallListener from '@/components/server/InstallListener';
       |                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    14 | import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    15 | import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
    16 |

ERROR in resources/scripts/routers/ServerRouter.tsx:25:54
TS2339: Property 'user' does not exist on type 'StateMapper<_Pick<{}, never>>'.
    23 |     const match = useRouteMatch<{ id: string }>();
    24 |
  > 25 |     const rootAdmin = useStoreState((state) => state.user.data!.rootAdmin);
       |                                                      ^^^^
    26 |     const [error, setError] = useState('');
    27 |
    28 |     const id = ServerContext.useStoreState((state) => state.server.data?.id);

ERROR in resources/scripts/routers/ServerRouter.tsx:28:45
TS7006: Parameter 'state' implicitly has an 'any' type.
    26 |     const [error, setError] = useState('');
    27 |
  > 28 |     const id = ServerContext.useStoreState((state) => state.server.data?.id);
       |                                             ^^^^^
    29 |     const uuid = ServerContext.useStoreState((state) => state.server.data?.uuid);
    30 |     const serverId = ServerContext.useStoreState((state) => state.server.data?.internalId);
    31 |     const getServer = ServerContext.useStoreActions((actions) => actions.server.getServer);

ERROR in resources/scripts/routers/ServerRouter.tsx:29:47
TS7006: Parameter 'state' implicitly has an 'any' type.
    27 |
    28 |     const id = ServerContext.useStoreState((state) => state.server.data?.id);
  > 29 |     const uuid = ServerContext.useStoreState((state) => state.server.data?.uuid);
       |                                               ^^^^^
    30 |     const serverId = ServerContext.useStoreState((state) => state.server.data?.internalId);
    31 |     const getServer = ServerContext.useStoreActions((actions) => actions.server.getServer);
    32 |     const clearServerState = ServerContext.useStoreActions((actions) => actions.clearServerState);

ERROR in resources/scripts/routers/ServerRouter.tsx:30:51
TS7006: Parameter 'state' implicitly has an 'any' type.
    28 |     const id = ServerContext.useStoreState((state) => state.server.data?.id);
    29 |     const uuid = ServerContext.useStoreState((state) => state.server.data?.uuid);
  > 30 |     const serverId = ServerContext.useStoreState((state) => state.server.data?.internalId);
       |                                                   ^^^^^
    31 |     const getServer = ServerContext.useStoreActions((actions) => actions.server.getServer);
    32 |     const clearServerState = ServerContext.useStoreActions((actions) => actions.clearServerState);
    33 |

ERROR in resources/scripts/routers/ServerRouter.tsx:31:54
TS7006: Parameter 'actions' implicitly has an 'any' type.
    29 |     const uuid = ServerContext.useStoreState((state) => state.server.data?.uuid);
    30 |     const serverId = ServerContext.useStoreState((state) => state.server.data?.internalId);
  > 31 |     const getServer = ServerContext.useStoreActions((actions) => actions.server.getServer);
       |                                                      ^^^^^^^
    32 |     const clearServerState = ServerContext.useStoreActions((actions) => actions.clearServerState);
    33 |
    34 |     useEffect(

ERROR in resources/scripts/routers/ServerRouter.tsx:32:61
TS7006: Parameter 'actions' implicitly has an 'any' type.
    30 |     const serverId = ServerContext.useStoreState((state) => state.server.data?.internalId);
    31 |     const getServer = ServerContext.useStoreActions((actions) => actions.server.getServer);
  > 32 |     const clearServerState = ServerContext.useStoreActions((actions) => actions.clearServerState);
       |                                                             ^^^^^^^
    33 |
    34 |     useEffect(
    35 |         () => () => {

ERROR in resources/scripts/routers/ServerRouter.tsx:44:43
TS7006: Parameter 'error' implicitly has an 'any' type.
    42 |         setError('');
    43 |
  > 44 |         getServer(match.params.id).catch((error) => {
       |                                           ^^^^^
    45 |             console.error(error);
    46 |             setError(httpErrorToHuman(error));
    47 |         });
error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
11:27:32 INFO: Put application into production.
11:27:32 INFO: Syncing Blueprint-related database values..
PHP Warning:  require(/var/www/pterodactyl/vendor/composer/../../app/helpers.php): Failed to open stream: No such file or directory in /var/www/pterodactyl/vendor/composer/autoload_real.php on line 41
PHP Fatal error:  Uncaught Error: Failed opening required '/var/www/pterodactyl/vendor/composer/../../app/helpers.php' (include_path='.:/usr/share/php') in /var/www/pterodactyl/vendor/composer/autoload_real.php:41
Stack trace:
#0 /var/www/pterodactyl/vendor/composer/autoload_real.php(45): {closure}()
#1 /var/www/pterodactyl/vendor/autoload.php(25): ComposerAutoloaderInitc825c79676768901c780446d7550a7f6::getLoader()
#2 /var/www/pterodactyl/artisan(18): require('...')
#3 {main}
  thrown in /var/www/pterodactyl/vendor/composer/autoload_real.php on line 41
11:27:32 SUCCESS: Blueprint has completed it's installation process.

root@v14555:/var/www/pterodactyl# cd public
root@v14555:/var/www/pterodactyl/public# ls
assets  extensions  fs  robots.txt
root@v14555:/var/www/pterodactyl/public# 