import React from "react"
import PropTypes from "prop-types"

import faviconApple57 from '../public/icons/apple-icon-57x57.png';
import faviconApple60 from '../public/icons/apple-icon-60x60.png';
import faviconApple76 from '../public/icons/apple-icon-76x76.png';
import faviconApple114 from '../public/icons/apple-icon-114x114.png';
import faviconApple120 from '../public/icons/apple-icon-120x120.png';
import faviconApple144 from '../public/icons/apple-icon-144x144.png';
import faviconApple152 from '../public/icons/apple-icon-152x152.png';
import faviconApple180 from '../public/icons/apple-icon-180x180.png';
import faviconApple from '../public/icons/apple-icon-72x72.png';
import favicon16 from '../public/icons/favicon-16x16.png';
import favicon32 from '../public/icons/favicon-32x32.png';
import favicon from '../public/icons/favicon-96x96.png';
import msicon from '../public/icons/ms-icon-144x144.png'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="apple-touch-icon" sizes="57x57" href={faviconApple57} />
          <link rel="apple-touch-icon" sizes="60x60" href={faviconApple60} />
          <link rel="apple-touch-icon" sizes="72x72" href={faviconApple} />
          <link rel="apple-touch-icon" sizes="76x76" href={faviconApple76} />
          <link rel="apple-touch-icon" sizes="114x114" href={faviconApple144} />
          <link rel="apple-touch-icon" sizes="120x120" href={faviconApple120} />
          <link rel="apple-touch-icon" sizes="144x144" href={faviconApple144} />
          <link rel="apple-touch-icon" sizes="152x152" href={faviconApple152} />
          <link rel="apple-touch-icon" sizes="180x180" href={faviconApple180} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="96x96" href={favicon} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={msicon} />
          <meta name="theme-color" content="#ffffff" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
