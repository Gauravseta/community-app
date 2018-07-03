/**
 * The loader of Settings webpack chunks.
 */
import path from 'path';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import LoadingPagePlaceholder from 'components/LoadingPagePlaceholder';
import { AppChunk, webpack } from 'topcoder-react-utils';

export default function SettingsLoader(props) {
  console.log("Entered settings routes with props", props);
  // const pathit= props.match.url;
  // const showit = pathit.match(/^\/settings\/(profile|tools|account|preferences)(\/)(basicinfo|devices|language|software)?$/);
  // console.log("showit", showit);
  return (
    <AppChunk
      chunkName="settings/chunk"
      renderClientAsync={() =>
        import(/* webpackChunkName: "settings/chunk" */ 'containers/Settings')
          .then(({ default: SettingsContainer }) => (
            <SettingsContainer {...props} />
        ))
      }
      renderPlaceholder={() => <LoadingPagePlaceholder />}
      renderServer={() => {
        const p = webpack.resolveWeak('containers/Settings');
        const SettingsContainer = webpack.requireWeak(path.resolve(__dirname, p));
        return (
          <StaticRouter context={{}}>
            <SettingsContainer {...props} />
          </StaticRouter>
        );
      }}
    />
  );
}
